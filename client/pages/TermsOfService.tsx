import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function TermsOfService() {
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
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </motion.section>

        {/* Terms Content */}
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the services provided by Atsomnium
                  Partners ("we," "us," or "our"), you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground mb-4">
                  Atsomnium Partners provides gaming consultancy services,
                  including but not limited to:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Strategic gaming industry consultation</li>
                  <li>Game development advisory services</li>
                  <li>Market analysis and research</li>
                  <li>Business development guidance</li>
                  <li>Technical consulting for gaming projects</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  Clients are responsible for:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>
                    Providing accurate and complete information necessary for
                    consultation services
                  </li>
                  <li>
                    Timely payment of all fees as specified in service
                    agreements
                  </li>
                  <li>
                    Maintaining confidentiality of proprietary methodologies
                    shared during consultation
                  </li>
                  <li>
                    Using our services in compliance with all applicable laws
                    and regulations
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-muted-foreground mb-4">
                  We understand the sensitive nature of gaming industry
                  information. All client information, project details, and
                  business strategies shared with Atsomnium Partners will be
                  kept strictly confidential.
                </p>
                <p className="text-muted-foreground">
                  We will not disclose any confidential information to third
                  parties without explicit written consent from the client,
                  except where required by law.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  5. Payment Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in individual service
                  agreements. Generally:
                </p>
                <ul className="text-muted-foreground mb-4 pl-6 list-disc">
                  <li>Invoices are payable within 30 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for overdue accounts</li>
                  <li>
                    All fees are non-refundable unless otherwise specified
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground mb-4">
                  All intellectual property rights in our methodologies,
                  frameworks, and proprietary tools remain the exclusive
                  property of Atsomnium Partners.
                </p>
                <p className="text-muted-foreground">
                  Clients retain ownership of their pre-existing intellectual
                  property and any materials developed specifically for them
                  during the consultation process.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  Atsomnium Partners provides consultation services based on
                  industry best practices and experience. However, we cannot
                  guarantee specific outcomes or results.
                </p>
                <p className="text-muted-foreground">
                  Our liability is limited to the amount paid for services. We
                  are not responsible for indirect, consequential, or punitive
                  damages arising from our consultation services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  8. Termination
                </h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services with written notice as
                  specified in individual service agreements.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, all confidentiality obligations remain in
                  effect, and any outstanding payments become immediately due.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the jurisdiction where
                  Atsomnium Partners is incorporated. Any disputes will be
                  resolved through binding arbitration.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time.
                  Updated terms will be posted on our website and will become
                  effective immediately upon posting.
                </p>
                <p className="text-muted-foreground">
                  Continued use of our services after changes constitutes
                  acceptance of the new terms.
                </p>
              </div>

              <div className="bg-section-light p-8 rounded-lg">
                <h2 className="text-2xl font-manrope font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:info@atsomniumpartners.com"
                      className="text-primary hover:underline"
                    >
                      info@atsomniumpartners.com
                    </a>
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
