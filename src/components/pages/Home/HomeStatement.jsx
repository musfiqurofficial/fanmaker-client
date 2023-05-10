import img1 from "../../../assets/img1.webp";
import img2 from "../../../assets/img2.webp";
import img3 from "../../../assets/img3.webp";
import Button from "../../common/Button";

const HomeStatement = () => {
  return (
    <div className="bg-[#000]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <h3 className="text-[33px] font-[700] mb-2 text-white">
              Our Statements
            </h3>
            <div className="bg-[#1b1b1b] py-10 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
                <img className="w-[250px] h-auto" src={img1} alt="" />
                <img className="w-[250px] h-auto" src={img2} alt="" />
                <img className="w-[250px] h-auto" src={img3} alt="" />
              </div>
            </div>
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeStatement;
