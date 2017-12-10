// import ajax from '../services/ajax'

const actions = {
   pickApple: () => (dispatch, getState) => {
       //如果正在摘苹果，则结束这个thunk, 不执行摘苹果
       if(getState().isPicking)
           return;

       //通知开始摘苹果
       dispatch(actions.beginPickApple());

       //发送摘苹果请求
       // ajax({
       //     url: '/appleBasket/pickApple',
       //     method: 'GET'
       // }).done(data => {
       //     dispatch(actions.donePickApple(data.weight))
       // }).fail(error => {
       //     dispatch(actions.failPickApple(error));
       // });
   },

    beginPickApple: () => ({
        type: 'BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: 'DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => ({
        type: 'EAT_APPLE',
        payload: appleId
    })
};
export default actions;