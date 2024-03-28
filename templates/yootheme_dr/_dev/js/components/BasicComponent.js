import { util as u } from "uikit";

export default class BasicComponent {
  constructor(element, attr) {
    this.element = element;
    this.attrs = JSON.parse(u.attr(this.element, attr) ?? "{}");
    u.attr(this.element, attr, "");
  }
}
