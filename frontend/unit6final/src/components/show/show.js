import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './show.css';
import instance from '../../services/axios';
import axios from 'axios'
import AuthContext from '../../contexts/auth';
import 'bootstrap';


class Show extends React.Component{

    state={
        showInfo:[],
        newComments:''
    }
    static contextType = AuthContext;
    componentDidMount(){
        const { id } = this.props.match.params
        console.log(id)
        instance.get(`shows/${id}`)
        .then((response)=>{
            console.log(response)
            this.setState({
                showInfo: response.data
            })        
        })
    }

    comment=(e)=>{
        this.setState({
            newComments : e.target.value,
        })
    }
    submitComment=()=>{
        const comment_body =this.state.newComments
        const user_id = this.context.activeUser
        console.log(user_id)
        const show_id = this.props.match.params.id
        instance.post('/comments', { comment_body,user_id,show_id })
        .then(()=>{
            console.log('success')
            instance.get(`shows/${show_id}`)
            .then((response)=>{
                console.log('responseOrder',response.data)
                this.setState({
                    showInfo: response.data
                })        
            })
        })
        // const {showInfo}=this.state
        // showInfo.concat(this.state.newComments)
        // console.log(showInfo)
        // this.setState({
        //     showInfo : showInfo,
        // })
    }
    render(){
        console.log(this.state)
        return(
            <>
                    
                {this.state.showInfo.length===0?null:<>
                    <div>{`${this.state.showInfo[0].title} ${this.state.showInfo[0].genre_name}`}</div>
                    <div className="card cardImg" style={{"width" : "18rem"}}>
                    <img src={`${this.state.showInfo[0].img_url}`} className="card-img-top" alt={`${this.state.showInfo[0].title} `}></img>
                    <h5>{`Currently Being Watched By ${this.state.showInfo[0].username}`}</h5>
                    { !this.state.showInfo[0].comment_body?<h5>{`0 Comments`}</h5>:
                    <h5>{`${this.state.showInfo.length} Comments`}</h5>
                    }
                  <div className="card-body ">
                {
                    this.state.showInfo.map((e,i)=>{
                      return( this.state.showInfo[(this.state.showInfo.length-1)-i].comment_body?
                         <p className="card-text" key={i}> {`${this.state.showInfo[(this.state.showInfo.length-1)-i].username} says ${this.state.showInfo[(this.state.showInfo.length-1)-i].comment_body}`} </p> : null       
                        
                     )
                    })
                }
                </div>
                </div>

                <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text" onClick={this.submitComment}>Submit</span>
                </div>
                <textarea className="form-control" value={this.state.newComments} aria-label="With textarea" onChange={this.comment}></textarea>
                </div>
                </>
                }  
           
                
            </>
        )
    }

}

export default Show