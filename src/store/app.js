
const defaultState = {
    popups: {
        show: false,
        type: 'success',
        text: '',
        link: '',
        linkText: ''
    }
};

const reducer = (state = defaultState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_POPUPS':
            return {...state, popups: payload};
        default: return state;
    }
};

export default reducer;