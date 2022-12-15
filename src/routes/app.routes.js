import { Routes, Route } from "react-router-dom";

import ProtectRoute from "../components/ProtectRoute";

import HomePage from "../pages/HomePage";
/* Access - Validate */
import LoginPage from "../pages/controller/LoginPage";
import NotificationPage from "../pages/controller/NotificationPage";
import SignUpPage from "../pages/controller/SignUpPage";
import ProfilePage from "../pages/controller/ProfilePage";
/* Tasks */
import ListTaskPage from "../pages/task/ListTaskPage";
import AddTaskPage from "../pages/task/AddTaskPage";
import DetailsTask from "../pages/task/DetailsTask";
/* Routes Users */
import ListUserPage from "../pages/user/ListUserPage";
import AddUserPage from "../pages/user/AddUserPage";
import EditUserPage from "../pages/user/EditUserPage";
import DetailsUserPage from "../pages/user/DetailsUserPage";
/* Agenda */
import AgendaPage from "../pages/agenda/AgendaPage";
/* Reports */
import ReportPage from "../pages/report/ReportPage";
/* ChatBot */
import ChatBotPage from "../pages/chatbot/ChatBotPage";
/* Templates */
import FormsPage from "../pages/template/FormsPage";
/* ErrorPage */
import ErrorPage from "../pages/ErrorPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Controlers */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/log-out" element={<LoginPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
      {/* Tasks */}
      <Route path="/task" element={<ListTaskPage />} />
      <Route
        path="/task/new"
        element={<ProtectRoute Component={AddTaskPage}></ProtectRoute>}
      />
      <Route path="/task/:id" element={<DetailsTask />} />
      {/* User */}
      <Route path="/users" element={<ListUserPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/edit-user/:userId" element={<EditUserPage />} />
      <Route path="/user/:userId" element={<DetailsUserPage />} />
      {/* Agenda */}
      <Route path="/agenda" element={<AgendaPage />} />
      {/* Reports */}
      <Route path="/report" element={<ReportPage />} />
      {/* ChatBot */}
      <Route path="/chatbot" element={<ChatBotPage />} />
      {/* Templates */}
      <Route path="/template/forms" element={<FormsPage />} />
    </Routes>
  );
}

export default AppRoutes;
