import { Component } from "react";
import Styles from '../styles/card.module.css';

class Card extends Component {
	constructor(props) {
		super(props);
    }

	render() {
		return (
            <div className={Styles.card} style={{
                backgroundImage:`linear-gradient(69.44deg, #${this.props.gradient[0]} 0%, #${this.props.gradient[1]} 100%)`,
                margin: "0"
            }}>
                <img className={Styles.backgroundImage} src={`/Waves/${this.props.wave}.svg`} />
                <div className={Styles.panel}>
                    <div className={Styles.titleContainer}>
                        <img className={Styles.image} src={"/Icons/" + this.props.wave + ".svg"} />
                        <h1 className={Styles.title}>{this.props.title}</h1>
                    </div>
                    <p className={Styles.subtext}>{this.props.subtext}</p>
                    <div className={Styles.buttonLayout}>
                        {
                            this.props.buttons ? this.props.buttons.map((button, i) => {
                                return <a
                                    key={i}
                                    className={Styles.button}
                                    style={{backgroundColor:`#${button.color}`, color:`#${this.props.buttonText}`}}
                                    href={button.link}
                                    target={button.newTab ? "_blank" : undefined}>{button.text}
                                </a>
                            }) : null
                        }
                    </div>
                </div>
            </div>
		)
	}
}

export default Card;