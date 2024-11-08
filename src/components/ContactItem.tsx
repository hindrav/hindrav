import React from "react";
import { IconType } from "react-icons"
import { BsArrowUpRightCircleFill } from "react-icons/bs";


export interface ContactItemProps {
    icon: IconType;
    title: string;
    text: string;
    url: string;
}

export const ContactItem = ({ icon, title, text, url }: ContactItemProps) => {
    return (
        <div className="flex justify-between gap-3 items-center w-[300px] lg:w-[500px] h-[120px] bg-dark-300 bg-opacity-50 p-4 rounded-2xl border-[1px] border-solid border-primary">
            <div className="w-full flex items-center gap-5">
                <div className="p-3 border-[2px] border-solid border-gray-500 flex items-center justify-center rounded-2xl">
                    <span className="grid place-items-center text-[30px] text-white">{icon && React.createElement(icon)}</span>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="text-white text-sm lg:text-base xl:Text-lg text-left font-bold">{title}</p>
                    <p className="text-white text-sm lg:text-base xl:Text-lg text-left">{text}</p>
                </div>
            </div>
            <div className="p-3 bg-[#0e0e0e] rounded-full">
                <a href={url} className="grid place-items-center text-white text-[30px]"><BsArrowUpRightCircleFill className="hover:text-primary" /></a>
            </div>
        </div>
    )
}