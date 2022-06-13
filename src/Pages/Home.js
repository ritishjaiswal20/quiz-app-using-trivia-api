import React from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../Data/Categories';

function Home() {
  return (
    <div className="home">
        <div className="settings">
            <span>Quiz Setings</span>
            <div className="settings-select">
              <TextField
               style={{marginBottom:25}}
               label="enter your name"
               varant="outlined"
              />
              <TextField
                select
                label="select Cateogry"
                variant="outlined"
                style={{marginBottom:30 }}
              >
                {Categories.map((cat)=>(
                  <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                ) )}
              </TextField>
    
              <TextField
                select
                label="select Cateogry"
                variant="outlined"
                style={{marginBottom:30 }}
              >

                  <MenuItem key="easy" value="easy">Easy</MenuItem>
                  <MenuItem key="medium" value="medium">Medium</MenuItem>
                  <MenuItem key="hard" value="hard">Hasy</MenuItem>
              </TextField>
              <Button variant="contained" color="primary" size="large">Start quiz</Button>
            </div>
        </div>
        <img src ="/quiz.svg" className="banner" alt="quiz photo"/>
    </div>
  )
}

export default Home