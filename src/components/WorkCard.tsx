export interface workCardProps {
    title: string;
    desc: string;
    img: string;
    altImg: string;
    url: string;
}

export const WorkCard = ({ title, desc, img, altImg, url }: workCardProps) => {
    return (
        <div className="flex flex-col justify-between items-start gap-5 w-[310px] lg:w-[500px] h-full lg:h-[310px] rounded-2xl py-5 px-10">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row-reverse items-center justify-between gap-2">
                    <figure className="object-cover">
                        <img className="w-[130px] h-[40px] object-cover object-left" src={img} alt={altImg} />
                    </figure>
                    <p className="font-mulish font-bold text-[20px] lg:text-[25px] text-white text-left">{title}</p>
                </div>
                <p className="font-courier font-normal text-[16px] text-gray-400 text-left">{desc}</p>
            </div>
            <div className="flex flex-col items-end justify-center w-full gap-2">
                <div className="flex flex-col items-center justify-end w-full h-full gap-1 px-2">
                    <a className="cursor-pointer flex items-center justify-center gap-2 w-full h-[40px] text-sm lg:text-base font-mulish font-bold bg-transparent border-2 border-solid border-primary hover:border-secondary py-2 px-3 rounded-lg text-primary hover:text-secondary" href={url}>Visit now</a>
                    <span className="text-[16px] text-gray-500 text-left text-center">{altImg}</span>
                </div>
            </div>
        </div>
    )
}