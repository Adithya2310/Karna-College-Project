import Image from "next/image";
import { MdPriceCheck, MdOutlinePercent, MdOutlineLineAxis, MdShield } from "react-icons/md";
import { RiP2PFill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsFillTriangleFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-shadcn-black text-shadcn-white py-8 mt-5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5 text-uiprimary">KARNA</h2>
          <h1 className="text-4xl text-black font-extrabold mb-8">Decentralised crowdfunding platform with <br />DAO based verification.</h1>
          <div className="flex gap-2 text-lg justify-center mt-10 mb-7 bg-gray text-[#666362]">
            <div className=" flex items-center gap-2">
              <span className="text-shadcn-white flex justify-center items-center">
                <FaPeopleRoof size={24} /> <span>DAO Mechanism</span> |
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <span className="text-shadcn-white flex justify-center items-center">
                <AiFillLike size={24}/> Social Network |
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <span className="text-shadcn-white flex items-center justify-center">
                {" "}
                <BiSolidDonateHeart size={24} /> Direct Donation |
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <span className="text-shadcn-white  flex  items-center justify-center">
                <MdShield size={24} /> No Human Intervention
              </span>
            </div>
          </div>
          <Button variant={"primary"} className=" text-white font-semibold">Donate Now</Button>
        </div>
      </div>
    </main>
  );
}
