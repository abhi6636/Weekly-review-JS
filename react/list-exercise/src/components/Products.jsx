import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { phonesList } from './Products.data';


const Products = () => {
    const[products,setProducts] = useState(phonesList)
    
  return (
    <div>
        <h1>Welcome to the Phone Store</h1>

        {products.map((product) =>(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
              <Card.Title>{product.model}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <h5>Price : $ {product.price}</h5>
              <p>
              <Card.Text>
                Qty : {product.qty}
              </Card.Text> <span>
              <Button variant="primary">+</Button> <button varient="danger">-</button>
              </span> </p>
            </Card.Body>
          </Card>
        ))}
        
    </div>
  )
}

export default Products