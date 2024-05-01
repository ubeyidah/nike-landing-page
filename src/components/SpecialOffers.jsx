import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={673}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exeptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" outlined={true} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
