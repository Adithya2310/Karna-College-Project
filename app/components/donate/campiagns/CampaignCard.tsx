import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "../../ui/button"
import { CampaignDonations } from "./CampaignDialog"
import { CampaignCardProps } from "@/lib/types"
import { FC } from "react"

export const CampaignCard:FC<CampaignCardProps>=({title,description,name,email,donatedAmount,amount,deployedContractAddress,proposalId})=>{
    return (
        <Card className=" w-96">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className=" word">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex justify-between">
              <div className=" mb-3">
                <h3 className=" text-sm text-muted-foreground">Created By</h3>
                <p>{name}</p>
              </div>
              <div>
                <h3 className=" text-sm text-muted-foreground">Email</h3>
                <p>{email}</p>
              </div>
            </div>
            <div>
            <h3 className=" text-sm text-muted-foreground mb-1">Donation Status</h3>
            <Progress className=" w-full" value={donatedAmount/amount} />
            <div className=" w-full flex justify-end">
              <p className=" mt-1">{donatedAmount} BNB/{amount} BNB</p>
            </div>
            </div>
          </CardContent>
          <CardFooter className=" w-full flex justify-end">
            <CampaignDonations
              id={proposalId}
              address={deployedContractAddress}
              title={title}
              />
          </CardFooter>
        </Card>
    )
  }