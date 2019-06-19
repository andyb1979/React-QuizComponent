import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion';

class QuizQuestionButton extends Component {
    render(){
        return (
            <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }

    
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
}

export default QuizQuestionButton 