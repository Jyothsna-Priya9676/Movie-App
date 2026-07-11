import { Link } from "react-router-dom";

const NotFound = () => {

return(

<div
style={{
height:"80vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center"
}}
>

<h1
style={{
fontSize:"70px"
}}
>
404
</h1>

<h2>

Page Not Found

</h2>

<br/>

<Link to="/">

Go Home

</Link>

</div>

);

};

export default NotFound;