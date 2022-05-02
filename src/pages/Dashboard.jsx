import React from "react";
import typeStore from "store/type";
import { useSelector } from "react-redux";
import NavbarPage from "components/Navbar/NavbarPage";
import Authen from "components/hoc/Authen";
import styled from "styled-components";

function Dashboard() {
  const { role } = useSelector((state: typeStore) => state.user);
  return (
    <div>
      <NavbarPage />
      <div className="flex w-full h-[750px]">
        <img
          src="https://images.pexels.com/photos/1006115/pexels-photo-1006115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="float-left"
        />
        <div className="flex justify-center w-full h-full bg-[#598d61] ">
          <span className="absolute  text-[45px] top-[35%] left-[55%] text-[#fff] font-bold">
            HOME by : {role}
          </span>
          <img
            src="https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" p-[10%] "
          />
        </div>
      </div>
    </div>
  );
}
const ComponentLeft = styled.div`
  background-image: url("https://i.pinimg.com/originals/58/d1/c5/58d1c54252fcfda94625df488971cc9e.jpg");
  background-size: cover;
  width: auto;
  height: auto;
`;
export default Dashboard;
