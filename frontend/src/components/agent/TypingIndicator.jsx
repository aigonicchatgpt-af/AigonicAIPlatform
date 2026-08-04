import "./Chat.css";

function TypingIndicator() {

  return (

    <div className="message-row bot">

      <div className="message-avatar">

        🤖

      </div>

      <div className="typing-card">

        <div className="typing-title">

          <strong>AIGONIC AI</strong>

          <span>typing...</span>

        </div>

        <div className="typing-dots">

          <span></span>

          <span></span>

          <span></span>

        </div>

      </div>

    </div>

  );

}

export default TypingIndicator;