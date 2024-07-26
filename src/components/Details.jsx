import Button from "./Button"
import "./Details.scss"
import { useNavigate, useParams } from "react-router-dom"

function Details(props){
    const navigate = useNavigate()
    const {userId} = useParams()
    const handleBack = () =>{
        navigate("/")
    }
    return(
        <div className="detail">
            <h1>Details page {userId}</h1>
            <Button name="Back" detailFn={handleBack}/>
        </div>
    )
}

export default Details