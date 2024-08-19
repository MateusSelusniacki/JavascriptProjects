import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/home';
import itemStorage from './utils/item-storage';

const todoItems = itemStorage.getItems() || []; // Fallback to an empty array if getItems fails

if (itemStorage.isLocalStorageAvailable()) {
    const items = itemStorage.getItems();
    itemStorage.saveItems(items);
} else {
    console.warn("localStorage is not available. Data will not persist.");
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App 
            todoItems={todoItems}
            onSaveItems={itemStorage.saveItems.bind(itemStorage)} // Ensuring proper binding
        />
    </React.StrictMode>
);
