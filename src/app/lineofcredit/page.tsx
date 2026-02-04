import AllCreditScore from '@/components/AllCreditScore'
import CreditBuildingBlock from '@/components/CreditBuildingBlock';
import CreditHero from '@/components/CreditHero'
import MoreFromTilt from '@/components/MoreFromTilt';
import QuestionAndAnswer from '@/components/QuestionAndAnswer';


const page = () => {
  return (
    <div>
      <CreditHero />
      <AllCreditScore />
      <CreditBuildingBlock/>
       <MoreFromTilt/> 
       <QuestionAndAnswer/>
    </div>
  );
}

export default page
