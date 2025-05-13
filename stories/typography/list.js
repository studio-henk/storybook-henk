// import "./list.css";

export const createList = ({
  listType = "ul",
  markerType = "disc",
  items = ["item 1", "item 2"],
}) => {
  const list = document.createElement(listType);

  if (items) {
    for (let item of items) {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    }
  }

  // classes
  const classNames = ["henk-list"];
  if (listType === "ul") {
    if (markerType) {
      classNames.push(`henk-list--${markerType}`);
    }
  }

  list.className = classNames.join(" ");

  return list;
};
