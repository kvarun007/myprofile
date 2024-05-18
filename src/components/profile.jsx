import icon from "../assets/icon.png";
import charge from "../assets/chargeicon.png";

export default function Profile() {
  return (
    <>
      <div className="head">
        <div className="things grid grid-cols-2 gap-x-24 text-xs  ">
          <div className="">Frontend Developer</div>
          <div className="text-center border border-lightgreen rounded-xl 2xl:bg-black sm:bg-lightgreen text-drakgreen ">
            AVAILABLE FOR WORK
          </div>
        </div>
        <div className="grid grid-cols-3  mt-4 ">
          <div className="col-span-2">
            <h1 className="font-extrabold text-xl">I'm John Doe</h1>
            <p className=" text-sm my-3">
              The traveler of this path, a web designer in Turkey.
            </p>
            <div className="flex">
              <h6 className="text-xs border w-[4rem] mr-2 bg-black text-white rounded p-1 text-center ">
                Hire Me
              </h6>
              <h6 className="text-xs border w-[5rem]  rounded p-1 text-center">
                Copy Email
              </h6>
            </div>
          </div>
          <div className=" border rounded-full bg-grey">
            <div className="">
              <img src={icon} width="60" height="60" className="" />
            </div>
          </div>
        </div>
        <div className="border bg-grey rounded-lg mt-4 pt-2">
          <div className="grid grid-cols-3">
            <h6 className="text-xs col-span-2 font-semibold ml-2">Projects</h6>
            <button className="text-xs bg-white rounded-lg w-1/2 ml-8 p-1">
              View All
            </button>
          </div>
          <div className="border rounded-lg mt-4 bg-white mx-3 mb-2 p-2">
            <div className="grid grid-cols-4">
              <img
                src={charge}
                width="50"
                className="border rounded-full ml-6"
              />
              <div className="col-span-3 ">
                <p className="text-sm font-bold">Benfolio</p>
                <p className="text-xs font-light  ">
                  React + Tailwind Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-bold pt-4">Let's work together.</p>
        <p className="text-center font-light text-xs pb-4">
          Creating user experience and visual appealing design
        </p>
      </div>
    </>
  );
}
