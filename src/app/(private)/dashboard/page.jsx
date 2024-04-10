import LeaderboardTable from '@/components/LeaderboardTable'
import { Card } from 'antd'

const dummyData = [
  {
    number: 1,
    name: 'Labyu',
    party: 'Happy',
    votePercentage: 50,
    totalVotes: 100,
    position: 'Governor'
  },
  {
    number: 2,
    name: 'Labyu too',
    party: 'I love Bohol',
    votePercentage: 50,
    totalVotes: 100,
    position: 'Governor'
  }
]

function DashboardPage() {
  return (
    <>
      <Card className='h-40 w-[54%] flex items-center rounded-2xl border border-[#E6EDFF] '>
        <div className='flex items-center font-sans'>
          <div className='flex items-center flex-col mr-8 p-6'>
            <h1 className='mr-2 font-semibold text-3xl '>300</h1>
            <p className='text-sm whitespace-nowrap'>Total votes</p>
          </div>
          <div className='ml-8 mb-10'>
            <img className='w-24 h-24' src='icon.svg' alt='users' />
          </div>
          <hr className='h-30 w-28 transform rotate-90 ' />
          <div className='flex items-center flex-col ml-8'>
            <h1 className='font-semibold text-3xl mr-auto '>0</h1>
            <p className='text-sm whitespace-nowrap'>Registered Voters</p>
          </div>
          <div className='ml-10 mb-10'>
            <img className='w-24 h-24' src='registervoter.svg' alt='register' />
          </div>
          <hr className='h-30 w-28 transform rotate-90 bg-[#E6EDFF]' />
        </div>
      </Card>

      <LeaderboardTable data={dummyData} showTitle={true} position='Governor' />
      <LeaderboardTable data={dummyData} showTitle={false} position='Vice Governor' />
      <LeaderboardTable data={dummyData} showTitle={false} position='Secretary' />
      <LeaderboardTable data={dummyData} showTitle={false} position='P.I.O' />
    </>
  )
}
export default DashboardPage
