import { FaRegRegistered } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-endColor py-7">
        <div className="grid place-items-center">
            <p className="flex gap-2 items-center text-gray-400 text-[14px] font-courier"><FaRegRegistered /> All rights reserved</p>
        </div>
    </footer>
  )
}