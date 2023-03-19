import { useState } from "react";
import {ItemToBuy } from './ItemToBuy';

function HomePage(props){
    const [itemToBuy,setItemToBuy] = useState('');
    console.log(itemToBuy);
    


    function addItem(){
        props.addToList(itemToBuy);
        setItemToBuy('');
    }

    
    const itemListToRender = props.allItems.map(item=>{
        return <ItemToBuy
                 item={item[1]}
                 key={item[0]}
               />
    });
    
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
                Add to cart
            </button>

            <div className="itemList">
                {itemListToRender}
            </div>  

        </div>
    );
}

export { HomePage }