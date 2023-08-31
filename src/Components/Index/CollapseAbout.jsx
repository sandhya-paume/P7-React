import React, { useState } from 'react';
import '../../Components/Style/CollapseAbout.css';

/*function Collapse({ title, options }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <button
        className="btn btn-primary"
        onClick={toggleCollapse}
        aria-expanded={isCollapsed ? "false" : "true"}
      >
        {title}
      </button>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : ''}`}>
        {options.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div>
    </div>
  );
}*/

export default Collapse;
