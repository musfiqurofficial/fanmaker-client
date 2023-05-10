import Button from "../../common/Button";
import { AiFillCheckSquare } from "react-icons/ai";

const HomeWeNeed = () => {
  return (
    <div className="bg-[#ffffff93]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 py-16 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <div className="grid grid-1 sm:grid-cols-3 gap-14">
              <div>
                <h3 className="text-[27px] font-[700] text-black text-start mb-5">
                  What we need from you:
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You are reliable
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You want to work from anywhere
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You have at least 2-3 hours a day
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You like to be in front of the camera
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[27px] font-[700] text-black text-start mb-5">
                  We give you:
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    A proven process that 10x your income (even if you are
                    already successful)
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    A trustworthy partner that can scale your account
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    A partner that takes care of everything that consumes your
                    time (promotion, chatting, selling PPV-content)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[27px] font-[700] text-black text-start mb-5">
                  This is perfect for you if :
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You want to become a successful creator on OF but don't know
                    how
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You are already succesful but need a trustworthy partner to
                    scale your account
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    You are looking for a way to earn +10k a month from home
                  </li>
                  <li className="text-[20px] font-semibold text-start">
                    <AiFillCheckSquare className="inline-block text-[#19a0e4]" />{" "}
                    Your daily tasks become too much to handle in order to grow
                    your account
                  </li>
                </ul>
              </div>
            </div>
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeWeNeed;
