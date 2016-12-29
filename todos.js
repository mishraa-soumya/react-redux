const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODOS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
         case 'TOGGLE_TODOS':
            return state.map(
                (todo) => {
                    if(todo.id != action.id){
                        return todo;
                    }

                    return {
                        ...state, completed: !todo.completed
                    };
                });
        default:
            return state;
    }
};