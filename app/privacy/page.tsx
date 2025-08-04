import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 font-light">Last updated: March 15, 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Key Real Estate Capital ("we," "our," or "us") collects information you provide directly to us, such as
              when you create an account, apply for a loan, contact us, or use our services. This may include:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-light">
                Personal identification information (name, address, phone number, email)
              </li>
              <li className="text-gray-700 font-light">
                Financial information (income, assets, credit history, employment information)
              </li>
              <li className="text-gray-700 font-light">
                Property information (property details, purchase price, intended use)
              </li>
              <li className="text-gray-700 font-light">Communication preferences and marketing choices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">We use the information we collect to:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-light">Process and evaluate loan applications</li>
              <li className="text-gray-700 font-light">Provide customer service and support</li>
              <li className="text-gray-700 font-light">Communicate with you about our services</li>
              <li className="text-gray-700 font-light">Comply with legal and regulatory requirements</li>
              <li className="text-gray-700 font-light">Improve our services and develop new offerings</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">We may share your information with:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-light">Service providers who assist us in our operations</li>
              <li className="text-gray-700 font-light">Third parties as required by law or regulation</li>
              <li className="text-gray-700 font-light">
                Credit bureaus and other financial institutions as necessary for loan processing
              </li>
              <li className="text-gray-700 font-light">Professional advisors such as lawyers and accountants</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">You have the right to:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-light">Access and update your personal information</li>
              <li className="text-gray-700 font-light">Request deletion of your personal information</li>
              <li className="text-gray-700 font-light">Opt out of marketing communications</li>
              <li className="text-gray-700 font-light">Request a copy of your personal information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-light mb-2">Key Real Estate Capital</p>
              <p className="text-gray-700 font-light mb-2">123 Wilshire Boulevard, Suite 1000</p>
              <p className="text-gray-700 font-light mb-2">Los Angeles, CA 90210</p>
              <p className="text-gray-700 font-light mb-2">Email: privacy@keyrec.com</p>
              <p className="text-gray-700 font-light">Phone: (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
