import Info from "@/components/ui/infoCard";
import InfoRev from "@/components/ui/infoRev";
import React from "react";
import { DM_Serif_Display } from "next/font/google";

const lalezar = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function About() {
  return (
    <div>
      <div className="w-full p-8 flex flex-col justify-center items-center">
        {" "}
        <h1 className={`font-bold text-6xl py-10 ${lalezar.className}`}>
          Varanasi
        </h1>
        <div className=" flex  justify-center items-center text-center text-semi-bold md:items-left text-lg px-16">
          Varanasi, the spiritual heart of India, captivates visitors with its
          timeless allure and vibrant energy. Nestled along the sacred Ganges
          River, this ancient city embodies centuries of tradition and
          spirituality. Steeped in myth and legend, Varanasi is a labyrinth of
          narrow lanes teeming with life, where ancient temples, ghats, and
          bustling markets coexist harmoniously. At dawn, the ghats come alive
          with the reverberating chants of priests and the rhythmic strokes of
          oars as devotees partake in the sacred ritual of bathing in the holy
          waters. As the day unfolds, the city reveals its rich tapestry of
          culture through its bustling bazaars, where the aroma of incense
          mingles with the vibrant hues of silk saris and the melodious strains
          of classical music. In Varanasi, every corner exudes spirituality,
          offering travelers a profound glimpse into the soul of India.
        </div>
      </div>
      <Info
        img="/assi1.jpeg"
        title="ASSI GHAT"
        text="Assi Ghat is the southernmost ghat in Varanasi. It is one of the biggest ghats of Varanasi and most popular one. To most visitors to Varanasi, it is known for being a place where long-term foreign students, researchers, and tourists live. Assi Ghat is one of the ghats often visited for recreation and during festivals. On typical days about 300 people visit every hour in the mornings, and on festival days 2500 people arrive per hour. Most of the people visiting the ghat on usual days are students from the nearby Banaras Hindu University. The ghat accommodates about 22,500 people at once during festivals like Shivratri.[3] During iconic Dev Deepawali festival, more than 600,000 tourists visit the ghat. There are a lot of activities for tourists to engage in at the ghat. Visitors can go for boat rides, go up in a hot-air balloon for an aerial view of Assi ghat, enjoy the daily talent show in the evening or eat at one of the many restaurants and cafes in the area."
      />
      <InfoRev
        img="/dashGhat1.jpg"
        title="DASHASHWAMEDH GHAT"
        text="Dashashwamedh Ghat is a main ghat in Varanasi located on the Ganges River in Uttar Pradesh. It is located close to Vishwanath Temple. There are two Hindu legends associated with the ghat: according to one, Brahma created it to welcome Shiva, and in another, Brahma performed 10 Ashwamegha Yajna, Dasa-Ashwamedha yajna.
          The present ghat was built by Peshwa Balaji Baji Rao in the year 1748. A few decades later, Ahilyabahi Holkar, the Queen of Indore, rebuilt the ghat in the year 1774. This place is most famous for its Ganga Arti ( a holy fire ritual), which is an elaborate and lively ceremony that takes place at dusk everyday."
      />
      <Info
        img="/temple1.png"
        title="SHRI KASHI VISHWNATH TEMPLE"
        text="Kashi Vishvanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shivatemples. The main deity is known by the name Vishvanatha or Vishveshvara meaning Ruler of The Universe. Varanasi city is also called Kashi, and hence the temple is popularly called Kashi Vishvanath Temple."
      />
      <InfoRev
        img="/sarnath (1).jpg"
        title="SARNATH"
        text="According to Buddhist tradition, Sarnath is where, circa 528 BCE, at 35 years of age, Gautama Buddha taught his first sermon after attaining enlightenment at Bodh Gaya.[2] It is also traditionally considered where the Buddhist sangha first came into existence as a result of the enlightenment of his first five disciples (Kaundinya, Assaji, Bhaddiya, Vappa and Mahanama).[3]
        According to the Mahaparinibbana Sutta (Sutta 16 of the Digha Nikaya), the Buddha mentioned Sarnath as one of the four places of pilgrimage his devout followers should visit and look upon with feelings of reverence. The other three sites are Lumbini (the traditional birthplace of the Buddha), Bodh Gaya (where Buddhists say the Buddha achieved enlightenment), and Kushinagar (where Buddhists say the Buddha attained parinirvana).[4][5]"
      />
    </div>
  );
}

export default About;
