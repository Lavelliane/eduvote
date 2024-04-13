'use client'
import { useEffect, useMemo } from 'react'
import { getPartyById} from '@/lib/queries/party/getPartyById'
import { Card } from 'antd'
import { useQuery } from '@tanstack/react-query'

//KITAKITS SA APRIL 27

// ================ I LOVE YOU ======================
export default function PartyPage({ params }){

  const partyId = useMemo(() => {
    return params.party
  }, [params]);

  //Use useQuery to get data about the party. Use partyId and getPartyById function
  const { data: party, isLoading } = useQuery({
    queryKey: ['party', partyId],
    queryFn: () => getPartyById(partyId)
  })


  //Once party is present, render the component
  //Tip: Use conditional rendering (party ? (<Component for party>) : (<Loading component>)) OR (party && <Component for party>)
  return (
    <>
    <Card>
  

    </Card>
      
    </>
  )
}