/**
 * Created by haoxiao on 2017-05-23.
 */
import React, { Component } from 'react';

export default class MessageBody extends Component{
    delMsg = (id)=>{
        this.props.delMessage(id);
    };
    render(){
        return(
            <div className="panel-body">
                <ul className="list-group">
                    {
                        this.props.messages.map((message,index)=>(
                            <li className="list-group-item" key={index}>
                                {message.name}：{message.content}
                                <button onClick={()=>this.delMsg(message.id)} className="btn pull-right btn-xs">x</button>
                                <span className="pull-right">{message.createAt.toLocaleTimeString()}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}