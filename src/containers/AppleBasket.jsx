import React, { Component } from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/AppleActions';

import AppleItem from '../components/AppleItem';

class AppleBasket extends Component {
    render() {
        let { state, actions} = this.props;
        //这部分从对应的 appleBasketReducer.js 中拷贝
        let mockState = {
            isPicking : false,
            newAppleId: 3,
            apples: [
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
        //是否开启模拟数据的开关，注释这行代码关闭模拟数据
        state = mockState;

        //对 state 做显示级别的转化
        let stats = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };

        state.apples.map(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
            stats[selector].quantity ++;
            stats[selector].weight += apple.weight;
        });

        function getEmptyTip(length) {
            return !length  ? (<div className="block empty-tip">空空如也</div>) : ""
        }
        return (
            <Grid className="appleBasket">
                <Row className = "show-grid">
                    <Col md={12} mdPull={6} className="title">苹果篮子</Col>
                </Row>
                <Row className = "show-grid">
                    <Col md={6} mdPull={6} className="section">
                        <div className="head">当前</div>
                        <div className="content">
                            {stats.appleNow.quantity}个苹果，
                            {stats.appleNow.weight}克
                        </div>
                    </Col>
                    <Col md={6} mdPush={6} className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">
                            {stats.appleEaten.quantity}个苹果，
                            {stats.appleEaten.weight}克
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid appleList">
                    { getEmptyTip(state.apples.length)}
                    { state.apples.map(apple =>
                        <AppleItem
                            state ={apple}
                            actions={{eatApple: actions.eatApple}}
                            key={apple.id}
                        />)
                    }
                    <Button bsStyle="primary" className="btn-div" onClick={actions.pickApple}>摘苹果</Button>
               </Row> 
            </Grid>
        );
    }
}

function select(state) {
    return {
        state: state.appleBasket
    }
}
function buildActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(select, buildActionDispatcher)(AppleBasket);