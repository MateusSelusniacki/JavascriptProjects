import React from 'react';
import EditIcon from '../assets/icons/EditIcon';

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();

        this.showModal = this.showModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    get modal() {
        return window.bootstrap.Modal.getInstance(this.modalRef.current) ??
            new window.bootstrap.Modal(this.modalRef.current);
    }

    handleEdit(event) {
        event.preventDefault();  // Prevent form submission default behavior

        this.props.onItemEdited({
            title: this.titleRef.current.value,
            description: this.descriptionRef.current.value,
        });

        this.modal.hide();
    }

    showModal() {
        this.modal.show();
    }

    render() {
        const { title, description } = this.props;

        return (
            <React.Fragment>
                <button
                    className="btn btn-primary"
                    onClick={this.showModal}
                >
                   <EditIcon width={20} height={20} />
                </button>
                <div className="modal fade" aria-hidden="true" ref={this.modalRef}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit To Do: {title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleEdit}>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            ref={this.titleRef}
                                            type="text"
                                            className="form-control"
                                            defaultValue={title}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            ref={this.descriptionRef}
                                            defaultValue={description}
                                            cols="30"
                                            rows="5"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
