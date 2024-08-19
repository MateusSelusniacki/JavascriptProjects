import React from 'react';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemTitle: ''
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeTitle(event) {
        this.setState({
            itemTitle: event.target.value
        });
    }

    submitForm(event) {
        event.preventDefault();

        const { itemTitle } = this.state;

        if (itemTitle.trim() === '') {
            // Prevent submitting an empty title
            return;
        }

        this.props.onCreateItem({
            title: itemTitle,
            completed: false
        });

        this.setState({ itemTitle: '' });
    }

    render() {
        const { itemTitle } = this.state;

        return (
            <form onSubmit={this.submitForm}>
                <div className="row mb-3">
                    <label htmlFor="todoTitle" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="todoTitle"
                            value={itemTitle}
                            onChange={this.changeTitle}
                            aria-label="Todo title" // Accessibility enhancement
                        />
                    </div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-primary"
                            disabled={itemTitle.trim() === ''} // Disable if input is empty
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
