const express = require('express')
const app = express()
const port = 5000


const task = {
    "tasks": ["Express", "PostgreSQL", "MongoDB", "React"]
  }
const student = {
    "students": [
      {
        "name": "Jihad",
        "gender": "Male"
      },
      {
        "name": "Joshua",
        "gender": "Male"
      },
      {
        "name": "Rayan",
        "gender": "Male"
      },
      {
        "name": "Rayhan",
        "gender": "Male"
      },
      {
        "name": "Rizky",
        "gender": "Male"
      },
      {
        "name": "Vasya",
        "gender": "Female"
      },
      {
        "name": "Wahid",
        "gender": "Male"
      },
    ]
  }
app.get('/', (req,res) =>{
    res.status(200).send('OK')
})
app.listen(port, ()=>{console.log(`listening in port ${port}`)})

app.get('/tasks', (req,res)=>{
    res.json(task)
})
app.get('/students', (req,res)=>{
    res.json(student)
})
app.get('*', (req,res)=>{
    res.status(404).send('Error Not Found')
})