import React from 'react';
import './postprofile.css';
import instance from '../../services/axios';
import AuthContext from '../../contexts/auth';
import 'bootstrap';


class PostProfile extends React.Component{
    state={
        genres: [],
        selectedGenreId:'',
        movie_url:'',
        movie_title:''
    }
    
    static contextType = AuthContext

    componentDidMount(){
        instance.get('genres')
        .then((response)=>{
            this.setState({
                genres: response.data
            })
        })
    }

    handleChange=(e, name)=>{
       this.setState({
        [name] : e.target.value,
       }) 
    }

    genreSelect=(selectedGenreId)=>{
        this.setState({
            selectedGenreId: selectedGenreId,
        })
    }
    
    submit=()=>{
        const title = this.state.movie_title
        const img_url = this.state.movie_url
        const genre_id = this.state.selectedGenreId
        const user_id = this.context.activeUser.id
        console.log('Params', title,img_url,user_id,genre_id)
        console.log(user_id)
        instance.get(`http://localhost:3300/shows/${title}/user/${user_id}`)
        .then((response)=>{
            console.log(response)
            if(response.data.length===0){
                console.log('No movie currently exists')
                instance.post('http://localhost:3300/shows', { title, img_url, user_id, genre_id})
                .then((response)=>{
                    console.log(response)
                })
            }
            else{
                alert('This show is already added')
            }
        })
       
    }



    render(){
        console.log(this.state)
        const userId = !this.context.users.data?'':this.context.activeUser.id
        return(
          <>
          <div className='forms'>
           <div className="input-group mb-3">
            <div className="input-group-prepend">
             <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Genre</button>
            <div className="dropdown-menu">
            {
                this.state.genres.map((e,i)=>{
                  return  <div className="dropdown-item"  key={i} onClick={_=>this.genreSelect(`${e.id}`)}>{e.genre_name} </div>


            })}
 
            </div>
            </div>
            <input type="text" name="movie_title" value={this.state.movie_title} onChange={e=>this.handleChange(e, 'movie_title')} placeholder='Movie Title' className="form-control" aria-label="Text input with dropdown button"></input>
            </div>
            <input type="text" name="movie_url" value={this.state.movie_url} onChange={e=>this.handleChange(e,'movie_url')} placeholder='Movie Url' className="form-control" aria-label="Text input with dropdown button"></input>
            <button type="submit" onClick={this.submit} className="btn btn-primary submitbtn">{`Post New Show For User ${userId}`}</button>

            </div>

 
          </>
        )
    }
}

export default PostProfile