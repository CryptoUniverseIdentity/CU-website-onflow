
const reducer = (state = { blockNumber: '' }, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_BLOCK_NUMBER':
            const { blockNumber } = payload;
            if (typeof state.blockNumber !== 'number') {
                return Object.assign({}, state, payload);
            } else {
                return Object.assign({}, state, { blockNumber: Math.max(blockNumber, state.blockNumber) });
            }
        default: return state;
    }
};

export default reducer;