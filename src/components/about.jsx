export default function About() {
  return (
    <>
      <div>
        <p className="text-xs font-semibold mt-3 mb-3 pl-2">About</p>
        <p className="font-bold text-2xl mb-3 pl-2">It's me John Doe</p>
        <p className="pl-2 text-sm font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="h-5 border rounded shadow-md mt-4"></div>
        <p className="font-bold text-xl  pl-2 text-center pt-2 mt-2 ">
          Let's work together.
        </p>
        <p className="text-sm font-light text-center">
          Creating user experience and visual appealing design
        </p>

        <div className="flex justify-center  mt-4 mb-4">
          <h6 className="text-xs border w-[4rem] mr-2 bg-black text-white rounded p-1 text-center ">
            Hire Me
          </h6>
          <h6 className="text-xs border w-[5rem]  rounded p-1 text-center">
            Copy Email
          </h6>
        </div>
      </div>
    </>
  );
}
