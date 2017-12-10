import { fromJS } from 'immutable';

const defaultState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ]
};

export default (state = defaultState, action) => {

    switch (action.type) {
        case 'BEGIN_PICK_APPLE':
            //TODO
            return state;

        case 'DONE_PICK_APPLE':
            //TODO
            return state;

        case 'FAIL_PICK_APPLE':
            //TODO
            return state;

        case 'EAT_APPLE':
            return  fromJS(state).setIn(['apples',action.payload,'isEaten'], true).toJS();

        default:
            return state;
    }

};