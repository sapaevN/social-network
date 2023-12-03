import React from "react";
import s from "./FormsControls.module.scss"

export const Textarea = ({input,meta:{error,touched}} ) => {

    return(
        <div>
         <div>  <textarea {...input}></textarea> </div>
            { touched &&
                ((error && <span className={s.errorMessage}>{error}</span>))}
        </div>
    )
}

export const Input = ({input,placeholder,type,meta:{error,touched}}) => {

    return(
        <div>
            <div>  <input type={type} placeholder={placeholder} {...input}></input> </div>
            { touched &&
                ((error && <span className={s.errorMessage}>{error}</span>))}
        </div>
    )
}