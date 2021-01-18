import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
         this.state = {
            inputValue: ''
        }
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleTodoAdd(this.state.inputValue)
        this.setState({
            inputValue:""
        })
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <header>
                    <input value={this.state.inputValue} onChange={this.handleChanges} type="text" className="todo-input" name="todo"/>
                    <button className="form">Add</button>
                </header>
            </form>
        )
    }
}

export default TodoForm;