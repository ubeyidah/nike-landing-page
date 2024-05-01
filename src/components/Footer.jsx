import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="capitalize text-base leading-2  mt-3 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div
                  key={icon.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 justify-between xl:gap-20 gap-10 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white-400 font-montserrat hover:underline"
                    >
                      <a href="#">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
          &copy; <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
