import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change_night_mode } from "../../redux/actions/StudentAction";
import { current } from "../../redux/actions/Actions";

import dark_logo from "../../Assets/images/dark-logo.png";
import light_logo from "../../Assets/images/light-logo.png";

import "react-slidedown/lib/slidedown.css";
const HeaderS = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.LoginReducer);

  const [changeNightMode, setChangeNightMode] = useState(false);

  useEffect(() => {
    dispatch(current());
    /* eslint-disable-next-line*/
  }, []);

  const handleChangeNightMode = () => {
    setChangeNightMode(!changeNightMode);
    dispatch(change_night_mode(changeNightMode));
  };
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      <header className="header clearfix">
        <div className="main_logo" id="logo">
          <Link to="/">
            <img src={dark_logo} alt="" />
          </Link>
          <Link to="/">
            <img src={light_logo} className="logo-inverse" alt="" />
          </Link>
        </div>
        <div className="top-category">
          <Link to="/dashboard-instructor" className="item channel_item">
            Home
          </Link>
          <Link to="/students-list" className="item channel_item">
            Students List
          </Link>
          <Link to="/checkpoints" className="item channel_item">
            Checkpoints
          </Link>
          <Link to="/meetings" className="item channel_item">
            Meetings
          </Link>
          <Link to="/workshops" className="item channel_item">
            Workshops
          </Link>
        </div>

        <div className="header_right">
          <ul>
            <li></li>

            <li className="ui s-dropdown active visible" tabIndex={0}>
              {Object.keys(user).length === 0 ? (
                <div className="preloader header-preloader">
                  <div className="container">
                    <div className="row  ">
                      <div className="circle loading-animation"></div>
                      <div className="line line4 loading-animation"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  className="opts_account"
                  title="Account"
                  onClick={() => setOpen(!open)}
                >
                  <img src={user.profileImg} alt="user" />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </Link>
              )}

              <Dropdown open={open}>
                <div className="dropdown" tabIndex={-1}>
                  <div className="channel_my">
                    <div className="profile_link">
                      <img src={user.profileImg} alt="" />
                      <div className="pd_content">
                        <div className="rhte85">
                          <h6>
                            {user.firstName} {user.lastName}
                          </h6>
                          <div className="mef78" title="Verify">
                            <i className="uil uil-check-circle" />
                          </div>
                        </div>
                        <span>{user.email}</span>
                      </div>
                    </div>
                    <div className="night_mode_switch__btn">
                      <Link
                        id="night-mode"
                        className="btn-night-mode"
                        onClick={handleChangeNightMode}
                      >
                        <i className="uil uil-moon" /> Night mode
                        <span className="btn-night-mode-switch">
                          <span className="uk-switch-button" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Link to="/instructor-profile" className="item channel_item">
                    View My Profile
                  </Link>
                  <Link
                    to="/change-password-instructor"
                    className="item channel_item"
                  >
                    Change Password
                  </Link>
                  {/* eslint-disable-next-line */}
                  <a
                    style={{ cursor: "pointer" }}
                    className="item channel_item"
                    onClick={() => Logout()}
                  >
                    Sign Out
                  </a>
                </div>
              </Dropdown>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default HeaderS;
