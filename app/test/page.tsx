"use client";

import Card from "@/components/ui/placeCard";
import router from "next/router";
import React from "react";

function Pages() {
  // Function to navigate to different pages
  function navigateToPage(page: any) {
    // Navigate to the desired page based on 'page' parameter
    // Replace window.location.href with your actual navigation code
    console.log("Navigating to " + page);
  }

  // Looping animation
  document.addEventListener("DOMContentLoaded", function () {
    var cardContainer = document.getElementById("card-container");

    function animateCards() {
      if (!cardContainer) return;
      cardContainer.classList.add("-translate-x-full");
      cardContainer.classList.remove("translate-x-0");
      setTimeout(() => {
        if (!cardContainer) return;
        cardContainer.classList.add("translate-x-0");
        cardContainer.classList.remove("-translate-x-full");
        setTimeout(animateCards, 10000); // 10s animation loop
      }, 50);
    }

    function stopAnimation() {
      if (!cardContainer) return;

      cardContainer.classList.add("hover-stop");
    }

    function resumeAnimation() {
      if (!cardContainer) return;

      cardContainer.classList.remove("hover-stop");
    }

    // Pause animation on hover
    if (!cardContainer) return;

    cardContainer.addEventListener("mouseover", stopAnimation);
    cardContainer.addEventListener("mouseout", resumeAnimation);

    animateCards();
  });

  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          id="card-container"
          className="flex transition-transform duration-500 ease-in-out transform"
        >
          <div
            onClick={() => {
              router.push("/varanasi");
            }}
          >
            <Card img="/varanasi.png" text="Varanasi" />
          </div>
          <div
            onClick={() => {
              router.push("/prayagraj");
            }}
          >
            <Card img="/prayagraj (2).jpg" text="Prayagraj" />
          </div>
          <div
            onClick={() => {
              router.push("/lucknow");
            }}
          >
            <Card img="/lucknow.jpg" text="Lucknow" />
          </div>
          <div
            onClick={() => {
              router.push("/ayodhya");
            }}
          >
            <Card img="/ayodhya.jpg" text="Ayodhya" />
          </div>
          <div
            onClick={() => {
              router.push("/bodhGaya");
            }}
          >
            <Card img="/bodh.avif" text="Bodh Gaya" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
