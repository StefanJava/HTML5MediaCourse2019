import StudentMain from "./controller/StudentMain";

let app = new StudentMain();
let root = document.createElement("div");
document.body.appendChild(root);
app.$mount(root);
