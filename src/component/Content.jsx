import "../App.css"
import React from "react";

const Content = ({ pro }) => {
    return (
        
        <div className='container parent'>
           <h1 className="sale">Flash Sale</h1>
            <div className='row'>

                {pro.map((x) => {
                    return (
                        <div className='col-md-2' key={x.id}>
                            <div className="card" style={{ width: '100%' }}>
                                <img src={x.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{x.name}</h5>
                                    <p className="card-text">{x.description}</p>
                                    {/* <a href="#" className="btn btn-primary">{x.price}</a> */}
                                    <p className="price">{x.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
              )
            }



            </div>
        </div>
    )
}



export default Content;










// <div className='col-md-2'>
//                     <div className="card" style={{ width: '100%' }}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="card" style={{ width: '100%' }}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="card" style={{ width: '100%' }}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="card" style={{ width: '100%' }}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-md-2'>
//                     <div className="card" style={{ width: '100%' }}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
