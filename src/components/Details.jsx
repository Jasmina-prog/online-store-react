import Button from "./Button"
import "./Details.scss"
import { useNavigate } from "react-router-dom"

function Details(props){
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate("/")
    }
    return(
        <div className="detail">
            {
                console.log(props.data)
            }
            <h1>Details page</h1>
            <Button name="Back" detailFn={handleBack}/>
        </div>
    )
}

export default Details