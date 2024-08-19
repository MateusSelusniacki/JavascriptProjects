const STORAGE_KEY = 'todo-items';

export default {
    getItems() {
        try {
            const items = localStorage.getItem(STORAGE_KEY);
            if (items) {
                return JSON.parse(items);
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error retrieving items from localStorage:", error);
            return [];
        }
    },
    saveItems(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error("Error saving items to localStorage:", error);
        }
    },
    isLocalStorageAvailable() {
        try {
            const testKey = '__test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            console.error("localStorage is not available:", error);
            return false;
        }
    }
}
