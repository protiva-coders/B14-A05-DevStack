import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
         <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-sm font-medium text-pink-500">
            Home
          </a>

          <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
            About
          </a>

          <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="text-sm text-gray-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
    );
};

export default Nav;