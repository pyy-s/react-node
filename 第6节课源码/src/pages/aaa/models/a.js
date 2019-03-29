export default {
    namespace: 'aa1',
    state:[1,2,3],
    reducers: {
        add(state) { return state + 1 },
    },
    reducer: {
        *addAfter1Second(action, { call, put }) {
            yield put({ type: 'add' });
        },
    },
}