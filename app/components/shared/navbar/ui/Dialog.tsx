
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { AddFundRaiseProps } from "@/lib/types";
import { useFundRaiseContext } from "@/lib/context/FundraiseContext";
import { GetTransactionProvider } from "@/helpers/wallet/GetTransactionProvider";

export function CreateDialog() {
  const {storeInitialFundDetails}=useFundRaiseContext();
  const signer=GetTransactionProvider();
  const [form, setForm]= useState<AddFundRaiseProps>({
    title:'',
    name:'',
    email:'',
    type: 'Campaign',
    amount: 0,
    description: ''
  });

  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  const handleRadioChange=(type:string)=>{
    setForm({
      ...form,
      type:type
    });
  }

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log("Form Submitted",form);
    storeInitialFundDetails(signer,form);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
          className="py-4 px-4 rounded-[5px] text-white font-bold  text-base transition-opacity duration-300"
          variant={"primary"}
        >
          Start a Fundraise
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start a Fundraise</DialogTitle>
          <DialogDescription>
            All the Campaigns and Requests need to be approved from the DAO before they are live
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Enter Title For Your Fundraise" name="title" value={form.title} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter Your Email" name="email" value={form.email} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Enter Your Name" name="name" value={form.name} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
        <Label htmlFor="radio">Select the type of Fundraise</Label>
        <RadioGroup defaultValue="campaign" className=" w-full flex gap-12 my-3" onValueChange={handleRadioChange}>
          <div className="flex items-center space-x-2 w-fit" >
            <RadioGroupItem value="Campaign" id="campaign" />
            <Label htmlFor="campaign">Campaign</Label>
          </div>
          <div className="flex items-center space-x-2 w-fit">
            <RadioGroupItem value="Request" id="request" />
            <Label htmlFor="request">Request</Label>
          </div>
        </RadioGroup>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="amount">Amount</Label>
          <Input type="number" id="amount" placeholder="Enter In BNB" name="amount" value={form.amount} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Please enter your story here" name="description" value={form.description} onChange={handleChange}/>
        </div>
        <DialogFooter className="flex justify-end w-full">
          <DialogClose className=" w-fit" asChild>
            <Button type="submit" variant="primary">
              Send Request 
            </Button>
          </DialogClose>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
