import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './users.css';
import instance from '../../services/axios';
import AuthContext from '../../contexts/auth';

class Users extends React.Component{

    state={
        users:[],
        activeUsers: {},
    }
    static contextType = AuthContext
    componentDidMount(){
        console.log(this.props)
        instance.get('/users')
        .then((response)=>{
            console.log('response', response)
            this.setState({
                users:(this.state.users || []).concat(response.data)
            })
        })
        
        
    }

   
    render(){
        console.log(this.state)
        return(
        <>
           
         <AuthContext.Consumer>
            {
                (appState)=>{
                    if(appState.users){
                        console.log('appState',appState)
                        return(<>
                            <h4>{`Welcome ${appState.activeUser.username}`}</h4>
                            <h2>{`Your user id is ${appState.activeUser.id}`}</h2>
                            <h1>Master List of All Users</h1>
                            <ul>         
                            {
                                this.state.users.map((e,i)=>{
                                  return <><div key={i}><button className="login" onClick={event=>this.props.login(e.id)}>Log In</button>
                                                <HashRouter><Link to={`/user/${e.id}`} key={i}><li className="login">{`${e.username}`}</li></Link></HashRouter>
                                            </div><br></br>
                                        </>
                                })
                            }                     
                            </ul>
                        </>)
                    }
                }

            }
        
         </AuthContext.Consumer>
        </>
        )
          
            
    
    }
}

export default Users