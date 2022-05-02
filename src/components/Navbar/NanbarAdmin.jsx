import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nanbaradmin() {
  return (
    <div className="w-full">
      <div className="flex justify-end h-[70px]    text-[21px] p-0 m-0 overflow-hidden bg-[#f8f8f8]">
        <ul className=" ">
          <Link to="/dashboard">
            <Li className="">Home</Li>
          </Link>
          <Link to="/Member">
            <Li>Member</Li>
          </Link>
          <Link to="/Admin">
            <Li className="mr-10">Admin</Li>
          </Link>
          <Link to="/login">
            <Li className="">LOGOUT</Li>
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

export default Nanbaradmin;
