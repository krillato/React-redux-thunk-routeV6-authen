import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { SET_USER, RESET_USER } from "store/reducers/user/action";
import { useDispatch, useSelector } from "react-redux";
import typeStore from "store/type";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  useEffect(() => {
    /* localStorage.removeItem("token");
    localStorage.removeItem("role"); */
    dispatch({
      type: RESET_USER,
      payload: {
        email: "",
        role: "",
        token: "",
        time: "",
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (email !== "" && password !== "") {
      if (email === "user@gmail.com" && password === "123456") {
        let time = Date.now();

        dispatch({
          type: SET_USER,
          payload: {
            email: email,
            role: "user",
            token: "sdfgserthfgh234235fgjdfgjdasdas",
            time: time,
          },
        });
        alert("USER");
        history("/user");
      } else if (email === "admin@gmail.com" && password === "123456") {
        let time = Date.now();

        dispatch({
          type: SET_USER,
          payload: {
            email: email,
            role: "admin",
            token: "sdfgserthfgh234235fgjdfgjdasdas",
            time: time,
          },
        });
        alert("ADMIN");
        history("/admin");
      } else {
        alert("อีเมล หรือ รหัสไม่ถูกเด้อ");
      }
    } else {
      alert("กรอกไม่ครบ");
    }

    console.log("Login", email, password);
  };
  return (
    <>
      <Background className="w-full h-[753px]">
        <div className="w-full h-[700px] flex justify-center items-center">
          {" "}
          <form
            onSubmit={handleSubmit}
            className="w-[800px]  h-[500px] rounded-md shadow-2xl table-column  justify-between  text-center   bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            <div className="ml-[20%] mt-[10%]">
              <div className=" flex">
                <BsFillPersonFill className="w-[40px] h-[50px] mr-[15px]" />
                <input
                  type="email"
                  className="w-[65%] h-[50px] rounded-xl shadow-md p-5  border-[none] "
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>

              <br />
              <div className=" flex">
                <RiLockPasswordLine className="w-[40px] h-[50px] mr-[15px]" />
                <input
                  type="password"
                  className="w-[65%] h-[50px] rounded-xl shadow-md p-5  border-[none]"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <br />
            <Button
              type="submit"
              className="w-[120px] h-[60px] rounded-xl  bg-gradient-to-r from-purple-500 to-pink-500"
            >
              LOGIN
            </Button>
            <div className="m-[50px] ">
              <span className="text-[18px] text-[#fff]">
                User : user@gmail.com 123456
              </span>
              <br />
              <span className="text-[18px] text-[#fff]">
                Admin : admin@gmail.com 123456
              </span>
            </div>
          </form>
        </div>
      </Background>
    </>
  );
}

const Button = styled.button`
  cursor: pointer;

  color: #fff;
  border: "2px solid pink";
  font-size: 17px;
  border-radius: 5px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background: #4ee27a;
    color: #fff;
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

const Background = styled.div`
  background-image: url("https://i.pinimg.com/originals/58/d1/c5/58d1c54252fcfda94625df488971cc9e.jpg");
  background-size: cover;
`;

export default Login;
