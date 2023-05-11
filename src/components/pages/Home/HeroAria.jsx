import Logo from "../../../assets/Starlogo.png";
import Form from "./Form";

const HeroAria = () => {
  return (
    <div className="lg:bg-[#ffffff93] bg-[#ffffff7c]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="pb-10 sm:px-14 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <img className="w-[220px] h-[220px]" src={Logo} alt="" />
            <h3 className="sm:text-[33px] text-[20px] font-[700]">
              We help content creators around the world generate a stable five
              to six figure income with just 3 hours of work at{" "}
              <span className="underline">no cost</span> to them.
            </h3>
            <h3 className="text-[25px] font-[400] underline mt-2">
              Fill out the form below to apply:
            </h3>
            <div>
              <Form />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default HeroAria;
