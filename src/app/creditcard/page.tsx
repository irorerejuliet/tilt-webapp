import AllCreditScore from "@/components/AllCreditScore";
import { preQualifySteps } from "@/components/constant/preQualifySteps";
import { takeCredit } from "@/components/constant/takeCredit";
import CreditBuildingBlock from "@/components/CreditBuildingBlock";
import CreditCardHero from "@/components/CreditCardHero"
import CreditCardPricing from "@/components/CreditCardPricing"
import PaycheckLimitCards from "@/components/PaycheckLimitCards";
import QuestionAndAnswer from "@/components/QuestionAndAnswer"


const page = () => {
  return (
    <div>
      <CreditCardHero />
      <CreditCardPricing />
      <AllCreditScore
        title="Check your eligibility in minutes"
        description="Pre-qualify with no impact to your score."
        footerText="Credit score in progress? Boost your approval odds with bank linking to show off your real-time money habits."
        creditSteps={preQualifySteps}
        styleOverride="pt-96"
      />
      <PaycheckLimitCards />
      <CreditBuildingBlock
        title="Take credit and
run with it"
        buttonText="GET STARTED"
        creditBuildingCards={takeCredit}
      />
      <QuestionAndAnswer />
    </div>
  );
}

export default page
