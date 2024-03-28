import { util as u } from "uikit";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function () {
  u.wrapInner(
    u.$("body > .tm-page"),
    '<div id="smooth-wrapper"><div id="smooth-content">',
  );

  u.$$("[class*='tm-header']").forEach((header) => {
    u.before(u.$("#smooth-wrapper"), header);
  });

  window.ScrollSmoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0,
  });

  // Prevent UIkit scrollTo and use GSAP's
  u.on("[uk-scroll]", "beforescroll", (e) => {
    if (window.innerWidth < 960) {
      return;
    }

    e.preventDefault();
    window.ScrollSmoother.scrollTo(e.detail[1], true);
  });
}
