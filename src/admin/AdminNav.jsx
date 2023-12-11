import React, { useRef } from "react";

import { Container, Row } from "reactstrap";

import useAuth from "../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

import { toast } from 'react-toastify'
import { NavLink, useNavigate, Link } from "react-router-dom";
import "../styles/admin-nav.css";
import { motion } from "framer-motion";
import { setAdmin } from '../redux/slices/adminSlice'
import AreaVerde from './Assets/AreaVerde.png'
import userIcon from '../assets/images/user-icon.png'
import { useDispatch } from "react-redux";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },

  {
    display: "Add Product",
    path: "/dashboard/add-product",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const currentUser = useAuth();
  const profileActionRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setAdmin(false));
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/Inicio");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <div>
                  <img src={AreaVerde} alt="Area Verde logo" />
                </div>
              </div>

              <div className="search__box">
                <input type="text" placeholder="Search...." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <div className="profile">
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={
                      currentUser && currentUser.photoURL
                        ? currentUser.photoURL
                        : userIcon
                    } alt="user"
                    onClick={toggleProfileActions}
                  />
                  <div className="profile_actions"
                    ref={profileActionRef}
                    onClick={toggleProfileActions}
                  >
                    <div className="d-flex flex-column">
                      <span>
                        <Link to="/dashboard">Dashboard</Link>
                      </span>
                      <span onClick={logout}>Logout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass =>
                        navClass.isActive ? "admin__menu-active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
