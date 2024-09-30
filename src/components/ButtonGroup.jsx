import React from "react";

const ButtonGroup = ({ href, value, clsName }) => {
  return (
    href != null ?
      <a href={href}>
        <button className={`btn-group ${clsName}`}>{value}</button>
      </a> :
      <button className={`btn-group ${clsName}`}>{value}</button>
  )
}

export default ButtonGroup;
