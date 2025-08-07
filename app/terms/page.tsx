import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 font-light">Last updated: March 15, 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              By accessing and using the Key Real Estate Capital website and services, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
              this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Use License</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Permission is granted to temporarily download one copy of the materials on Key Real Estate Capital's
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-light">Modify or copy the materials</li>
              <li className="text-gray-700 font-light">
                Use the materials for any commercial purpose or for any public display
              </li>
              <li className="text-gray-700 font-light">
                Attempt to reverse engineer any software contained on the website
              </li>
              <li className="text-gray-700 font-light">
                Remove any copyright or other proprietary notations from the materials
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Disclaimer</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              The materials on Key Real Estate Capital's website are provided on an 'as is' basis. Key Real Estate
              Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Limitations</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              In no event shall Key Real Estate Capital or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Key Real Estate Capital's website, even if Key Real Estate Capital or an
              authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Accuracy of Materials</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              The materials appearing on Key Real Estate Capital's website could include technical, typographical, or
              photographic errors. Key Real Estate Capital does not warrant that any of the materials on its website are
              accurate, complete, or current. Key Real Estate Capital may make changes to the materials contained on its
              website at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Links</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Key Real Estate Capital has not reviewed all of the sites linked to our website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement by Key Real
              Estate Capital of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Modifications</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Key Real Estate Capital may revise these terms of service for its website at any time without notice. By
              using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Governing Law</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of California and you
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-light mb-2">Key Real Estate Capital</p>
              <p className="text-gray-700 font-light mb-2">401 W A St Ste 200</p>
              <p className="text-gray-700 font-light mb-2">San Diego, CA 92101</p>
              <p className="text-gray-700 font-light mb-2">Email: loans@keyrealestatecapital.com</p>
              <p className="text-gray-700 font-light">Phone: (619) 567-1385</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
