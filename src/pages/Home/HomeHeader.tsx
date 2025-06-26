  import Input from "../../components/Input";
  import { assets } from "../../utills/assets";
  import commonClasses from "../../utills/commonClasses";

export default function HomeHeader() {
  return (
    <div className="flex px-[24px] py-[20px] justify-between items-center w-full flex-wrap gap-[10px]">
      <div className="flex gap-[20px] items-center ">
        <button className={`${commonClasses.buttonVariantClasses.primary} ${commonClasses.buttonSizes.medium}`}>
          Charging Stations
        </button>

        <button className="lg:text-[16px] text-[12px] font-normal text-white">
          Fleet Sizing
        </button>
        <button className="lg:text-[16px] text-[12px] font-normal text-white">Parking</button>
      </div>
      <Input
        name="search"
        placeholder="Search"
        type="text"
        value=""
        onChange={() => {}}
        icon={<img src={assets.search} alt="search" className="lg:w-[16px] lg:h-[16px] w-[12px] h-[12px] text-white-100" />}
      />
    </div>
  );
}
