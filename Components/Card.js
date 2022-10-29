import { Component } from "react";
import Styles from '../styles/Components/card.module.css';
import react from 'react'
import { withRouter } from "next/router";
import handleViewport from 'react-in-viewport';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.url) {
            window.location = this.props.url;
        }
    }

    render() {
        return (
            <div className={Styles.card + " " + (this.props.shown ? Styles.shown : null)} style={{
                margin: "0"
            }} onClick={this.handleClick}>
                <div className={Styles.backgroundGradient} style={{
                    backgroundImage: `linear-gradient(69.44deg, #${this.props.gradient[0]} 0%, #${this.props.gradient[1]} 100%)`
                }} />
                <img alt="" className={Styles.backgroundImage} src={`https://assets.clicks.codes/web/waves/card/${this.props.wave}.svg`} draggable={false} />
                <div className={Styles.panel} onClick={this.handleClick}>
                    <div className={Styles.titleContainer}>
                        <img alt="Project icon" className={Styles.image} src={"https://assets.clicks.codes/" + (this.props.icon ? this.props.icon : this.props.wave) + ".svg"} />
                        <h1 className={Styles.title}>{this.props.title}</h1>
                    </div>
                    <p className={Styles.subtext + " " + (this.props.buttons ? null : Styles.longText)}>{this.props.subtext}</p>
                    <div className={Styles.buttonLayout} onClick={this.showMessage}>
                        {
                            this.props.buttons ? this.props.buttons.map((button, i) => {
                                return <a
                                    key={i}
                                    className={Styles.button}
                                    style={{backgroundColor:`#${button.color}`, color:`#${this.props.buttonText}`}}
                                    href={button.link ? button.link : null}
                                    onClick={button.onClick ? button.onClick : null}
                                    target={button.newTab ? "_blank" : undefined}
                                    rel="noreferrer">{button.text}
                                </a>
                            }) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

class CardRowClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            childrenShown: Array(this.props.children.length)
        }
    }

    animate() {
        const { inViewport } = this.props;
        if (inViewport) {
            this.setState({shown: true});
            for (let index = 0; index < this.state.childrenShown.length; index++) {
                setTimeout(() => {
                    this.setState(state => {
                        let childrenShown = [...state.childrenShown];
                        childrenShown[index] = true;
                        return {childrenShown};
                    })
                }, 200 * index);
            }
        }
    }

    render() {
        if (!this.props.shown) this.animate()
        return (
            <div className={Styles.container}>
                {
                    react.Children.toArray(this.props.children).map((item, index) => {
                        item = <Card
                            shown={this.state.childrenShown[index]}
                            {...item.props}
                        />
                        return <div className={Styles.item} key={index}>{item}</div>
                    })
                }
            </div>
        )
    }
}

Card = withRouter(Card);
const CardRow = handleViewport(CardRowClass, { rootMargin: '-1.0px' });

export { Card, CardRow };
