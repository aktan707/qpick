import "./header.css"
import phone from '../../assets/phone.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/card.svg'
import {IoIosArrowDown} from "react-icons/io";

const Header = () => {
    return (
        <div className={'header container'}>
            <div className={'logo'}>
                <h2> QPICK </h2>
            </div>
            <div className={'d-menu'}>
                <img src={phone} alt=""/>
                <p>Выбрать модель телефона</p>
                <span style={{paddingTop:'7px'}}>
                <IoIosArrowDown/>
                </span>
            </div>
            <div className={'actions'}>
                <button className={'fav-btn'}>
                    <img src={heart} alt=""/>
                    <span>2</span>
                </button>
                <button className={'card-btn'}>
                    <img src={cart} alt=""/>
                    <span>1</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
