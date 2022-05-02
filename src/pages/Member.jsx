import React, { useEffect, useState } from "react";
import NavbarPage from "components/Navbar/NavbarPage";
import typeStore from "store/type";
import { useSelector, useDispatch } from "react-redux";
import { GET_MEMBER } from "store/reducers/member/action";
import styled from "styled-components";

function Member() {
  const { email, role } = useSelector((state: typeStore) => state.user);
  const { member } = useSelector((state: typeStore) => state.member);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_MEMBER,
      payload: {
        member: "",
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = search;
    console.log(name);

    const SearchData = () =>
      fetch(`https://api.github.com/users/${name}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch({
            type: GET_MEMBER,
            payload: {
              member: data,
            },
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    SearchData();
  };

  return (
    <div>
      <NavbarPage />

      <div className="w-full h-[500px]  text-center">
        {" "}
        <h1 className="m-5 text-[35px]">Enter the Github Username</h1>
        <form onSubmit={handleSubmit} className="p-0 m-5">
          <input
            type="text"
            className="border-2 rounded-lg w-[40%] h-[50px] p-5"
            placeholder="Enter name"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button type="submit" className="border-2 m-5 h-[50px]">
            Search
          </Button>
        </form>
        <div className=" flex justify-center text-center">
          {member.message !== "Not Found" && member !== "" ? (
            <ul role="list" className="p-6 divide-y divide-slate-200">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <img
                  className="h-20 w-20 rounded-full"
                  src={member.avatar_url}
                  alt=""
                />
                <div className="ml-4 mt-4 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">
                    {member.name}
                  </p>
                  <p className="text-sm text-slate-500 truncate">{email}</p>
                </div>
              </li>
            </ul>
          ) : (
            <h1>empty</h1>
          )}
        </div>
      </div>
    </div>
  );
}

const Button = styled.button`
  cursor: pointer;

  color: #000;
  border: "2px solid pink";
  font-size: 17px;
  border-radius: 5px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background: #51b3ec;
    color: #fff;
    border: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

export default Member;
