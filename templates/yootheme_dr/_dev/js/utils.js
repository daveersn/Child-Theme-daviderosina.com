import { util as u } from "uikit";

export default function parseOptions(element, attrString) {
  let attrs = {};

  let values = u.attr(element, attrString);
  values = values.split(";");

  values.forEach((attr) => {
    let name = attr.split(":")[0] ?? "";
    let value = attr.split(":")[1] ?? "";

    name = name.trim();
    value = value.trim();

    attrs[name] = value;
  });

  return attrs;
}
