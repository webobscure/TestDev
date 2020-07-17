import React, { Component } from 'react'

//assets
import giraffelogo from '../assets/logo.svg'
import gender from '../assets/gender.svg'
import weight from '../assets/weight.svg'
import height from '../assets/height.svg'
import edit from '../assets/edit.png'
import pen from '../assets/pen.png'
import trash from '../assets/trash.png'



export default class GiraffeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.isEdit = this.isEdit.bind(this);
    }
    isEdit = (event) => {
        let isEdit = this.state.isEdit
        if (event.target) {
            this.setState({isEdit : !isEdit})
        }
    }

    render() {
        const {isEdit} = this.state
        return (
            <div className="card">
                        <div className="giraffe-profile">
                            <div className="edit-block">
                                <img src={edit} alt="edit giraffe" onClick={this.editGiraffe} className="edit"/>

                                {isEdit (
                                    <div>
                                        <div className="edit-block__change">
                                            <img src={pen} alt="edit" className="pen"/>
                                            <h5 className="set-edit">Редактировать</h5>
                                        </div>
                                        <div className="edit-block__delete">
                                            <img src={trash} alt="edit" className="trash"/>
                                            <h5 className="set-delete">Удалить</h5>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <img src={giraffelogo} alt="logo" className="giraffe-profile__logo"/>
                            <h4 className="giraffe-profile__name">Матильда</h4>
                            <div className="giraffe-profile__settings">
                                <div className="giraffe-block">
                                    <img src={gender} alt="param" className="param"/>
                                    <img src={weight} alt="param" className="param"/>
                                    <img src={height} alt="param" className="param"/>
                                </div>
                                <div className="giraffe-char"></div>
                            </div>
                        </div>
                    </div>
        )
    }
}
