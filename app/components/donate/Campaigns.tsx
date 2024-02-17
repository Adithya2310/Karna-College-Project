"use client"
import * as React from "react"
import { CampaignCard } from "./campiagns/CampaignCard"
import { useFundRaiseContext } from "@/lib/context/FundraiseContext"

const Campaigns = () => {
  const {fundRaiseDetails}=useFundRaiseContext();
  return (
    <>
    <div className=" my-8">
      <h2 className="text-2xl font-bold tracking-tight ">Campaigns</h2>
      <p className="text-muted-foreground">
        Support a FundRaise today by donating 
      </p>
    </div>
    {
      fundRaiseDetails.map((fund, index)=>{
        return <CampaignCard
          key={index}
          {...fund}/>
      })
    }
    </>

  )
}

export default Campaigns