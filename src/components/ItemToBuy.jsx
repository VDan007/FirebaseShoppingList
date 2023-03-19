

function ItemToBuy(props){ 
    return(
        <div
            className="itemToBuyDiv"
            onClick = { e => props.removeFromList(props.id)}
        >
            <p>{props.item}</p>
        </div>
    );
}

export { ItemToBuy };