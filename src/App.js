import "./App.css";
import Routes from "./common/routes";
import StateContextProvider from "./common/state";
import config from "./config";

if (config.APP_ENV === "dev") {
  const VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

function App() {
  return (
    <StateContextProvider>
      <Routes />
    </StateContextProvider>
  );
}

export default App;
