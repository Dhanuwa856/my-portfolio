import React from "react";

const NavBarLink = (props) => {
  return (
    <a
      className="font-body text-sm capitalize lg:hover:text-[#4F46E5] cursor-pointer duration-1000  border rounded-[70px] w-[85%] lg:w-auto mx-auto p-2 shadow-md hover:bg-accent hover:border-white lg:border-0 lg:shadow-none lg:hover:bg-transparent lg:mx-0 lg:rounded-none lg:p-0"
      href={props.link_url}
    >
      {props.link_name}
    </a>
  );
};

export default NavBarLink;
