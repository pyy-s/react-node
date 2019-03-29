export default {
    namespace: 'user',
    state:{},
    reducers: {
    add(state) { return state + 1 },
},
    reducer: {
    *addAfter1Second(action, { call, put }) {
            yield put({ type: 'add' });
        },
    },
}