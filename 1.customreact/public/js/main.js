import App from "../../src/App";
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const customDom = (initialValue) => {
    const obj = {
      root: initialValue,
      render: function (element) {
        const domElement = document.createElement(element.type);
        domElement.innerHTML = element.children;
        for (let prop in element.props) {
          if (prop === "children") continue;
          domElement.setAttribute(prop, element.props[prop]);
        }
        this.root.appendChild(domElement);

        return obj;
      },
    };
    return obj;
  };

  customDom(root).render(App());
});
