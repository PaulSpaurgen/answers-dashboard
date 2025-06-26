import { assets } from '../../utills/assets'

export default function Nav() {
    return (
        <nav className="flex flex-col justify-between items-center px-[24px] py-[32px] h-screen w-fit">

            <div className="flex flex-col gap-[40px] items-center ">
                <img src={assets.menu} alt="menu" className="w-[24px] h-[24px]" />
                <div className="relative p-[8px] border-[0.5px] border-black-200 rounded-[10px] mt-[-8px] bg-black-300">
                    <img src={assets.home} alt="home" className="w-[24px] h-[24px] " />
                </div>
                <img src={assets.notification} alt="notification" className="w-[24px] h-[24px] " />
                <img src={assets.calendar} alt="calendar" className="w-[24px] h-[24px] " />
                <img src={assets.settings} alt="settings" className="w-[24px] h-[24px] " />
                <img src={assets.upload} alt="upload" className="w-[24px] h-[24px] " />
            </div>

            
            <img src={assets.profile} alt="profile" className="w-[24px] h-[24px] " />


            
        </nav>
    )
}