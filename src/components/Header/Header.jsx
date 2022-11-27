import React from "react";
import { Menu }from "../../components";

const Header = () => {
  return (
    <div className="header">
      <div className="container flex-row">
        <div>Hello</div>
        <div className="no-space">
          <span className="input input--makiko">
            <input className="input__field input__field--makiko" type="text" id="input-16" placeholder="search"></input>
            <label className="input__label input__label--makiko" htmlFor="input-16">
              <span className="input__label-content input__label-content--makiko">Search</span>
            </label>
          </span>
          <div>0906.326.658</div>
          <div>bhousevn.design@gmail.com</div> 
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
};
export default Header