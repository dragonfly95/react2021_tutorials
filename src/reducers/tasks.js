const initialState = {
    task: '',
    tasks: []
};

export default function tasksReducer(state = initialState, action) {
    debugger
    console.log('./reducers/tasks.js')
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}