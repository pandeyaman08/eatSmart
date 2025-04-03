import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { useRouter } from "next/router";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../footer";
import Header from "../header";

const UserState = (props) => {
  const [user, setUser] = useState();
  const router = useRouter();

  const [bmi, setBmi] = useState();
  const [size, setSize] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        // console.log("logged out ");
        // router.push("/");
      }
    });
  }, [auth]);

  const data = user;

  return (
    <UserContext.Provider value={data}>
      {/* <Header /> */}


      {props.children}

      {/* <Footer /> */}
    </UserContext.Provider>
  );
};

export default UserState;
