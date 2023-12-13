const initialState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DARK':
            return { theme: 'dark' };
        case 'SET_LIGHT':
            return { theme: 'light' };
        default:
            return state;
    }
};

export default themeReducer;
