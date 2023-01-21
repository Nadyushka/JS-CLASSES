import React from 'react'
import './lesson_4';
import {onClickHandlerCreate, onClickHandlerReject, onClickHandlerResolve} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button onClick={onClickHandlerCreate} id='btn-create-promise'>Create Promise</button>
            <button onClick={onClickHandlerResolve} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={onClickHandlerReject} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;