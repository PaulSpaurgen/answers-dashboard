  import Input from "../../components/Input";
  import { assets } from "../../utills/assets";

export default function HomeHeader() {
  return (
    <div className="flex px-[24px] py-[20px] justify-between items-center w-full">
      <div className="flex gap-[20px] items-center ">
        <button className="text-[16px] font-normal text-white px-[20px] py-[7px] rounded-[4px] bg-black-300 border-[0.67px] border-black-400">
          Charging Stations
        </button>

        <button className="text-[16px] font-normal text-white">
          Fleet Sizing
        </button>
        <button className="text-[16px] font-normal text-white">Parking</button>
      </div>
      <Input
        name="search"
        placeholder="Search"
        type="text"
        value=""
        onChange={() => {}}
        icon={<img src={assets.search} alt="search" className="w-[16px] h-[16px] text-white-100" />}
      />
    </div>
  );
}
