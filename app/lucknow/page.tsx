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
          Lucknow
        </h1>
        <div className=" flex  justify-center items-center text-center text-semi-bold md:items-left text-lg px-16">
          Lucknow, the epitome of refined elegance and cultural richness,
          beckons travelers with its enchanting charm and regal grandeur. Known
          as the "City of Nawabs," Lucknow is a captivating blend of history,
          art, and culinary delights. The city's majestic architecture, adorned
          with intricate Mughal and Awadhi motifs, narrates tales of its royal
          past, while its bustling streets buzz with the rhythm of everyday
          life. Strolling through the labyrinthine lanes of Old Lucknow, one is
          greeted by the aroma of kebabs sizzling on charcoal grills and the
          sweet fragrance of perfumed attars wafting from traditional shops. The
          city's opulent palaces and grand monuments, such as the magnificent
          Bara Imambara and the resplendent Rumi Darwaza, stand as testaments to
          its architectural splendor. Yet, amidst its grandeur, Lucknow embraces
          modernity with open arms, offering visitors a delightful juxtaposition
          of the old and the new. In Lucknow, every moment is an immersion into
          the city's rich tapestry of culture, hospitality, and timeless grace.
        </div>
      </div>
      <Info
        img="/rumi.jpg"
        title="RUMI DARWAZA"
        text="The famous Rumi Darwaza is a striking gateway standing tall at sixty feet tall in the old city of Lucknow. It lies between the Bara Imambara and Chota Imambara exhibiting ancient Awadhi architecture. Built by Nawab Asaf-ud-Daula, it is also known as the Turkish Gate because it is modelled after Bab-i-Humayun gateway in Turkey.

The creation of Rumi Darwaza has a very charitable reason behind it. When famine struck North India during 1748, the then Nawab of Lucknow came up with a plan that would feed his countrymen as well as give him something to cherish and be proud of. As per the plan, the Awadhi workers built the great Rumi Darwaza for him, in exchange for everyday meal. 
"
      />
      <InfoRev
        img="/bada.png"
        title="Bara Imambara"
        text="Bara Imambara (Hindi: बड़ा इमामबाड़ा), also known as Asafi Imambara, is an imambara complex in Lucknow, India, built by Asaf-ud-Daula, Nawab of Awadh, in 1784. Bara means big. An Imambara is a shrine built by Shia Muslims for the purpose of Azadari. This imambara is the second largest after the Nizamat Imambara. [ci"
      />
      <Info
        img="/res.jpg"
        title="The Residency"
        text="The Residency, also called as the British Residency and Residency Complex, is a group of several buildings in a common precinct in the city of Lucknow, Uttar Pradesh, India. It served as the residence for the British Resident General who was a representative in the court of the Nawab. The Residency is located in the heart of the city, in the vicinity of other monuments like Shaheed Smarak, Tehri Kothi and High Court Building."
      />
      <InfoRev
        img="/chota.jpg"
        title="Chota Imambara"
        text="Chota Imambara, also known as Imambara Hussainabad Mubarak is an imposing monument located in the city of Lucknow, Uttar Pradesh, India. It took 54 years to finalize it. Built as an imambara or a congregation hall for Shia Muslims, by Muhammad Ali Shah, the Nawab of Awadh in 1838,[1] it was to serve as a mausoleum for himself and his mother, who is buried beside him.[2]
The significance of Panjetan, the holy five, is once again emphasized here with five main doorways. This Imambara consists of two halls and a Shehnasheen (a platform where the Zarih of Imam Husain is kept.) Zarih is the replica of that protective grill or structure which is kept on the grave of Imam Husain at Karbala, Iraq. The large green and white bordered hall of Azakhana is richly decorated with chandeliers and a good number of crystal glass lamp-stands. In fact, it was for this profuse decoration that the Imambara was referred by European visitors and writers as The Palace of Lights. The exterior is very beautifully decorated with Quranic verses in Islamic calligraphy ."
      />
    </div>
  );
}

export default About;
