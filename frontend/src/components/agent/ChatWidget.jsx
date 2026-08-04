import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import "./Chat.css";

import {
  sendChatMessage,
  saveCareerDetails,
  saveServiceLead,
  uploadResume,
} from "../../api/chatApi";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to AiGONIC Innovations Pvt Ltd.\n\nHow can I help you today?",
      time: "Now",
    },
  ]);

  const [careerMode, setCareerMode] = useState(false);
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [serviceMode, setServiceMode] = useState(false);
  const [waitingResume, setWaitingResume] = useState(false);
  const [candidateEmail, setCandidateEmail] = useState("");

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function addBotMessage(text) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text,
        time: getCurrentTime(),
      },
    ]);
  }

  async function handleSend(message) {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
        time: getCurrentTime(),
      },
    ]);

    const msg = message.toLowerCase().trim();

    // ======================
    // Quick Replies
    // ======================

    if (msg === "services") {
      setServiceMode(true);

      addBotMessage(`Please provide:

Name:
Company:
Email:
Mobile:
Service:
Requirement:
Budget:`);

      return;
    }

    if (msg === "career") {
      setCareerMode(true);
      setShowCareerForm(true);

      return;
    }

    if (msg === "about company") {
      addBotMessage(
        "AiGONIC Innovations Pvt Ltd builds practical AI solutions for businesses, education, and enterprise teams.\n\nWe help organisations use AI through intelligent software, automation, training, and future-ready learning programmes."
      );
      return;
    }

    if (msg === "contact") {
      addBotMessage(
        "Our team would be happy to help. Please share what you would like to discuss, or visit the Contact page to send us your details."
      );
      return;
    }

    // ======================
    // Service Lead
    // ======================

    if (serviceMode) {
      try {
        const form = {};

        message.split("\n").forEach((line) => {
          const parts = line.split(":");
          if (parts.length >= 2) {
            form[parts[0].trim().toLowerCase()] =
              parts.slice(1).join(":").trim();
          }
        });

        const lead = {
          name: form.name || "",
          company: form.company || "",
          email: form.email || "",
          mobile: form.mobile || "",
          service: form.service || "",
          requirement: form.requirement || "",
          budget: form.budget || "",
        };

        await saveServiceLead(lead);

        setServiceMode(false);

        addBotMessage(
          "✅ Thank you.\n\nYour enquiry has been submitted successfully."
        );

        return;
      } catch {
        addBotMessage("❌ Failed to submit enquiry.");
        return;
      }
    }

    // ======================
    // Career
    // ======================

    if (careerMode) {
      try {
        const form = {};

        message.split("\n").forEach((line) => {
          const parts = line.split(":");
          if (parts.length >= 2) {
            form[parts[0].trim().toLowerCase()] =
              parts.slice(1).join(":").trim();
          }
        });

        const candidate = {
          name: form.name || "",
          email: form.email || "",
          mobile: form.mobile || "",
          experience: form.experience || "",
          role: form.role || "",
        };

        await saveCareerDetails(candidate);

        setCandidateEmail(candidate.email);
        setCareerMode(false);
        setWaitingResume(true);

        addBotMessage(
          "✅ Details received.\n\nPlease upload your resume."
        );

        return;
      } catch {
        addBotMessage("❌ Unable to save career details.");
        return;
      }
    }

    // ======================
    // Gemini Chat
    // ======================

    try {
      setTyping(true);

      const response = await sendChatMessage(message);

      addBotMessage(
        response.reply ||
          response.message ||
          "Sorry, I couldn't understand."
      );
    } catch {
      addBotMessage("❌ Something went wrong.");
    } finally {
      setTyping(false);
    }
  }

  async function handleResumeUpload(file) {
    if (!waitingResume) {
      addBotMessage(
        "Please submit your career details first."
      );
      return;
    }

    try {
      setTyping(true);

      const response = await uploadResume(
        candidateEmail,
        file
      );

      addBotMessage(
        response.message ||
          "✅ Resume uploaded successfully."
      );

      setWaitingResume(false);

      window.setTimeout(() => {
        setMessages([
          {
            sender: "bot",
            text: "Hello! Welcome to AiGONIC Innovations Pvt Ltd.\n\nHow can I help you today?",
            time: "Now",
          },
        ]);
      }, 1600);
    } catch {
      addBotMessage("❌ Resume upload failed.");
    } finally {
      setTyping(false);
    }
  }

  async function handleCareerSubmit(candidate) {
    try {
      setTyping(true);
      await saveCareerDetails(candidate);
      setCandidateEmail(candidate.email);
      setCareerMode(false);
      setShowCareerForm(false);
      setWaitingResume(true);
      addBotMessage("Great — your details are saved. Upload your resume below to complete your application.");
    } catch {
      addBotMessage("Unable to save your career details. Please try again.");
    } finally {
      setTyping(false);
    }
  }

  function handleQuickReply(value) {
    handleSend(value);
  }

 return (
  <div className="chat-widget">
    <ChatButton
      isOpen={isOpen}
      toggleChat={() => setIsOpen(!isOpen)}
    />

    {isOpen && (
      <ChatWindow
        messages={messages}
        typing={typing}
        onSend={handleSend}
        onQuickReply={handleQuickReply}
        onResumeUpload={handleResumeUpload}
        showResumeUploader={waitingResume}
        showCareerForm={showCareerForm}
        onCareerSubmit={handleCareerSubmit}
        onCancelCareer={() => { setShowCareerForm(false); setCareerMode(false); }}
        onClose={() => setIsOpen(false)}
      />
    )}
  </div>
);
}
export default ChatWidget;
