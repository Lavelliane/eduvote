import Link from 'next/link'

export default function SuccessPage(){
  return (
    <>
      <p>You have successfully voted</p>
      <Link href='/dashboard'>Go Back</Link>
    </>
  )
}