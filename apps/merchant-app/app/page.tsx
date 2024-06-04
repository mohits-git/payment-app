'use client'
import { Appbar } from "@repo/ui/app-bar";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {

}

const Page: React.FC<Props> = () => {
  const session = useSession();
  return (
    <div>
      <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut} />
    </div>
  )
}

export default Page
