import React, { ReactNode } from "react";
import Sidebar from "../_components/sidebar";

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
      <div className="flex">
        <Sidebar />
        <div>
        {children}
        </div>
      </div>
    )
}

export default Layout
