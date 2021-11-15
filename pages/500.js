import Header from '../Components/Header'
import {Component} from 'react'

export default class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<>
			<Header
				name="500"
				subtext="Internal Server Error"
				gradient={["6576CC", "4B5899"]}
				wave="web/waves/header/cmp"
				buttons={[
					{color: "6576CC", buttonText: "ffffff", text: "Go Home", link: "/#"},
					{color: "6576CC", buttonText: "ffffff", text: "Send Error",
						link: `mailto:staff@clicksminuteper.net?subject=Website%20Error%20Report&body=I%20got%20a%20500%20on%20the%20page%20%5BPlease%20Copy%20Website%20Link%20Here%5D`,
						target: true
				}]}
        		hideArrow={true}
			/>
			</>
		)
	}
}
