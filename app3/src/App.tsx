import React from "react";
import CounterAppThree from "./components/CounterAppThree";

const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <>
    <div>I am microfrontend three</div>
    <CounterAppThree />
  </>
);

export default App;
