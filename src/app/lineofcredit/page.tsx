import AllCreditScore from '@/components/AllCreditScore'
import CreditBuildingBlock from '@/components/CreditBuildingBlock';
import CreditHero from '@/components/CreditHero'
import LineCreditCustomer from '@/components/LineCreditCustomer';
import MoreFromTilt from '@/components/MoreFromTilt';
import QuestionAndAnswer from '@/components/QuestionAndAnswer';


const page = () => {
  return (
    <div>
      <CreditHero />
      <AllCreditScore />
      <CreditBuildingBlock />
      <LineCreditCustomer />
      <QuestionAndAnswer />
      <MoreFromTilt />
    </div>
  );
}

export default page
