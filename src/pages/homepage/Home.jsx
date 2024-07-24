import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import "./Home.scss"
import Button from "../../components/Button";

function Home(){
    const [data, setData] = useState([])
    console.log(data);

    useEffect(()=>{
        async function getData(){
            let response = await fetch('https://fakestoreapi.com/products')
            let api = await response.json()
            setData(api)
        }
        getData()
    }, [])
    return(
        <>
        <Navbar />
        {
           data.map((el, key)=>{
            console.log(el);
            return(
                <div className="card">
                    <img src={el.image} alt="" width="100%" height="280px"/>
                    <div className="desc">
                    <h2>{el.title}</h2>
                    <div className="btns">
                        <Button name={el.price + ` $`}/>
                        <Button name={el.category}/>
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