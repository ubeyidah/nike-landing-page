import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-center items-center  gap-10 flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl font-semibold leading-[68px]  font-palanquin md:text-nowrap">
        Sign up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex flex-1 border border-slate-gray rounded-full p-1 pl-3 w-full  max-w-lg">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input flex-1 border-none"
        />
        <Button label="Subscribe " />
      </div>
    </section>
  );
};

export default Subscribe;
