import Button from "../../common/Button";

const HomeMission = () => {
  return (
    <div className="bg-[#000]">
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="sm:px-14 py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <center>
            <h3 className="text-[38px] font-[700] mb-10 text-white">
              Our Mission
            </h3>
            <p className="text-white text-[23px]">
              Fanmaker Agency specialises in the growth of models, but the focus
              is not only on money and reach. But also the human interaction and
              the satisfaction of the models.
            </p>
            <p className="text-white text-[23px] my-5">
              Our agency is comprised of a multinational team that spans over
              six countries and is growing! We have a personal relationship with
              all creators and value the person over the brand. We do not look
              at our creators as employees they are partners.
            </p>
            <p className="text-white text-[23px]">
              Our agency is internationally networked and collaborates with many
              agencies and their models. This way we can guarantee the results
              we promise.
            </p>
            <h3 className="text-[#19a0e4] text-[28px] sm:text-[32px] font-bold italic my-8">
              "Fanmaker Agency has helped me finally quit my job as a waitress
              since i now make my previos yearly wage in a month."
            </h3>
            <p className="text-white text-[23px]">
              - Client of Fanmaker Agency
            </p>
            <p className="text-white text-[16px] mb-8">
              (Everything is confidential)
            </p>
            <Button />
          </center>
        </div>
      </div>
    </div>
  );
};

export default HomeMission;
