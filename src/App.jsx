import Header from "./assets/components/Header";
import Home from "./assets/components/pages/Home";

function App() {
  return (
    <div className="w-full h-[2000px] flex flex-col justify-start text-main-green font-quicksand">
      <Header />
      <Home />
    </div>
  );
}

export default App;
