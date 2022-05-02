import React from "react";

function CardHello() {
  return (
    <code className="text-3xl font-bold underline border-2 rounded-lg p-[8px] ">
      Status Project : {process.env.NODE_ENV} |{" "}
      {process.env.REACT_APP_STATUS_PROJECT}
    </code>
  );
}

export default CardHello;
