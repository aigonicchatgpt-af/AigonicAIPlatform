import "./Chat.css";

function ChatButton({ isOpen, toggleChat }) {
  return (
    <button
      className={`chat-button ${isOpen ? "active" : ""}`}
      onClick={toggleChat}
      aria-label={isOpen ? "Close AiGONIC Agent" : "Open AiGONIC Agent"}
      title={isOpen ? "Close Chat" : "Chat with AiGONIC AI"}
    >
      {isOpen ? (
        <span className="chat-close">✕</span>
      ) : (
        <>
          <span className="chat-ring"></span>

          <span className="chat-notification">
            1
          </span>

          <div className="chat-icon">
            🤖
          </div>

          <div className="chat-label">
            <span>AiGONIC</span>
          </div>
        </>
      )}
    </button>
  );
}

export default ChatButton;