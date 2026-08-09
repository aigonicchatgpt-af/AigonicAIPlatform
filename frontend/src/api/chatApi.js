import axios from "axios";

// ===============================
// Axios Instance
// ===============================

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://aigonicaiplatform-production.up.railway.app",
  timeout: 30000,
});

// ===============================
// Session ID
// ===============================

function getSessionId() {
  let sessionId = localStorage.getItem("session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
  }

  return sessionId;
}

// ===============================
// Common Error Handler
// ===============================

function handleError(error) {
  console.error("API Error:", error);

  if (error.response) {
    throw new Error(
      error.response.data?.detail ||
        error.response.data?.message ||
        "Server Error"
    );
  }

  if (error.request) {
    throw new Error("Unable to connect to the server.");
  }

  throw error;
}

// ===============================
// AI Chat
// ===============================

export async function sendChatMessage(message) {
  try {
    const response = await API.post("/chat/message", {
      message,
      session_id: getSessionId(),
    });

    return response.data;
  } catch (error) {
    handleError(error);
  }
}

// ===============================
// Career Details
// ===============================

export async function saveCareerDetails(candidate) {
  try {
    const response = await API.post("/career/details", candidate);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

// ===============================
// Service Lead
// ===============================

export async function saveServiceLead(lead) {
  try {
    const response = await API.post("/services/lead", lead);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

// ===============================
// Resume Upload (🔥 FIXED)
// ===============================

export async function uploadResume(email, file) {
  try {
    if (!email) {
      throw new Error("Candidate email is missing.");
    }

    if (!file) {
      throw new Error("Resume file is missing.");
    }

    const formData = new FormData();

    // 🔥 ALL REQUIRED FIELDS
    formData.append("email", email);
    formData.append("name", "AiGONIC");        // later dynamic
    formData.append("mobile", "9344372201");   // later dynamic
    formData.append("role", "AI Engineer");
    formData.append("experience", "Fresher");

    formData.append("resume", file); // 👈 IMPORTANT

    const response = await API.post(
      "/career/upload-resume",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export default API;