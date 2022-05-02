import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import typeStore from "store/type";

const authen = (Component) => (props) => {
  const email = useSelector((state: typeStore) => state.user);
  //console.log("Email Authen:", email.token);
  const history = useNavigate();
  console.log("เรียกใช้งาน Authen");

  useEffect(() => {
    (async () => {
      const token = await verifyToken();

      console.log(email.time);

      const useTime = email.time;
      const nowTime = Date.now();
      //console.log(new Date(time));
      /* if (new Date(time2.getTime() + 3600 * 1000) > new Date(time2.getTime())) {
        console.log("ยังไม่หมดเวลา");
      } */
      if (!token || token !== "sdfgserthfgh234235fgjdfgjdasdas") {
        alert("Token ไม่ถูกต้อง");
        history("/login");
      } else if (nowTime - useTime > 1000 * 60 * 60) {
        alert("หมดเวลา");
        history("/login");
      } else {
        console.log("Token ยังใช้งานได้");
      }
    })();
  }, []);
  const verifyToken = async () => {
    //const token = localStorage.getItem("token");
    const token = email.token;
    return token;
  };
  return <Component {...props} />;
};

export default authen;
