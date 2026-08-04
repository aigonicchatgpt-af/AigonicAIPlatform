import "./Chat.css";

function ChatHeader({ onClose }) {
  return (
    <div className="chat-header">

      <div className="header-left">

        <div className="header-avatar">
          🤖
        </div>

        <div className="header-info">

          <div className="header-title">

            <h3>AiGONIC AI</h3>

            <span className="ai-chip">
              AI
            </span>

          </div>

          <div className="header-status">

            <span className="status-dot"></span>

            <span>Online • Ready to help</span>

          </div>

        </div>

      </div>

      <div className="header-actions">

        <button
          className="header-btn"
          title="More"
        >
          ⋮
        </button>

        <button
          className="header-btn"
          onClick={onClose}
          title="Close"
        >
          ✕

        </button>

      </div>

    </div>
  );
}

export default ChatHeader;