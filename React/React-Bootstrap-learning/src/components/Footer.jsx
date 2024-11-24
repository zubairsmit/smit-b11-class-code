import React from "react";
import facebookIcon from "../../assets/img/facebook-icon.svg";
import instagramIcon from "../../assets/img/instagram-icon.svg";
function Footer() {
  return (
    <div class="footer">
      <footer>
        <div class="social">
          <h4>Stay Connected!</h4>
          <ul>
            <li>
              <a href={"#"} target="_blank">
                <img src={facebookIcon} alt="Visit us at Facebook." />
              </a>
            </li>
            <li>
              <a href={"#"} target="_blank">
                <img src={instagramIcon} alt="Visit us on Instagram." />
              </a>
            </li>
          </ul>
        </div>
        <address>
          Wall of Wonder <br />
          RBC Plaza
          <br />
          60 South 6th Street
          <br />
          Minneapolis, MN 55402
        </address>
      </footer>
    </div>
  );
}

export default Footer;
