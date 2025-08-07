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
    question: "What types of properties do you finance?",
    answer: "We finance a wide range of investment properties including single-family homes, multi-family properties (up to 4 units), commercial buildings, mixed-use developments, and land for construction. Our focus is on income-producing properties and fix-and-flip projects across residential and light commercial sectors."
  },
  {
    question: "How quickly can you close a loan?",
    answer: "Our typical closing timeline is 7-14 days for most loan products. For complex transactions or new construction projects, the timeline may extend to 21-30 days. We pride ourselves on fast, efficient closings and can expedite for qualified borrowers."
  },
  {
    question: "What are your minimum credit score requirements?",
    answer: "Generally, we require a minimum credit score of 680 for most loan products. However, we evaluate each application holistically, considering factors like real estate experience, down payment amount, property cash flow, and overall financial strength."
  },
  {
    question: "What are your interest rates?",
    answer: "Interest rates vary by loan type and borrower qualifications: Fix-and-flip loans typically range from 8.5-12%, rental property loans from 6.5-9%, and construction loans from 9-12%. Rates are based on loan amount, borrower experience, property type, and market conditions."
  },
  {
    question: "Do you offer interest-only payments?",
    answer: "Yes, most of our loan products offer interest-only payment options, particularly beneficial for fix-and-flip and bridge loans. This helps improve cash flow during the investment period. For rental property loans, we offer both interest-only and fully amortizing payment options."
  },
  {
    question: "What are your maximum loan amounts?",
    answer: "Our maximum loan amounts vary by product: Fix-and-flip loans up to $2M, rental property loans up to $1.5M, construction loans up to $3M, and commercial loans up to $5M. Larger amounts may be available for experienced investors with strong track records."
  }
]

// Full FAQ page categories and questions
export const faqCategories: FAQCategory[] = [
  {
    title: "General Lending",
    icon: "Building",
    faqs: [
      {
        question: "What types of properties do you finance?",
        answer: "We finance a wide range of investment properties including single-family homes, multi-family properties (up to 4 units), commercial buildings, mixed-use developments, and land for construction. Our focus is on income-producing properties and fix-and-flip projects across residential and light commercial sectors."
      },
      {
        question: "What states do you lend in?",
        answer: "We currently lend in 15 states across the US, with primary focus on California, Florida, Texas, Arizona, Nevada, and Georgia. Our coverage includes major metropolitan areas and growing markets. Contact us to confirm if we lend in your target market."
      },
      {
        question: "What are your minimum credit score requirements?",
        answer: "Generally, we require a minimum credit score of 680 for most loan products. However, we evaluate each application holistically, considering factors like real estate experience, down payment amount, property cash flow, and overall financial strength. We may consider lower scores for experienced investors with strong compensating factors."
      },
      {
        question: "Do you require personal guarantees?",
        answer: "Personal guarantees are typically required for most loan products to ensure alignment of interests. However, the specific terms depend on the loan amount, borrower experience, property type, and overall transaction structure. We can discuss alternatives during the application process."
      }
    ]
  },
  {
    title: "Loan Products",
    icon: "Home",
    faqs: [
      {
        question: "What is the difference between fix-and-flip and rental property loans?",
        answer: "Fix-and-flip loans are short-term (6-18 months) designed for purchasing, renovating, and quickly selling properties. They typically have higher interest rates but faster approval. Rental property loans are longer-term (5-30 years) for properties you plan to hold and rent out, with lower rates and longer terms."
      },
      {
        question: "Do you offer construction loans?",
        answer: "Yes, we offer construction loans for ground-up development projects. These loans typically have a 12-18 month term and are structured with interest-only payments during construction, converting to permanent financing upon completion. We require detailed construction budgets and timelines."
      },
      {
        question: "Can you finance properties held in an LLC?",
        answer: "Yes, we regularly finance properties held in LLCs and other business entities. We'll need to review the entity structure, operating agreements, and may require personal guarantees from the principals. This is common for real estate investors and we have streamlined processes for entity-based lending."
      },
      {
        question: "What are your maximum loan amounts?",
        answer: "Our maximum loan amounts vary by product: Fix-and-flip loans up to $2M, rental property loans up to $1.5M, construction loans up to $3M, and commercial loans up to $5M. Larger amounts may be available for experienced investors with strong track records."
      }
    ]
  },
  {
    title: "Application & Process",
    icon: "CheckCircle",
    faqs: [
      {
        question: "How quickly can you close a loan?",
        answer: "Our typical closing timeline is 7-14 days for most loan products. For complex transactions or new construction projects, the timeline may extend to 21-30 days. We pride ourselves on fast, efficient closings and can expedite for qualified borrowers."
      },
      {
        question: "What documentation do you require?",
        answer: "Standard documentation includes: Personal tax returns (2 years), business tax returns if applicable, bank statements (3 months), property appraisal, renovation budgets (for fix-and-flip), rent rolls (for rental properties), proof of insurance, and entity documents if applicable. Our loan officers will provide a complete checklist tailored to your specific loan type."
      },
      {
        question: "Do you require appraisals?",
        answer: "Yes, we require professional appraisals for all properties. For fix-and-flip loans, we require both 'as-is' and 'after-repair' value appraisals. For rental properties, we typically require a standard appraisal. We work with approved appraisers to ensure accurate valuations."
      },
      {
        question: "What are your down payment requirements?",
        answer: "Down payment requirements vary by loan type: Fix-and-flip loans typically require 20-25% down, rental property loans require 25-30% down, and construction loans require 30-35% down. Lower down payments may be available for experienced investors with strong track records."
      }
    ]
  },
  {
    title: "Terms & Payments",
    icon: "Calculator",
    faqs: [
      {
        question: "Do you offer interest-only payments?",
        answer: "Yes, most of our loan products offer interest-only payment options, particularly beneficial for fix-and-flip and bridge loans. This helps improve cash flow during the investment period. For rental property loans, we offer both interest-only and fully amortizing payment options."
      },
      {
        question: "What are your interest rates?",
        answer: "Interest rates vary by loan type and borrower qualifications: Fix-and-flip loans typically range from 8.5-12%, rental property loans from 6.5-9%, and construction loans from 9-12%. Rates are based on loan amount, borrower experience, property type, and market conditions."
      },
      {
        question: "Are there prepayment penalties?",
        answer: "Our loans typically have no prepayment penalties, allowing you to pay off the loan early without additional costs. This is especially beneficial for fix-and-flip investors who may sell properties quickly. Some construction loans may have minimal prepayment penalties during the first 6 months."
      },
      {
        question: "How do you handle loan servicing?",
        answer: "We service our own loans, providing direct communication and flexible payment options. You can make payments online, by phone, or by mail. We offer automatic payment options and can accommodate special payment arrangements when needed."
      }
    ]
  }
] 