import EmailIcon from "@/assets/EmailIcon";
import Logo from "@/assets/Logo";
import { footerLinks, socialLinks } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="container mt-9">
      <div className="company-details mb-4">
        <div className="right">
          <div className="logo mb-2">
            <Logo />
          </div>
          <div className="links mb-3">
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
      <div className="social-links mt-4">
        <ul>
          {socialLinks.map((link, i) => (
            <li>
              <a href={link.url}>
                {link.icon}{" "}
                <span className="visually-hidden">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="registration-details">
        <p>
          Cohere, Registered in. England and Wales, Registered Address: Dean
          Farm, Oaksey, Malmesbury, Wilts, SN16 9SB. <br /> UK Charity No:
          1153638 / Uganda NGO cert. INDR10385305NB / Kenya NGO cert.
          OP.218/051/12-0511/8654.
        </p>
      </div>
      <div className="social-links"></div>
    </footer>
  );
};

export default Footer;
