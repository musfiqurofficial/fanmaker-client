import Button from "../../common/Button";

const HomeNumbers = () => {
  return (
    <div className="bg-[#000]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <h3 className="text-[33px] font-[700] mb-2 text-white">
              Our Numbers
            </h3>
            <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
              <div className="border-4 border-[#19a0e4] rounded-2xl p-3">
                <h4 className="text-[27px] font-bold text-white underline">
                  13
                </h4>
                <h4 className="text-[27px] font- text-white">Models under</h4>
                <h4 className="text-[27px] font- text-white">Management</h4>
              </div>
              <div className="border-4 border-[#19a0e4] rounded-2xl p-3">
                <h4 className="text-[27px] font-bold text-white underline">
                  327%
                </h4>
                <h4 className="text-[27px] font- text-white">Ø Increased</h4>
                <h4 className="text-[27px] font- text-white">Revenue</h4>
              </div>
              <div className="border-4 border-[#19a0e4] rounded-2xl p-3">
                <h4 className="text-[27px] font-bold text-white underline">
                  21
                </h4>
                <h4 className="text-[27px] font- text-white">
                  Experts working for
                </h4>
                <h4 className="text-[27px] font- text-white">
                  Fanmaker Agency
                </h4>
              </div>
            </div>
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeNumbers;
