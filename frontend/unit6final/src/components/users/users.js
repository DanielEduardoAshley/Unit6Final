import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './users.css';
import instance from '../../services/axios';
import AuthContext from '../../contexts/auth';

class Users extends React.Component{

    state={
        users:[]
    }

    componentDidMount(){
        instance.get('/users')
        .then((response)=>{
            console.log('response', response)
            this.setState({
                users:(this.state.users || []).concat(response.data)
            })
        })
        
    }

    render(){
        return(
        <>
           
         <AuthContext.Consumer>
            {
                (appState)=>{
                    if(appState.users){
                        console.log(appState.users)
                        return(<>
                            <h4>{`Welcome ${appState.users.data[0].username}`}</h4>
                            <h2>{`Your user id is ${appState.users.data[0].id}`}</h2>
                            <h1>Master List of All Users</h1>
                            <ul>         
                            {
                                this.state.users.map((e,i)=>{
                                  return <><div key={i}><button className="login" >Log In</button>
                                                <HashRouter><Link to={`/user/${e.id}`}><li className="login">{`${e.username}`}</li></Link></HashRouter>
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