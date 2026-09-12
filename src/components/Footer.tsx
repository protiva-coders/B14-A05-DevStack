import Logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Footer Main */}
        <div className="grid grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Dev Stack"
                className="w-32"
              />
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-xs font-medium text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-xs font-medium text-gray-600 hover:text-gray-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-xs font-medium text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-700">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-700">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-700">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-300">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-300 hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-300 hover:text-gray-700"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;