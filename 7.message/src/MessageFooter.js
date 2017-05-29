/**
 * Created by haoxiao on 2017-05-23.
 */
import React, { Component } from 'react';

export default class MessageFooter extends Component{
    addMsg = ()=>{
        let name = this.name.value;
        let content = this.content.value;
        this.props.addMessage({name,content});
        this.content.value='';
        this.name.value = '';
    };
    render(){
        return(
            <div className="panel-footer">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" className="form-control" id="name" placeholder="姓名" ref={(ref)=>this.name=ref}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">内容</label>
                        <textarea className="form-control" id="content" rows="5" ref={(ref)=>this.content=ref}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.addMsg} className="btn btn-primary">提交</button>
                    </div>
                </form>
            </div>
        )
    }
}