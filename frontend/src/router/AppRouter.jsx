import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyOTP from "../pages/VerifyOTP";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Talk from "../pages/Talk";
import Services from "../pages/Services";
import AIExperienceLab from "../pages/services/AIExperienceLab";
import AIWorkshops from "../pages/services/AIWorkshops";
import AICareerPrograms from "../pages/services/AICareerPrograms";
import TeacherTraining from "../pages/services/TeacherTraining";
import CorporateTraining from "../pages/services/CorporateTraining";
import AIConsulting from "../pages/services/AIConsulting";
import AISchoolCurriculum from "../pages/services/AISchoolCurriculum";
import AIProducts from "../pages/services/AIProducts";
import AIResearch from "../pages/services/AIResearch";
import StartupIncubation from "../pages/services/StartupIncubation";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "talk",
        element: <Talk />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/ai-experience-lab",
        element: <AIExperienceLab />,
      },
      {
        path: "services/ai-workshops",
        element: <AIWorkshops />,
      },
      {
        path: "services/ai-career-programs",
        element: <AICareerPrograms />,
      },
      {
        path: "services/teacher-training",
        element: <TeacherTraining />,
      },
      {
        path: "services/corporate-training",
        element: <CorporateTraining />,
      },
      {
        path: "services/ai-consulting",
        element: <AIConsulting />,
      },
      {
        path: "services/ai-school-curriculum",
        element: <AISchoolCurriculum />,
      },
      {
        path: "services/ai-products",
        element: <AIProducts />,
      },
      {
        path: "services/ai-research",
        element: <AIResearch />,
      },
      {
        path: "services/startup-incubation",
        element: <StartupIncubation />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
