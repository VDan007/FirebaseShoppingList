import { useState } from "react";
import {ItemToBuy } from './ItemToBuy';

function HomePage(props){
    const [itemToBuy,setItemToBuy] = useState('');
    
    


    function addItem(){
        props.addToList(itemToBuy);
        setItemToBuy('');
    }

    console.log(props.allItems)
    const itemListToRender = props.allItems.length > 0  ?
        props.allItems.map(item=>{
        
                return  <ItemToBuy
                        item={item[1]}
                        key={item[0]}
                        id = {item[0]}
                        removeFromList = { props.removeFromList}
                        />
                

                
        })
        :
        <p className="noItemsP">No Items Here...yet</p>
 
    
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
                {itemListToRender }
                
            </div>  

        </div>
    );
}

export { HomePage }