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

const ApprovedTable:FC<{data:CampaignCardProps[]}> = ({data}) => {
    console.log("table data to be displayed",data);
  return (
    <Table>
      <TableCaption>{data.length!==0?'list of all the FundRaise Approved':'Nothing to display here'}</TableCaption>
      {data.length!==0&&(
        <>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data:CampaignCardProps,index:any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{data.title}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.amount}</TableCell>
                  <TableCell className="text-right">Approved</TableCell>
                </TableRow>            
              ))}
            </TableBody>
        </>)}
    </Table>)
}

export default ApprovedTable;