import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './showlist.css';
import instance from '../../services/axios';
import axios from 'axios'
import AuthContext from '../../contexts/auth';
import 'bootstrap';


class Showlist extends React.Component{
    state={
        shows: []
    }

    componentDidMount(){
        instance.get('/shows')
        .then((response)=>{
            console.log(response)
            const obj={}
            for(let i =0; i<response.data.length ; i++){
                if(!obj[response.data[i].title]){
                  obj[response.data[i].title] = [].concat(response.data[i].username)
                }
                else{
                    obj[response.data[i].title] = (obj[response.data[i].title]).concat(response.data[i].username)

                }
                
            }
        return obj

        })
        .then((showsObj)=>{
            console.log(showsObj)
            this.setState({
                shows: showsObj
            })
        })
    }

    render(){
        console.log(this.state)
        return(
            <>
            </>
        )
    }



}

export default Showlist