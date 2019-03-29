export default {
    namespace: 'aa2',
    state:0,
    reducers: {
    add(state) { return state + 1 },
},
    reducer: {
    *addAfter1Second(action, { call, put }) {
            yield put({ type: 'add' });
        },
    },
}