import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

import { AiOutlineCamera } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import PhotoPicker from "@/components/common/PhotoPicker";
import PhotoLibrary from "@/components/common/PhotoLibrary";
import CapturePhoto from "@/components/common/CapturePhoto";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_USER_ROUTE } from "@/utils/ApiRoutes";
import { setError } from "../../userSclice/userSclice";
import { useRouter } from "next/router";

function onboarding() {
  const { userInfo, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const [hidden, setHide] = useState(false);

  const [libHidden, setlibHidden] = useState(false);

  const [camera, setCamra] = useState(false);

  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  });

  const [image, setImage] = useState(
    "http://localhost:8080/uploads/default_avatar.png"
  );
  const [file, setFile] = useState("");

  const camraRef = useRef();
  const optionRef = useRef();
  const refFile = useRef();
  const libaryRef = useRef();
  const libImg = useRef();

  useEffect(() => {
    if (!userInfo.email) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (hidden) {
      camraRef.current.classList.add("hidden");
    } else {
      camraRef.current.classList.remove("hidden");
    }
  }, [hidden, setHide]);

  function handeloptions(e) {
    console.log(e.clientX);
    setAxis({ ...axis, x: e.pageX });
    optionRef.current.classList.toggle("hidden");
  }

  function handelUpload() {
    refFile.current.click();
  }

  async function handelSubmitUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);
    console.log(formData, file);
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/uploadImg",
      formData
    );

    if (data.success) {
      console.log(data);
      console.log("http://localhost:8080/" + data.data.path);
      setImage("http://localhost:8080/" + data.data.path);
    }
  }

  const form = useRef();

  function Handlechange() {
    setFile(refFile.current.files[0]);
    optionRef.current.classList.toggle("hidden");
    setTimeout(() => {
      form.current.click();
    }, []);
  }

  function removeImage() {
    setImage("/default_avatar.png");
    optionRef.current.classList.toggle("hidden");
  }

  const [username, setName] = useState(userInfo.name);
  async function handelSignUp(e) {
    e.preventDefault();
    let userData = {
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
      email: userInfo.email,
      avatar: image,
    };
    const { data } = await axios.post(SIGNUP_USER_ROUTE, userData);
    if (!data.status) {
      dispatch(setError(data.msg));
    }
    if (data.status) {
      router.push("/");
    }

    e.target[0].value = "";
    e.target[1].value = "";
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6 relative">
        <div className="flex justify-center items-center gap-2 text-white">
          <Image
            src="/whatsapp.gif"
            width={250}
            height={250}
            alt="whatsapp"
          ></Image>
          <span className="text-6xl">Whatsapp</span>
        </div>
        <h1 className="text-white text-2xl capitalize">create your profile</h1>
        <div className="w-[100%] flex items-center justify-center gap-5">
          <form action="" onSubmit={handelSignUp} className="text-white">
            <div className="flex flex-col gap-5 w-[20%]">
              <div className="w-[100%]">
                <p className="text-white text-1xl mb-2">Name</p>
                <input
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  required
                  name="name"
                  className=" px-2 h-[40px] w-[15vw] bg-input-background rounded-md"
                  type="text"
                />
              </div>
              <div className="w-[100%]">
                <p className="text-white text-1xl mb-2">Description</p>
                <input
                  required
                  name="dec"
                  className="h-[40px]  w-[15vw] bg-input-background rounded-md"
                  type="text"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button className="text-white rounded-lg bg-black p-3 w-fit text-1xl ">
                SignUp
              </button>
            </div>
          </form>
          <div
            className="relative w-10xl h-10xl cursor-pointer"
            onMouseEnter={(e) => {
              setHide(false);
            }}
            onMouseLeave={() => setHide(true)}
          >
            <div
              className="overlay absolute bg-photopicker-overlay-background w-[100%] h-[100%] flex flex-col items-center justify-center text-white "
              ref={camraRef}
              onClick={handeloptions}
            >
              <AiOutlineCamera className="text-4xl "></AiOutlineCamera>
              <p>change the photo</p>
            </div>
            <Image
              className="rounded-full w-[250px] h-[250px]"
              src={image}
              width={230}
              height={230}
              alt="Profile Img"
            ></Image>

            <div
              className={`absolute left-0 top-0 text-white bg-dropdown-background p-2 rounded-md text-1xl z-90 cursor-pointer hidden`}
              ref={optionRef}
            >
              <p onClick={handelUpload}>Upload Image</p>
              <p onClick={() => setlibHidden(true)}>Libeary image</p>
              <p onClick={() => setCamra(true)}>Click a Photo</p>

              {camera && (
                <CapturePhoto
                  setImage={setImage}
                  setCamra={setCamra}
                ></CapturePhoto>
              )}

              {libHidden && (
                <PhotoLibrary
                  setlibHidden={setlibHidden}
                  setImage={setImage}
                ></PhotoLibrary>
              )}

              <PhotoPicker
                handelSubmitUpload={handelSubmitUpload}
                Handlechange={Handlechange}
                refFile={refFile}
                form={form}
              ></PhotoPicker>

              <p className="w-full" onClick={removeImage}>
                Remove Image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default onboarding;
