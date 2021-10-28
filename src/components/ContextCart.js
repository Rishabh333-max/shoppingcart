import React,{useContext} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
// import { products } from './Products';
import { CartContext } from './Cart';


const ContextCart = () => {   
    // const [item,setItem]=useState(products);

    const {item,clearCart,totalItem,totalAmount} = useContext(CartContext);

    if(item.length===0){
        return(
            <>
              {/* Header part */}
        <header> 
            <div className="continue-shopping">
                <img src="../images/arrow.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue Shopping</h3>
                </div>  
                <div className="cart-icon">
                    <img src="../images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                    </div> 
        </header>
        {/* second part telling the number of items available in shopping cart */}
        <section className="main-cart-section">
             <h1>Shopping Cart</h1>
             <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in shopping cart</p>
             </section>
            </>
        )
    }

    return (
        <>
         {/* Header part */}
           <header> 
            <div className="continue-shopping">
                <img src="../images/arrow.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue Shopping</h3>
                </div>  
                <div className="cart-icon">
                    <img src="../images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                    </div> 
        </header>
        {/* second part telling the number of items available in shopping cart */}
        <section className="main-cart-section">
             <h1>Shopping Cart</h1>
             <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in shopping cart</p>
             <div className="cart-items">
            <div className="cart-items-container">
            <Scrollbars >
                {
                    item.map((curItem)=>{
                    return   <Items key={curItem.id} {...curItem}/>
                    })
                }

                </Scrollbars>
            </div>
            </div>
            <div className="card-total">
                <h3>Card Total: <span>{totalAmount}₹</span></h3>
                <button>checkout</button>
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                 </div>
      </section>
  
        </>
    )
}

export default ContextCart;
