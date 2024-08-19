import React from 'react';
import DeleteIcon from '../assets/icons/DeleteIcon';

export default class DeleteModal extends React.Component {
    constructor(props) {
        super(props);

        this.modalRef = React.createRef();

        this.showModal = this.showModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    get modal() {
        return window.bootstrap.Modal.getInstance(this.modalRef.current) ??
            new window.bootstrap.Modal(this.modalRef.current);
    }

    handleDelete() {
        // Call the delete handler passed in as a prop
        this.props.onItemDeleted();

        // Hide the modal after the item is deleted
        this.modal.hide();
    }

    showModal() {
        this.modal.show();
    }

    render() {
        const { title } = this.props;

        return (
            <React.Fragment>
                <button
                    className="btn btn-danger"
                    onClick={this.showModal}
                >
                    <DeleteIcon width={20} height={20} />
                </button>
                <div className="modal fade" aria-hidden="true" ref={this.modalRef}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete To Do: {title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this item?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={this.handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
