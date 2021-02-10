import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Login from './components/Login';
const RightNav = (props) => {
  const { open, setOpen } = props;
  return (
    <NavStyle>
      <Ul open={open}>
        <ul className="menu">
          {/*   <li>
            <h2>
              <NavLink
                exact
                to="/Login"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Login
              </NavLink>
            </h2>
          </li> */}
          <li>
            <h2>
              <NavLink
                exact
                to="/HomeStart"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Home
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/add"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Transaktion
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/charts"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Charts
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/"
                onClick={() => setOpen(!open)}
                // activeClassName="selected"
              >
                Logout
              </NavLink>
            </h2>
          </li>
          {/* <li>
            <h2>
              <NavLink
                to="/test"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                TEST
              </NavLink>
            </h2>
          </li> */}
        </ul>
        {/* <div className="dark-mode">
          <button>dark</button>
        </div> */}
      </Ul>
    </NavStyle>
  );
};
const NavStyle = styled.div`
  background: #0066ff;
  width: 50%;
  z-index: 30;
  .selected {
    color: #fff;
    text-decoration-line: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
  }
  h2 {
    position: relative;
    width: 100%;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    color: #fff;
    margin: 0rem auto 0;
  }
  h2 > a {
    text-decoration: none;
    color: #fff;
    z-index: 1;
  }

  h2 > a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: #fff;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  h2 > a:hover:before,
  h2 > a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  a:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    background: lime;
  }
  // Small devices (landscape phones, less than 768px)
  @media (min-width: 767.98px) {
    background: blue;
    width: 90%;
  }

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) {
    background: green;
    width: 90%;
  }
  // Large devices (desktops, less than 1200px)
  @media (min-width: 1199.98px) {
    background: #078a1d;
    width: 70%;
  }
  // Large devices (desktops, less than 1200px)
  @media (min-width: 1679.98px) {
    background: magenta;
    width: 50%;
  }
`;

const Ul = styled.div`
  list-style: none;
  display: flex;

  .menu {
    flex: 1 1 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }
  .dark-mode {
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 2rem;
    }
    & button:nth-child(1) {
      background-color: transparent;
      color: #fb8f1d;
      &:hover {
        background-color: #fb8f1d;
        color: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #2b2d5b;
    box-shadow: 10px 8px 16px 0 rgba(0, 0, 0, 0.2),
      10px 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-110%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 70vw;
    padding-top: 10vh;
    transition: transform 0.3s ease-in-out;
    h2 > a:before {
      top: 30px;
      left: 0;
    }
    .menu {
      flex: 1 1 30%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      width: 80%;
    }
    li {
      color: #fff;
      padding: 1.3rem 0rem;
    }
    a {
      font-size: 1.4rem;
    }

    .dark-mode {
      margin-top: 2rem;
      button {
        margin: 1.5rem;
      }
    }
  }
`;
export default RightNav;
