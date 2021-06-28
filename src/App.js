import StateLessComponent from "./demo-components/StateLessComponent";
import StateFullComponent from "./demo-components/StateFullComponent";
import ExampleDivComponent from "./example-div-component/index";
import "./App.css";

function App() {
  return (
    <div>
      {/* gọi component */}
      {/* <StateLessComponent />
      <StateFullComponent /> */}
      <ExampleDivComponent />
    </div>
  );
}

export default App;
