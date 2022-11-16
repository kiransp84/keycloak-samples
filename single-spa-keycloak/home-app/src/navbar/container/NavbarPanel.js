import React from "react";

/*
* some issue in JSX transpilation 
* getting this error https://github.com/facebook/react/issues/20359
*/
function renderItems(items) {
    return (
        <React.Fragment>
            {
                ( <ul>
                  <li>{items[0]}</li> 
                  <li>{items[1]}</li> 
                  <li>{items[2]}</li> 
                  <li>{items[3]}</li> 
                  <li>{items[4]}</li> 
                  </ul>)
            }
        </React.Fragment>
    );
}

export default ({data,reloadMenu}) => {
    console.log(' menu data ',data);
    if(data && data.items && data.items.length > 0 )
    data.items.map( label => { console.log(label)} )
    return data && data.items && data.items.length > 0 ? (
        <div><nav>
        <div>
            Brand
        </div>
        <div>
            {renderItems(data.items)}
        </div>
      </nav>
      <button type="button" onClick={reloadMenu} >Test </button>
      </div>
    ):
    <></>;
     
}