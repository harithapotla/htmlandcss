import React from "react";

function Countries(){
var [countries,setcountries]=React.useState([])
React.useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>setcountries(data))
},[])
return(<div>
<h1>Countries</h1>
<ul>
{
    countries && countries.map((c,i)=>{
        return (<li> {i} {c.name}</li>)
    })
}
</ul>
</div>)
}
export default Countries;