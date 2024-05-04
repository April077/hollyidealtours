import Image from "next/image";

type carProp = {
  model: string;
  image: string;
  price: number;
  day: string;
  night: string;
};

function TripCard({ model, image, price, day, night }: carProp) {
  return (
    <div className="h-full pt-5 w-80">
      <div className="">
        <Image
          className="object-cover h-full w-full rounded-2xl border-[1px]"
          src={image}
          alt="car"
          width={400}
          height={400}
        ></Image>
      </div>
      <div className="h-1/3 pt-2 space-y-1">
        <div className=" font-bold text-xl pt-2">{model}</div>
        <div className=" font-semi-bold text-gray-500 text-lg   ">
          {day} Days - {night} Nights
        </div>
        <div className="font-bold text-xl ">₹{price}</div>
      </div>
    </div>
  );
}

export default TripCard;
