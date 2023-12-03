import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.status)
    }
    onChangeInput = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        {
                            !this.state.status ? <span>no status</span>
                                :<span> {this.state.status} </span>
                        }


                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} onChange={this.onChangeInput} value={this.state.status}></input>
                    </div>
                }

            </>
        )
    }
}

export default ProfileStatus