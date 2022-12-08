import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = true;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <i className="fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {user ? (
              <Link className="link" to="/">
                LOGOUT
              </Link>
            ) : (
              <Link className="link" to="/login">
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}
