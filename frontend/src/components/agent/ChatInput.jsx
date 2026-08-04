import { useRef, useState } from "react";
import "./Chat.css";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  function handleSend() {
    const text = message.trim();
    if (!text) return;
    onSend(text);
    setMessage("");
    if (textareaRef.current) textareaRef.current.style.height = "50px";
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  function handleChange(event) {
    setMessage(event.target.value);
    event.target.style.height = "50px";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-box">
        <textarea
          ref={textareaRef}
          value={message}
          rows={1}
          placeholder="Ask anything about AIGONIC AI..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-label="Message AIGONIC AI"
        />
      </div>
    </div>
  );
}

export default ChatInput;
