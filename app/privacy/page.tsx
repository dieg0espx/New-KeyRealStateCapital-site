"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 font-light">
            Effective date: September 1, 2024
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-light-green text-white">
            <CardTitle className="text-2xl font-light">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Keyswag Capital Inc. (DBA Key Real Estate Capital) Your privacy is of utmost importance to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Personal Identification Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Postal address</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Financial Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Credit score</li>
                      <li>Income details</li>
                      <li>Loan application information</li>
                      <li>Property details</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Technical Data</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Usage data (e.g., pages visited, time spent on site)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">d. Cookies and Tracking Technologies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies and similar technologies to track your activity on our website to enhance user experience. For more details, please review our Cookie Policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Keyswag Capital Inc. (DBA Key Real Estate Capital) uses your information for the following purposes:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. To Provide and Improve Our Services</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Processing loan applications and providing mortgage services</li>
                      <li>Tailoring loan options based on your financial needs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Communication</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>To send you updates, newsletters, and other information</li>
                      <li>To respond to inquiries or requests for consultations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Compliance and Security</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>To comply with legal obligations</li>
                      <li>To protect against fraud or unauthorized transactions</li>
                      <li>To maintain the security of our website and services</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sharing of Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing of Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your personal information under the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. With Service Providers</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may share your information with third-party service providers who assist us with processing loan applications, underwriting, and other business operations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. For Legal Purposes</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose your information when required to comply with legal obligations, including responding to subpoenas, court orders, or regulatory requests.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. With Your Consent</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We will share your information with third parties only if you have given us explicit consent to do so.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  Keyswag Capital Inc. (DBA Key Real Estate Capital) retains personal information for as long as necessary to provide our services or comply with legal obligations. After that, we will securely delete or anonymize your information.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Privacy Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may have the following rights concerning your personal information, subject to applicable laws:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Right to Access</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You have the right to request access to the personal information we hold about you.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Right to Rectification</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You may request corrections to any inaccurate or incomplete personal information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Right to Deletion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can request that we delete your personal information, subject to legal and contractual obligations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">d. Right to Withdraw Consent</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Where consent is the basis for processing your information, you have the right to withdraw it at any time.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">e. Right to Data Portability</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You may request that we provide your data in a structured, commonly used, and machine-readable format.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies and Tracking Technologies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. By using our website, you consent to the use of cookies in accordance with our Cookie Policy. You can control or delete cookies through your browser settings.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to external websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child under 18, we will take steps to delete such information.
                </p>
              </section>

              {/* Changes to This Privacy Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Keyswag Capital Inc. (DBA Key Real Estate Capital) reserves the right to update or modify this Privacy Policy at any time. We will notify you of any significant changes by posting an updated version on our website with the "Effective Date" noted at the top. Your continued use of our services after the changes take effect will constitute your acknowledgment and acceptance of the updated policy.
                </p>
              </section>

              {/* How to Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. How to Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Keyswag Capital Inc. (DBA Key Real Estate Capital)</p>
                  <p className="text-gray-700">Phone: (619) 369-4444</p>
                  <p className="text-gray-700">Address: 401 W A St Ste 200, San Diego, CA 92101</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
