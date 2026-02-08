import CreditCardHero from "@/components/CreditCardHero"
import CreditCardPricing from "@/components/CreditCardPricing"
import PaycheckLimitCards from "@/components/PaycheckLimitCards";
import QuestionAndAnswer from "@/components/QuestionAndAnswer"


const page = () => {
  return (
    <div>
      <CreditCardHero />
      <CreditCardPricing />
      <PaycheckLimitCards/>
      <QuestionAndAnswer />
    </div>
  );
}

export default page
