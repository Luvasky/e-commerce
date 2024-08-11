import * as lib from "./libraries/EntryPoint/libraries";

const App = () => {
  return (
    <lib.BrowserRouter>
      <lib.Routes>
        <lib.Route path="/" element={<lib.Home></lib.Home>}></lib.Route>
      </lib.Routes>
    </lib.BrowserRouter>
  );
};

export default App;
