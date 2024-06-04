'use client';
import React from "react";

import { useBalance } from "@repo/store/useBalance"

type Props = {

}

const Balance: React.FC<Props> = () => {
    const balance = useBalance();
    return (
        <div>
            Your Balance is: {balance}
        </div>
    )
}

export default Balance
