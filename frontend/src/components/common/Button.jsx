function Button({
  text,
  type = "submit",
  onClick,
}) {
  return (
    <button
      type={type}
      className="login-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;