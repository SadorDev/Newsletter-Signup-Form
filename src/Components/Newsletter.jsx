import React, { useState } from "react";
import listIcon from "../assets/images/icon-list.svg";
import wallpaper from "../assets/images/illustration-sign-up-desktop.svg";
import mobileWallpaper from "../assets/images/illustration-sign-up-mobile.svg";
import SuccessPage from "./SuccessPage";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const images = [listIcon, listIcon, listIcon];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      setIsValid(true);
    }
  };

  const handleReturnToHome = () => {
    setIsValid(false);
    setEmail(""); 
  };

  if (isValid) {
    return <SuccessPage email={email} onReturnToHome={handleReturnToHome} />;
  }

  return (
    <main className="container">
      <div className="form_container">
        <div className="form_content">
          <h1> Stay updated! </h1>
          <p> Join 60,000+ product managers receiving monthly updates on: </p>
          <ul>
            {images.map((imgSrc, index) => (
              <li className="list_icon" key={index}>
                <img src={imgSrc} alt="List Icon" />
                {index === 0 && (
                  <span>Product discovery and building what matters</span>
                )}
                {index === 1 && (
                  <span>Measuring to ensure updates are a success</span>
                )}
                {index === 2 && <span>And much more!</span>}
              </li>
            ))}
          </ul>
          <form className="form" onSubmit={handleSubmit}>
            <span> Email Address</span>
            <input
              type="email"
              name="myInput"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit"> Subscribe to monthly newsletter</button>
          </form>
        </div>

        <div className="form_wallpaper">
          <img src={wallpaper} alt="wallpaper" />
          <img src={mobileWallpaper} alt="Mobile wallpaper" />
        </div>
      </div>
    </main>
  );
};

export default NewsletterForm;