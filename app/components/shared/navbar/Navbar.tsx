"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useProvider } from "wagmi";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useConnectModal, useAccountModal, useChainModal } from "@rainbow-me/rainbowkit";
import { NavContainer } from "@/containers/Containers";
import Image from "next/image";
// import { loadPropertyListing, setInitialPropertyListingsLoaded } from "@/store/slices/homeSlice";
import { Check, ChevronDown } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
// import { GetTransactionProvider } from "@/helpers/wallet/GetTransactionProvider";
// import { addListing } from "@/actions/addListing";
import { ethers } from "ethers";
import { usePathname } from "next/navigation";
import { CreateDialog } from "./ui/Dialog";

export const Navbar = () => {
    const { openConnectModal } = useConnectModal();
    const { address, isConnected } = useAccount();
    const pathname=usePathname();
    const [selected,setSelected]=useState(()=>{
        if(pathname==="/"){
          return "home"
        }
        if(pathname.includes("/donate")){
          return "donate"
        }
        if(pathname.includes("/contact")){
          return "contact"
        }
        if(pathname.includes("/about")){
          return "about"
        }
    });
    return (
    <NavContainer className=" max-w-10xl mx-auto ">
        <div className="flex gap-16 items-center">
          <h1 className="font-bold text-2xl text-uiprimary">Karna</h1>
          <ul className=" flex gap-8 tracking-wider">
            <Link href={"/"}>
            <li className={` hover:text-uiprimary text-base ${selected==="home"&&"text-uiprimary"}`} onClick={()=>setSelected("home")}>Home</li>
            </Link>
            <Link href={"/donate"}>
            <li className={` hover:text-uiprimary text-base ${selected==="donate"&&"text-uiprimary"}`} onClick={()=>setSelected("donate")}>Donate</li>
            </Link>
            <Link href={"/contact"}>
            <li className={` hover:text-uiprimary text-base ${selected==="contact"&&"text-uiprimary"}`} onClick={()=>setSelected("contact")}>Contact Us</li>
            </Link>
            <Link href={"/about"}>
            <li className={` hover:text-uiprimary text-base ${selected==="about"&&"text-uiprimary"}`} onClick={()=>setSelected("about")}>
              About
            </li>
            </Link>
        </ul>
        </div>
        <div className="flex gap-5 my-auto h-full">
          {isConnected ? (<CreateDialog/>):<Button
          className="py-4 px-4 rounded-[5px] text-white font-bold  text-base transition-opacity duration-300"
          onClick={openConnectModal}
          variant={"primary"}
        >
          Start a Fundraise
        </Button>}
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
        </NavContainer>

    );
  };