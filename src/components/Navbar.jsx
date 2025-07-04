import { RiMenuLine, RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-16 py-4 flex justify-between items-center text-white">
      {/* Left - Logo + Text */}
      <div className="flex items-center gap-3">
        {/* Logo placeholder */}
        <div className="w-16 h-12  flex gap-[1px] items-end ">
          <div className="w-[6.9px] h-8 bg-white" />
          <div className="w-[6.9px] h-8 bg-white" />
          <div className="w-[6.9px] h-8 bg-white" />
          <div className="w-[6.9px] h-8 bg-white" />


          <div className="w-[6.9px] h-11 bg-white" />
          <div className="w-[6.9px] h-11 bg-white" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide">
          WE CREATE THE EXTRAORDINARY
        </span>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">
        {/* Menu icon */}
        <RiMenuLine className="text-xl cursor-pointer" />

        {/* Search icon */}
        <RiSearchLine className="text-3xl cursor-pointer" />

        {/* Contact button */}
        <button className="text-xs border border-white px-2 bg-black uppercase font-semibold rounded hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Navbar;
