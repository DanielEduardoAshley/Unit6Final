import React from 'react';
import {  Link } from 'react-router-dom';
import instance from '../../services/axios';
import './showlist.css';



class Showlist extends React.Component{
    state={
        shows: {},
        userAndId:{},
    }

    componentDidMount(){
        instance.get('/shows')
        .then((response)=>{
            console.log('response',response)
            const obj={}
            const userObj={}
            for(let i =0; i<response.data.length ; i++){
                if(!obj[response.data[i].title]){
                  obj[response.data[i].title] = [].concat(response.data[i].username)
                }
                else{
                    obj[response.data[i].title] = (obj[response.data[i].title]).concat(response.data[i].username)

                }
                if(!userObj[response.data[i].username]){
                    userObj[response.data[i].username] = response.data[i].user_id

                }
            }
        return [obj, userObj]

        })
        .then((Objs)=>{
            this.setState({
                shows: Objs[0],
                userAndId: Objs[1],

            })
        })
    }

    render(){
        const showsKeys = Object.keys(this.state.shows)
        console.log(this.state)
        return(
            <>
            <h1 className="master">Master List of Shows</h1>
            <ul>
                {
                    showsKeys.map((e,i)=>{
                        return( 
                            <>
                                <li className='keysList' key={i}>{`${e} is being watched by `}</li>
                                {this.state.shows[e].map((e,i)=>{
                                    return <Link to={`/user/${this.state.userAndId[e]}`} key={i} ><ul className='list' >{` ${e}`}</ul></Link>
                                })}
                                
                            </>
                        )
                    })   
                }
            </ul>
            </>
        )
    }



}

export default Showlist