import { Routes, Route } from "react-router-dom";

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
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
      {/* Tasks */}
      <Route path="/listtask" element={<ListTaskPage />} />
      <Route path="/addtask" element={<AddTaskPage />} />
      <Route path="/task/:id" element={<DetailsTask />} />
      {/* User */}
      <Route path="/listuser" element={<ListUserPage />} />
      <Route path="/adduser" element={<AddUserPage />} />
      <Route path="/edituser" element={<EditUserPage />} />
      <Route path="/user/:id" element={<DetailsUserPage />} />
      {/* Agenda */}
      {/* Reports */}
      {/* Templates */}
      <Route path="/template/forms" element={<FormsPage />} />
    </Routes>
  );
}

export default AppRoutes;
