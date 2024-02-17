import Image from "next/image";
import { MdPriceCheck, MdOutlinePercent, MdOutlineLineAxis } from "react-icons/md";
import { RiP2PFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-shadcn-black text-shadcn-white py-8 mt-5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5 text-uiprimary">KARNA</h2>
          <h1 className="text-4xl text-black font-extrabold mb-8">Decentralised crowdfunding platform with <br />DAO based verification.</h1>
          <div className="flex gap-2 text-lg justify-center mt-10 mb-7 bg-gray text-[#666362]">
            <div>
              <span className="text-shadcn-white flex justify-center items-center">
                <MdPriceCheck size={24} />
                <span>Price Discovery </span> |
              </span>
            </div>
            <div>
              <span className="text-shadcn-white flex justify-center items-center">
                <RiP2PFill /> Peer to Peer |
              </span>
            </div>
            <div>
              <span className="text-shadcn-white flex items-center justify-center">
                {" "}
                <MdOutlinePercent /> Zero Commission |
              </span>
            </div>
            <div>
              <span className="text-shadcn-white  flex  items-center justify-center">
                <MdOutlinePercent/> No Human Interaction
              </span>
            </div>
          </div>
          <Button variant={"primary"} className=" text-white font-semibold">Donate Now</Button>
        </div>
      </div>
    </main>
  );
}
