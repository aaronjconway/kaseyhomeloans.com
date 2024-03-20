/*


todo create properties that will be used for the data that goes
into the call to action at the bottom of the category pages.

this way we can have customized category call to actions
idk how important this is.


*/

export default interface Category {
  name: string;
  description: string;
  page_description: string; //the small desc you see on the category landing page
  path: string;
}

const categories: Category[] = [
  {
    "name": "Mortgage Basics",
    "description": "Covering fundamental concepts related to mortgages such as types of mortgages, interest rates, down payments, and mortgage terminology.",
    "page_description": "Discover articles on mortgage basics for new home buyers or refreshers for experienced home owners.",
    "path": "mortgage-basics"
  },
  {
    "name": "Home Buying Tips",
    "description": "Advice and tips for individuals navigating the home buying process.",
    "page_description": "Useful infomation and things to watch out for related to the mortgage process",
    "path": "home-buying-tips"
  },
  {
    "name": "Mortgage Rates and Trends",
    "description": "Offering insights into current mortgage rates, market trends, and factors influencing interest rates.",
    "page_description": "",
    "path": "mortgage-rates-and-trends"
  },
  {
    "name": "Financial Planning",
    "description": "Discussing financial planning strategies related to mortgages, budgeting for a down payment, improving credit scores, and managing debt.",
    "page_description": "",
    "path": "financial-planning"
  },
  {
    "name": "Loan Programs",
    "description": "Exploring various loan programs available to homebuyers, including FHA loans, VA loans, conventional mortgages, and jumbo loans.",
    "page_description": "",
    "path": "loan-programs"
  },
  {
    "name": "Refinancing",
    "description": "Explaining the process and benefits of refinancing a mortgage, including lowering monthly payments, reducing interest rates, and accessing home equity.",
    "page_description": "",
    "path": "refinancing"
  },
  {
    "name": "Homeownership Tips",
    "description": "Providing guidance on maintaining and managing a home, understanding homeowners insurance, property taxes, and home maintenance.",
    "page_description": "",
    "path": "homeownership-tips"
  },
  {
    "name": "Real Estate Market Analysis",
    "description": "Analyzing current trends in the real estate market, housing affordability, regional market variations, and forecasts.",
    "page_description": "",
    "path": "real-estate-market-analysis"
  },
  {
    "name": "Legal and Regulatory Updates",
    "description": "Keeping readers informed about changes in mortgage laws, regulations, and government programs.",
    "page_description": "",
    "path": "legal-and-regulatory-updates"
  },
  {
    "name": "Home Equity and Investment",
    "description": "Exploring strategies for leveraging home equity, using home equity for investment purposes, and building wealth through real estate.",
    "page_description": "",
    "path": "home-equity-and-investment"
  },
  {
    "name": "Credit and Financing Tips",
    "description": "Providing guidance on improving credit scores, managing debt responsibly, and navigating financing options for different financial situations.",
    "page_description": "",
    "path": "credit-and-financing-tips"
  },
  {
    "name": "Local Market Insights",
    "description": "Offering localized description specific to different regions or cities, including housing market trends, neighborhood profiles, and community highlights.",
    "page_description": "",
    "path": "local-market-insights"
  },
  {
    "name": "Home Renovation and Improvement",
    "description": "Discussing renovation financing options, DIY home improvement projects, and adding value to a property through upgrades.",
    "page_description": "",
    "path": "home-renovation-and-improvement"
  }
]


export { categories };
