const Button = (props) => {
  return (
    <button
      className={`flex items-center gap-3 py-3 px-6 rounded-full cursor-pointer hover:opacity-80 active:opacity-100 font-montserrat text-sm transition-opacity duration-200 ${
        props.outlined
          ? "border-slate-gray border-[1px] text-black"
          : " bg-coral-red text-white"
      }`}
    >
      {props.label}{" "}
      {props.iconURL && (
        <img src={props.iconURL} width={20} height={20} alt="arrow" />
      )}
    </button>
  );
};

export default Button;
