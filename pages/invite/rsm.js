import { Component } from 'react'

class Redirect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
            {
                this.window.location.replace('https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands')
            }
        </>
        )
    }

}

export default Redirect;
