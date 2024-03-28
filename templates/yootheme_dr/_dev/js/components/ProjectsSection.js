import { util as u, slider as Slider } from "uikit";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parseOptions from "../utils";

gsap.registerPlugin(ScrollTrigger);

export default function () {
  let element = u.$("#projects-element");

  if (!element) {
    return;
  }

  setSliderMediaQuery(element);

  gsap.set([element], { autoAlpha: 0 });

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
    },
  });

  timeline
    .fromTo(
      u.$$(".el-item", element),
      {
        yPercent: 150,
      },
      {
        yPercent: 0,
        ease: "power4.inOut",
        duration: 1.5,
        stagger: 0.2,
      },
    )
    .to(element, { autoAlpha: 1, ease: "power3.inOut" }, "<");
}

function setSliderMediaQuery(section) {
  let slider = Slider(u.$("[uk-slider]", section));

  if (!slider.$el) {
    return;
  }

  let isMobile = window.matchMedia("(max-width: 959px)");

  updateSlider(isMobile.matches);
  isMobile.addEventListener("change", (e) => updateSlider(isMobile.matches));

  function updateSlider(isMobile) {
    let attrs = parseOptions(slider.$el, "uk-slider");

    // If mobile, center is true, false otherwise
    attrs.center = isMobile;

    slider = Slider(slider.$el, attrs);

    attrs = Object.entries(attrs).map((attr) => `${attr[0]}: ${attr[1]}`);
    u.attr(slider.$el, "uk-slider", attrs.join("; "));
  }
}
