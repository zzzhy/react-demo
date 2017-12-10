import React, {Component} from 'react'
import {Button, Panel, Image} from 'react-bootstrap'

class AppleItem extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state !== this.props.state;
    }

    render() {
        let { state, actions } = this.props;
        /**
         * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
         * //在组件发布时，请注释掉，提高性能
         */
        let mockState = {
            id: 1,
            weight: 256,
            isEaten: false
        };

        let mockActions = {
            eatApple : id => console.log('eatApple',id)
        };

        /**
         * 开关这行代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
         * 在开发阶段打开，使用内部 state 和 action, 开发完成后请注释关闭
         */
        state = mockState; actions = mockActions;

        if (state.isEaten) return null;

        return (
            <Panel>
                <div className="apple">
                    <Image src={require('../images/apple.png')} responsive />
                </div>
                <div className="info">
                    <div>红苹果 - {state.id}号</div>
                    <div>{state.weight}克</div>
                </div>
                <div className="btn-div">
                    <Button bsStyle="primary" onClick={() => actions.eatApple(state.id) }>吃掉</Button>
                </div>
            </Panel>
        );
    }
}

export default AppleItem;