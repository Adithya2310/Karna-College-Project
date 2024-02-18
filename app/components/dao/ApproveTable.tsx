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
import { FC } from "react";
import { CampaignCardProps } from "@/lib/types";
import { Button } from "../ui/button";

const ApproveTable:FC<{data:CampaignCardProps[]}> = ({data}) => {
  console.log("table data to be displayed",data);
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
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data:CampaignCardProps,index:any) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.title}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell className="text-right"><Button>Approve</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>)}
    </Table>  )
}

export default ApproveTable;