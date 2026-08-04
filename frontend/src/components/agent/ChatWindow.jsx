import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import ResumeUploader from "./ResumeUploader";
import CareerApplication from "./CareerApplication";
import TypingIndicator from "./TypingIndicator";
import "./Chat.css";

function ChatWindow({
  messages = [],
  typing = false,
  onSend = () => {},
  onQuickReply = () => {},
  onResumeUpload = () => {},
  showResumeUploader = false,
  showCareerForm = false,
  onCareerSubmit = () => {},
  onCancelCareer = () => {},
  onClose = () => {},
}) {
  const bottomRef = useRef(null);
  const careerFormRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    if (showCareerForm) {
      careerFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showCareerForm]);

  return (
    <div className="chat-window">

      <ChatHeader onClose={onClose} />

      <div className="chat-body">

        {/* Welcome Card */}

        <div className="welcome-card">

          <div className="welcome-orb welcome-orb-one"></div>
          <div className="welcome-orb welcome-orb-two"></div>

          <div className="welcome-top">

            <div className="welcome-avatar">
              🤖
            </div>

            <div className="welcome-content">

              <span className="welcome-kicker"><i></i> AiGONIC AI ASSISTANT</span>

              <h2>
                How can I help today?
              </h2>

              <p>
                Ask anything or choose a quick action below.
              </p>

              <span className="welcome-tag">
                ✨ AI Powered
              </span>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <QuickReplies
          onSelect={onQuickReply}
        />

        {showCareerForm && (
          <div ref={careerFormRef}>
            <CareerApplication onSubmit={onCareerSubmit} onCancel={onCancelCareer} submitting={typing} />
          </div>
        )}

        {/* Messages */}

        <div className="messages-area">

          {messages.length === 0 ? (

            <Message
              sender="bot"
              text={`👋 Hello!

Welcome to AiGONIC Innovations Pvt Ltd.

How can I help you today?`}
              time="Now"
            />

          ) : (

            messages.map((msg, index) => (

              <Message
                key={index}
                sender={msg.sender}
                text={msg.text}
                time={msg.time}
              />

            ))

          )}

          {typing && <TypingIndicator />}

          <div ref={bottomRef}></div>

        </div>

      </div>

      <div className="chat-footer">

        {showResumeUploader && (
          <ResumeUploader
            onUpload={onResumeUpload}
          />
        )}

        <ChatInput
          onSend={onSend}
        />

      </div>

    </div>
  );
}

export default ChatWindow;
