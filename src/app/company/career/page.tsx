import BlogCardDetails from '@/components/BlogCardDetails'
import CareerHerosection from '@/components/CareerHerosection'
import JobsSection from '@/components/JobsSection'
import LeadershipSection from '@/components/LeadershipSection'

import PeopleSection from '@/components/PeopleSection'

const page = () => {
  return (
    <div>
      <CareerHerosection/>
      <PeopleSection/>
      <JobsSection/>
      <LeadershipSection/>
      <BlogCardDetails/>
    </div>
  )
}

export default page
