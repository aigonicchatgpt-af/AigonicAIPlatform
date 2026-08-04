import "./Chat.css";

const replies = [
  {
    icon: "🚀",
    label: "AI Services",
    desc: "Explore our AI Solutions",
    value: "services",
  },
  {
    icon: "💼",
    label: "Careers",
    desc: "Apply for Jobs",
    value: "career",
  },
  {
    icon: "📞",
    label: "Contact",
    desc: "Talk with our Team",
    value: "contact",
  },
  {
    icon: "🏢",
    label: "About",
    desc: "Know about AIGONIC",
    value: "About Company",
  },
];

function QuickReplies({ onSelect }) {
  return (
    <div className="quick-section">

      <div className="section-title">

        <h4>How can we help?</h4>

      </div>

      <div className="quick-grid">

        {replies.map((item) => (

          <button
            key={item.label}
            className="quick-card"
            onClick={() => onSelect(item.value)}
          >

            <div className="quick-icon">

              {item.icon}

            </div>

            <div className="quick-content">

              <h5>{item.label}</h5>

              <p>{item.desc}</p>

            </div>

            <span className="quick-arrow">
              →
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickReplies;
