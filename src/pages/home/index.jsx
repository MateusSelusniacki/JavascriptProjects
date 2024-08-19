import React from 'react';
import TodoItem from './components/TodoItem';
import CreateTodo from './components/CreateTodo';
import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal';
 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  
            todoItems: props.todoItems || []
        };

        this.addItem = this.addItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.toggleItemCompletion = this.toggleItemCompletion.bind(this);
    }

    addItem(item) {
        const todoItems = [...this.state.todoItems, item];
        this.saveItems(todoItems);
    }

    deleteItem(index) {
        let todoItems = this.state.todoItems.slice();
        todoItems.splice(index, 1);
        this.saveItems(todoItems);
    }

    saveItem(index, { title, description }) {
        const todoItems = [...this.state.todoItems];
        todoItems[index] = { ...todoItems[index], title, description };
        this.saveItems(todoItems);
    }

    saveItems(todoItems) {
        this.setState({ todoItems });
        this.props.onSaveItems(todoItems);
    }

    toggleItemCompletion(index) {
        const todoItems = [...this.state.todoItems];
        todoItems[index].completed = !todoItems[index].completed;
        this.saveItems(todoItems);
    }

    render() {
        const items = this.state.todoItems.map((item, index) => (
            <div className="row align-items-center p-3" key={index}>
                <div className="col-11">
                    <TodoItem
                        title={item.title}
                        description={item.description}
                        completed={item.completed}
                        onToggleCompleted={() => this.toggleItemCompletion(index)}
                    />
                </div>
                <div className="col">
                    <EditModal 
                        title={item.title}
                        description={item.description}
                        onItemEdited={(editedItem) => this.saveItem(index, editedItem)}
                    />
                    <DeleteModal 
                        title={item.title}
                        onItemDeleted={(deletedItem) => this.deleteItem(index, deletedItem)}
                    />
                </div>
            </div>
        ));

        return (
            <div className="container">
                <div className="mt-2 mb-5">
                    <CreateTodo onCreateItem={this.addItem} />
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}
