import React, { useState } from 'react';
 
const AddH = () => {
    
    const [data,setData]=useState(null);
    function getData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    const [print,setPrint]=useState(false);
    return (
       <div>
          <h2>Add Hierarchy</h2>
           <p className="region">Region</p>


            <div className="wrapper">
            {/* <h1>How About Them Apples</h1> */}




            <form>
            <fieldset>
                <label className='companyname'>
                <p>Company Name</p>

                {
                    print?
                    <h1>{data}</h1>
                    :null
                }
                <input name="CompanyName" id="getValues" onChange={getData}/>

                
                </label>
            </fieldset>
            {/* REMEMBER TO ADD TYPE */}
            <button className="submit2" onClick={()=>setPrint(true)}>Submit</button> 
            <button className="AddInfo">Add Header</button> {/* remember to reposition */}
            </form>






            </div>

       </div>
      
    );
}
 
export default AddH;