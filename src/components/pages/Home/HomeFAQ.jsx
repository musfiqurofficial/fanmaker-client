import Button from "../../common/Button";
import { Faq } from "./Faq";

const HomeFAQ = () => {
  return (
    <div className="bg-[#ffffff93]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 pt-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <h1 className="text-[62px] font-[700]">FAQ</h1>
            <h4 className="text-[27px] mb-8">
              Most frequent questions and answers
            </h4>
            <Faq />
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
