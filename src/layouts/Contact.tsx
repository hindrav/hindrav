import { ContactItem } from "../components/ContactItem"
import { contactItems } from "../utils/constants"

export const Contact = () => {
  return (
    <div className="flex items-center justify-start w-full h-full bg-gradient-to-r from-startColor to-endColor px-5 py-14 lg:py-20 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-12 w-full h-full px-4 lg:px-7">
        <div className="flex flex-col items-center justify-center w-full|">
          <h2 className="font-mulish font-bold text-[20px] lg:text-[30px] xl:text-[35px] text-white">Contact</h2>
          <p className="font-courier font-normal text-sm lg:text-base xl:text-lg text-white">Let's work together</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-5">
          {contactItems.map(({ icon, title, text, url }) => (
            <div key={title} className="text-center">
              {ContactItem({ icon, title, text, url })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}