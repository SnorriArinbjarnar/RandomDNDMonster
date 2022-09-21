import React from "react";
import "../collapse/collapse.css";
import "../collapse/content.css";

function CollapseContent({data, type, mod}){
    if (type === 2) {
        delete data["damage_dice"];
        delete data["attack_bonus"];
    
        return (
          <div>
            {data.map((d) => {
              return (
                <p className="text-justify">
                  {Object.keys(d).map((key, idx) =>
                    key === "name" ? <b className="me-2">{d[key]}</b> : d[key]
                  )}
                </p>
              );
            })}
          </div>
        );
      } else if (type === 1) {
        return (
          <div className="text-center">
            {data.split(",").map((d) => {
              return <p>{d}</p>;
            })}
          </div>
        );
      } 
      else if(type === 4){
        const regex = /(?<!piercing|bludgeoning)[,]/g
        return (
          <div className="text-center">
            {Object.keys(data).map((key, index) => {
              return (
                <React.Fragment>
                  <b>{key}</b>
                  <ul className="list-group">
                    {data[key]
                      .split(";")
                      .join(",")
                      .split(regex)
                      .map((d) => {
                        return (
                          <li className="list-group-item">
                            {d}
                          </li>
                        );
                      })}
                  </ul>
                </React.Fragment>
              );
            })}
          </div>
        );
      }
      else {
        // ef object
        return (
          <div className="text-center">
            {Object.keys(data).map((key, index) => {
              return (
                <p>
                  <b>{key}</b> : {data[key]}{mod}
                </p>
              );
            })}
          </div>
        );
      }
}

export default CollapseContent;