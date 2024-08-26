import React from "react";
import { useState } from "react";

function Data(){
    const [name, setName] = useState("maria");
return(
    <div>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
<h1> name is {name}</h1>

    </div>
)
}
export default Data;