import React from "react";
import HeaderPage from "./Header";
import Main from "./Main";

const WelcomePage = () => {
  return (
    <div>
      <div className="login-header-postion">
        <HeaderPage></HeaderPage>
      </div>
      <div>
        <Main></Main>
      </div>
    </div>
  );
};
export default WelcomePage;
