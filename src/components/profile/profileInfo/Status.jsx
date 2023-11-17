import React, {createRef} from "react";


class Status extends React.Component {

    localState = {
        statusValue:this.props.status,
        editMode: false,
    }
    activateEditMode = ()=>{
        this.localState.editMode = true
        this.forceUpdate()
    }

    changeStatus = ()=>{
        this.localState.statusValue = this.ref.current.value
        this.forceUpdate()
    }
    disActivateEditMode=()=>{
        this.props.updateStatus(this.localState.statusValue)
        this.localState.editMode = false
        this.forceUpdate()
    }

    ref = createRef()


    render() {
        return (
            <div>
                {!this.localState.editMode &&
                     <div onClick={this.activateEditMode}> {this.localState.statusValue || "------"} </div>
                }
                {this.localState.editMode &&
                    <input autoFocus={true} onBlur={this.disActivateEditMode} ref={this.ref} onChange={this.changeStatus}  value={this.localState.statusValue}></input>
                }
            </div>
        )
    }
}

export default Status