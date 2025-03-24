const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-gray-400 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon flex justify-center items-center">
            <a href="https://github.com/falcon0124" className="">
                <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
            </a>
          </div>
          <div className="social-icon flex justify-center items-center">
            <a href="www.linkedin.com/in/sangam911">
                <img src="/assets/linkdin.png" alt="linkedin" className="w-6 h-6" />
            </a>
          </div>
          <div className="social-icon flex justify-center items-center">
            <a href="https://www.instagram.com/sangam_raj14/?hl=en">
                <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
  
        <p className="text-gray-400">© 2024 Adrian Hajdin. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;