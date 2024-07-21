import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddProduct = () => {
  var [inputs, setInputs] = useState({product: "",price:"", category:"",url:""});

  const inputHandler=(e)=>{
    console.log(e.target.value);
    setInputs({...inputs, [e.target.name] : e.target.value });
    console.log(inputs);
  }
  return (
    <div style={{marginTop :'10%', marginLeft  :'45%'}}>
      <Typography variant='h5'>Add Products</Typography><br /><br />
      <TextField variant='outlined' label='Product Name' onChange={inputHandler} name="product" value={inputs.product} ></TextField><br /><br />
      <TextField variant='outlined' label='Price' onChange={inputHandler} name="price" value={inputs.price} ></TextField><br /><br />
      <TextField variant='outlined' label='Category' onChange={inputHandler} name="category" value={inputs.category} ></TextField><br /><br />
      <TextField variant='outlined' label='Image Url' onChange={inputHandler} name="url" value={inputs.url} ></TextField><br /><br />
      <Button  variant="contained"color='success'><Link to={'http://localhost:5173/'} style={{textDecoration:'none' , color:'white'}}>Submit</Link></Button>

    </div>
  )
}

export default AddProduct
