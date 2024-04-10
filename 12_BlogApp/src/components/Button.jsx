function Button({
  children, // text inside button, children is  just a fancy name for text programmers give usually
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  type = "button",
  ...props // other properties like placeholder etc can also be given.
}) {
  return (
    <button type={type} className={` px-4 py-2  rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
      {children}
    </button>
  );
}

export default Button;
