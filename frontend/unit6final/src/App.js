import React, { Component } from 'react';
import './App.css';
import { Switch, HashRouter, Route } from 'react-router-dom';
import AuthContext from './contexts/auth';
import instance from './services/axios';
import Navbar from './components/navbar/navbar';
import Users from './components/users/users';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import PostProfile from './components/postprofile/postprofile';
import Show from './components/show/show';
import Showlist from './components/showlist/showlist';






class App extends Component {
 
  state={
    users: '',
    activeUser:1,
  }

  componentDidMount(){
      instance.get('/users')
      .then((response)=>{
        this.setState({
          users : response
        })
      })
        .catch(err=>{
          console.log('Something went wrong in App axios call', err)

        })
      
  }

  selectActiveUser=(id)=>{
      const { activeUser } = this.state
      activeUser = id
      this.setState({
        activeUser : activeUser
      })
  }
  render(){
    return (
      <HashRouter>
        <Route path='/' component={ Navbar }></Route>
        <AuthContext.Provider value={this.state}>
         <Switch>
           <Route path='/' exact component={ Home }></Route>
           <Route path='/users' exact render={ e=><Users login={this.selectActiveUser}/> }></Route>
           <Route path='/user/posts' exact component={ PostProfile }></Route>
           <Route path='/user/:id' exact component={ Profile }></Route>
           <Route path='/show/:id'  exact component={ Show }></Route>
           <Route path='/shows'  exact component={ Showlist }></Route>

         </Switch>
        </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
