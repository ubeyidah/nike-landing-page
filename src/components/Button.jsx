const Button = (props) => {
  return (
    <button className="flex items-center gap-3 py-2 px-5 rounded-full bg-coral-red text-white cursor-pointer hover:opacity-80 active:opacity-100 font-montserrat text-sm transition-opacity duration-200">
      {props.label}{" "}
      <img src={props.iconURL || ""} width={20} height={20} alt="arrow" />
    </button>
  );
};

export default Button;
