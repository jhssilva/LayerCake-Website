import "./App.css";
import Navbar from "./Navbar";

function App() {
  const listNavItems = [
    { key: 1, value: "Tools", isActive: true, ref: "" },
    { key: 2, value: "Ingredients", isActive: false, ref: "" },
    { key: 3, value: "Recipe", isActive: false, ref: "" },
    { key: 4, value: "Step", isActive: false, ref: "" },
    { key: 5, value: "Decoration", isActive: false, ref: "" },
    { key: 6, value: "About me", isActive: false, ref: "" },
  ];

  return (
    <div className="App">
      <Navbar list={listNavItems} />
    </div>
  );
}

export default App;
