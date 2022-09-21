import React, {useState} from 'react';
import "../collapse/collapse.css";
import "./CollapseContent";
import CollapseContent from './CollapseContent';

function Collapse({label, data}) {
    const [isOn, setOn] = useState(false);
    const handleClick = (evt) => {
        setOn(!isOn);
    };

    const dataType = (data) => {
        if (typeof data === "string") {
        return 1;
        } else {
        if (Array.isArray(data)) {
            return 2;
        } else {
            return 3;
        }
        }
    };

    return (
        <li className="list-group-item p-0">
        <button type="button" className=" collapsible w100" onClick={handleClick}>
          {label}
        </button>
        <div className={isOn ? "content show text-justify" : "content text-left"}>
          <CollapseContent data={data} type={dataType(data)} />
        </div>
      </li>
    );
}

export default Collapse;