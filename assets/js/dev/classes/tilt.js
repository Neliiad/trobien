/**
	Tilt.js
**/
//import de la lib vanilla-tilt
import VanillaTilt from "vanilla-tilt";
import barba from "@barba/core";

class Tilt {
  constructor() {
    this.init();
    barba.hooks.after(_ => {
      this.init();
    });
  }
  init() {
    const elements = document.querySelector("[data-tilt]");
    VanillaTilt.init(elements);
  }
}

export const tilt = new Tilt();
