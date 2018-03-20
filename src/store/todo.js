const todo = {
    state: [],
    reducers: {
        add(state, payload) {
            return [...state, ...payload];
        },
        post(state, payload) {
            return [...state, payload];
        },
        deletePost(state, payload) {
            const flag = state.filter(item => item.id !== payload.id);
            return flag;
        },
        editPost(state, payload) {
            const flag = state.map(item => {
                if(item.id === payload.id) {
                    return payload;
                }
                return item;
            });
            return flag;
        }
    }
};

export default todo;