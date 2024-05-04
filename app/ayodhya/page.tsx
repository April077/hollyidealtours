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
          Ayodhaya
        </h1>
        <div className=" flex  justify-center items-center text-center text-semi-bold md:items-left text-lg px-16">
          Ayodhya, the cradle of Hindu civilization and the birthplace of Lord
          Rama, exudes an aura of spiritual serenity and historical
          significance. Nestled on the banks of the sacred Sarayu River, this
          ancient city in Uttar Pradesh holds a revered place in the hearts of
          millions of devotees worldwide. Steeped in mythology and legend,
          Ayodhya is adorned with magnificent temples, serene ghats, and sacred
          sites that echo the tales of ancient epics. Every corner of the city
          resonates with the devotion of pilgrims who flock here to seek
          blessings and solace. The tranquil ambiance of Ayodhya invites
          introspection and contemplation, offering visitors a profound journey
          into the essence of faith and spirituality. As the sun sets over the
          horizon, the city glows with the soft hues of twilight, casting a
          timeless spell that lingers in the hearts of all who tread its
          hallowed grounds. In Ayodhya, the sacred and the sublime intertwine,
          creating an experience that transcends time and space.
        </div>
      </div>
      <Info
        img="/ram.jpg"
        title="Ayodhya Ram Mandir"
        text="The term “Ram Janmabhoomi,” literally translates to “Lord Ram’s Birthplace.” It is thought that Ram, the seventh incarnation of Lord Vishnu, spent his childhood near the Sarayu river in Ayodhya, as described in the Indian epic known as the Ramayana. Devotees of the Hindu religion hold the place of Ram Janmabhoomi in very high regard and it is one of the best places to visit in Ayodhya.
This sacred location is considered to be the first of the seven most significant pilgrimages for Hindus, and it is also considered to be one of the destinations that should be visited during the Ayodhya Darshan."
      />
      <InfoRev
        img="/hanu.jpg"
        title="Hanuman Garhi"
        text="According to popular legend, the place where the Hanuman Garhi now stands was inhabited by Hanuman. He used to live here to protect Janmabhoomi or Ramkot. This is so much for its mythological association. If we try and trace its history to more recent times we will know that the land for Hanuman Garhi was actually donated by the Nawab of Avadh. Later a temple was constructed by a Hindu courtier of the Nawab around the middle of the 10th century."
      />
      <Info
        img="/kanak.jpg"
        title="Kanak Bhawan"
        text="In the neighbourhood of Tulsi Nagar, the Kanak Bhawan may be found tucked away in the top-left portion of the Ram Temple complex. In addition to its other name, Sone-ka-Ghar, this temple was built in the year 1891. It is a sacred place that honours Lord Ram and his companion, Goddess Sita. There are three golden-crowned statues of two gods in Kanak Bhawan. It is often claimed that Lord Ram’s stepmother Kaikeyi offered this temple to him and Sita as a present."
      />
      <InfoRev
        img="/nag.jpg"
        title="Nageshwarnath Temple"
        text="The Nageshwarnath Temple in Ayodhya can be found right next to the Theri Bazaar. This temple was built in honour of Lord Nageshwarnath, the patron god of the region. It is said that Kush, also known as Kusha, Lord Rama’s son, was the one who constructed it.
            The present temple is claimed to have been renovated in the year 1750 by Naval Rai, who served as Safar Jung’s minister. It is important to note that this holy location has been well maintained ever since the year 750 AD. Kush is said to have met a Shiva devotee by the name of Naga Kanya after he accidentally lost his ring in the nearby bath.
            During the festivals of Mahashivaratri and Trayodashi, which are together referred to as Pradosh Vratam in Southern India, the Nageshwarnath Temple is visited by a large number of worshippers. The Shiva Barat, also known as the parade of Lord Shiva, is a major draw for visitors to this location."
      />
    </div>
  );
}

export default About;
