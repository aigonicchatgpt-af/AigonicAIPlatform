import "./Chat.css";

function Message({ sender, text, time }) {

  const isUser = sender === "user";

  return (

    <div className={`message-row ${isUser ? "user" : "bot"}`}>

      {!isUser && (

        <div className="message-avatar">

          🤖

        </div>

      )}

      <div className={`message-bubble ${isUser ? "user-bubble" : "bot-bubble"}`}>

        <div className="message-text">

          <p
            style={{
              whiteSpace: "pre-wrap",
              margin: 0,
            }}
          >
            {String(text)}
          </p>

        </div>

        <div className="message-bottom">

          <span className="message-time">

            {time}

          </span>

          {isUser && (

            <span className="message-status">

              ✓✓

            </span>

          )}

        </div>

      </div>

      {isUser && (

        <div className="message-avatar user-avatar">

          👤

        </div>

      )}

    </div>

  );

}

export default Message;