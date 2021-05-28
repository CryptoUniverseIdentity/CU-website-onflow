
const defaultState = {
    hash: '',
    status: ''
};

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_BLIND_TRANS':
            return Object.assign({}, state, payload);
        default: return state;
    }
};

export default reducer;