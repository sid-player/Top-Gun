import React from 'react'
import { connect } from "react-redux"

function Error(props) {

    return (
        <div className="border-red-800 flex justify-between text-red-900 border-2 m-1 bg-red-400 bg-opacity-90 rounded-md">
          <p className="m-4">{props.message}</p>
          <button className="mx-6" onClick={()=>props.ok()}>x</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        message: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ok: () => {dispatch({ type:"justChange", error : null })}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Error);
