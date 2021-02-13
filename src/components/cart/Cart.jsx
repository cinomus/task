import React, { Component } from 'react'

import { Link } from "react-router-dom"





export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {cart: [], cost: 0};
    }
    decCost(value){
        console.log(this.state.cost)

    }

    render () {
        this.state.cost = 0;
        return (
            <div className='cart'>
                <div className="cartItems">
                    {console.log(this.props)}
                    {

                        this.props.cart.map((item, index)=>{
                            this.state.cost += item.trackPrice;
                            return <div className='product-block' key={index}>
                                <img className='cov-img' src={item.artworkUrl100} alt=""></img>
                                <div className='desc'>
                                    <p>{item.artistName+ '-'+ item.trackName}</p>
                                    <p className='costString'>{item.trackPrice+item.currency}</p>
                                    <button className='button delete buttonLeft' onClick={()=>{
                                        this.props.deleteItem(index);
                                        // this.decCost(item.trackPrice);
                                    }}>Удалить</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="cartInfo">
                    {this.props.cart.length === 0 ? <h3>Корзина пуста</h3> : <div><button className='button deleteAll' onClick={()=>{this.props.deleteAll()}}>Удалить все</button> <h1>Cost: {this.state.cost.toFixed(2)}USD</h1></div>}

                </div>



            </div>


        )
    }
}