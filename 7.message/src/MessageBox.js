import React, { Component } from 'react';
import MessageHeader from './MessageHeader';
import MessageFooter from './MessageFooter';
import MessageBody from './MessageBody';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
class MessageBox extends Component {
    constructor(props){
        super(props);
        this.state = {messages:[{id:1,name:'张三',content:'今天下雨咯！',createAt:new Date()}]};
    }
    delMessage = (id)=>{
        let messages = this.state.messages;
        messages = messages.filter((item)=>item.id!==id);
        this.setState({messages});
    };
    addMessage = (message)=>{
        let messages = this.state.messages;
        message.id = messages.length>0?messages[messages.length-1].id+1:1;
        message.createAt = new Date();
        messages.push(message);
        this.setState({messages});
    };
  render() {
    return (
      <div className="panel panel-default">
        <MessageHeader/>
        <MessageBody messages={this.state.messages} delMessage={this.delMessage}/>
        <MessageFooter addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default MessageBox;
