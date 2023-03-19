import { useState } from "react";
import {ItemToBuy } from './ItemToBuy';

function HomePage(props){
    const [itemToBuy,setItemToBuy] = useState('');
    const [allItems,setAllItems] = useState([]);
    console.log(allItems);


    function addItem(){
        props.addToList(itemToBuy);
        setAllItems(prev=>{
            return [...prev,itemToBuy];
        });
        setItemToBuy('');
    }

    
    const itemListToRender = allItems.map(item=>{
        return <ItemToBuy
                 item={item}
                 key={item+Math.random()*100}
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