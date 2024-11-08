import React from "react"
import { IconType } from "react-icons";

export const TechCard = (icon: IconType) => {
    return (
        <div className="cursor-pointer flex items-center justify-center h-[40px] w-[40px] p-7 bg-gray-900 rounded-xl border-[1px] border-solid border-gray-400 hover:border-primary hover:-translate-y-2 ease-in-out duration-100">
            <span className="text-primary text-[40px]">{icon && React.createElement(icon)}</span>
        </div>
    )
}