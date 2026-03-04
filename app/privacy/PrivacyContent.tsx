"use client";

import { PolicyLayout } from "@/components/ui/PolicyLayout";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Welcome to Restyle. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.",
      "By using Restyle, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our platform.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We collect information that you provide directly to us when you create an account, including your name, email address, and profile details. When you list items for sale, we collect details about those items including photos, descriptions, and pricing.",
      "We automatically collect certain information when you use our platform, including your device type, operating system, IP address, browsing activity, and interaction data. This helps us improve our services and provide a better experience.",
      "If you make purchases or sales through Restyle, we collect transaction-related information such as shipping addresses and payment method details. Payment processing is handled by secure third-party providers — we do not store your full payment card information.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use your information to operate, maintain, and improve the Restyle platform. This includes facilitating transactions between buyers and sellers, personalizing your experience, and providing customer support.",
      "Your data helps us send you relevant notifications about orders, messages from other users, price drops on saved items, and platform updates. We may also use aggregated, anonymized data for analytics and to improve our recommendation algorithms.",
      "We may use your email address to send you marketing communications about new features or promotions. You can opt out of these at any time through your account settings or by using the unsubscribe link in our emails.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    content: [
      "We share certain information between buyers and sellers to facilitate transactions — for example, a seller will see the buyer's shipping address to fulfil an order. Public profile information such as your username, profile photo, and listings are visible to other users.",
      "We work with trusted third-party service providers for payment processing, shipping, analytics, and hosting. These providers only have access to the information necessary to perform their services and are bound by confidentiality obligations.",
      "We may disclose your information if required by law, regulation, legal process, or governmental request. We may also share information to protect the rights, safety, or property of Restyle, our users, or others.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information, including encryption of data in transit and at rest, regular security assessments, and access controls.",
      "While we take reasonable steps to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we continuously work to enhance our security practices.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal information for as long as your account is active or as needed to provide you with our services. If you choose to delete your account, we will delete or anonymize your personal information within 30 days, unless we are required to retain it for legal or regulatory purposes.",
      "Transaction records may be retained for longer periods to comply with financial regulations and to resolve disputes.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information at any time through your account settings. You may also request a copy of the data we hold about you.",
      "Depending on your location, you may have additional rights under applicable data protection laws, including the right to restrict or object to certain processing, the right to data portability, and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Restyle is not intended for children under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will take steps to delete that information.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our platform and updating the \"Last updated\" date.",
      "Your continued use of Restyle after any changes indicates your acceptance of the updated policy.",
    ],
  },
];

export function PrivacyContent() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Privacy Policy"
      titleHighlight="Your data, your control."
      description="We believe in transparency. Here's exactly how we collect, use, and protect your personal information."
      lastUpdated="March 4, 2026"
      sections={sections}
    />
  );
}
