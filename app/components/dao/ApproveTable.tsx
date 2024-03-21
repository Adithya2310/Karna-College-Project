import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FC, use } from "react";
import { CampaignCardProps } from "@/lib/types";
import { Button } from "../ui/button";
import { useDaoContext } from "@/lib/context/DaoContext";
import { GetTransactionProvider } from "@/helpers/wallet/GetTransactionProvider";
import Link from "next/link";

const ApproveTable:FC<{data:CampaignCardProps[]}> = ({data}) => {
  const {approveCampiagn}=useDaoContext();
  const signer=GetTransactionProvider();
  console.log("table data to be displayed",data);
  const handleClick=(id:number)=>{
    approveCampiagn(signer,id);
  }
  return (
    <Table>
      <TableCaption>{data.length!==0?`list of all the ${data[0].type} yet to be approved`:'Nothing to display here'}</TableCaption>
      {data.length!==0&&(
        <>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>DocumentLink</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data:CampaignCardProps,index:any) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.title}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell><Link href={data.driveLink}><Button variant={"primary"}>Open</Button></Link></TableCell>
                <TableCell className="text-right"><Button onClick={()=>handleClick(data.proposalId)}>Approve</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>)}
    </Table>  )
}

export default ApproveTable;