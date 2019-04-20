const express = require('express');
const showsRouter = express.Router();
const showsServices = require('../services/showsServices');


// POST new show
// showsRouter.post('/', (req,res)=>{
//    const {title , img_url, user_id,genre_id} = req.params
// //     console.log('heyya',title , img_url, user_id,genre_id)


//     console.log('showParams', req.params)
//     showsServices.create(title , img_url, user_id,genre_id)
//     .then((response)=>{
//         console.log('SHOWS RESPONSE', response)
//         res.status(200)
//         res.json(response)
//     })
//     .catch(err=>{
//         console.log('Something went wrong in create shows route', err)
//         res.json('Something went wrong in create shows route')
//     })
    
// })


showsRouter.post('/',(req,res)=>{
    const { title, img_url, user_id, genre_id} = req.body
    console.log(req.body, 'jose is fine')
    showsServices.create(title, img_url, user_id, genre_id)
    .then((response)=>{
        console.log(response)
        res.json(response)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })
})

// GET all shows
showsRouter.get('/',(req,res)=>{
    showsServices.read()
    .then((response)=>{
        console.log('SHOWS RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong in get all shows route', err)
        res.json('Something went wrong in get all shows route')
    })

})

// GET all shows for specific genre_id
showsRouter.get('/genre/:genre_id', (req,res)=>{
    const { genre_id } = req.params
    showsServices.readByGenre(genre_id)
    .then((response)=>{
        console.log('SHOWS BY GENRE RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong in get show by genre route', err)
        res.json('Something went wrong in get show by genre route')
    })
  
})

// GET all shows for specific user_id
showsRouter.get('/user/:user_id',(req,res)=>{
    const { user_id } = req.params
    
    showsServices.readByUserid(user_id)
    .then((response)=>{
        console.log('SHOWS BY USER RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong in get show by user route', err)
        res.json('Something went wrong in get show by user route')
    })

})

// GET one show
showsRouter.get('/:show_id', (req,res)=>{
    const { show_id } = req.params
    showsServices.readByShowid(show_id)
    .then((response)=>{
        console.log('SHOWS BY show id RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong in get show by show id route', err)
        res.json('Something went wrong in get show by show id route')
    })
    
})






module.exports={ showsRouter }