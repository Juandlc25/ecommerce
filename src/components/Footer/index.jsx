import React from "react";
import { ABOUT, POLITICS } from "../../constants";
import "./style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PropTypes from "prop-types";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Icons = ({ Icon }) => {
  return (
    <div className="icon">
      <Icon />
    </div>
  );
};

const Items = ({ items, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {items ? (
        items.items.map((item, idx) => <p key={idx}>{item}</p>)
      ) : (
        <div className="icons">
          <Icons Icon={FacebookIcon} />
          <Icons Icon={TwitterIcon} />
          <Icons Icon={InstagramIcon} />
          <Icons Icon={YouTubeIcon} />
        </div>
      )}
    </div>
  );
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-div">
          <Items title={POLITICS.title} items={POLITICS} />
          <Items title={ABOUT.title} items={ABOUT} />
          <Items title="SÍGUENOS EN:" />
        </div>
      </div>
      <span className="footer-msg">
        &copy; Copyright Colombia. Todos los derechos reservados.
      </span>
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
  }),
  title: PropTypes.string,
};

Icons.propTypes = {
  Icon: PropTypes.elementType,
};

export default Footer;
