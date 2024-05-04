import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  // Array of different texts for each card
  const texts = [
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ... ",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ... ",
  ];

  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {texts.map(
          (
            text,
            index // Mapping over the texts array
          ) => (
            <CarouselItem className="  flex justify-center items-ceter" key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center text-center justify-center p-6">
                    <span className="text-3xl flex ">{text}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
