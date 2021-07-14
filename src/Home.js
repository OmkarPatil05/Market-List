import { useState } from "react";
import ItemList from "./ItemList"
import useFetch from "./useFetch";

const Home = () => {

    const [ name , setName ] = useState('');
    const [ quantity , setQuantity ] = useState('');
    const [ valid , setValid ] = useState(false);
    
    
        const  { itemList , isPending , error } = useFetch('http://localhost:8082/marketlist');
       
    


     const handleAdd = (e) => {
        e.preventDefault();

        if(name === '' || quantity === '')
        {
            setValid(true)
        }
        else
        {
            fetch('http://localhost:8082/marketlist' ,{ 
                method: 'POST',
                headers:{
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify({
                    "item": name,
                    "quantity": quantity
                })
            } )
            .then((response)=>{
                if(!response.ok)
                {
                    throw Error('Couldn\'t fetch the data from resource...')
                }
            
               // window.location.reload();
            })
       }
    }
   
    

    return(
        <div className="home">
            <h2>Home</h2>
            <h3>Add the Item</h3>
            { valid && <p className="error">Enter the valid values</p>}
            <form onSubmit={handleAdd}>
                <input type="text"
                placeholder="Item Name"
                value={name}
                onChange={ (e) => setName(e.target.value)}
                 />
                 
                <input type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={ (e) => setQuantity(e.target.value)} /> 
                <button>Add</button>
            </form>

            { error && <p> { error } </p>}
            { isPending && 'Loading....'}
            { itemList && <ItemList itemLists={itemList}/> }
        </div>
    );
}

export default Home;