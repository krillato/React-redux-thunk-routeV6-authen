import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbaruser() {
  return (
    <div className="w-full">
      <div className="flex justify-end h-[70px]   text-[21px] p-0 m-0 overflow-hidden bg-[#f8f8f8]">
        <ul>
          <Link to="/dashboard">
            <Li className="text-[white]">Home</Li>
          </Link>
          <Link to="/user">
            <Li>User</Li>
          </Link>
          <Link to="/login">
            <Li>LOGOUT</Li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
const Li = styled.li`
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #1111111f;
    border-radius: 40%;
  }
`;

export default Navbaruser;
