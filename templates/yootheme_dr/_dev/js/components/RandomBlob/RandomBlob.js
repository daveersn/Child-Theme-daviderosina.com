import { util as u } from "uikit";
import { gsap } from "gsap";
import BasicComponent from "../BasicComponent";

export default class RandomBlob extends BasicComponent {
  constructor(element) {
    super(element, "random-blob");

    // Gsap is overriding border radius prop, so let's set this way
    u.attr(
      this.element,
      "style",
      `border-radius: ${this.generateRandomBorderRadius()};`,
    );

    gsap.set(this.element, {
      width: this.attrs.width ?? "3rem",
      height: this.attrs.height ?? "3rem",
      top: this.attrs.top ?? false,
      bottom: this.attrs.bottom ?? false,
      left: this.attrs.left ?? false,
      right: this.attrs.right ?? false,
      backgroundImage: this.generateLinearGradient(
        randomIntFromInterval(0, 360),
        this.attrs.bg[0],
        this.attrs.bg[1],
      ),
      borderColor: this.getClosestSectionBackgroundColor(),
    });
  }

  setParallax(value) {
    if (typeof window.ScrollSmoother === "undefined") {
      return;
    }

    window.ScrollSmoother.effects(this.element, { speed: value });
  }

  setZIndex(zIndex) {
    gsap.set(this.element, { zIndex });
  }

  getSquare() {
    return u.width(this.element) * u.height(this.element);
  }

  generateLinearGradient(degrees, firstColor, secondColor) {
    return `linear-gradient(${degrees}deg, ${firstColor} 0%, ${secondColor} 100%)`;
  }

  generateRandomBorderRadius() {
    let b1 = randomIntFromInterval(25, 75);
    let b2 = randomIntFromInterval(25, 75);
    let b3 = randomIntFromInterval(25, 75);
    let b4 = randomIntFromInterval(25, 75);
    let b = `${b1}% ${100 - b1}% ${100 - b2}% ${b2}% / ${b3}% ${b4}% ${100 - b4}% ${100 - b3}%`;
    return b;
  }

  getClosestSectionBackgroundColor() {
    let section = this.element.closest(".uk-section");

    if (!section) {
      return "#000";
    }

    return gsap.getProperty(section, "background-color");
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
