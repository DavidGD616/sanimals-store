import React from 'react';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // Hamburger Button
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <TodoContext.Provider value={{
            isMenuOpen,
            toggleMenu,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }