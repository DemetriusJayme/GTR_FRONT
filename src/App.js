import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import FooterBar from "./components/FooterBar";

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
