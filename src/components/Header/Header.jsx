import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/icons/logo.png";
import { useHistory } from "react-router";

const HeaderStyles = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -3px 50px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 30px 30px;

  .header-content {
    width: 1342px;
    height: 180px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1342px) {
      width: 100%;
      height: 120px;
      padding: 0 16px;
    }

    @media (max-width: 1342px) {
      height: 74px;
    }

    .logo_container {
      display: flex;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
        margin-right: 37px;
      }
      .logo-text {
      }

      @media (max-width: 576px) {
        margin: 0 auto;

        img {
          width: 26px;
          height: 26px;
          margin-right: 14px;
        }
        .logo-text {
          font-size: 15px;
        }
      }
    }
    .links_container {
      .link {
        color: #2c2738;
        text-decoration: none;

        &:nth-child(2) {
          margin: 0 45px;
        }
      }
      .active-nav-link {
        color: #14a38b;
      }

      @media (max-width: 576px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        width: 100%;
        height: 74px;
        box-shadow: 0px -3px 50px rgba(0, 0, 0, 0.1);
        border-radius: 30px 30px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 22px;
      }
    }
  }
`;

function Header(props) {
  const history = useHistory();
  return (
    <HeaderStyles>
      <div className="header-content">
        <div
          className="logo_container"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} alt="" />
          <h2 className="logo-text font-xl font-500">CheapShark</h2>
        </div>
        <div className="links_container">
          <NavLink
            activeClassName="active-nav-link"
            className="link font-600 font-md"
            to="/"
          >
            Deals
          </NavLink>
          <NavLink
            activeClassName="active-nav-link"
            className="link font-600 font-md"
            to="/games"
          >
            Games
          </NavLink>
          <NavLink
            activeClassName="active-nav-link"
            className="link font-600 font-md"
            to="/stores"
          >
            Stores
          </NavLink>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
