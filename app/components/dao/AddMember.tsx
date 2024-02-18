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
import { use, useState } from "react"
import { useDaoContext } from "@/lib/context/DaoContext"

const AddMember = () => {
  const {addMembers}=useDaoContext();
    const [address,setAddress]=useState<string>("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setAddress(e.target.value);
    }
    const handleSubmit=()=>{
        console.log("add member to the dao",address);
        addMembers(address);
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Add Member</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Member</DialogTitle>
        <DialogDescription>
          You can Add a member to the DAO by entering thier wallet address
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="account" className="text-right">
            Wallet Address
          </Label>
          <Input id="Account" value={address} className="col-span-3" />
        </div>
      </div>
      <DialogFooter className=" w-full flex justify-end">
        <Button type="submit" onClick={handleSubmit}>Add Member</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default AddMember