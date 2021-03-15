import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdrop.ndtv.com%2FTECH%2Fproduct_database%2Fimages%2F913201720152AM_635_iphone_x.jpeg&imgrefurl=https%3A%2F%2Fgadgets.ndtv.com%2Fapple-iphone-x-4258&tbnid=yOSaCmPZP9MP5M&vet=12ahUKEwjKzJaSi7LvAhVFYSsKHUIBCcwQMygDegUIARDqAQ..i&docid=Wv7UIFiogENXNM&w=635&h=476&q=iphone&ved=2ahUKEwjKzJaSi7LvAhVFYSsKHUIBCcwQMygDegUIARDqAQ" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home