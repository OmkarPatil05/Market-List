const ItemList = ({ itemLists }) => {

    const handleDelete = (e) => {
        const id = e.target.value
        fetch('http://localhost:8082/marketlist/' + id,
        {
            method: 'DELETE' 
        })
        .then((response) => {
            if(!response.ok)
            {
                console.log("ERROR")
            }
         //   window.location.reload();
        })
    
    }
    return(
       
        <div className="item-list">
             <h2>Item List And Quantity</h2>

             {
                itemLists.map((item) => (
                    <div className="item" key={item.id} >
                        <h4>Item : {item.item}</h4>
                        <h6>Quantity: {item.quantity}</h6>
                        <button value={item.id} onClick={handleDelete} >Delete</button>
                    </div>
                ))
            }
           
        </div>
    );
}

export default ItemList;