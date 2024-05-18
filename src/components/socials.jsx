import bag from "../assets/bag.png";

export default function Socials() {
  return (
    <>
      <div className="bg-grey h-12 rounded-lg mt-3 flex p-3">
        <p className="w-full  text-xs  float-left ">
          Follow Me
          <div className="float-right flex">
            <a href="https://github.com/kaanayyildiz">
              <img src={bag} width="20" height="20" />
            </a>
            <a href="https://github.com/kaanayyildiz">
              <img src={bag} width="20" height="20" />
            </a>
            <a href="https://github.com/kaanayyildiz">
              <img src={bag} width="20" height="20" />
            </a>
          </div>
        </p>
      </div>
    </>
  );
}
