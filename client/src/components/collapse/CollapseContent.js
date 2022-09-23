import React from "react";
import "../collapse/collapse.css";
import "../collapse/content.css";

function CollapseContent({data, type, mod}){
    if (type === "objStringInfo") {
        return (
          <div>
            {Object.keys(data).map((key, index) => {
              return (
                <React.Fragment>
                  <b>{key}</b>
                  <ul className="list-group">
                    {data[key]
                      .split(";")
                      .join(",")
                      .split(/(?<!piercing|bludgeoning)[,]/g)
                      .map((d) => {
                        return <li className="list-group-item">{d}</li>;
                      })}
                  </ul>
                </React.Fragment>
              );
            })}
          </div>
        );
      } else if (type === "objAllInfo") {
        return Object.keys(data).map((key, index) => {
          return (
            <p className="text-center">
              <b>{key}</b> : {mod === "+" ? "+" : ""}
              {data[key]}
              {mod === "ft" ? "ft" : ""}
            </p>
          );
        });
      } else if (type === "objArrValInfo") {
        return(
            
            data.map((d) => (
            <p className="text-justify">
                <b>{d["name"]}</b>: {d["desc"]}
            </p>
            ))
            
            );

      } 
      else if(type === 'objString'){
        return (
            <div className="text-center">
              {data.split(",").map((d) => {
                return <p>{d}</p>;
              })}
            </div>
          );
      }
      else {
        // something
       
      }
    
}

export default CollapseContent;