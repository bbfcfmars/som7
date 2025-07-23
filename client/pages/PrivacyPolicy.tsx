import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <motion.section
          className="pt-56 pb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </motion.section>

        {/* Privacy Content */}
        <motion.section
          className="pb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <p className="text-muted-foreground mb-6">
                  <strong>Effective Date:</strong> January 2025
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Atsomnium Partners</strong> ("we", "our", or "us")
                  respects your privacy and is committed to protecting it
                  through this Privacy Policy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground">
                  We may collect personal information you voluntarily provide
                  such as your name, email address, and any information
                  submitted via forms on the Site.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information to:
                </p>
                <ul className="text-muted-foreground pl-6 list-disc space-y-2">
                  <li>Provide, maintain, and improve the Site;</li>
                  <li>Respond to inquiries or requests;</li>
                  <li>
                    Send occasional marketing communications, if opted in.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  3. Sharing Your Information
                </h2>
                <p className="text-muted-foreground">
                  We do not sell or rent your information. We may share
                  information with trusted service providers who help us operate
                  the Site or with law enforcement if required.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  4. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground">
                  We may use cookies or similar tracking technologies to improve
                  your experience on the Site. You can manage your preferences
                  via your browser settings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your information as long as necessary to fulfill the
                  purposes outlined in this policy, or as required by law.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  6. Security
                </h2>
                <p className="text-muted-foreground">
                  We implement reasonable measures to protect your data, but
                  cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have the right to access,
                  update, or delete your personal information. Contact us to
                  exercise these rights.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground">
                  This Site is not intended for children under 13. We do not
                  knowingly collect personal information from children.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may revise this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated effective date.
                </p>
              </div>

              <div className="bg-section-light p-8 rounded-lg">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  10. Contact
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at{" "}
                  <a
                    href="mailto:info@atsomniumpartners.com"
                    className="text-primary hover:underline"
                  >
                    info@atsomniumpartners.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
