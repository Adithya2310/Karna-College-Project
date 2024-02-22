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
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { useFundRaiseContext } from "@/lib/context/FundraiseContext"
import { GetTransactionProvider } from "@/helpers/wallet/GetTransactionProvider"

export function DonationDialog() {
    const {donateToOrganisation}=useFundRaiseContext();
    const [amount, setAmount]=useState<number>(0);
    const signer=GetTransactionProvider();
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setAmount(Number(e.target.value));
    }
    const handleSubmit=()=>{
        donateToOrganisation(signer,amount);
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'primary'}>Donate to the organisation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate to the Organisation</DialogTitle>
          <DialogDescription>
            Donate to our organisation to help us achieve our goals of making the world a better place.
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
          <Button type="submit" onClick={handleSubmit} variant={"primary"}>Donate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
