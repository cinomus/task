import {Route} from "react-router-dom";


function ItemToShow(props) {
    return (
        <div className="selectedItem">
            <div className='item'>
                <img className="itemImg" src={props.itemToShow.artworkUrl100} alt=""></img>
                <div className="aboutItem">
                    <h1>{props.itemToShow.trackName}</h1>
                    {props.itemToShow.kind === 'song' ? <p>Исполнитель: {props.itemToShow.artistName}</p> : ''}
                    {props.itemToShow.collectionName ? <p>Альбом: {props.itemToShow.collectionName}</p> : ''}
                    <p>Тип: {props.itemToShow.kind}</p>
                    <p>Стоимость: $ {props.itemToShow.trackPrice}</p>

                </div>
            </div>
            <div className="preview">
                {props.itemToShow.kind === 'song' ? <p>Вы можете прослушать часть трека ниже: </p> :
                    <p>Вы можете посмотреть трейлер ниже: </p>}
                <video controls className={props.itemToShow.kind}>
                    <source
                        src={props.itemToShow.previewUrl}
                        type="audio/x-m4a"/>
                </video>
                {props.itemToShow.longDescription ? <p>{props.itemToShow.longDescription}</p>: ''}
            </div>
        </div>
    )
}


export default ItemToShow