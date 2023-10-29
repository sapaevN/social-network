import React from "react";
import s from './Message.module.scss'

const Message = (props) =>{
    return(
        <div className={s.chat__message}>
            <div className={s.chat__ava}>ava</div>
            <div className={s.chat__text}>{props.message}</div>
        </div>
    );
}
export default Message