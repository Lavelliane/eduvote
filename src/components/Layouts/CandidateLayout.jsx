'use client'

import Candidate from '../Candidate'
import { useQuery } from '@tanstack/react-query'
import { getCandidates } from '@/lib/queries/candidate/getCandidates'
import { Spin } from 'antd'
import { useEffect } from 'react'

function CandidateLayout() {
    const { data: candidates, isLoading } = useQuery({
      queryFn: getCandidates,
      queryKey: ['candidates']
    })



    useEffect(() => {
        console.log(candidates)
    },[candidates])

  return (
    <div>
      {/*<Candidate name='Atup' candidates={dummyCandidates} />*/}
      {/*<Candidate name='Dibdib' candidates={dummyCandidates2} />*/}
      <Spin spinning={isLoading}>
        {!isLoading && candidates && candidates.map((party, i) => (
            <>
              <Candidate name={party.name} candidates={party.candidates} key={i} partyId={party.id} />
            </>
        ))}
      </Spin>
    </div>
  )
}
export default CandidateLayout
