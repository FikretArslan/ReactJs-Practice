import React from "react";

const SectionItem = ({ title, part1, part2, part3 }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      <ul>
        <li>{part1}</li>
        <li>{part2}</li>
        <li>{part3}</li>
      </ul>
    </div>
  );
};

export default SectionItem;
