import activeSuccess from "../assets/images/icon-success.svg";
import "../SuccessPage.css";

const SuccessPage = ({ email, onReturnToHome }) => {
  console.log(email);
  return (
    <main className="success_container">
      <img className="success_tick" src={activeSuccess} alt="Successful tick" />
      <div className="success_content">
        <h1> Thanks for subscribing! </h1>
        <p className="email">
          A confirmation email has been sent to 
          <span className="email_object">{email}</span> 
          <br />
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <button type="button" onClick={onReturnToHome}>
        Dismiss Message
      </button>
    </main>
  );
};

export default SuccessPage;
