import { useState, useContext } from "react"
import UserContext from "../context/userContext";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handleClick = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }

    
    return(
        <>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={ (e)=> setUsername(e.target.value) }/> &nbsp;
        <input type="text" name="" id="" value={password}  placeholder="Password" onChange={ (e)=> setPassword(e.target.value) } />
        <br /> <br />
        <button onClick={ handleClick }>Submit</button>
        </>
    )
}