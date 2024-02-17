import React from 'react'
import { Container } from '@/containers/Containers'
import { Button } from '@/components/ui/button'
import { DonationDialog } from '@/components/donate/DonationDialog';
import Campaigns from '@/components/donate/Campaigns';

const page = () => {
  return (
    <>
    <Container className='  flex items-center justify-between '>
    <div className=' mt-10 mb-5'>
      <h2 className="text-2xl font-bold tracking-tight ">Donate</h2>
      <p className="text-muted-foreground">
        Please show your support by donating to our cause. <br />
        Your donations will help us in achieving our goals.
      </p>
    </div>
    <DonationDialog/>
    </Container>
    <Container className=' my-10'>
    <Campaigns />
    </Container>
    </>
  )
}

export default page