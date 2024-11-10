import '../App.css';
import React from "react";
const Header = ({ pro }) => {
    return (
        <div className="header">
            <div className='row'>
                {pro.map((x) => {
                    return (
                        <div className='col-md-1' key={pro.id}>
                        <div className="card-header" style={{ width: '105px' }}>
                                <img src={x.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title-header">{x.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}



export default Header;