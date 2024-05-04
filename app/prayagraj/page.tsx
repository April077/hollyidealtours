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
          Prayagraj
        </h1>
        <div className=" flex  justify-center items-center text-center text-semi-bold md:items-left text-lg px-16">
          Prayagraj, the confluence of spirituality, history, and culture,
          stands as a timeless testament to the soul of India. Nestled at the
          sacred meeting point of the Ganges, Yamuna, and mythical Saraswati
          rivers, this ancient city, formerly known as Allahabad, holds a
          revered place in Hindu mythology and tradition. Prayagraj is a
          tapestry woven with threads of devotion, where pilgrims from far and
          wide converge to cleanse their sins in the holy waters during the
          auspicious Kumbh Mela. Beyond its spiritual significance, Prayagraj is
          adorned with architectural marvels that narrate tales of bygone eras.
          The grandeur of Allahabad Fort, the serene beauty of Anand Bhawan, and
          the majestic allure of the Triveni Sangam, where the rivers merge,
          evoke a sense of awe and reverence. As the city bustles with life, its
          streets resonate with the harmonious blend of tradition and modernity,
          offering visitors a glimpse into the vibrant culture of Uttar Pradesh.
          In Prayagraj, every moment is infused with the spirit of devotion,
          creating an experience that leaves an indelible mark on the soul of
          every traveler.
        </div>
      </div>
      <Info
        img="/tri.jpg"
        title="Triveni Sangam"
        text="Triveni Sangam is the confluence of the Ganges (Ganga), the Yamuna, and the legendary Saraswati River. Triveni Sangam is located at Prayag – the area of Prayagraj neighbouring the confluence; for this reason, the confluence is also sometimes referred to as Prayag. At Triveni Sangam, the Ganges and the Yamuna can be identified by their different colours – the water of the Ganges is clear while that of the Yamuna is greenish in colour.[6] The third river, the mythical Saraswati, is called invisible. A place of religious importance and one of the sites for the historic Kumbh Mela held every 12 years, over the years it has also been the site of the immersion of ashes of several national leaders, including Mahatma Gandhi in 1949 and Atal Bihari Bajpayee in 2018."
      />
      <InfoRev
        img="/bagh.jpg"
        title="Khusro Bagh"
        text="Formerly a burial complex near the Allahabad junction railway station, Khusro Bagh is currently a walled garden typical of the Mughal construction. Khusro Bagh has three brilliantly designed sandstone mausoleums paying tribute to Mughal royals, including Shah Begum, Khusrau Mirza, and Nithar Begum, all of whom were related to Akbar’s son Jahangir.
Shah Begum’s tomb is designed in a similar style to Fatehpur Sikri with a three-tiered design. It is one of the most beautiful places to visit in prayagraj. Chhatris, arabesque inscriptions, and traditional Mughal motifs dot all of the three mausoleums.
The domed roofs also feature elaborate calligraphy by some of the ruler’s best calligraphers. Khusro Bagh is an important site to visit if you want to learn more about the Mughal history of India, particularly that associated with the ancient Prayagraj.
"
      />
      <Info
        img="/anand.png"
        title="Anand Bhavan"
        text="In the 1930s, the original Swaraj Bhavan, today a famous Allahabad tourist place, was transformed into the headquarters of the Indian National Congress. As a result, Motilal Nehru had to buy another mansion for himself and his family to reside, and it was called Anand Bhavan.

Today, it is a historic house museum also home to the Jawahar Planetarium. European furniture and the most delicate quality china was sourced by Motilal Nehru to decorate this mansion and make it a replica of the original Swaraj Bhavan. Renovation of the enormous estate is said to have been done for over ten years.

Just like Swaraj Bhavan, this place also hosts many artifacts original to the Indian freedom struggle and meetings of the Negru family with many prominent freedom leaders. In 1970, the mansion was donated to the Government of India by Jawaharlal Nehru’s daughter Indira Gandhi. Since then, the government has been responsible for its maintenance."
      />
      <InfoRev
        img="/fort.jpg"
        title="Allahabad Fort"
        text="Built-in 1583, this stunning piece of architecture stands at the Triveni Sangam in Allahabad to remind tourists of the city’s rich history. Akbar, a famous Mughal Emperor, is said to have been much impressed by the aura of Allahabad. As a result, he decided to construct a grand fort in the region. This fort was erected to envelop the Akshayavat, a holy tree for the Hindus of the area.
The Archaeological Survey of India has classified the Allahabad fort as a monument of National Importance and maintains its interiors for tourists. The exteriors reflect the brilliance of Mughal architecture with significant motifs and inscriptions in some parts of the fort. As a tourist, do not forget to enjoy the grandeur of the fort while in Allahabad, since it is one of the best places to visit in prayagraj."
      />
    </div>
  );
}

export default About;
