import CardHello from "components/Card/CardHello";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_COUNT, RESET_COUNT } from "store/reducers/count/action";
import { SET_USER, RESET_USER } from "store/reducers/user/action";
import typeStore from "store/type";

function App() {
  const { count } = useSelector((state: typeStore) => state.count); // การดึง count ที่อยู่ใน redux store มา
  const { email } = useSelector((state: typeStore) => state.user);

  const dispatch = useDispatch(); //การเรียกใช้งาน dispatch
  const [useCount, setCount] = useState(count);
  const [useName, setName] = useState(email);

  console.log("indexPage");

  useEffect(() => {
    dispatch({
      type: SET_COUNT, //ดึง type
      payload: {
        //ข้อมูลที่แนบไปด้วย
        count: useCount,
        name: useName,
      },
    });
    dispatch({
      type: SET_USER,
      payload: {
        email: useName,
      },
    });
  }, [useCount, useName]);

  return (
    <div className="w-full h-screen text-center vertical">
      <header className="App-header">
        <CardHello />
      </header>
      <section className="mt-[24px]">
        Current count : {useCount}
        <br />
        Name : {useName}
        <br />
        <div className="mt-[24px] flex gap-[8px] justify-center">
          <button
            className="border-2 p-[4px]"
            onClick={() => setCount(useCount + 1)}
          >
            Increment +
          </button>
          <button
            className="border-2 p-[4px]"
            onClick={() => setCount(useCount - 1)}
          >
            Decrement -
          </button>
          <button className="border-2 p-[4px]" onClick={() => setCount(0)}>
            RESET COUNT
          </button>
          <button
            className="border-2 p-[4px]"
            onClick={() => setName("TeeTime")}
          >
            Name Time
          </button>
          <button className="border-2 p-[4px]" onClick={() => setName("")}>
            ค่าว่าง Name
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
