"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
  const session = await getServerSession(authOptions);
  // @ts-ignore // id exist by typescript doesn't gets it :(
  const from = session?.user?.id;
  const fromUser = await prisma.user.findUnique({
    where: { id: Number(from) }
  });
  if (!fromUser) {
    return {
      message: "Error while sending"
    }
  }

  const toUser = await prisma.user.findFirst({
    where: {
      number: to
    }
  });

  if (!toUser) {
    return {
      message: "User not found"
    }
  }

  await prisma.$transaction(async (tx) => {
    const fromBalance = await tx.balance.findUnique({
      where: { userId: Number(from) },
    });
    if (!fromBalance) {
      throw new Error("Balance Not found");
    }
    if (fromBalance.amount < amount) {
      throw new Error('Insufficient funds');
    }

    await tx.balance.update({
      where: { userId: fromUser.id },
      data: { amount: { decrement: amount } },
    });

    await tx.balance.update({
      where: { userId: toUser.id },
      data: { amount: { increment: amount } },
    });

    await tx.p2pTransfer.create({
      data: {
        amount,
        timestamp: new Date(),
        fromUser: {
          connect: {
            ...fromUser,
            email: fromUser.email || undefined
          }
        },
        toUser: {
          connect: {
            ...toUser,
            email: toUser.email || undefined,
          }
        }
      }
    });
  });
}
