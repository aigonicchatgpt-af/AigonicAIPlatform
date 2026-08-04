import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackToServices() {
  const navigate = useNavigate();

  function goBack() {
    // Returning through history preserves the user's position in the services grid.
    if (window.history.length > 1) navigate(-1);
    else navigate("/services");
  }

  return <button type="button" className="back-link" onClick={goBack}><ArrowLeft size={16} /> All services</button>;
}

export default BackToServices;
