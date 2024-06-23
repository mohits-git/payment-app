"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { p2pTransfer } from "../../lib/actions/p2pTransfer";

export function SendMoneyCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const sendMoney = async () => {
    try {
      setMessage("");
      await p2pTransfer(number, Number(amount) * 100);
      setNumber("");
      setAmount("");
      setMessage("Money Sent Successfully")
    }
    catch (error) {
      //@ts-ignore
      setMessage(error.message);
    }
  }

  return (
    <Center>
      <Card title="Send">
        <div className="min-w-72 pt-2">
          <TextInput placeholder={"Number"} label="Number" value={number} onChange={(value) => {
            setNumber(value)
          }} />
          <TextInput placeholder={"Amount"} label="Amount" value={amount} onChange={(value) => {
            setAmount(value)
          }} />
          <div className="pt-4 flex flex-col items-center justify-center">
            <Button onClick={() => {
              sendMoney();
            }}>Send</Button>
            <div className="text-xs">{message}</div>
          </div>
        </div>
      </Card>
    </Center>
  )
}
