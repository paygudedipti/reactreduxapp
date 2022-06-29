import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Cardsdata from './CartData';
import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action/action';




const Cart = () => {
  const [ data, setdata] = useState(Cardsdata);


// action function trigger 

const dispatch = useDispatch();

const send =(e) =>{
  // console.log(e)

  dispatch(ADD(e));

}

  console.log(data)
  return (
    <>
 <div className='container mt-3'>
      <h2 className='text-center'>Add to card projects</h2>
      <div className='row  d-flex justify-content-center align-item-center'>
{
  data.map((element, id)=>{
    return (

        <Card style={{ width: '22rem' , border:'none' }} className="mx-2 mt-4 card_style" key={id}>
          <Card.Img variant="top" src={ element.imgdata} style={{height:'16rem'}}  className="mt-3"/>
          <Card.Body>
            <Card.Title>{element.rname}</Card.Title>
            <Card.Text>
             {element.address}
            </Card.Text>
            <Card.Text> Price : ₹ {element.price}
            </Card.Text>
         <div className='button_div d-flex justify-content-center'>
         <Button variant="primary"className='col-lg-12' onClick={()=>send(element)}>Add to Card</Button>
         </div>
          </Card.Body>
        </Card>
 
    )
    
    })
}
</div>
</div>

    </>
  )
}

export default Cart