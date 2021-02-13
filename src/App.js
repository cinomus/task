import {React, useState}  from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import ContentBlock from './components/ContentBlock'
import Cart from './components/cart/Cart'
import ItemToShow from "./components/ItemToShow";


function App(){
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         search: {},
    //         maxBlocks: 20,
    //         cart: [],
    //         selectedItem: {},
    //         darkTheme: false
    //     };
    // }
    const [darkTheme, setdarkTheme] = useState(false);
    const [search, setSearch] = useState({});
    const [maxBlocks, setMaxBlocks] = useState(20);
    const [selectedItem, setSelectedItem] = useState({});
    let [cart, setCart] = useState([]);
    const changeTheme = () =>{
        setdarkTheme(!darkTheme)
    }

    const getData = (value) => {
        setSearch(value)
    }
    const getItem = (item) =>{
        setSelectedItem(item)
    }
    const addToCart = (value) => {
        cart.push(value)
        setCart(cart)
    }
    const deleteItem = (index) => {
        let arr = cart.slice()
        arr.splice(index, 1)
        setCart(arr)
    }
    const deleteAll = () =>{
        setCart([])
    }

    const moreBlocks = () => {
        setMaxBlocks(maxBlocks + 20);
    }

        {darkTheme? document.body.style.backgroundColor = '#2B2B2B' : document.body.style.backgroundColor = '#fff'}
        return (
            <BrowserRouter>
                <div className="wrap">
                    <Header getData={getData} changeTheme={changeTheme}/>
                    <Route exact path='/' render={props => <ContentBlock
                        addToCart={addToCart}
                        search={search}
                        maxBlocks={maxBlocks}
                        moreBlocks={moreBlocks}
                        getItem={getItem}
                    />}/>
                    <Route path='/cart' render={props => <Cart deleteItem={deleteItem}
                              deleteAll={deleteAll}
                              cart={cart}
                        />
                    }
                    />
                    <Route exact path='/item' render={props => <ItemToShow
                        itemToShow = {selectedItem}
                    />}/>
                </div>
                <div className= {darkTheme?  "fixedButtons darkThemeFixedB": "fixedButtons"}>
                    <NavLink to='/'>
                        <div className="headerButton">
                            Главная
                        </div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className="headerButton" >
                            Корзина
                        </div>
                    </NavLink>
                    <div className="chkboxDiv">
                        <input type='checkbox' className='checkbox'onChange={changeTheme}/>
                    </div>
                </div>
            </BrowserRouter>
        );


}

export default App;
