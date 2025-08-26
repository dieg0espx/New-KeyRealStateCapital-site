export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  title: string
  icon: React.ReactNode
  faqs: FAQItem[]
}

// Home page FAQ questions (6 most common questions)
export const homePageFAQ: FAQItem[] = [
  {
    question: "What is hard money and how does it help real estate investors?",
    answer: "Unlike conventional bank loans, a hard money loan is based on the value of the property being used as collateral, not just your financial position. While the rates are typically higher, hard money loans are attractive for real estate investors because they tend to close much faster, provide flexible terms and you can pay them off quickly to offset costs, allowing you to scale your business faster. Here are just a few additional benefits of hard money loans:\n\n• Access to quick capital and fast turn times\n\n• Flexible terms with various repayment schedules and loan durations\n\n• Up to 90% money financed based on the property value and your renovation budget\n\n• The more you work with the same lender, the more benefits you may receive such as reduced origination fee, rate, and more"
  },
  {
    question: "What types of loans does Key Real Estate Capital offer?",
    answer: "We offer bridge, fix-and-flip, rental, and new construction loans for the purchase or refinance of real estate investment properties."
  },
  {
    question: "What types of properties does Key Real Estate Capital offer financing for?",
    answer: "We provide financing on many asset classes including:\n\n• Condominiums\n\n• 2-4 Unit\n\n• Single-family\n\n• Multi-family\n\n• Short-term rental (AirBnB)\n\n• Mixed-use\n\n• Commercial"
  },
  {
    question: "Why do real estate investors use hard money loans?",
    answer: "Investors often use hard money for fast closing, higher leverage and more flexibility. Unlike conventional bank products, a hard money loan is based on the value of the property — not just your financial status. Borrowers use Key Real Estate Capital for these reasons, but also because of our relationship focus and reliability. Here are a few additional perks of using private capital:\n\n• No appraisal, no tax returns, no income verification\n\n• Flexible terms and underwriting guidelines for unique scenarios\n\n• Up to 100% of the purchase price financed on Fix-and-Flip deals\n\n• Up to 85% loan-to-value (LTV) on rental property purchases and rate/term refinances\n\n• Up to 80% cash out on single family 1-4 unit properties\n\n• Reduced closing costs and rates the longer you work with the same lender"
  },
  {
    question: "What loan terms and leverage does Key Real Estate Capital offer for fix-and-flip projects?",
    answer: "We offer extremely competitive terms for fix-and-flip loans, providing high leverage options up to 100% of the purchase price and renovation budget, and up to 75% of the after-repair-value (ARV) — with rates starting at 7.75%. Terms range from 6-24 months, with interest-only payments and no prepayment penalty."
  },
  {
    question: "What loan terms and leverage do you offer on rental DSCR loans?",
    answer: "For rental properties, we offer 30 year fixed loans with 5 year, 1 year and waived pre-payment penalties. These loans do not show up on personal credit or affect DTI, and our rates are best in class — typically landing only 0.25 - 0.5% above a full-doc conventional bank mortgage."
  }
]

// Full FAQ page categories and questions
export const faqCategories: FAQCategory[] = [
  {
    title: "General Lending",
    icon: "Building",
    faqs: [
      {
        question: "What is hard money and how does it help real estate investors?",
        answer: "Unlike conventional bank loans, a hard money loan is based on the value of the property being used as collateral, not just your financial position. While the rates are typically higher, hard money loans are attractive for real estate investors because they tend to close much faster, provide flexible terms and you can pay them off quickly to offset costs, allowing you to scale your business faster. Here are just a few additional benefits of hard money loans:\n\n• Access to quick capital and fast turn times\n\n• Flexible terms with various repayment schedules and loan durations\n\n• Up to 90% money financed based on the property value and your renovation budget\n\n• The more you work with the same lender, the more benefits you may receive such as reduced origination fee, rate, and more"
      },
      {
        question: "What types of loans does Key Real Estate Capital offer?",
        answer: "We offer bridge, fix-and-flip, rental, and new construction loans for the purchase or refinance of real estate investment properties."
      },
      {
        question: "What types of properties does Key Real Estate Capital offer financing for?",
        answer: "We provide financing on many asset classes including:\n\n• Condominiums\n\n• 2-4 Unit\n\n• Single-family\n\n• Multi-family\n\n• Short-term rental (AirBnB)\n\n• Mixed-use\n\n• Commercial"
      },
      {
        question: "Why do real estate investors use hard money loans?",
        answer: "Investors often use hard money for fast closing, higher leverage and more flexibility. Unlike conventional bank products, a hard money loan is based on the value of the property — not just your financial status. Borrowers use Key Real Estate Capital for these reasons, but also because of our relationship focus and reliability. Here are a few additional perks of using private capital:\n\n• No appraisal, no tax returns, no income verification\n\n• Flexible terms and underwriting guidelines for unique scenarios\n\n• Up to 100% of the purchase price financed on Fix-and-Flip deals\n\n• Up to 85% loan-to-value (LTV) on rental property purchases and rate/term refinances\n\n• Up to 80% cash out on single family 1-4 unit properties\n\n• Reduced closing costs and rates the longer you work with the same lender"
      }
    ]
  },
  {
    title: "Loan Terms & Leverage",
    icon: "Calculator",
    faqs: [
      {
        question: "What loan terms and leverage does Key Real Estate Capital offer for fix-and-flip projects?",
        answer: "We offer extremely competitive terms for fix-and-flip loans, providing high leverage options up to 100% of the purchase price and renovation budget, and up to 75% of the after-repair-value (ARV) — with rates starting at 7.75%. Terms range from 6-24 months, with interest-only payments and no prepayment penalty."
      },
      {
        question: "What loan terms and leverage do you offer on rental DSCR loans?",
        answer: "For rental properties, we offer 30 year fixed loans with 5 year, 1 year and waived pre-payment penalties. These loans do not show up on personal credit or affect DTI, and our rates are best in class — typically landing only 0.25 - 0.5% above a full-doc conventional bank mortgage."
      }
    ]
  },
  {
    title: "Application & Process",
    icon: "CheckCircle",
    faqs: [
      {
        question: "How quickly can you close?",
        answer: "On bridge, fix-and-flip and new construction deals, we can close in as fast as 5 days. For rental and DSCR loans, we typically close in 20-25 days."
      },
      {
        question: "What states do you lend in?",
        answer: "We lend nationwide with the exception of North and South Dakota."
      },
      {
        question: "Will I qualify for a Key Real Estate Capital loan?",
        answer: "The first step is to apply here. One of our experienced account executives will reach out to educate you, discuss terms and help provide the best loan option for your needs."
      },
      {
        question: "Can I get pre-approved?",
        answer: "Absolutely. Fill out our quick application here or give us a call at 111-111-1111."
      }
    ]
  }
] 