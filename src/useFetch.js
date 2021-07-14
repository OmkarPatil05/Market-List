import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [ itemList , setItemList ] = useState(null)
    const [ isPending , setIsPending ] = useState(true)
    const [error , setError ] = useState(null)

    useEffect(() => {
        
        const abortController = new AbortController();
        
            //GET
        fetch(url ,{ 
            method: 'GET',
            headers:{
                "Content-Type": 'application/json'
            }
         } ,{ signal : abortController.signal})
         .then((response)=>{
            if(!response.ok)
            {
                throw Error('Couldn\'t fetch the data from resource...')
            }

            return response.json();
        })
        .then((data) => {

            setItemList(data)
            setIsPending(false)
        }).catch((error) => {
            if(error.name === 'Abort')
            {
                console.log('abort')
            }
            else
            {
                setIsPending(false)
                setError(error.message)
            }
            
        })
       


        

        return () => abortController.abort();
    });


    return { itemList , isPending , error };
    
}


export default useFetch;