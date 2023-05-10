import Logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <div className="bg-[#ffffff93]">
      <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <center>
          <img className="w-[150px] h-[150px]" src={Logo} alt="" />
          <p className="text-center text-[14px] font-light">
            Copyright 2023 Fanmaker Agency | All Rights Reserved.
          </p>
        </center>
      </div>
    </div>
  );
};

export default Footer;
