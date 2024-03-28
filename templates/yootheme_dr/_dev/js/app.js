import { util as u } from "uikit";
import TagCloud from "./components/TagCloud";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import RandomBlobManager from "./components/RandomBlob/RandomBlobManager";
import projectsSection from "./components/ProjectsSection";
import scrollSmoother from "./components/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

scrollSmoother();

u.ready(() => {
  u.$$("[tag-cloud]").forEach((element) => new TagCloud(element));
  u.$$("[random-blob-container]").forEach(
    (element) => new RandomBlobManager(element),
  );

  projectsSection();
});
