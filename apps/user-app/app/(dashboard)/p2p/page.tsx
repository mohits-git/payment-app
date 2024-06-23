import React from "react";
import { SendMoneyCard } from "../../_components/send-money-card";
import P2PTransactions from "../../_components/p2p-transactions";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";

const Page: React.FC = async () => {
  const session = await getServerSession();
  const txn = await prisma.p2pTransfer.findMany({
    where: {
      // @ts-ignore
      fromUserId: Number(session?.user?.id) || -1
    },
    include: {
      toUser: true
    }
  });
  const txnReceived = await prisma.p2pTransfer.findMany({
    where: {
      // @ts-ignore
      toUserId: Number(session?.user?.id) || -1
    },
    include: {
      fromUser: true
    }
  });


  const transactions = txn.map(t => ({
    amount: t.amount,
    timeStamp: t.timestamp,
    toUser: t.toUser.name!
  }));
  const transactionsRec = txnReceived.map(t => ({
    amount: t.amount,
    timeStamp: t.timestamp,
    fromUser: t.fromUser.name!
  }));
  return (
    <div className="w-[calc(100vw-288px)]">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        P2P Transfer
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <SendMoneyCard />
        </div>
        <div>
          <div className="pt-4">
            <P2PTransactions transactions={[...transactions, ...transactionsRec]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
