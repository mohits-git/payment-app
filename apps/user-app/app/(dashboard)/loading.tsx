import React from "react";
import LoadingSpinner from "../_components/global/loading-spinner";

type Props = {

}

const Loading: React.FC<Props> = () => {
    return (
    <div className="h-full w-[calc(100vw-288px)] flex justify-center items-center">
      <LoadingSpinner />
    </div>
    )
}

export default Loading
