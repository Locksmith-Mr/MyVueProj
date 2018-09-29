import types from './types'

const actions = {
    AddAsync({ commit, state }) {
        // 异步操作
        var p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 3000);
        });
        p.then(() => {
            commit(types.ADD);
        }).catch(() => {
            console.log('异步操作');
        })
    }
}

export default actions;