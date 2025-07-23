import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  Atsomnium Partners collects information to provide better services to our clients. We collect information in the following ways:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li><strong>Information you give us:</strong> Contact details, project requirements, and business information shared during consultations</li>
                  <li><strong>Information we get from your use of our services:</strong> Communication logs, meeting records, and service usage data</li>
                  <li><strong>Technical information:</strong> IP addresses, browser type, and device information when visiting our website</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  2. How We Use Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Provide, maintain, and improve our consultancy services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and administrative messages</li>
                  <li>Respond to comments, questions, and customer service requests</li>
                  <li>Develop new services and analyze usage trends</li>
                  <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent personal information to third parties. We may share information only in these limited circumstances:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li><strong>With your consent:</strong> We will share information when you explicitly agree</li>
                  <li><strong>For legal reasons:</strong> When required by law, regulation, or court order</li>
                  <li><strong>Service providers:</strong> With trusted partners who assist in our operations under strict confidentiality agreements</li>
                  <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls limiting who can view your information</li>
                  <li>Secure data centers with physical and digital protection</li>
                  <li>Employee training on data protection and confidentiality</li>
                </ul>
                <p className="text-muted-foreground">
                  However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground mb-4">
                  We retain personal information for as long as necessary to:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Provide our services and support</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Maintain business records as required</li>
                </ul>
                <p className="text-muted-foreground">
                  When information is no longer needed, we securely delete or anonymize it.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information under certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                  <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Provide relevant content and advertisements</li>
                </ul>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings, but disabling them may affect website functionality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  8. Third-Party Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites.
                </p>
                <p className="text-muted-foreground">
                  We encourage you to read the privacy policies of any third-party services you access through our website.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  9. International Data Transfers
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
                <p className="text-muted-foreground">
                  These safeguards include compliance with data protection frameworks and contractual commitments.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                </p>
                <p className="text-muted-foreground">
                  We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-section-light p-8 rounded-lg">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> <a href="mailto:privacy@atsomniumpartners.com" className="text-primary hover:underline">privacy@atsomniumpartners.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>General Inquiries:</strong> <a href="mailto:info@atsomniumpartners.com" className="text-primary hover:underline">info@atsomniumpartners.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (844) 668-4263
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
