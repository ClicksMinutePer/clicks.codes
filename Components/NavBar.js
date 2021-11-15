import React, { Component } from "react";
import Styles from '../styles/navbar.module.css';
import ThemeChangeButton from './ThemeChangeButton';


class NavBar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isOpen: false,
        }
        this.isTouchDevice = false
        this.hoverSensor = React.createRef();
	}

    componentDidMount() {
        let hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if ("orientation" in window) {
                hasTouchScreen = true;
            } else {
                var UA = navigator.userAgent;
                hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
            }
        }
        if (hasTouchScreen) {
            this.isTouchDevice = true
        } else {
            this.isTouchDevice = false
        }
    }

    onClick() {
        if ( this.isTouchDevice ) {
            return this.toggleVertical(this)
        }
    }

    toggleVertical(prevState, force=null) {
        this.setState(prevState => ({
            isOpen: (force === null) ? !prevState.isOpen : force
        }));
    }

	render() {
		return (
            <>
                <div ref={this.hoverSensor} className={this.isTouchDevice ? (Styles.container + " " + (this.state.isOpen ? Styles.containerOpen : null)) : Styles.containerDesktop + " " + Styles.container}>
                    <div className={Styles.group}>
                        <img alt="CMP" className={Styles.headerIcon} src="https://assets.clicksminuteper.net/company/logo/normal.svg" onClick={() => {this.onClick()}}/>
                        <a href="/#"><img alt="Home" className={Styles.icon} src="https://assets.clicksminuteper.net/web/icons/home.svg"/></a>
                        <a href="/gps#"><img alt="GPS" className={Styles.icon} src="https://assets.clicksminuteper.net/bots/gps/normal.svg"/></a>
                        <a href="/rsm#"><img alt="RSM" className={Styles.icon} src="https://assets.clicksminuteper.net/bots/rsm/normal.svg"/></a>
                        <a href="/clicksforms#"><img alt="ClicksForms" className={Styles.icon} src="https://assets.clicksminuteper.net/bots/clicksforms/normal.svg"/></a>
                        {/* <a href="/castaway#"><img className={Styles.icon} src="/Icons/CA.svg"/></a> */}
                        {/* <a href="https://clcks.dev"><img className={Styles.icon} src="/Icons/CL.svg"/></a> */}
                    </div>
                    <div className={Styles.group}>
                        <ThemeChangeButton/>
                    </div>
                </div>
            </>
		)
	}
}

export default NavBar;