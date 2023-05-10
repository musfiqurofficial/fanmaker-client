import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        !isOpen
          ? "border border-[#19a0e4] rounded-xl shadow-sm bg-black text-white"
          : "border border-[#19a0e4] rounded-xl shadow-sm bg-white text-black"
      }
    >
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={
            !isOpen
              ? "text-[20px] font-bold "
              : "text-[#19a0e4] text-[20px] font-bold  mb-3"
          }
        >
          {title}
        </p>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 text-white transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 text-start text-[18px] leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <>
      <div className="space-y-4 mb-8">
        <Item title="WHAT’S INCLUDED IN THE SERVICE?">
          <ul className="text-[18px] leading-relaxed">
            <li>- Building Social Media Profile & Story</li>
            <li>- Design marketing creative materials</li>
            <li>- Registration and setup of the fanclub’s accounts</li>
            <li>- Media exposure</li>
            <li>
              - All promotions and marketing technique (not only shoutouts)
            </li>
            <li>- Growth of your social accounts</li>
            <li>- Fanclub’s account management</li>
            <li>
              - Fanclub’s daily posting message management and fans support
            </li>
            <li>- PPV and other products sales</li>
            <li>
              - Daily optimizations of the performance for improving the
              generated income
            </li>
            <li>- Advising and assisting with content creation‍</li>
          </ul>
          <h4 className="text-[22px] text-black font-semibold my-1">
            Bonus :‍
          </h4>
          <p className="text-[18px] leading-relaxed">
            Free vacations for content creation, cross promotion and fun
            training to improve content and optimize revenue
          </p>
        </Item>
        <Item title="HOW MUCH TIME DO I HAVE TO INVEST?">
          In order to meet the minimum, it only takes about 2-3 hours per day.
          Sometimes when your DMs are full with paying fans, it also could be
          more.
        </Item>
        <Item title="DO I NEED TO TAKE PROFESSIONAL VIDEOS OR PHOTOS?">
          <ul className="text-[18px] leading-relaxed">
            <li>
              Hell NO! We know the platform and we know what works best on it.
            </li>
            <li>It doesn’t have to be professional photos and videos.</li>
            <li>
              We show and explain to our models what the photos should look
              like.
            </li>
          </ul>
        </Item>
        <Item title="HOW OFTEN DO I HAVE TO PROVIDE CONTENT?">
          Ideally, at least one to three new photos a day. When your fans want a
          private picture or something similar to that, than it also could be up
          to 20 photos a day. BUT you get payed so much for those pictures that
          you will love to provide those.
        </Item>
        <Item title="HOW CAN I GET STARTED?">
          <ul className="text-[18px] leading-relaxed">
            <li>We are glad to hear that!</li>
            <li>
              Of course, we don’t work with every model, so during the
              conversation we see what your goals and ideas are and whether a
              collaboration makes sense at all.‍
            </li>
            <li>Join now. Click APPLY NOW</li>
          </ul>
        </Item>
      </div>
    </>
  );
};
