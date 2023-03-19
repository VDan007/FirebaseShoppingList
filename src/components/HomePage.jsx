import { useState } from "react";

function HomePage(props){
    const [itemToBuy,setItemToBuy] = useState('');
    console.log(itemToBuy);


    function addItem(){
        props.addToList(itemToBuy);
        setItemToBuy('');
    }

    


    return(
        <div className="homePage">
            <img className="catImg" src="/cat.png" alt="" />
            <input 
                id = 'item'
                type="text" 
                placeholder='Bread' 
                className='homepageInput'
                value={itemToBuy}
                onChange={e=>setItemToBuy(e.target.value)}
            />
            <button 
                className="addToCartBtn"
                onClick ={addItem}
            >
                Add to cart</button>
        </div>
    );
}

export { HomePage }