import React, {useState} from 'react';
import "../collapse/collapse.css";
import "./CollapseContent";
import CollapseContent from './CollapseContent';

function Collapse({label, data, mod, type}) {
    const [isOn, setOn] = useState(false);
    const handleClick = (evt) => {
        setOn(!isOn);
    };

  
    return (
        <li className="list-group-item p-0">
        <button type="button" className=" collapsible w100" onClick={handleClick}>
          {label}
        </button>
        <div className={isOn ? "content show text-justify" : "content text-left"}>
          <CollapseContent data={data} type={type} mod={mod} />
        </div>
      </li>
    );
}

export default Collapse;