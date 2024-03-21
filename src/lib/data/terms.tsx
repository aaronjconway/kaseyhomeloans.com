//maybe later add in links to related articles or words? like a context.
// Home Inspection
// Homeowners Insurance
// Mortgage Broker
// Mortgage Lender
// Balloon Mortgage
// Conforming Loan
// Jumbo Loan
// FHA Loan
// VA Loan
// USDA Loan

export default interface Term {
  name: string
  desc_normal: string
  desc_grug: string
}

const terms: Term[] = [
  {
    name: "Pre-Approval",
    desc_normal: "A lender’s conditional agreement to lend a specific amount based on a borrower's creditworthiness and financial situation.",
    desc_grug: "Before Grug go hunt for new cave, Grug visit wise pebble lenders. They look at Grug's pebble collection, how Grug gather and spend pebbles, then say, 'Grug, we think you good for this many pebbles.' They give Grug special note saying how many pebbles Grug can use for cave. This make cave sellers take Grug serious, know Grug ready for big cave buy. It's like having big stick when go hunting; shows Grug ready and able."
  },
  {
    name: "Pre-Qualification",
    desc_normal: "An evaluation by a lender that determines if the borrower qualifies for a loan, and if so, the amount that the lender would be willing to lend.",
    desc_grug: "Grug think about big cave. Grug talk to pebble lender, tell how many pebbles Grug get from hunting, how many pebbles Grug owe to others. Pebble lender scratch head, then say, 'Maybe we give Grug this many pebbles for cave.' Not promise like pre-approval, but quick look to see if Grug in right hunting ground for caves. It like testing water before jump in lake."
  },
  {
    name: "Closing",
    desc_normal: "The final step in executing a real estate transaction.",
    desc_grug: "The big day when cave becomes Grug's. Grug and old cave owner, with wise pebble lenders and scribble keepers, sit together. They pass many papers, make many marks. Grug give final pebbles, and then get shiny key or stick for new cave. It's like end of long hunt, when Grug finally get to eat big feast. After this, Grug can sleep in new cave, call it home."
  },
  {
    name: "Closing Disclosure",
    desc_normal: "A form that provides final details about the mortgage loan. It includes the loan terms, projected monthly payments, and how much the borrower will pay in fees and other costs to get the mortgage.",
    desc_grug: "Few moons before closing, Grug get big important scroll from pebble lender. This scroll tell all about the pebbles Grug borrowing, how many pebbles Grug give back every moon, and extra pebbles for the cave-making magic. It make sure no surprises on big closing day. Grug study this, make sure understand all scribbles. It's like map to treasure; Grug must understand to find way to new cave."
  },
  {
    name: "Origination Fee",
    desc_normal: "A fee charged by a lender on entering into a loan agreement to cover the cost of processing the loan.",
    desc_grug: "When Grug go to wise pebble lender for borrow pebbles for new cave, lender say, 'Grug, me need extra pebbles for make this borrow happen.' This extra pebbles for work they do to make sure loan good and Grug promise strong. Like paying hunter for finding and catching dinner, not just for dinner itself. Grug give some pebbles upfront so wise pebble people start work on giving big pebble pile for cave."
  },
  {
    name: "Points",
    desc_normal: "Fees paid directly to the lender at closing in exchange for a reduced interest rate or specific risk qualities. Be aware! Sometimes there are points based on your situation that can't be avoided. There isn't alwasy a par rate..",
    desc_grug: "Imagine Grug can give extra pebbles now to pebble lender and in return, lender say, 'Okay, Grug, me make your future pebble giving smaller.' It's like trading pebbles now for saving more pebbles later when moon is full many times over. These extra pebbles called points. More points Grug give, less pebbles Grug give later every moon. Good deal if Grug plan stay in cave long time."
  },
  {
    name: "Rate Lock",
    desc_normal: "An agreement between a borrower and a lender that allows the borrower to lock in an interest rate on a mortgage for a specified time period.",
    desc_grug: "Grug see pebble borrowing rate good now, worry it go up before finish cave deal. Grug talk to pebble lender, say, 'Me want keep this pebble rate, no want it go up.' Lender say, 'Okay, Grug, we shake hands, keep rate same for many moons until cave deal done.' This promise keep Grug sleep well, knowing no surprise extra pebbles need give later. Good for planning, like knowing how much food need for winter."
  },
  {
    name: "Debt-to-Income Ratio (DTI)",
    desc_normal: "A personal finance measure that compares an individual’s debt payment to his or her overall income.",
    desc_grug: "Grug have many pebbles come in every moon from hunting and gathering. But Grug also give away pebbles for borrowed pebbles and other promises. Wise pebble lenders look how many pebbles Grug need give away compared to pebbles Grug collect. If Grug need give away too many pebbles compared to what Grug collect, lenders think lending more pebbles risky. They say, 'Grug have too much pebble burden, maybe no can take more.' Grug want keep giving-away pebbles less than collecting pebbles for easy borrow."
  },
  {
    name: "Credit Score",
    desc_normal: "A numerical expression based on a level analysis of a person's credit files, representing the creditworthiness of an individual.",
    desc_grug: "Imagine every time Grug borrow pebbles or not give back pebbles on time, wise pebble keepers make note on big cave wall. More good marks, higher Grug's pebble trust number goes. This number helps other pebble lenders decide if they want to let Grug borrow pebbles. High number means Grug good at giving back pebbles, low number means Grug sometimes forget or not give back. It's like hunting score, but for borrowing and giving back pebbles. Keep score high, get more pebbles when need."
  },
  {
    name: "Deed",
    desc_normal: "A legal document that represents the ownership of property, transferring the rights of ownership from the seller to the buyer.",
    desc_grug: "Deed is like big magic cave painting. It say who real cave owner. When Grug give pebbles for cave and trade done, old cave owner give Grug deed. This not just any scribble. It special scribble that all tribe agree means Grug now owns cave. If others say, 'No, this my cave,' Grug show deed, and all know cave Grug's. Very important keep safe, maybe bury under big rock inside cave but remember where, so Grug always can show cave belongs to Grug."
  },
  {
    name: "Underwriting",
    desc_normal: "The process by which lenders assess the risk of lending money to home buyers, involving the evaluation of the borrower's creditworthiness, the property value, and other factors.",
    desc_grug: "When Grug want borrow pebbles for new cave, wise pebble lenders sit around big stone table. They scratch marks on flat rocks, look at Grug's pebble history, how many pebbles Grug get from hunting and gathering, and how shiny cave is. They decide if Grug good for promise to give pebbles back. This big think time called underwriting. They make sure Grug not too risky to lend pebbles. If they like Grug's story, they give pebbles for cave. If not, Grug need find more pebbles first or look for less shiny cave."
  },
  {
    name: "Loan-to-Value Ratio (LTV)",
    desc_normal: "A lending risk assessment ratio that financial institutions and other lenders examine before approving a mortgage, calculated as the mortgage amount divided by the appraised value of the property.",
    desc_grug: "Think like this: Grug want big cave but need borrow many pebbles to get. Wise pebble lenders look at cave and say, 'This cave worth many pebbles.' They decide how many pebbles lend to Grug based on cave worth. If cave worth 100 pebbles and they lend Grug 80 pebbles, the cave-borrow pebble ratio is 80%. This help lenders know if too risky. If Grug not give back pebbles, and they need take cave, they want make sure not lose pebbles. Lower the number, happier the pebble lender, safer for Grug."
  },
  {
    name: 'Appraisal',
    desc_normal: "An appraisal is a professional evaluation or assessment of something's value or quality. *Do not confuse this with an Inspection* Often used in real estate to determine a property's market value, it involves examining various factors like location, condition, and comparable sales. Appraisals are also common in finance for assets or antiques, providing a monetary value based on condition and rarity.",
    desc_grug: "Appraisal mean someone smart look at thing, say how much worth.Like when Grug see cave, decide if big and good for sleep, or small and bad.If house or shiny rock, person check if nice or not nice, say price.",
  },
  {
    name: "Mortgage",
    desc_normal: "A loan used to purchase a home, where the property serves as collateral.",
    desc_grug: "Big borrow pebbles for buy home. Home is promise if not give back pebbles."
  },
  {
    name: "Principal",
    desc_normal: "The amount of money borrowed on a loan that must be repaid.",
    desc_grug: "How much pebbles borrowed."
  },
  {
    name: "Interest",
    desc_normal: "The cost of borrowing money, usually a percentage of the principal.",
    desc_grug: "Extra pebbles pay for borrow pebbles."
  },
  {
    name: "Fixed-Rate Mortgage",
    desc_normal: "A mortgage with an interest rate that remains the same for the entirety of the loan term.",
    desc_grug: "Borrow pebbles, pay same extra pebbles every moon until done."
  },
  {
    name: "Adjustable-Rate Mortgage (ARM)",
    desc_normal: "A mortgage with an interest rate that can change periodically based on changes in a corresponding financial index.",

    desc_grug: "Borrow pebbles, extra pebbles pay, sometimes more, sometimes less."
  },
  {
    name: "Down Payment",
    desc_normal: "An initial payment made when purchasing a property, typically a percentage of the total purchase price.",
    desc_grug: "First big give of pebbles when Grug want new cave. Not all pebbles now, but big chunk. Show cave-sellers Grug serious about big sleep place. Later, Grug give more pebbles over many moons until all pebbles given for cave. First give important, bigger it is, less moons to give pebbles later."
  },
  {
    name: "Closing Costs",
    desc_normal: "Fees and other expenses required to finalize a mortgage beyond the price of the property itself.",
    desc_grug: "When Grug finally get new cave, need give extra pebbles for cave-making magic. Not just for cave, but for paper with squiggles, wise old cave advisers, and to make sure no other Grugs claim cave. Many small pebbles add up, need plan. This last big give before cave all Grug's. Make sure Grug ready, or no cave."
  },
  {
    name: "Amortization",
    desc_normal: "The process of spreading out a loan into a series of fixed payments over the loan’s term.",
    desc_grug: "Amortization like breaking big rock (borrow big pebbles) into many small stones over many moons. Each moon, Grug give some pebbles back. Part for the big rock Grug took, part for extra because Grug got to use big rock. Keep giving pebbles each moon until no more big rock debt. Like hunting, but instead of bringing back meat each time, Grug bring back pebbles until tribe elder says 'All good, big rock now Grug's completely."
  },
  {
    name: "Escrow",
    desc_normal: "A financial arrangement where a third party holds and regulates the payment of funds required for two parties in a given transaction.",
    desc_grug: "Think like Grug give pebbles to trusted friend. Friend hold pebbles, not give to seller until all agree cave good, no surprises. If cave bad, friend give pebbles back to Grug. If all good, friend give pebbles to seller, Grug get cave. It like magic safety net, make sure no one tricked with bad cave deal. Friend in middle very important, keep pebbles safe until cave swapping done right."
  },
  {
    name: "Private Mortgage Insurance (PMI)",
    desc_normal: "Insurance that a borrower must buy for the lender if the down payment is less than 20% of the home's value. Does not apply to VA or Jumbo loans.",
    desc_grug: "If not give enough pebbles at start, must pay extra to make sure lender gets pebbles if grug no can pay."
  },
  {
    name: "Equity",
    desc_normal: "The difference between the value of the property and the amount still owed on the mortgage.",
    desc_grug: "Equity is like Grug's part of cave that really Grug's. Imagine Grug's cave worth many, many pebbles, but Grug still owe some pebbles to cave lender. The part of cave worth more than pebbles Grug owe is Grug's true share. More pebbles Grug give to lender, bigger Grug's share grows. One day, if all pebbles given, whole cave Grug's, no more owe. It's how Grug turn cave borrowing into full cave owning, bit by bit, like stacking pebbles to reach high fruit."
  },
  {
    name: "Refinancing",
    desc_normal: "Replacing an existing mortgage with a new loan, typically to get a better interest rate, change the loan term, or consolidate your personal debts.",
    desc_grug: "Imagine Grug already trade pebbles every moon for cave, but then find better, easier way to give fewer pebbles or change moons to give pebbles. Grug go to wise pebble lender, say, 'Me want swap old pebble deal for new one, better for Grug.' If wise lender say yes, Grug get new deal, maybe give less pebbles each moon or change how many moons to give. Good for saving pebbles or making pebble giving fit better with Grug moon gathering. Like making old cave deal shiny and new again."
  },
  {
    name: "Home Equity Line of Credit (HELOC)",
    desc_normal: "A line of credit secured by the equity in the homeowner's property, allowing the homeowner to borrow against it.",
    desc_grug: "Imagine Grug's cave now worth many, many more pebbles than Grug owes. Wise pebble keepers say, 'Grug, since your cave worth lots, we let you borrow pebbles against it. Not all at once, but take pebbles when need, like drawing water from river.' Grug can use these pebbles for big things, like fixing cave, making it bigger, or even getting shiny things Grug likes. But remember, Grug must give pebbles back over moons, or wise pebble keepers get grumpy. It's like cave give Grug special power to have pebbles on hand, but must use wisely."
  },
  {
    name: "Foreclosure",
    desc_normal: "The legal process by which a lender takes control of a property, evicts the homeowner, and sells the home after the homeowner fails to make full principal and interest payments on their mortgage.",
    desc_grug: "When Grug borrow pebbles for cave but not give back pebbles as promised, big pebble lender get mad. They say, 'Grug not keep promise, so we take cave back.' They send wise cave takers to tell Grug must leave. Then, they find new Grug who give pebbles for cave. Sad time for Grug, lose cave and must find new sleep place. Important for Grug always give back borrowed pebbles, keep cave safe."

  }




];

export { terms };
