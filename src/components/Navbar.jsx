import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  return (
    <header className="padding-x py-6 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt=" logo" width={100} height={20} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-md text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="cursor-pointer lg:hidden">
          <img src={hamburger} alt="hamburger" height={20} width={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
