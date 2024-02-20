"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useFundRaiseContext } from "@/lib/context/FundraiseContext"
import { GetTransactionProvider } from "@/helpers/wallet/GetTransactionProvider"

export function CampaignDonations({title,address,id}:{title:string,address:string,id:number}) {
    const {donateToCampaign}=useFundRaiseContext();
    const [amount, setAmount]=useState<number>(0);
    const signer=GetTransactionProvider();
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setAmount(Number(e.target.value));
    }
    const handleSubmit=()=>{
        donateToCampaign(signer,amount,address,id);
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'primary'}>Donate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            The Funds will be transferred to the Fundraisers account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="message" type="number" placeholder="Enter Your Donation Amount" className="col-span-3"  onChange={handleChange}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea id="message" placeholder="Enter If you want to say anything" className="col-span-3" />
          </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} variant={"primary"}>Send Funds</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
