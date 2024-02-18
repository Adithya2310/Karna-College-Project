"use client"
import { useSigner } from "wagmi";

export function GetTransactionProvider()
{
    const {data: signer} = useSigner();
    return {
        provider: signer?.provider
    }
}