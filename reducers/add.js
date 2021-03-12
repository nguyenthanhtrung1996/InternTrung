const initialState = {
    list: [],
    activeId: false,
}

const addReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };
        }
        case 'SET_ACTIVE_HOBBY': {
            return {
                ...state,
                activeId: !activeId
            }
        }
        default:
            return state;
    }

}

export default addReducer;