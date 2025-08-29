"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600 font-light">
            Effective date: September 1, 2024
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-light-green text-white">
            <CardTitle className="text-2xl font-light">
              Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Keyswag Capital Inc. (DBA Key Real Estate Capital) These Terms of Service ("Terms") govern your use of our website and services. By accessing or using the website and services, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our services.
                </p>
              </section>

              {/* Use of Our Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Our Services</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Eligibility</h3>
                    <p className="text-gray-700 leading-relaxed">
                      By using our services, you confirm that you are at least 18 years old and legally able to enter into a binding agreement. If you are using our services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. User Responsibility</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You agree to use our services only for lawful purposes. You are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Prohibited Activities</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      You agree not to engage in any of the following activities:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Using the website for any illegal or unauthorized purpose.</li>
                      <li>Attempting to access or use another user's account without permission.</li>
                      <li>Interfering with or disrupting the website's operation.</li>
                      <li>Uploading or transmitting any malicious software, viruses, or harmful code.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Loan Services and Disclaimers */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Loan Services and Disclaimers</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Loan Applications</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Keyswag Capital Inc. (DBA Key Real Estate Capital) offers mortgage and loan-related services, including loan application assistance, refinancing, and personalized lending options. We do not guarantee approval for any loan, as approval depends on a range of factors, including creditworthiness, financial status, and third-party lender requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. No Financial Advice</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The content on our website is for general informational purposes only and should not be considered financial or legal advice. We recommend consulting with a qualified financial advisor before making any major financial decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Service Availability</h3>
                    <p className="text-gray-700 leading-relaxed">
                      While we strive to provide continuous access to our services, we cannot guarantee that the website or any service will be available at all times. We may experience occasional downtime due to maintenance, technical issues, or other unforeseen circumstances.
                    </p>
                  </div>
                </div>
              </section>

              {/* Account Registration */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Account Registration</h2>
                <p className="text-gray-700 leading-relaxed">
                  To use certain features of our services, you may be required to create an account. By registering, you agree to provide accurate and up-to-date information. You are responsible for maintaining the security of your account and ensuring that your login credentials are kept confidential.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Ownership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All content, designs, logos, and materials on the Keyswag Capital Inc. (DBA Key Real Estate Capital) website are the intellectual property of Keyswag Capital Inc. (DBA Key Real Estate Capital) or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Limited License</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial use. You may not reproduce, distribute, or exploit any content from our website without prior written consent from Keyswag Capital Inc. (DBA Key Real Estate Capital)
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. User-Generated Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you submit or post content to our website (e.g., reviews or testimonials), you grant us a worldwide, royalty-free, perpetual license to use, modify, and display that content in connection with our services. You retain ownership of the content but agree that we may use it in our marketing or promotional materials.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your use of our services is also governed by our{" "}
                  <Link href="/privacy" className="text-light-green hover:text-perry underline">
                    Privacy Policy
                  </Link>
                  . By using the website, you consent to the collection and use of your information as described in the Privacy Policy.
                </p>
              </section>

              {/* Third-Party Links and Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links and Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites or services that are not owned or controlled by Key Capital Inc. (DBA Key Real Estate Capital) We are not responsible for the content, privacy practices, or terms of these third-party websites. You acknowledge and agree that any interactions with third-party services are at your own risk.
                </p>
              </section>

              {/* Disclaimers and Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers and Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. No Guarantees</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Keyswag Capital Inc. (DBA Key Real Estate Capital) makes no warranties or representations about the accuracy, completeness, or reliability of the information on our website. The services are provided on an "as-is" and "as-available" basis, without any express or implied warranties.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Limitation of Liability</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To the fullest extent permitted by law, Keyswag Capital Inc. (DBA Key Real Estate Capital) shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of your use of the services, even if we have been advised of the possibility of such damages.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Indemnification</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You agree to indemnify, defend, and hold Keyswag Capital Inc. (DBA Key Real Estate Capital) harmless from any claims, liabilities, damages, losses, or expenses arising from your use of the website or services, your violation of these Terms, or your violation of any third-party rights.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Termination by You</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You may terminate your use of the services at any time by discontinuing your access to the website and closing your account, if applicable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Termination by Key Capital Inc.</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to suspend or terminate your account or access to our services at any time, for any reason, including but not limited to violation of these Terms, without prior notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Effect of Termination</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Upon termination, any licenses or rights granted to you under these Terms will cease immediately. Any provisions of these Terms that, by their nature, should survive termination (e.g., intellectual property, indemnification, limitation of liability) shall continue to apply.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law and Dispute Resolution */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law and Dispute Resolution</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">a. Governing Law</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms are governed by and construed in accordance with the laws of the state of California, without regard to its conflict of law principles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">b. Dispute Resolution</h3>
                    <p className="text-gray-700 leading-relaxed">
                      In the event of any dispute arising out of or related to these Terms or the use of our services, you agree to first attempt to resolve the dispute informally by contacting us at the information provided below. If the dispute cannot be resolved through informal negotiations, it shall be submitted to binding arbitration under the rules of the American Arbitration Association.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">c. Jurisdiction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If arbitration is deemed inapplicable, you agree that any legal action arising out of or related to these Terms or your use of our services shall be filed only in the state or federal courts located in San Diego, California, and you consent to the jurisdiction of such courts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to These Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to These Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Keyswag Capital Inc. (DBA Key Real Estate Capital) reserves the right to update or modify these Terms at any time. We will notify you of any significant changes by posting the revised Terms on our website. Your continued use of the services after the changes have been made will constitute your acceptance of the revised Terms.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns regarding these Terms, please contact us at:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Keyswag Capital Inc. (DBA Key Real Estate Capital)</p>
                  <p className="text-gray-700">Phone: (619) 649-6933</p>
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
