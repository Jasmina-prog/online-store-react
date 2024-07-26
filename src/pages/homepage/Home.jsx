import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import "./Home.scss"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Home(){
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        async function getData(){
            let response = await fetch('https://fakestoreapi.com/products')
            let api = await response.json()
            setData(api)
        }
        getData()
    }, [])

    const handleDetail = () =>{
        
        navigate('/details')
        
        console.log('working');
    }
    return(
        <>
        <Navbar />
        {
           data.map((el, key)=>{
            return(
                <div className="card" key={key}>
                    <img src={el.image} alt="" width="100%" height="280px"/>
                    <div className="desc">
                    <h2>{el.title}</h2>
                    <div className="btns">
                        <Button name={el.price + ` $`}/>
                        {/* <Button name={el.category}/> */}
                        <Button name="Buy" detailFn={handleDetail}/>
                    </div>

                    </div>
                    
                </div>
            )
           })
        }
        
        </>
    )
}

export default Home