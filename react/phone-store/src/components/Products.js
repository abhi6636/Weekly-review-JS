import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { phonesList } from './Products.data';

const Products = () => {
    const [products,setProducts] = useState(phonesList);
    
    function decQty(id){
      const newProduct = products.map((product)=>
      product.id === id && product.qty>1 ? {...product,qty:product.qty - 1}: product
      )
      setProducts(newProduct)
    }

    function incQty(id){
        const newProduct = products.map((product)=>
        product.id === id ? {...product,qty:product.qty + 1}: product
        )
        setProducts(newProduct)
      }
  return (

    <div>
        <h1>Mobile Store</h1>
        {products.map((product) =>(
        <div className="d-inline-flex">
            <Card className="shadow mb-5 bg-body-tertiary rounded" style={{ width: '13rem', height:"35rem" }}>
            <Card.Img className="p-3" style={{height:"15rem"}} variant="top" src={require(`../assets/${product.image}.jpg`)} />
            <Card.Body>
              <Card.Title>{product.model}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <h5>Price : ${product.price}</h5>
              <div>
                  Qty :
                  <Button className='m-1' onClick={()=>decQty(product.id)}>-</Button>
                  {product.qty}
                  <Button className='m-1' onClick={()=> incQty(product.id)}>+</Button>
              </div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </div>
        ))}
    


    </div>
  )
}

export default Products