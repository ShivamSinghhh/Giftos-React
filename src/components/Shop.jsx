import React from 'react'
import { useEffect,useState } from 'react';



export default function Shop() {

    const [data,setData] = useState([]);
    useEffect(()=>{
      getData()
    },[])
 
    const getData=() =>{
      fetch(`http://localhost:3333/products`)
      .then(d =>d.json())
      .then(res =>{
        setData(res)
      })
    }
    //  console.log("data :",data)


    return <> 
     <div className="latest-container">
        <h2 className="title">LATEST PRODUCTS</h2>
        <div className="row">
            {data.map((e,i)=>
                <div key={i} className="col-4">
                <div>
                    <div className="imageDiv">
                        <img src={e.photo} alt="" />
                    </div>
                    <div className="price">
                        <p>{e.cat}</p>
                        <p>Price <span>{e.price}</span></p>
                    </div>
                </div>
            </div>
            )}
           
            <button>View All products</button>
        </div>

    </div>
   
    </>
}
