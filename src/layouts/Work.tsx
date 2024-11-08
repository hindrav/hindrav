import { WorkCard } from "../components/WorkCard"
import { projectItems } from "../utils/constants"

export const Work = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full bg-gradient-to-r from-startColor to-endColor py-14 lg:py-20 lg:px-20">
            <div className="flex flex-col items-center justify-center gap-12 w-full h-full px-4 lg:px-12">
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col justify-center items-center gap-3 w-full">
                        <h2 className="font-mulish font-bold text-[20px] lg:text-[30px] text-white">Some projects</h2>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-center gap-12">
                    {projectItems.map(({ title, desc, img, altImg, url }) => (
                        <div key={altImg} className="text-center">
                            {WorkCard({ title, desc, img, altImg, url })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}