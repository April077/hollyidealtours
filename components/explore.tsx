import TripPlans from "./tripPlans";
import { DM_Serif_Display } from "next/font/google";

const font = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Explore() {
  return (
    <div className=" flex flex-col justify-center space-y-10 items-center  ">
      <div className={`font-bold  text-5xl ${font.className}`}>Our Picks</div>{" "}
      <TripPlans />
      <div className="w-18 mt-10 pl-2 h-10 flex ">
        <button className="px-8 py-6 border-[1px] font-bold text-white flex items-center justify-center text-center group rounded bg-orange-500">
          Explore More
        </button>
      </div>
      
    </div>
  );
}

export default Explore;
