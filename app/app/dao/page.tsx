"use client"
import { Container } from "@/containers/Containers"
import AddMember from "@/components/dao/AddMember"
import ApproveTable from "@/components/dao/ApproveTable"
import ApprovedTable from "@/components/dao/ApprovedTable"
import { useFundRaiseContext } from "@/lib/context/FundraiseContext"

const page = () => {
  const {fundRaiseDetails}=useFundRaiseContext();
  return (
    <>
    <Container className=" flex items-center justify-between px-5">
      <div className=' mt-10 mb-5'>
        <h2 className="text-2xl font-bold tracking-tight ">Dao Dashboard</h2>
        <p className="text-muted-foreground">
          You can manage all the dao decisions here
        </p>
      </div>
      <AddMember/>
    </Container>
    <Container>
    <div className=' mt-10 mb-5'>
        <h2 className="text-2xl font-bold tracking-tight ">Campaigns</h2>
        <p className="text-muted-foreground">
          you can approve all the campaigns here
        </p>
      </div>
      <ApproveTable
        data={fundRaiseDetails.filter((data)=>data.type==="Campaign"&&data.approved===false)}/>
    </Container>
    <Container>
    <div className=' mt-10 mb-5'>
        <h2 className="text-2xl font-bold tracking-tight ">Campaigns</h2>
        <p className="text-muted-foreground">
          you can approve all the campaigns here
        </p>
      </div>
      <ApproveTable
        data={fundRaiseDetails.filter((data)=>data.type==="Request"&&data.approved===false)}
        />
    </Container>
    <Container>
    <div className=' mt-10 mb-5'>
        <h2 className="text-2xl font-bold tracking-tight ">Campaigns</h2>
        <p className="text-muted-foreground">
          you can approve all the campaigns here
        </p>
      </div>
      <ApprovedTable
        data={fundRaiseDetails.filter((data)=>data.type==="Request"&&data.approved)}
        />
    </Container>
    </>
  )
}

export default page