import AllCreditScore from '@/components/AllCreditScore'
import { creditBuildingCards } from '@/components/constant/creditBuildingCards';
import { creditSteps } from '@/components/constant/creditSteps';
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
      />
      <CreditBuildingBlock
        title="Your credit
building blocks"
        buttonText="GET STARTED"
        creditBuildingCards={creditBuildingCards}
      />
      <LineCreditCustomer />
      <QuestionAndAnswer />
      <MoreFromTilt />
    </div>
  );
}

export default page
