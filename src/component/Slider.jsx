import "../App.css"
import s1 from "../img/s1.jpg"
import s2 from "../img/s2.jpg"
import s3 from "../img/s3.jpg"

const Slider = () => {
    return (
        <div className="main">
        <div className="list">
            <ul>
                <li>Watches, Bags & Jewellery</li>
                <li>Sports & Outdoor </li>
                <li>Health & Beauty </li>
                <li>Men's Fashion</li>
                <li>Women's Fashion </li>
                <li>Mother & Baby</li>
                <li>Home & Lifestyle</li>
                <li>Electronic Devices </li>
                <li>Electronic Accessories</li>
                <li>TV & Home Appliances</li>
                <li>Groceries & Pets</li>
                <li>Choco & Snacks Beverages</li>
                
            </ul>
        </div>

            <div className="container slider">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={s1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={s2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={s3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider