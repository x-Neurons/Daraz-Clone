import '../App.css';
import van from '../img/van.png'
const Bar = ()=>{
    return(
        <div className="bar">
            <ul>
                <img src={van} className='van'></img>
                <li>Safe Payments</li>
                <img src={van} className='van'></img>
                <li>Nation Wide Delivery</li>
                <img src={van} className='van'></img>
                <li>Free & Easy Returns</li>
                <img src={van} className='van'></img>
                <li>Best Price Guaranteed</li>
                <img src={van} className='van'></img>
                <li>100% Authentic Products</li>
                <img src={van} className='van'></img>
                <li>Daraz Verified</li>
            </ul>
        </div>
    )
}


export default Bar;