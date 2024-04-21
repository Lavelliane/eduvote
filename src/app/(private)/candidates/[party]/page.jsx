'use client'
import { useEffect, useMemo } from 'react'
import { getPartyById } from '@/lib/queries/party/getPartyById'
import { Card } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { Spin } from '../../../../../node_modules/antd/es/index'
import PartyData from '@/components/PartyData'
import { getCandidates } from '@/lib/queries/candidate/getCandidates'
import CandidateData from '@/components/CandidateData'

//KITAKITS SA APRIL 27


// ================ I LOVE YOU ======================
export default function PartyPage({ params }) {
  const partyId = useMemo(() => {
    return params.party
  }, [params])

  //Use useQuery to get data about the party. Use partyId and getPartyById function
  const { data: party, isLoading } = useQuery({
    queryKey: ['party', partyId],
    queryFn: () => getPartyById(partyId)
  })

  useEffect(() => {
    console.log(party)
  }, [isLoading])

 
  //Once party is present, render the component
  //Tip: Use conditional rendering (party ? (<Component for party>) : (<Loading component>)) OR (party && <Component for party>)
  return (
    <>
      <Spin spinning={isLoading}>
        {!isLoading && party && (
          <>
           
            <PartyData title={party.name} vision={party.vision} mission={party.mission} goals={party.goals}  />
            {party.candidates.map(candidates => (
    <CandidateData key={candidates.id} name={candidates.name} position={candidates.position} img_url={candidates.img_url} />
))}
          </>
        )}
      </Spin>
    </>
  )
}
