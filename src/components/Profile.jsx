import { useContext } from "react"
import UserContext from "../context/userContext"


export default function Profile(){
    const {user} = useContext(UserContext);

    if(!user) return <div> Please Login </div>
    
    return <div>
        <h2>Welcome {user.username}</h2>
    </div>
}