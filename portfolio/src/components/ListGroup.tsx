import React from "react";

function ListGroup() {

    const items = ['BLR','HYD','CHENNAI','DEL','WB','Pune']

    

    return (
        <><h1>LIST</h1><ul className="list-group">
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul></>
    );
}

export default ListGroup;