const axios = require("axios");
const express = require("express");
const app = require('express').Router()
const { Dog, Temper } = require('../db.js');

app.get('/dogs', async (req, res, next) => {
    let getDogs = [] 
    console.log('REQ.QUERY.NAME',req.query.name);
    req.query.name?next():
    await axios.get('https://api.thedogapi.com/v1/breeds')     
        .then(async data => {            
            data.data.map(e=>{
                getDogs.push({
                    id:e.id,
                    name:e.name,
                    temperament:e.temperament,
                    weight:e.weight.metric,
                    image:e.image.url,
                })                
            })
            let dbDogs = await Dog.findAll({include:Temper})
            if(dbDogs.length) dbDogs.map(async e=>await getDogs.push({
                id:e.id,
                name:e.name,
                temperament:e.tempers.map(e=>e.name).toString(),
                weight:e.weight,
                image:e.image,
            }))
            console.log('get /dogs NUMBER OF DOGS:',getDogs.length);    
            return res.json(getDogs)                           
        })                
        .catch(e => {
            res.status(404).send('Error!')
        })
    })


app.get('/dogs', async (req, res) => {
    let {name} = req.query
    let dbDogs = await Dog.findAll({include:Temper})
    let searchDbDog = dbDogs.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
    let dbDogsResponse = []
    let dbDogFiltered = searchDbDog.map(async e=>await dbDogsResponse.push({
        id:e.id,
        name:e.name,
        temperament:e.tempers.map(e=>e.name).toString(),
        weight:e.weight,
        height:e.height,
        image:e.image,
        lifeSpan:e.age
}))
    dbDogsResponse.length?res.status(200).send(dbDogsResponse):  
    await axios.get('https://api.thedogapi.com/v1/breeds') 
    .then(data => {
        let getDogsByBreed = data.data.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
        console.log('GET DOGS BY BREED:',getDogsByBreed);
        let finalDogs=[]
        let dogsByQuery=getDogsByBreed.map(e=>finalDogs.push({
            id:e.id,
            name:e.name,
            temperament:e.temperament,
            weight:e.weight.metric,
            image:e.image.url,
        }))
        finalDogs.length?res.send(finalDogs):res.status(404).send('We couldnt find a dog with that breed')
    })
        .catch(e => {
            console.log('error get /dogs?name=xxx',e.message)
            res.status(404).send('We couldnt find a dog with that breed')
        })
    })
    
app.get('/dogs/:id', async (req, res) => {
    let {id} = req.params
    let getDbDogs = await Dog.findAll({include:Temper})
    let filteredDbDogs = getDbDogs.filter(e=>e.id.toString()===id.toString())
    if(filteredDbDogs.length)return res.status(200).send([{
                name:filteredDbDogs[0].name,
                temperament:filteredDbDogs[0].tempers.map(e=>e.name).toString(),
                weight:filteredDbDogs[0].weight,
                height:filteredDbDogs[0].height,
                image:filteredDbDogs[0].image,
                age:filteredDbDogs[0].age
    }])
    await axios.get('https://api.thedogapi.com/v1/breeds')     
        .then(data => {
            let response = []
            console.log('DATA DOG 1 ID',data.data[0].id);
            getDogById=(data.data.filter(e=>parseInt(e.id)===(parseInt(id))))
            console.log('DOG BY ID:',getDogById[0]);
            response.push({
                name:getDogById[0].name,
                temperament:getDogById[0].temperament,
                weight:getDogById[0].weight.metric,
                height:getDogById[0].height.metric,
                image:getDogById[0].image.url,
                lifeSpan:getDogById[0].life_span,
                origin:getDogById[0].origin,
                breed_group:getDogById[0].breed_group,
                bred_for:getDogById[0].bred_for,
            })
            console.log('RESPONSE:', response);
            response.length>0?res.send(response):res.status(404).send('We couldnt find a dog with that id')
        })                
        .catch(e => {
            console.log('We couldnt find a dog with that id');
            res.status(404).send('We couldnt find a dog with that id')
        })   
    })

app.get('/temperaments', async (req,res) => {
    await axios.get('https://api.thedogapi.com/v1/breeds')     
        .then(data => {
            let filteredTemps= [...new Set(data.data.reduce((t,e)=>t+e.temperament+',',[]).split(',').map(e=>e.replace(/\s+/g, '')))]
            console.log('FILTERED NUMBER OF TEMPS:',filteredTemps.length);
             filteredTemps.map(async e=>{
                let x = await Temper.findOne({where:{name:e}})
                if(!x)Temper.create({name:e})
            }) 
            filteredTemps.length>0?res.send(filteredTemps):res.status(404).send('get /temperaments ERROR!')
        })
        .catch(e => {
            console.log('get /temperaments ERROR!');
            res.status(404).send('get /temperaments ERROR!')
        })   
})


app.post('/dogs/create', async (req,res,next) => {
    console.log('REQ.BODY /CREATE:', req.body);
    let {name, height, weight, age, temperaments, image} = req.body
    let dogExists = await Dog.findOne({where:{name}})
     if(dogExists)return res.status(404).send('Already exists a dog with this name')  
       Dog.create({
            name,
            height,
            weight,
            age,
            image,
            temperaments
        })
        .then(async(dog)=>{
            console.log('NEW DOG CREATED INFO:', dog);
            console.log('TEMPERAMENTS:', temperaments);
            await dog.setTempers(temperaments)            
            res.status(200).send(dog)
        })
        .catch((e)=>{
            res.status(404).send('POST /dogs CATCH!!!!!!!')
        })        
})



module.exports = app

