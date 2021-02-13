import "./App.css";
import Complex from "./useReducer/ComplexReducer";
import Simple from "./useReducer/SimpleReducer";
import ContextProvider from "./context_api/Context";
import CompA from "./context_api/CompA";

function App() {
  return (
    <div className="App">
      {/* <Simple /> this is for reducer
      <Complex /> this is for reducer */}
      <ContextProvider value="hii">
        <CompA />
      </ContextProvider>
    </div>
  );
}

export default App;
