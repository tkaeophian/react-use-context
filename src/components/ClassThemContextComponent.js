import { Component } from "react"
import { ThemeContext } from "../App"

export default class ClassThemeContentComponent extends Component {

    themeStyle(dark) {
        return {
            backgroundColor: dark ? '#333' : '#fff',
            color: dark ? '#ccc' : '#333',
        }
    }

    render() {
        return <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyle(darkTheme)} className="box">Class Component</div>
            }}
            </ThemeContext.Consumer>
    }
}