import React, { Component } from 'react';

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    //target is to just update the document time only if count value changed
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }
    //if we remove if condition then in all the case (name or count update) component rerenders 
    //and document title updates(with the same value if count doesn't change, can verify using log)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title');
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                    </button>

            </div>
        )
    }

}
export default ClassCounterTwo