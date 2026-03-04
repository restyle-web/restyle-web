"use client";

import { PolicyLayout } from "@/components/ui/PolicyLayout";

const sections = [
  {
    title: "1. What Are Cookies",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website or use an application. They are widely used to make websites work more efficiently, provide a better user experience, and give site owners useful information.",
      "Restyle uses cookies and similar technologies (such as local storage and pixels) to recognise you, remember your preferences, and understand how you use our platform.",
    ],
  },
  {
    title: "2. Types of Cookies We Use",
    content: [
      "Essential Cookies: These cookies are necessary for the platform to function properly. They enable core features like account authentication, secure login sessions, and shopping cart functionality. Without these cookies, Restyle cannot operate as intended. These cookies cannot be disabled.",
      "Performance Cookies: These cookies collect anonymized information about how you use Restyle, such as which pages you visit most often and whether you encounter any errors. This data helps us improve the platform's performance and user experience. These cookies do not collect personally identifiable information.",
      "Functional Cookies: These cookies remember your preferences and choices, such as your language settings, display preferences, and recently viewed items. They provide enhanced, personalised features and make your experience more convenient.",
      "Analytics Cookies: We use analytics cookies from trusted third-party services to understand user behaviour, measure the effectiveness of our features, and identify areas for improvement. These tools help us make data-driven decisions to enhance your experience on Restyle.",
    ],
  },
  {
    title: "3. Third-Party Cookies",
    content: [
      "Some cookies on Restyle are set by third-party services that appear on our pages. We use services like analytics providers and payment processors that may set their own cookies. We do not control the cookies set by these third parties.",
      "Third-party services we work with include analytics platforms for understanding usage patterns and payment processors for handling secure transactions. Each of these services has its own privacy and cookie policies.",
    ],
  },
  {
    title: "4. How Long Do Cookies Last",
    content: [
      "Session Cookies: These are temporary cookies that are deleted when you close your browser. They are used to maintain your session while you browse Restyle, such as keeping you logged in as you navigate between pages.",
      "Persistent Cookies: These cookies remain on your device for a set period or until you manually delete them. They are used to remember your preferences and recognise you when you return to Restyle. The duration varies by cookie, typically ranging from 30 days to 12 months.",
    ],
  },
  {
    title: "5. Managing Your Cookie Preferences",
    content: [
      "Most web browsers allow you to control cookies through their settings. You can set your browser to block or alert you about cookies, delete existing cookies, or browse in a private/incognito mode that limits cookie storage.",
      "Please note that blocking or deleting certain cookies may affect the functionality of Restyle. Essential cookies are required for the platform to work, so disabling them may prevent you from using key features like logging in or making purchases.",
      "To manage cookies in your browser, look for the privacy or security settings. Most browsers provide options to view and delete individual cookies, block third-party cookies, or block all cookies from specific sites.",
    ],
  },
  {
    title: "6. Do Not Track Signals",
    content: [
      "Some browsers send \"Do Not Track\" (DNT) signals to websites. There is currently no universal standard for how websites should respond to DNT signals. At this time, Restyle does not respond to DNT signals, but we respect your privacy choices through the cookie management options described above.",
    ],
  },
  {
    title: "7. Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.",
      "Any changes to this policy will be posted on this page with an updated \"Last updated\" date.",
    ],
  },
];

export function CookiesContent() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Cookie Policy"
      titleHighlight="How we use cookies."
      description="This policy explains how Restyle uses cookies and similar technologies to provide, improve, and protect our platform."
      lastUpdated="March 4, 2026"
      sections={sections}
    />
  );
}
