import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/logo.png";
import { LOGIN, MENU_ITEMS, SEARCH } from "../../constants";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { useStateValue } from "../../contextAPI/StateProvider";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ title }) => {
  return <p>{title}</p>;
};

function Header() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [{ basket }, dispatch] = useStateValue();
  const toCheckout = () => {
    history.push("/checkout");
  };
  const toHome = () => {
    history.push("/");
  };
  const toSearch = () => {
    dispatch({
      type: "SET_SEARCH",
      search: search,
    });
    setSearch("");
    history.push("/search");
  };
  return (
    <header className="header">
      <div className="header-1st">
        <img
          onClick={toHome}
          style={{ cursor: "pointer" }}
          src={logo}
          alt="logo"
        />
        <div className="header-1st-div">
          <div className="header-1st-div-input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder={SEARCH}
            />
          </div>
          <div onClick={toSearch} className="header-1st-div-icon">
            <SearchIcon />
          </div>

          <div
            onClick={toCheckout}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <ShoppingCartOutlinedIcon />
            <span className="header-1st-div-num">{basket?.length}</span>
          </div>
          <PersonOutlineIcon style={{ marginLeft: "20px" }} />
          <button className="header-1st-div-btn">{LOGIN}</button>
        </div>
      </div>
      <div className="header-2st">
        {MENU_ITEMS.map((item, idx) => (
          <Item key={idx} title={item} />
        ))}
      </div>
    </header>
  );
}

Item.propTypes = {
  title: PropTypes.string,
};

export default Header;
