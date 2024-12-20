import './HomeBaner.css'
import HeroImg from '../../assets/bg-img.png';

const HomeBanner = () => {
    return (
        <div className={"container bg-img"}
        style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: "400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "670px",
            backgroundPositionY: "-55px",
            height: "200px",
        }}
        >
            <h2 style={{
                marginTop: "20px",
                paddingTop: "58px",
                fontSize: "30px",
                lineHeight: "37px",
                width: "643px",
            }}>Аксессуары для <br/> Iphone 13 Pro Max</h2>
        </div>
    );
};

export default HomeBanner;
