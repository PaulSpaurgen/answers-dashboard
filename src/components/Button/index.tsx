import commonClasses from "../../utills/commonClasses";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large" | "iconOnly"
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export default function Button({
  variant,
  size,
  disabled,
  loading,
  icon,
  onClick,
  className,
  children
}: ButtonProps) {
    const buttonClass = `${commonClasses.buttonVariantClasses[variant]} ${commonClasses.buttonSizes[size]} ${className} flex items-center gap-[10px] justify-center cursor-pointer`;
    


  return <button className={buttonClass} onClick={onClick} disabled={disabled}>
    {icon && <span>{icon}</span>}
    {children && <span>{children}</span>}
  </button>;
}