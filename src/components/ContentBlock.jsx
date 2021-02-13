import React from 'react';
import {NavLink, Route} from "react-router-dom";


function ContentBlock(props) {
    let data;
    if (props.search.resultCount !== undefined) {
        if (props.search.resultCount === 0) {
            data = <div>Такого исполнителя не найдено!</div>
        } else {
            data = props.search.results.map((item, index) => {
                if (index < props.maxBlocks) {
                    return <div className="product-block" key={index}>
                        <img className="cov-img" src={item.artworkUrl100} alt=""></img>
                        <div className="desc">
                            <p>{item.artistName + ' - ' + item.trackName}</p>
                            <p className='costString'>{item.trackPrice + item.currency}</p>
                            <button className='button buttonLeft' onClick={() => {
                                props.addToCart(item)
                            }}>В корзину
                            </button>
                            <NavLink to='/item'>
                                <button className="button buttonRight" onClick={() => {
                                    props.getItem(item)
                                }}>
                                    <div>
                                        Детали
                                    </div>
                                </button>
                            </NavLink>

                        </div>
                    </div>
                }
            })
        }
    }
    return (
        <div className="content">
            <div className="renderedBlocks">
                {data}
            </div>
            <div className="more">
                {props.search.resultCount !== undefined && props.search.resultCount !== 0 ?
                    props.maxBlocks < props.search.resultCount? <button className="moreButton" onClick={props.moreBlocks}>Еще</button>: '' :
                    <h2>Введите имя исполнителя</h2>}
            </div>

        </div>
    )

}

export default ContentBlock