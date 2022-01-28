import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap'
function AddNewCity({AddNew}) {
  const [addNew, setaddNew] = useState({});
  return <>
<Form style={{margin:'40px 10%'}}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >City</Form.Label>
    <Form.Control type="text" value={addNew.city} placeholder="City" onChange={(e)=>setaddNew({...addNew,city:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" value={addNew.description}  placeholder="description please" onChange={(e)=>setaddNew({...addNew,description:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image link</Form.Label>
    <Form.Control type="text" value={addNew.imageUrl}  placeholder="Image link" onChange={(e)=>setaddNew({...addNew,imageUrl:e.target.value})}/>
  </Form.Group>
  <Button onClick={(e)=>{e.preventDefault()
     AddNew({...addNew,id:Math.random()})
     setaddNew({city:'',description:'',imageUrl:''})
    }} variant="primary" type='submit'>
    Submit
  </Button>
</Form>
    </>;
}

export default AddNewCity;
