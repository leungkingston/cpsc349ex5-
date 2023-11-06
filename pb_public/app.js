const USERNAME = "leungkingston@gmail.com";
const PASSWORD = "adminadmin";
import PocketBase from "https://cdnjs.cloudflare.com/ajax/libs/pocketbase/0.8.0-rc1/pocketbase.es.mjs";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", null, "Hello, ", authData.admin.email));
}
