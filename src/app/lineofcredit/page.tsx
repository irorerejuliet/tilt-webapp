
import AllCreditScore from '@/components/AllCreditScore';
import { creditBuildingCards } from '@/components/constant/creditBuildingCards';
import { creditSteps } from '@/components/constant/creditSteps';
import { faqs } from '@/components/constant/faqs';
import CreditBuildingBlock from '@/components/CreditBuildingBlock';
import CreditHero from '@/components/CreditHero'
import LineCreditCustomer from '@/components/LineCreditCustomer';
import MoreFromTilt from '@/components/MoreFromTilt';
import QuestionAndAnswer from '@/components/QuestionAndAnswer';



const page = () => {
  return (
    <div>
      <CreditHero />
      <AllCreditScore
        title="All credit scores welcome"
        description="A credit score isn't your whole story. Link a bank account to show real-time money habits and if you're ready for credit."
        footerText="Tilt Line of Credit issued by FinWise Bank."
        creditSteps={creditSteps}
        styleOverride=""
      />
      <CreditBuildingBlock
        title="Your creditbuilding blocks"
        buttonText="GET STARTED"
        creditBuildingCards={creditBuildingCards}
      />
      <LineCreditCustomer />
      <QuestionAndAnswer title="Question" subTitle="Answers" faqs={faqs} />
      <MoreFromTilt />
    </div>
  );
}

export default page
