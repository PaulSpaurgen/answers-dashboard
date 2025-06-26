const buttonVariantClasses = {
  primary: "bg-black-300 border-[0.67px]  border-black-400 text-white",
  secondary: "bg-[#18181A80] border-[0.67px] border-[#5A5A5AA1] text-white-100",
  tertiary: " border-[0.67px] border-green-300 text-green-400 shadow-[0px_0px_12.7px_0px_#FFFFFF33_inset]",

};
// box-shadow: 0px 0px 12.7px 0px #FFFFFF0D inset;

const buttonSizes = {
  small: "lg:px-[10px] lg:py-[5px] px-[8px] py-[6px] text-[12px] lg:text-[14px] rounded-[4px] font-normal",
  medium: "lg:px-[10px] lg:py-[7px] px-[8px] py-[6px] text-[12px] lg:text-[16px] rounded-[4px] font-medium",
  large: "lg:px-[10px] lg:py-[7px] px-[8px] py-[6px] text-[12px] lg:text-[18px] rounded-[4px] font-medium",
  iconOnly: "lg:px-[9.5px] lg:py-[10px] px-[8px] py-[8px] rounded-[4px] font-medium"
};

const boxClasses = {
  common: "bg-black-600 border-[1px] border-black-200 text-white rounded-[5px] p-[30px]",
};

export default {
  buttonVariantClasses,
  buttonSizes,
  boxClasses
};