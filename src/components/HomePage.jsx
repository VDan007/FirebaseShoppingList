

function HomePage(){
    return(
        <div className="homePage">
            <img className="catImg" src="/cat.png" alt="" />
            <input type="text" placeholder='Bread' className='homepageInput' />
            <button className="addToCartBtn">Add to cart</button>
        </div>
    );
}

export { HomePage }