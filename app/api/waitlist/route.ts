import { NextResponse } from "next/server";

const WAITLIST_SCRIPT_URL =
  process.env.GOOGLE_WAITLIST_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbxUPKLBqVk0LOfmK9UvdClDkqfrsFZ6sXR_pKAajiBP8vFS74j_Q_ziMRxySsoXOReV7A/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "website";

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const response = await fetch(WAITLIST_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ email, source }),
      cache: "no-store",
    });

    const text = await response.text();
    const isJsonResponse =
      response.headers.get("content-type")?.includes("application/json") ?? false;
    const data = isJsonResponse && text ? JSON.parse(text) : { success: false };

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The Google Sheets waitlist endpoint is not publicly accessible yet. Recheck your Apps Script deployment access settings.",
        },
        { status: 400 }
      );
    }

    if (!data.success) {
      return NextResponse.json(
        {
          success: false,
          error: data.error || "Something went wrong while joining the waitlist.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while joining the waitlist.",
      },
      { status: 500 }
    );
  }
}
