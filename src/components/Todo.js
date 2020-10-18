import React, { Component } from 'react';


class Todo extends Component {
    render() {
        const { completed, text, onClickEvent } = this.props;
        return (
            <li 
            onClick={onClickEvent}
            style={{
                textDecoration: completed ? "line-through": "none"
            }}>
              { text }
            </li>
        );
    }
}

export default Todo