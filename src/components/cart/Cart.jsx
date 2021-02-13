import {React, useState} from 'react'


function Cart(props) {
    let [cost, setCost] = useState(0)

    cost = 0;
    return (
        <div className='cart'>
            <div className="cartItems">
                {

                    props.cart.map((item, index) => {
                        cost += item.trackPrice;
                        return <div className='product-block' key={index}>
                            <img className='cov-img' src={item.artworkUrl100} alt=""></img>
                            <div className='desc'>
                                <p>{item.artistName + '-' + item.trackName}</p>
                                <p className='costString'>{item.trackPrice + item.currency}</p>
                                <button className='button delete buttonLeft' onClick={() => {
                                    props.deleteItem(index);
                                }}>Удалить
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="cartInfo">
                {props.cart.length === 0 ? <h3>Корзина пуста</h3> : <div>
                    <button className='button deleteAll' onClick={() => {
                        props.deleteAll()
                    }}>Удалить все
                    </button>
                    <h1>Cost: {cost.toFixed(2)}USD</h1></div>}

            </div>
        </div>
    )
}
export default Cart