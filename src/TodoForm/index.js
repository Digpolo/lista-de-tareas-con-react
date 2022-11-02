import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm( ) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
        
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    const onCancel = () => {
       setOpenModal(false);
    };
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        //setNewTodoValue('')
      };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo pendiente</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button" 
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}
                >
                Cancelar 
                </button>

                <button
                    type="submit" 
                    className="TodoForm-button TodoForm-button-add"               
                >
                    Añadir 
                </button>
            </div>

        </form>
    )
}

export { TodoForm };