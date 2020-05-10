import "./styles/application.css";

import Vue from "vue";
// import VueGlide from "vue-glide-js";
// import "vue-glide-js/dist/vue-glide.css";
// import vueSmoothScroll from "vue-smooth-scroll";
import SvgIcon from "vue-svgicon";
import "./components/icons";

// Vue.use(vueSmoothScroll);
// Vue.use(VueGlide);
Vue.use(SvgIcon, {
  tagName: "icon",
  // isOriginalDefault: true,
  defaultWidth: "0.9em",
  defaultHeight: "0.9em",
});

/* https://saber.land/docs/manipulating-head.html#set-default-values */
export default ({ setHead }) => {
  setHead({
    htmlAttrs: { lang: "en" },
    meta: [
      {
        name: "google-site-verification",
        content: "codegoeshere",
      },
      {
        // pinterest
        name: "p:domain_verify",
        content: "codegoeshere",
      },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@dekadao" },
      {
        name: "twitter:image",
        content: "https://avatars2.githubusercontent.com/u/50001808?s=460&v=4",
      },
      { name: "twitter:image:alt", content: "Tiep Pham" },
    ],
    // favicon
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // polyfill intersection-bserver
    script: [
      { src: "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" },
    ],
  });
};
