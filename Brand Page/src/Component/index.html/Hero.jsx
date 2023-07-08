const Hero = () =>{
    return(
        <main className="Hero-Section">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="second-btn">Category</button>
                </div>

                <div className="shoping">
                    <p>Also Available On</p>
                   <div className="brand-icons">
                   <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                   </div>
                </div>
            </div>
            <div className="hero-images">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    )
};
export default Hero;