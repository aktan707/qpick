import "./Case.css"
import phone1 from "../../assets/phone1.png"
import phone2 from "../../assets/phone2.png"
import phone3 from "../../assets/phone3.png"

const Case = () => {
    return (
        <div className={'container'}>
            <h5 style={{
                marginBottom: '20px',
                fontSize: '20px',
                lineHeight: '24px',
                color: '#838383'
            }}>Чехлы</h5>
            <div style={{
                display: "flex",
                gap: "30px",
            }}>
                <div className={'case1'}>
                    <img style={{
                        width: "151px",
                        height: "292px",
                    }} src={phone1} alt=""/>
                    <h5>Стеклянные</h5>
                </div>
                <div className={'case2'}>
                    <img style={{
                        width: "151px",
                        height: "292px",
                    }} src={phone2} alt=""/>
                    <h5>Силиконовые</h5>
                </div>
                <div className={'case3'}>
                    <img style={{
                        width: "151px",
                        height: "292px",
                    }} src={phone3} alt=""/>
                    <h5>Кожаные</h5>
                </div>
            </div>
        </div>
    );
};

export default Case;
