
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area"

export function CreateDialog() {
  const {storeInitialFundDetails}=useFundRaiseContext();
  const signer=GetTransactionProvider();

  const [form, setForm]= useState<AddFundRaiseProps>({
    title:'',
    name:'',
    email:'',
    type: 'Campaign',
    amount: 0,
    description: '',
    driveLink:'',
    endDate: undefined
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

  const handleDateChange=(date:Date|undefined)=>{
    if(date)
    {
      setForm({
        ...form,
        endDate:date
      });      
    }
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
        <ScrollArea className="h-[30rem]">
        <DialogHeader>
          <DialogTitle>Start a Fundraise</DialogTitle>
          <DialogDescription>
            All the Campaigns and Requests need to be approved from the DAO before they are live
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ml-1 my-2">
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
        <RadioGroup defaultValue={form.type} className=" w-full flex gap-12 my-3" onValueChange={handleRadioChange}>
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
        {form.type==="Campaign" && (
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="endDate" className=" py-1">EndDate</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !form.endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {form.endDate ? format(form.endDate, "PPP") : <span>Pick your end date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={form.endDate}
                        onSelect={handleDateChange}
                        disabled={(date) =>
                          date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
        )
        }
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="amount">Amount</Label>
          <Input type="number" id="amount" placeholder="Enter In BNB" name="amount" value={form.amount} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Please enter your story here" name="description" value={form.description} onChange={handleChange}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="driveLink">Drive Link</Label>
          <Input id="driveLink" placeholder="Please enter the drive link of all the documents" name="driveLink" value={form.driveLink} onChange={handleChange}/>
        </div>
        <DialogFooter className="flex justify-end w-full">
          <DialogClose className=" w-fit" asChild>
            <Button type="submit" variant="primary">
              Send Request 
            </Button>
          </DialogClose>
        </DialogFooter>
        </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
