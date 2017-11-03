const express = require('express');
const router = express.Router();
const Quest = require('../model/quest');

router.get('/', (request, response) => {
    response.send([
        {
          "_id": "123",
          "id": "123",
          "title": "a quest",
          "difficulty": 1,
          "dueDate": "10/10/10"
        },
        {
          "_id": "1234",
          "id": "1234",
          "title": "a quest 2",
          "difficulty": 2,
          "dueDate": "10/10/10"
        }
      ])
})

router.post('/', (request, response, next) => 
{
    let quest = new Quest(request.body);
    quest.validate()
        .then(() => next())
        .catch(validationError => response.status(400).send(validationError))
})

router.post('/', (request, response) => {
    response.status(201).send();    
})

router.patch('/status', (request, response) => {
    response.status(200).send();        
})

router.patch('/due-date', (request, response) => {
    response.status(200).send();            
})

module.exports = router;