import React from "react";

function UsedTools({ title, tools }) {
  return (
    <div className="section_description">
      <h2>{title}</h2>
      <ul className="section_list">
        {tools.map((toolList) => {
          return (
            <ul>
              {toolList.map((tool) => (
                <li className="section_list__item">{tool}</li>
              ))}
            </ul>
          );
        })}
      </ul>
    </div>
  );
}

export default UsedTools;
