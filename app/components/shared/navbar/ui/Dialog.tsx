
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export function CreateDialog() {
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
            You can either create a campaign or request directly from the DAO
          </DialogDescription>
        </DialogHeader>
        <form className=" flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Enter Your Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
        <Label htmlFor="radio">Select the type of Fundraise</Label>
        <RadioGroup defaultValue="campaign" className=" w-full flex gap-12 my-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Campaign" id="campaign" />
            <Label htmlFor="campaign">Campaign</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Request" id="request" />
            <Label htmlFor="request">Request</Label>
          </div>
        </RadioGroup>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="amount">Amount</Label>
          <Input type="number" id="amount" placeholder="Enter In BNB" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Please enter your story here" />
        </div>
        </form>
        <DialogFooter className="flex justify-end w-full">
          <DialogClose className=" w-fit" asChild>
            <Button type="button" variant="primary">
              Send Request 
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
