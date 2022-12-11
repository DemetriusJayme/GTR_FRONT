import { Routes, Route } from "react-router-dom";

/* Links Rotas */
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import TasksPage from "../pages/TasksPage";
import NotificationPage from "../pages/NotificationPage";
import PageForms from "../pages/template/PageForms";
import ProtectRoute from "./ProtectRoute";

function MainContent() {
  return (
    <main className="w-full p-7 h-max pb-20	bg-gray-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model-form" element={<PageForms />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/profile"
          element={<ProtectRoute Component={ProfilePage} />}
        />
        <Route path="/tasks" element={<ProtectRoute Component={TasksPage} />} />
        <Route
          path="/notificacoes"
          element={<ProtectRoute Component={NotificationPage} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default MainContent;
