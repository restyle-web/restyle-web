"use client";

import { PolicyLayout } from "@/components/ui/PolicyLayout";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using Restyle, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the platform.",
      "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of Restyle after changes constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "2. Account Registration",
    content: [
      "To use certain features of Restyle, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
      "You must be at least 16 years of age to create an account and use Restyle. By creating an account, you confirm that you meet this age requirement.",
    ],
  },
  {
    title: "3. Buying on Restyle",
    content: [
      "When you purchase an item on Restyle, you are entering into a transaction with the seller, not with Restyle. We act as a platform facilitating the connection between buyers and sellers.",
      "All purchases are subject to our Buyer Protection policy. If an item is significantly not as described, you may be eligible for a refund. Claims must be filed within 48 hours of receiving the item.",
      "You agree to pay the listed price plus any applicable shipping fees and taxes. All payments are processed through our secure third-party payment providers.",
    ],
  },
  {
    title: "4. Selling on Restyle",
    content: [
      "By listing an item for sale, you represent and warrant that you have the legal right to sell that item and that the listing accurately describes the item's condition, brand, size, and any defects.",
      "Sellers are responsible for shipping items within the timeframe specified after a sale is confirmed. Items must be packaged securely and match the listing description. Failure to ship on time or sending items that do not match the description may result in account penalties.",
      "Restyle charges a service fee on completed sales. The current fee structure is communicated in your seller dashboard. Earnings are released to your wallet after the buyer confirms receipt of the item.",
    ],
  },
  {
    title: "5. Prohibited Items & Conduct",
    content: [
      "You may not list counterfeit, stolen, or illegal items on Restyle. Items must comply with all applicable laws and regulations. We reserve the right to remove any listing that violates these terms.",
      "Users must not engage in fraud, harassment, discrimination, or any other behaviour that disrupts the platform or harms other users. This includes creating fake reviews, manipulating search results, or circumventing platform fees.",
      "We reserve the right to suspend or terminate accounts that violate these terms, without prior notice. Repeated violations may result in permanent bans.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "The Restyle platform, including its design, logo, features, and content, is owned by Restyle and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.",
      "By uploading content to Restyle (such as photos and descriptions), you grant us a non-exclusive, worldwide, royalty-free licence to use, display, and distribute that content in connection with operating and promoting the platform.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "Restyle is provided on an \"as is\" and \"as available\" basis. We make no warranties, express or implied, regarding the platform's reliability, accuracy, or availability.",
      "To the maximum extent permitted by law, Restyle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of profits, data, or goodwill.",
      "Our total liability for any claim arising from your use of Restyle shall not exceed the amount of fees you have paid to us in the twelve months preceding the claim.",
    ],
  },
  {
    title: "8. Dispute Resolution",
    content: [
      "If a dispute arises between a buyer and seller, we encourage both parties to first attempt to resolve it directly through our messaging system. If that fails, either party may request Restyle to mediate.",
      "For disputes between you and Restyle, you agree to first attempt informal resolution by contacting us at info@getrestyle.com. If the matter cannot be resolved informally, it shall be settled through binding arbitration in accordance with applicable laws.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "You may delete your account at any time through your account settings. Upon deletion, your profile, listings, and associated data will be removed, subject to our data retention policy.",
      "We may suspend or terminate your account at our discretion if we believe you have violated these terms, engaged in fraudulent activity, or for any other reason we deem necessary to protect the platform and its users.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any legal proceedings shall be conducted in the appropriate jurisdiction.",
    ],
  },
];

export function TermsContent() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Terms of Service"
      titleHighlight="Fair and transparent."
      description="Please read these terms carefully before using Restyle. They outline your rights and responsibilities as a user of our platform."
      lastUpdated="March 4, 2026"
      sections={sections}
    />
  );
}
