import "./App.css";
import LoadData from "./Fetch/LoadData";
import LoadDataAPI from "./Fetch/LoadDataAPI";
import LoadDataUsingFolderJSON from "./Fetch/LoadDataUsingFolderJSON";
import UseEffect from "./Hooks/UseEffect";
import UseState from "./Hooks/UseState";

function App() {
  return (
    // <UseState></UseState>;
    // <UseEffect></UseEffect>
    // <LoadData></LoadData>
    // <LoadDataUsingFolderJSON></LoadDataUsingFolderJSON>
    <LoadDataAPI></LoadDataAPI>
  );
}

export default App;
