import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

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
      </AuthContextComponent>
    </div>
  );
}

export default App;
