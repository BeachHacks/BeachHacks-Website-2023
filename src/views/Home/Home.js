import "./Home.css";


const Home = () => {
    return (
        <section className="home-container" id="home">
            <div className="home-app-section">
                <div className="home-app-title">
                    <h1>BeachHacks</h1>   
                </div>
                <h3>Date, 2023</h3>
                <h2>Get Involved</h2>
                <button>Apply Now</button>
            </div>
            
            <div className="home-box-section">
                <div className="home-box">
                    <h2>3D ISOMETRIC ART?</h2>
                </div>
            </div>
        </section>
   );
}

export default Home;