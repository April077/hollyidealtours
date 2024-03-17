import Image from "next/image";
function Navbar() {
  return (
    <div>
      <div className="flex px-24 py-5 items-center justify-between">
        <div className="z-50 mt-4">
          <Image src={"/image.png"} alt="logo" width={80} height={80}></Image>
        </div>
        <div className="flex space-x-6">
          <button className="border-black px-4 rounded py-2 border-[1px] z-50 transition-transform hover:scale-105">
            About Us
          </button>

          <button className=" border-black px-4 rounded border-[1px] z-50 transition-transform hover:scale-105">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
