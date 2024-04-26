'use client'
import LeaderboardTable from '@/components/LeaderboardTable'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { positionsArray } from '@/app/(private)/vote/page'
import { useQuery } from '@tanstack/react-query'
import { getCandidates } from '@/lib/queries/candidate/getCandidates'
import axios from 'axios'
import randomColor from 'randomcolor'
import { Doughnut } from 'react-chartjs-2'
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
Chart.register(ArcElement, Tooltip, Legend);

const dummyData = [
  {
    number: 1,
    name: 'Lourence Dada',
    party: 'Atup',
    votePercentage: 50,
    totalVotes: 100,
    position: 'Governor'
  },
  {
    number: 2,
    name: 'Mary Joy Gumanid',
    party: 'DibDib',
    votePercentage: 50,
    totalVotes: 100,
    position: 'Governor'
  }
]

async function getVoterCount(){
  const res = await axios.get('/api/user/count')
  return res.data.count
}

function DashboardPage() {
  const [positions, setPositions] = useState({})
  const [partyStats, setPartyStats] = useState({})
  const { data: candidatesData, isLoading } = useQuery({
    queryFn: getCandidates,
    queryKey: ['candidates']
  })
  const { data: session } = useSession()
  const router = useRouter()

  const { data: countVoters, isLoading: isCountLoading } = useQuery({
    queryFn: getVoterCount,
    queryKey: ['voters-count']
  })
  useEffect(() => {
    if(session){
      if(!session.user.year && !session.user.role === 'ADMIN'){
        router.push('/onboarding')
      }
    }
  }, [session])

  useEffect(() => {
    if (!isLoading && candidatesData && candidatesData.length > 0) {
      const result = {}
      // console.log(candidatesData.map((party) => party.name))
      setPartyStats({
        labels: candidatesData.map((party) => party.name),
        datasets: [
          {
            label: 'Votes per party',
            data: candidatesData.map((party) => party.number_of_votes),
            backgroundColor: candidatesData.map((party) => randomColor()),
            hoverBackgroundColor: candidatesData.map((party) => randomColor()),
          },
        ],
      })

      positionsArray.forEach((position) => {
        result[position] = []
      })

      candidatesData.forEach((party) => {
        positionsArray.forEach((position) => {
          const candidate = party.candidates.find((candidate) => candidate.position === position)
          if (candidate) {
            if (!result[position]) {
              result[position] = []
            }
            result[position].push({
              name: candidate.name,
              party: party.name,
              candidateId: candidate.id,
              partyId: party.id,
              numberOfVotes: candidate.number_of_votes,
              position: candidate.position,
            })
          }
        })
      })

      setPositions(result)
      console.log(result)
    }
  }, [isLoading, candidatesData, positionsArray])

  useEffect(() => {
    console.log(partyStats)
  }, [partyStats])

  return (
    <>
      <p className='text-2xl font-bold mb-5'>Statistics</p>
      <Card className='h-40 w-[54%] flex items-center rounded-2xl border border-[#E6EDFF] '>
        <div className='flex items-center font-sans'>
          <div className='flex items-center flex-col mr-8 p-6'>
            <h1 className='mr-2 font-semibold text-3xl '>{candidatesData && candidatesData.reduce((acc, current) => acc + current.number_of_votes, 0)}</h1>
            <p className='text-sm whitespace-nowrap'>Total votes</p>
          </div>
          <div className='ml-8 mb-10'>
            <img className='w-24 h-24' src='icon.svg' alt='users' />
          </div>
          <hr className='h-30 w-28 transform rotate-90 ' />
          <div className='flex items-center flex-col ml-8'>
            <h1 className='font-semibold text-3xl mr-auto '>{countVoters ? countVoters : 0}</h1>
            <p className='text-sm whitespace-nowrap'>Registered Voters</p>
          </div>
          <div className='ml-10 mb-10'>
            <img className='w-24 h-24' src='registervoter.svg' alt='register' />
          </div>
          <hr className='h-30 w-28 transform rotate-90 bg-[#E6EDFF]' />
        </div>
      </Card>


      <div className='w-[300px] h-auto my-[20px]'>
        { Object.keys(partyStats).length > 0 && partyStats.labels && partyStats.datasets.length > 0 && <Doughnut data={partyStats} config={{type: 'doughnut'}} />}
      </div>

      { Object.keys(positions).length > 0  && positionsArray.map((position, key) => {
        const toRender = positions[`${position}`]
        if(toRender.length > 0){
          const totalVotes = toRender.reduce((acc, current) => { return acc + current.numberOfVotes }, 0)
          const data = toRender.map((candidate, i) => ({
            number: i+1,
            name: candidate.name,
            party: candidate.party,
            votePercentage: (candidate.numberOfVotes / totalVotes) * 100,
            totalVotes: candidate.numberOfVotes,
            position: position,
            isWinning: ((candidate.numberOfVotes / totalVotes) * 100) >= 50
          }))

          return (
            <LeaderboardTable data={data} showTitle={key === 0 ? true : false} position={position} key={key} />
          )
        }
      })}
    </>
  )
}
export default DashboardPage
