import { PrismaClient } from "@repo/db/client";
import React from "react";
import Balance from "./_components/balance";

type Props = {

}

const db = new PrismaClient();


const Page: React.FC<Props> = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Payment App</h1>
            <h2 className="text-xl font-semibold">user-app</h2>
            <Balance />
        </div>
    )
}

export default Page
