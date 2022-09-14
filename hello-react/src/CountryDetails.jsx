import React from "react";
import { useParams } from "react-router-dom";
 
function CountryDetails(){
    var params =useParams();
return <div>
<h1>Country Details</h1>
<h1>{params.code}</h1>        
</div>
}
export default CountryDetails;