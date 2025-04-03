import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import { useLottie } from "lottie-react";
// import animationData from "../../utils/button.json";
import animationData from "../../utils/btn.json";
import UserContext from "components/context/userContext";
import { useRouter } from "next/router";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(options);

  const u = useContext(UserContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          router.reload();
        })
        .catch((error) => {
          // An error happened.
        });
    } catch (e) {
      alert(e.message);
    }
    handleClose();
  };

  return (
    <nav style={{ backgroundColor: "#f7fafc" }} className="bg-transparent ">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto" />
        </Link>

        {/* <h1
          class="
         font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Eat Smart
        </h1> */}
        {u && (
          <ul className="flex">
            <li className="hover:cursor-pointer hover:scale-95 shadow-md rounded-3xl w-full  right-0">
              <div>
                <Avatar
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  alt="Cindy Baker"
                  className=""
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </div>
            </li>
          </ul>
        )}
        {!u && (
          <ul className="flex">
            <li
              onClick={() => {
                router.push("/register");
              }}
              className="hover:cursor-pointer hover:scale-95 shadow-md rounded-3xl w-full  right-0"
            >
              {View}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
