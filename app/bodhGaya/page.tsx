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
          Bodh Gaya
        </h1>
        <div className=" flex  justify-center items-center text-center text-semi-bold md:items-left text-lg px-16">
          Bodh Gaya is a religious site and place of pilgrimage associated with
          the Mahabodhi Temple complex, situated in the Gaya district in the
          Indian state of Bihar. It is famous for being the place where Gautama
          Buddha is said to have attained enlightenment under what became known
          as the Bodhi Tree. Since antiquity, Bodh Gaya has remained the object
          of pilgrimage and veneration, for Hindus and Buddhists both. In
          particular, archaeological finds, including sculptures, show that the
          site was in use by Buddhists since the Mauryan period. For Buddhists,
          Bodh Gaya is the most important of the main four pilgrimage sites
          related to the life of Gautama Buddha, the other three being
          Kushinagar, Lumbini, and Sarnath. In 2002, Mahabodhi Temple, located
          in Bodh Gaya, became a UNESCO World Heritage Site.
        </div>
      </div>
      <Info
        img="/bodhi (1).jpg"
        title="MAHABODHI TEMPLE"
        text="The Mahabodhi Temple Complex is one of the four holy sites related to the life of the Lord Buddha, and particularly to the attainment of Enlightenment. The first temple was built by Emperor Asoka in the 3rd century B.C., and the present temple dates from the 5th or 6th centuries. It is one of the earliest Buddhist temples built entirely in brick, still standing in India, from the late Gupta period."
      />
      <InfoRev
        img="/budha (1).jpg"
        title="GREAT BUDDHA STATUE"
        text="The Great Buddha statue (Daibutsu) is one of the popular stops on the Buddhist pilgrimage and tourist routes in Bodh Gaya, Bihar (India). The statue is 18.5 m (61 ft)[1] high representing the Buddha seated in a meditation pose, or dhyana mudra, on a lotus in the open air.[2] The total height of the construction is 80 ft (24 m) of which the Buddha makes up 64 ft (20 m), the lotus on which the Buddha sits 5 ft (1.5 m) and the lower pedestal 10 ft (3.0 m). The construction's width is nearly 60 ft (18 m) at its maximum. The statue was designed by V. Ganapati Sthapati[3] and took seven years to complete using the labor of 12,000 stonemasons. It is constructed from a combination of sandstone and red granite blocks.[4] A hollow spiral staircase inside the statue leads from the ground up to the chest. Shelves on the interior walls display 16,300 small bronze images of the Buddha.[5] The Great Buddha statue is located in a garden at the end of Temple Street and is surrounded by smaller sculptures of Buddha's ten principal disciples, five on each side.[6] The Great Buddha was possibly the largest Buddha statue in India at the time and was consecrated on 18 November 1989 by the 14th Dalai Lama.[7] The foundation stone for the statue was laid in 1982.[7]"
      />
      <Info
        img="/The-Bodhi-Tree (1).jpg"
        title="THE BODHI TREE"
        text="The Bodhi Tree, also called the Mahabodhi Tree, Bo Tree,[2] is a large sacred fig tree (Ficus religiosa)[1][3] located in Bodh Gaya, Bihar, India. Siddhartha Gautama, the spiritual teacher who became known as the Buddha, is said to have attained enlightenment or buddhahood circa 500 BCE under this tree.[4] In religious iconography, the Bodhi Tree is recognizable by its heart-shaped leaves, which are usually prominently displayed.[5]
        The original tree under which Siddhartha Gautama sat is no longer living, but the term (bodhi tree) is also applied to existing sacred fig trees.[6] The foremost example of an existing tree is the Mahabodhi Tree growing at the Mahabodhi Temple in Bodh Gaya, which is often cited as a direct descendant of the original tree. This tree, planted around 250 BCE, is a frequent destination for pilgrims, being the most important of the four main Buddhist pilgrimage sites.[7]"
      />
      <InfoRev
        img="/thai (1).jpg"
        title="THAI MONASTERY"
        text="Popularly known as Thai Monastery, Wat Thai Buddhagaya was established in 1956 by the government of Thailand on the request of the former Prime Minister Jawaharlal Nehru to strengthen the relationship between the two countries. The monastery was constructed with an idea of propagating the philosophies of Buddhism among the masses. It is the only Thai Temple in India. The place abounds with peace and serenity and is ideal for solace seekers and those looking for a break from the humdrum of city life.

        Known for its exceptional architecture and stunning beauty, Wat Thai Bodhgaya is strikingly similar to the temples of Bangkok and is richly gilt and highly ornamental. It has a sloping roof covered with golden tiles. Considered as one of the most beautiful monasteries in Bodh Gaya, the sanctum of the temple houses a beautifully carved gigantic bronze statue of Lord Buddha. A 25 m high statue of Lord Buddha has been recently built in the garden near the Wat Thai Temple. One can also find several images relating to the life of Lord Buddha that have been carved with Buddhist scriptures."
      />
    </div>
  );
}

export default About;
