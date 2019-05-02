import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './profile.css';
import instance from '../../services/axios';

class Profile extends React.Component{
    state={
        userProfile:[],

    }
    componentDidMount(){
            const userId = parseInt(this.props.match.params.id)
            instance.get(`shows/user/${userId}`)
            .then((response)=>{
                this.setState({
                    userProfile : (this.state.userProfile.concat(response.data))
                })

            })


    }
    render(){
        console.log(this.state)
        return(
            <>
              <div className='container row '>
               {
                this.state.userProfile.map((e,i)=>{
                  return( 
                <div className='moviediv' key={i}>
                    <HashRouter>
                      <Link to={`/show/${e.shows_id}`} key={i}>
                        <img src={`${e.img_url}`} alt={`${e.title}`}></img>
                        <span>{e.title}</span>
                        <span className='space'>{e.genre_name}</span>
                      </Link>
                    </HashRouter>
                </div>

                  )
                })
               }
              </div>
            </>
        )
    }
}

export default Profile