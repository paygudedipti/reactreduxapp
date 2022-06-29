import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector,useDispatch } from 'react-redux';
import { Table } from '@mui/material';
import { DEL } from '../redux/action/action';


const Header = () => {
  // get price total
  const [price,setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata);

// for delete
const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // delete product

const del = (id) =>{
 
  dispatch(DEL(id))

}

// total 
const total = () =>{
  let price = 0;
  getdata.map((ele,i)=>{
    price = ele.price * ele.qnty + price
  });
  setPrice(price)
}
useEffect(()=>{
  total();
},[total])

  return (
    <>

      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className='text-decoration-none text-light mx-3'>Add to card</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className='text-decoration-none text-light'>Home</NavLink>

          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping text-light" style={{ cursor: "pointer", fontSize: 25 }}></i>
          </Badge>


        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >


          {/* cart detail show  */}
          {
            getdata.length ?
              <div className='cart_details' style={{ padding: 10, width: "24rem" }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photos</th>
                      <th>Restaurant Name</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        // console.log(e.id)
                       return (
                        <>
                        <tr >
                             
                       
                          <NavLink to={`/cards/${e.id}`}   onClick={handleClose}>
                            <td>
                            <img src={e.imgdata} alt="no img"  style={{width:"5rem", height:"5rem"}}/>
                          </td>
                          </NavLink>
                      
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price }</p>
                            <p>Quantity : {e.qnty}</p>
                          </td>
                          <td>
                            <p style={{cursor:"pointer", color:"red", fontSize:20}} onClick={()=>del(e.id)}>
                               <i className='fa fa-trash smalltrash' ></i></p>
                           
                          </td>
                          <td className='mt-5'>
                            <p style={{cursor:"pointer", color:"red", fontSize:20}} onClick={()=>del(e.id)}>
                               <i className='fa fa-trash largetrash' ></i></p>
                           
                          </td>
                        
                        </tr>
                        </>
                       )
                      })
                    }

                    <p className='text-center'>Total : ₹ {price }</p>
                 
                   
                  </tbody>
                </Table>
              </div> :
              <div className='card_details d-flex justify-content-center align-items-center' style={{ position: "relative", width: "24rem", padding: 10 }}>
                <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, cursor: "pointer", fontSize: 23 }}
                  onClick={handleClose}></i>
                <p style={{ fontSize: 22 }}> Your Carts Is Empty</p>
                {/* <i class="fa-solid fa-cart-circle-xmark"></i> */}
                {/* <img src='./cart.gif' alt='no img' /> */}
              </div>
          }


        </Menu>
      </Navbar>


    </>
  )
}

export default Header