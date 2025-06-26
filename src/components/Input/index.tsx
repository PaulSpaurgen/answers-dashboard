interface InputProps {
    placeholder: string;
    icon?: React.ReactNode;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string | "text" | "number" | "email" | "password" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week";
    className?: string;
}

const inputBoxClasses = "flex items-center gap-[8px] rounded-[5px] border-[1px] border-black-400 bg-black-100 text-white px-[10px] py-[6px] lg:px-[12px] lg:py-[8px] ";
const inputClasses = "w-full text-[12px] lg:text-[16px] placeholder:text-white-100 bg-transparent border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none w-full";

export default function Input({ placeholder, value, onChange, type , className, icon, name, ...rest }: InputProps) {
   return (
    <div className={`${inputBoxClasses} ${className}`}>
        {icon}
        <input name={name} type={type} placeholder={placeholder} className={inputClasses}  {...rest} />
    </div>
   )
}

