import AllCreditScore from '@/components/AllCreditScore'
import CreditBuildingBlock from '@/components/CreditBuildingBlock';
import CreditHero from '@/components/CreditHero'
import MoreFromTilt from '@/components/MoreFromTilt';


const page = () => {
  return (
    <div>
      <CreditHero />
      <AllCreditScore />
      <CreditBuildingBlock/>
       <MoreFromTilt/> 
    </div>
  );
}

export default page
