import { GrCertificate } from "react-icons/gr";
import { techStackItems } from "../utils/constants";
import { Tooltip } from "@mui/material";
import { TechCard } from "../components/TechCard";


export const About = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-startColor to-endColor px-5 py-14 lg:py-20 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full h-full px-4 lg:px-7">
                <div className="flex flex-col gap-5 w-full lg:w-2/5">
                    <div className="flex flex-col gap-3 w-full">
                        <h2 className="font-mulish font-bold text-[20px] lg:text-[30px] text-white">About me</h2>
                        <p className="text-sm lg:text-base font-courier fonr-normal text-white">
                            Experienced with 7 years in <strong className="text-primary">full-stack development</strong> and <strong className="text-primary">project leadership</strong> across <strong className="text-primary">web and mobile</strong> platforms. Skilled at driving projects from concept through completion, with a focus on delivering <strong className="text-primary">high-impact solutions</strong>.
                        </p>
                        <p className="text-sm lg:text-base font-courier fonr-normal text-white">
                            CEO @<a href="https://tigemsha.com" className="text-primary underline">Tigemsha</a>
                        </p>
                        <p className="text-sm lg:text-base font-courier fonr-normal text-white">
                            Current role - Frontend Developer SR at @<a href="https://www.linkedin.com/company/tiendas3b/mycompany/" className="text-primary underline">Tiendas 3B</a>
                        </p>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <p className="flex gap-3 text-sm lg:text-base font-courier font-normal text-white">
                            <GrCertificate className="!text-[25px] text-primary" /> Computer Systems Engineering - IPN
                        </p>
                        <p className="flex gap-3 text-sm lg:text-base font-courier font-normal text-white">
                            <GrCertificate className="!text-[25px] text-primary" /> Project Professionalization - Tecnológico de Monterrey
                        </p>
                        <p className="flex gap-3 text-sm lg:text-base font-courier font-normal text-white">
                            <GrCertificate className="!text-[25px] text-primary" /> CCNA1 - CISCO
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <div className="w-full flex flex-wrap gap-6 justify-center">
                        {techStackItems.map(({ icon, name }) => (
                            <div key={name} className="text-center">
                                <Tooltip title={name}>
                                    {TechCard(icon)}
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}