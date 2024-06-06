import React from "react";
import SidebarItem from "./sidebar-item";
import { HomeIcon } from "@repo/ui/icons/home-icon";
import { IconsTransferIcon } from "@repo/ui/icons/transfer-icon";
import { IconsTransactionsIcon } from "@repo/ui/icons/transactions-icon";

const Sidebar: React.FC = () => {
  return (
    <div className="w-72 border-r border-r-slate-300 min-h-screen max-h-screen mr-4 pt-12">
      <div>
        <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
        <SidebarItem href={"/transfer"} icon={<IconsTransferIcon />} title="Transfer" />
        <SidebarItem href={"/transactions"} icon={<IconsTransactionsIcon />} title="Transactions" />
      </div>
    </div>
  )
}

export default Sidebar
