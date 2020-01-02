import MainApp from "./controller/MainApp";

let rootElement = document.createElement("div");
document.body.appendChild(rootElement);

new MainApp().$mount(rootElement);
