
const defaultState = {
    hash: '',
    status: '',
    tokenId: ''
};

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_BLIND_TRANS':
            return Object.assign({}, state, payload);
        default: return state;
    }
};

export default reducer;