import Image from "next/image";

function Card({ img, text }: { img: string; text: string }) {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <div className="w-full group h-full relative hover:opacity-100">
        <Image
          alt="pic"
          width={300}
          height={300}
          src={img}
          className=" object-cover transition-all duration-700 group-hover:brightness-50 rounded-2xl w-fit h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
