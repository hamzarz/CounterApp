import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {


    return(
        <div>
            <h1>I am a Counter</h1>
            <button onClick={props.increment} >+</button>
            <span>{props.count}</span>
            <button onClick={props.decrement} >-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
return {count:state.count};
}

const mapDispatchToProps = (dispatch) => {
return {
    increment:  () => dispatch({type:'INCREMENT'}),
    decrement:  () => dispatch({type:'DECREMENT'})
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);