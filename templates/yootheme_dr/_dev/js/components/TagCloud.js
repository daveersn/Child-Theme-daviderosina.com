import BasicComponent from "./BasicComponent";
import { util as u, icon as Icon } from "uikit";
const tagCloud = require("TagCloud");

export default class TagCloud extends BasicComponent {
  constructor(element) {
    super(element, "tag-cloud");
    this.options = this.attrs.options;
    this.items = this.attrs.items.map((item) => this._buildItem(item));

    this.media = null;
    this._setMediaQueries();

    this.tagCloud = this._createTagCloud();
  }

  _buildItem(item) {
    let container = u.fragment("<div class='uk-text-center uk-panel'></div>");

    if (item.icon) {
      let icon = u.fragment(
        `<div class="el-image uk-preserve " uk-icon="${item.icon}"></div>`,
      );

      u.append(container, icon);
    }

    if (item.title) {
      let title = document.createElement(this.options.titleElement ?? "div");
      title.innerText = item.title;

      u.addClass(title, "el-title uk-margin-small-top");
      u.append(container, title);
    }

    return container.outerHTML;
  }

  _createTagCloud() {
    // Destroy previous instance if exists
    if (this.tagCloud) {
      this.tagCloud.destroy();
    }

    return tagCloud(this.element, this.items, {
      useHTML: true,
      radius: this._getWidth(),
      maxSpeed: "slow",
    });
  }

  _setMediaQueries() {
    let mediaQueries = {
      "2xl": matchMedia("(min-width: 1600px)"),
      xl: matchMedia("(max-width: 1599px)"),
      l: matchMedia("(max-width: 1199px)"),
      m: matchMedia("(max-width: 959px)"),
      s: matchMedia("(max-width: 639px)"),
    };

    Object.entries(mediaQueries).forEach(([key, media]) => {
      if (media.matches) {
        this.media = key;
      }

      media.addEventListener("change", (e) => {
        if (!e.matches) {
          return;
        }

        this.media = key;
        // Recreate TagCloud instance on media change
        this.tagCloud = this._createTagCloud();
      });
    });
  }

  _getWidth() {
    let defaultValue = 200;

    switch (this.media) {
      case "2xl":
        return this.options.radius["2xl"] ?? defaultValue;
      case "xl":
        return this.options.radius["xl"] ?? defaultValue;
      case "l":
        return this.options.radius["l"] ?? defaultValue;
      case "m":
        return this.options.radius["m"] ?? defaultValue;
      case "s":
        return this.options.radius["s"] ?? defaultValue;
      default:
        return defaultValue;
    }
  }
}
