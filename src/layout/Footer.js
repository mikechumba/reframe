import EmailIcon from "@/assets/EmailIcon";
import Logo from "@/assets/Logo";
import { charityReg, footerLinks, socialLinks } from "@/utils/constants";
import { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="container mt-9">
      <div className="company-details mb-4">
        <div className="right">
          <div className="logo mb-2">
            <Logo />
            
          </div>
          <div className="links mt-1 mb-3">
            <nav aria-label="Secondary Navigation">
              <ul>
                {footerLinks.map((link, i) => (
                  <li key={`footer-link-${i + 1}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <address>
            <a className="flex flex-row align-items-center fg-2" href="mailto:info.reframe@wearecohere.org">
              <EmailIcon />{' '}info.reframe@wearecohere.org
            </a>
          </address>
        </div>
        <div className="address">
          <address>
            <span>Kenya Office</span> <br />
            Wamagata Court <br />
            Woodley, Nairobi <br />
            P.O Box 61716-00200
          </address>
        </div>
      </div>
      <hr />
      
      <div className="registration-details">
        <p>
          Cohere, Registered in. England and Wales, Registered Address: Dean
          Farm, Oaksey, Malmesbury, Wilts, SN16 9SB. <br />
        </p>
        <ul className="flex flex-row align-item-center justify-content-center fg-2">
          {charityReg.map((reg, i) => (
            <Fragment key={`reg-${i+1}`}>
              <li >{reg}</li>
              {i + 1 < charityReg.length && <hr />}
            </Fragment>
          ))}
        </ul>
        <p></p>
      </div>
      <div className="social-links mt-0 mb-4">
        <ul>
          {socialLinks.map((link, i) => (
            <li key={`social-${i+1}`}>
              <a href={link.url}>
                {link.icon}{" "}
                <span className="visually-hidden">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
