import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainCTA from "./components/MainCTA";
import MediaOutlets from "./components/MediaOutlets";

function App() {
  return (
    <div className="flex flex-col align-center items-center p-5 bg-darkBlue">
      <Navbar />
      <MainCTA />
      <MediaOutlets />
    </div>
  );
}

export default App;
