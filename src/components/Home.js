import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

 
const Home = () => {
    
    const [data,setData]=useState(null);
    function getData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    const [print,setPrint]=useState(false);
    return (
       <div>
          <h2>Current Hierarchies</h2>
          <div className="ContainerA">
            {/* <Button className=""></Button>  */}
          </div>
          <h4>Current Regions</h4>
          <div className="ContainerB">
            {/* <Button className=""></Button>  */}
            <button className="Add"></button>
          </div>

       </div>
      
    );
}
 
export default Home;