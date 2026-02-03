import AllCreditScore from '@/components/AllCreditScore'
import CreditBuildingBlock from '@/components/CreditBuildingBlock';
import CreditHero from '@/components/CreditHero'


const page = () => {
  return (
    <div>
      <CreditHero />
      <AllCreditScore />
      <CreditBuildingBlock/>
    </div>
  );
}

export default page
