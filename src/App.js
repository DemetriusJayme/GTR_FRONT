import NavBar from "./components/structure/NavBar";
import SideBar from "./components/structure/SideBar";
import MainContent from "./components/structure/MainContent";
import FooterBar from "./components/structure/FooterBar";

import { AuthContextComponent } from "./contexts/authContext";

function App() {
  return (
    <div className="app">
      <AuthContextComponent>
        <NavBar />
        <div className="flex">
          <SideBar />
          <MainContent />
        </div>
        <FooterBar />
      </AuthContextComponent>
    </div>
  );
}

export default App;
