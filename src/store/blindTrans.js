
const defaultState = {
    hash: ''
};

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    console.log(9, payload)
    switch (type) {
        case 'ADD_BLIND_TRANS':
            return Object.assign({}, state, {
                hash: payload.hash
            });
        default: return state;
    }
};

export default reducer;