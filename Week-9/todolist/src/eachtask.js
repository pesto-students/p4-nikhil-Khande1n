import React from 'react';

export class EACHTASK extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            isChecked: false,
            deleteComponent: false
        }

        // this.complete = this.complete.bind(this);
    }

    toggleCheck(id) {
        this.setState((state,props) => {
            return {isChecked: !state.isChecked}
        }, () => {
            console.log(this.state.isChecked);
            if(this.state.isChecked) {
                const el = document.getElementById(id);
                el.getElementsByTagName('input')[1].setAttribute('style', 'background-color: red;');
            } else {
                const el = document.getElementById(id);
                el.getElementsByTagName('input')[1].setAttribute('style', 'background-color: white;');
            }
        }); 
    }


    render() {
        return (
            <>
            <div style={{display: 'block', margin: '10px'}} id={this.props.id}>
                <input type={'checkbox'} onClick={this.toggleCheck.bind(this, this.props.id)}></input>
                <input placeholder='enter text here' ></input>
                <button onClick={() => this.props.deleteTask(this.props.id)}>Delete</button>
            </div>
               
            </>
        )
    }
}