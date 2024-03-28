import BasicComponent from "../BasicComponent";
import { util as u } from "uikit";
import RandomBlob from "./RandomBlob";
import { gsap } from "gsap";

export default class RandomBlobManager extends BasicComponent {
  constructor(element) {
    super(element, "random-blob-attribute");

    this.items = u
      .$$("[random-blob]", this.element)
      .map((item) => new RandomBlob(item));

    this.setItemsParallax();
    this.setItemsZIndex();
  }

  setItemsParallax() {
    this.squareMax = Math.max.apply(
      null,
      this.items.map((item) => item.getSquare()),
    );

    this.squareMin = Math.min.apply(
      null,
      this.items.map((item) => item.getSquare()),
    );

    this.items.forEach((item) => {
      let value = gsap.utils.normalize(
        this.squareMin,
        this.squareMax,
        item.getSquare(),
      );
      value = gsap.utils.interpolate(0.9, 1.2, value);

      item.setParallax(value);
    });
  }

  setItemsZIndex() {
    let sorted = this.items.sort((first, second) => {
      if (first.getSquare() > second.getSquare()) {
        return 1;
      } else if (first.getSquare() < second.getSquare()) {
        return -1;
      } else {
        return 0;
      }
    });

    sorted.forEach((item, key) => {
      item.setZIndex(key + 1);
    });
  }
}
