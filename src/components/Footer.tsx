import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="container mx-auto grid gap-10 px-6 py-12 text-center md:grid-cols-4 md:px-10 md:text-left">
        {/* Logo Section */}
        <div>
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className="mx-auto w-38 md:mx-0"
          />

          <p className="mx-auto mt-5 max-w-xs text-base leading-7 text-slate-500 md:mx-0">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex justify-center gap-4 text-base text-slate-600 md:justify-start">
            <a href="#" className="hover:text-pink-500">
              GitHub
            </a>

            <span className="text-gray-300">•</span>

            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>

            <span className="text-gray-300">•</span>

            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="hidden md:block">
          <h3 className="text-base font-bold text-slate-900">Product</h3>
          <p className="mt-4 text-base text-slate-500">Home</p>
          <p className="mt-2.5 text-base text-slate-500">Technologies</p>
          <p className="mt-2.5 text-base text-slate-500">Projects</p>
        </div>

        {/* Company */}
        <div className="hidden md:block">
          <h3 className="text-base font-bold text-slate-900">Company</h3>
          <p className="mt-4 text-base text-slate-500">About</p>
          <p className="mt-2.5 text-base text-slate-500">Contact</p>
          <p className="mt-2.5 text-base text-slate-500">Careers</p>
        </div>

        {/* Legal */}
        <div className="hidden md:block">
          <h3 className="text-base font-bold text-slate-900">Legal</h3>
          <p className="mt-4 text-base text-slate-500">Privacy Policy</p>
          <p className="mt-2.5 text-base text-slate-500">
            Terms of Service
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-6 text-xs text-gray-400 sm:text-sm md:px-10">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex shrink-0 gap-4">
            <a href="#" className="transition hover:text-gray-600">
              Privacy
            </a>

            <a href="#" className="transition hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;