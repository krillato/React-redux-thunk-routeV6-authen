import React from "react";

import NavbarPage from "components/Navbar/NavbarPage";
import styled from "styled-components";
import typeStore from "store/type";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function AdminPage() {
  const { email } = useSelector((state: typeStore) => state.user);

  return (
    <div className="m-0 p-0 w-full h-full">
      <Background>
        <NavbarPage />
        <div className="h-[753px]">
          <div className="m-[5%] border-2 bg-[#ffffffc7] min-w-[40%] max-w[100%] min-h-[70%] max-h-[100%]">
            <h3 className=" m-[30px] text-[25px]">Admin Login</h3>
            <h1 className=" m-[30px] font-bold text-[35px] text-[auto] text">
              {email}
            </h1>
            <h1 className=" m-[30px]  text-auto text">
              When it comes to losing weight, many women are able to come up
              with an unlimited number of excuses as to why they can’t lose
              weight or excuses as to why this important issue should be pushed
              off to the side for now. Many women are lacking the motivation
              needed to lose weight.
            </h1>
            <Button className="w-[200px] h-[50px] bg-[#4ee27a] text-[#000]  shadow-md  m-auto mt-[35px] mr-5">
              <Link to="/Login">
                <span className=" text-[25px] ">Log out</span>
              </Link>
            </Button>
          </div>
        </div>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background-image: url("https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
`;

const Button = styled.button`
  cursor: pointer;

  color: #fff;
  border: "2px solid pink";
  font-size: 17px;
  border-radius: 5px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  float: right;

  &:hover {
    background: #d2d43f;
    color: #fff;
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

export default AdminPage;
