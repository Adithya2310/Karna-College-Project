
export type AddFundRaiseProps={
    title: string;
    name:string;
    email:string;
    type: string;
    amount: number;
    description: string;
    driveLink: string;
    endDate: Date|undefined;
}

export type FundRaiseProps=AddFundRaiseProps&{
        proposalId:number
}

export type CampaignCardProps={
    proposalId: number;
    title: string;
    name: string;
    email: string;
    type: string;
    amount: number;
    donatedAmount: number;
    description: string;
    createdAt: string;
    approved: boolean;
    deployedContractAddress: string;
    endDate: Date;
}

