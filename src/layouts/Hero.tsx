import { FaDownload, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export const Hero = () => {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-screen bg-gradient-to-r from-startColor to-endColor">
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <div className="w-full flex flex-col justify-center items-center gap-1">
                    <p className="font-mulish font-black text-white text-[25px] lg:text-[35px] xl:text-[40px] text-center">Hi, i'm Hindra Estrada</p>
                    <h1 className="font-courier text-primary text-[15px] lg:text-[25px] xl:text-[28px] break-words text-center">{"{"} Software Developer Engineer {"}"}</h1>
                    <p className="font-courier text-primary text-[14px] lg:text-[17px] xl:text-[20px] break-words text-center">{"<"} Frontend Developer SR {"/>"}</p>
                </div>
                <div className="flex justify-center gap-7 w-full mt-3 lg:mt-5">
                    <a href="https://wa.link/qwajkq" className="cursor-pointer text-xl lg:text-[30px] xl:text-[35px]"><FaWhatsapp className="text-white hover:text-primary"/></a>
                    <a href="https://linkedin.com/in/hindrav" className="cursor-pointer text-xl lg:text-[30px] xl:text-[35px]"><FaLinkedinIn className="text-white hover:text-primary"/></a>
                    <a href="https://instagram.com/hindrav_" className="cursor-pointer text-xl lg:text-[30px] xl:text-[35px]"><FaInstagram className="text-white hover:text-primary"/></a>
                </div>
                <div className="mt-7">
                    <a href="https://drive.google.com/file/d/1ydo_xsxrjSNnUw7RQ1mqIKcUCV6yzVW3/view?usp=sharing" className="cursor-pointer flex items-center justify-center gap-2 w-[170px] lg:w-[214px] h-[40px] text-sm lg:text-base xl:text-lg font-mulish font-bold bg-primary hover:bg-secondary py-2 px-3 rounded-lg">Download cv <FaDownload /></a>
                </div>
            </div>
        </div>
    )
}