import Button from "../../common/Button";

const HomeService = () => {
  return (
    <div className="bg-[#ffffff93]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <h3 className="text-[38px] font-[700] mb-10">
              Our Services
            </h3>
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-14 mb-8">
              <div className="rounded-3xl border-b-4 border-white border-t-2">
                <div className="bg-[#19a0e4] py-3 rounded-t-3xl">
                  <h4 className="text-[32px] font-bold text-white">
                    Earn Money 24/7
                  </h4>
                </div>
                <p className="p-3 text-[23px]">
                  We work 24/7 in your Account. this goes from Managing your
                  Account and have a Team that handles all the Chatting and
                  Boost your page by selling PPV's & Promotion
                </p>
              </div>
              <div className="rounded-3xl border-b-4 border-white border-t-2">
                <div className="bg-[#19a0e4] py-3 rounded-t-3xl">
                  <h4 className="text-[32px] font-bold text-white">
                    Professional Management
                  </h4>
                </div>
                <p className="p-3 text-[23px]">
                  All our Models are in close contact with us. The partnerships
                  is on eye-level so every creator feels worshipped and is our
                  number one priority. Happy clients, happy life!
                </p>
              </div>
            </div>
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
