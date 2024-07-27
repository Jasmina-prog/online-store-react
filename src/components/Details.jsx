import { useState, useEffect } from "react"
import Button from "./Button"
import "./Details.scss"
import { useNavigate, useParams } from "react-router-dom"

function Details(){
    const navigate = useNavigate()
    const {userId} = useParams()
    const handleBack = () =>{
        navigate("/")
    }
    const [detailProduct, setDetailProduct] = useState([])
    useEffect(()=>{
        async function getData(){
            let response = await fetch(`https://fakestoreapi.com/products/${userId}`)
            let info = await response.json()
            setDetailProduct(info)
        }
        getData()
    }, [])

    return(
        <>
        <div className="detail">
            <h1>Details page </h1>
            <img src={detailProduct?.image} alt="" width="100%" height="280px"/>
            <div className="desc">
            <h2>{detailProduct?.title}</h2>
            <Button name="Back" detailFn={handleBack}/>
            </div>
        </div>
        </>
    )
}

export default Details