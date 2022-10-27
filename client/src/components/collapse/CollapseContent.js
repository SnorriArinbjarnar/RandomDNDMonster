import React from "react";
import "../collapse/collapse.css";

function CollapseContent({data, type, mod}){
    if (type === "objStringInfo") {
        return (
          <div className="text-center">
            {Object.keys(data).map((key, index) => {
              return (
                <React.Fragment>
                  <b>{key}</b>
                  <ul style={{listStyleType: "none"}}>
                    {data[key]
                      .split(";")
                      .join(",")
                      .replace('bludgeoning,','bludgeoning.')
                      .replace('piercing,','piercing.')
                      .split(',')
                      .map( d => d.replace(/[\.]/g, ','))
                      .map((d) => {
                        return <li >{d}</li>;
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
       
       
      }
    
}

export default CollapseContent;