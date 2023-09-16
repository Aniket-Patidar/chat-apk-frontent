import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../userSclice/userSclice";

function login() {
  const router = useRouter();

  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  async function handelLogin() {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, displayName, photoURL },
    } = await signInWithPopup(firebaseAuth, provider);

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log(data);
        if (data.status) {
          dispatch(setUserInfo(data?.data));
          router.push("/");
        }
        if (!data.status) {
          console.log(email, displayName, photoURL, "not exist");
          dispatch(
            setUserInfo({
              email,
              name: displayName,
              avatar: photoURL,
            })
          );
          return router.push("/onboarding");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image
          src="/whatsapp.gif"
          width={300}
          height={300}
          alt="whatsapp"
        ></Image>
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button
        onClick={handelLogin}
        className="text-4xl text-white flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg "
      >
        <FcGoogle />
        <span>Login with Goggle</span>
      </button>
    </div>
  );
}

export default login;
