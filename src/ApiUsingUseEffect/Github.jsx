import React, { useEffect,useState } from 'react'
import Loading from './Loading'

const Github = () => {
    const [data, setData] = useState([])
    const [loadingdata, setLoadingdata] = useState(true)//thsi is for laoding the data so we show loading icon
    const getDataa= async ()=>{
        try {
            const data= await fetch('https://api.github.com/users')
            // console.log(await data.json());
            setData(await data.json())
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getDataa()
        setLoadingdata(false)// and that for when when our all data is loaded so then we dishide this component
    },[])
    if(loadingdata){// this is for when our data is not loaded yet so its run 
        return <Loading/>
    }
   
  return (
    <div>
                {
                    data.map((e)=>{
                        return(
                         <div key={e.id}>
                            <h1>{e.login}</h1>
                            <img src={e.avatar_url} alt="" />
                            <span>{e.followers_url}</span>
                            <span>{e.following_url}</span>
                         </div>
                        )
                    })
                }
    </div>
  )
}

export default Github
