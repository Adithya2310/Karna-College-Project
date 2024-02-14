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

export const Navbar = () => {
    const { openConnectModal } = useConnectModal();
    const { address, isConnected } = useAccount();
  
    return (
    <NavContainer>
        <div className=" font-bold text-2xl">Karna</div>
        <div className="flex gap-5 my-auto h-full">
          {isConnected && (
            <div className=" text-black"> already connected</div>
          )}
          {!isConnected && (
            <Button
              className="py-4 px-4 rounded-[5px] text-white transition-opacity duration-300"
              onClick={openConnectModal}
            >
              Post for rent
            </Button>
          )}
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
        </NavContainer>

    );
  };