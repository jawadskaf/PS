import React, { Component } from 'react';
import { loadInfo } from "../actions/actions";

class CustDropDown extends Component {
    constructor(){
        super();
        this.state = {
            dropDown: [],
        }
    }
    componentDidMount(){
this.loadingTheInfo();
    }
    loadingTheInfo = () => {
        let data = {
            tableName: this.props.tableName,
            _id:this.props._id,
            _name: this.props._name,
        }
        loadInfo(data).then((res) =>{
            let data = [];
            data = res;
            let dropDown = [];
            for (let i = 0;i<data.length;i++)
            {
                let item = data[i];
                dropDown.push(<option key ={i} value = {item.id}>{item.name}</option>);
            }
            this.setState({dropDown: dropDown})
        })
    }

    render(){
        return (
            <div className = "container" >
                <select>{this.state.dropDown}</select>
            </div>
        );
    }
}

export default CustDropDown;