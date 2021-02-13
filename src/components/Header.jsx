import {React, useState} from 'react';
import {NavLink, Route} from 'react-router-dom'

function UseForm(props) {
    const [searchString, setsearchString] = useState('');

    const onChange = (e) => {
        setsearchString(e.target.value)
    }
    const get = async (url) => {
        let response = await fetch(url,{
            headers: {
               // " Access-Control-Allow-Origin": "*"
            }
        })
        console.log(response)
        let data = await response.json()
        console.log(data)
        return await data
    }
    // const getJSON = function (url, callback) {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.responseType = 'json';
    //     xhr.onload = function () {
    //         let status = xhr.status;
    //         if (status === 200) {
    //             callback(null, xhr.response);
    //         } else {
    //             callback(status, xhr.response);
    //         }
    //     };
    //     xhr.send();
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        get('https://itunes.apple.com/search?term=' + searchString).then((data) => {
            console.log(data)
            data.searchString = searchString;
            props.getData(data);
        })

        // getJSON('https://itunes.apple.com/search?term=' + searchString, (status, data) => {
        //     console.log(data)
        //     data.searchString = searchString;
        //     props.getData(data);
        // })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="searchString" value={searchString}
                   onChange={onChange}
                   placeholder="Искать здесь..."/>
            <button type="submit">Search</button>
        </form>
    )

}

function Header(props) {
    return (
        <header>
            <div className="search-block">
                <UseForm getData={props.getData}/>
                <div className="headerButtons">
                    <NavLink to='/'>
                        <div className="headerButton">
                            Главная
                        </div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className="headerButton">
                            Корзина ({props.itemsInCart})
                        </div>
                    </NavLink>
                    <div className="chkboxDiv">
                        <input type='checkbox' className='checkbox' onChange={props.changeTheme}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;