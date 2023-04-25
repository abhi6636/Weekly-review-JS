import React from 'react'

const Keys = () => {
    const [items,setItems] = useState(products)

    const products = [
        {id:1,name:"Laptop",brand:"Dell",qty:1},
        {id:2,name:"Laptop",brand:"HP",qty:1},
        {id:3,name:"Laptop",brand:"Lenovo",qty:1},
        {id:4,name:"Laptop",brand:"Asus",qty:1}
    ]

    const changeQty = (id) => {
       items.map((item)=>{
        if(item.id === id){
            qty = item.qty + 1
        }
       })
    }
  return (
    <div>
        {items.map((product)=>(
            <div className='bg-success text-white m-2'>
        <h1>{product.name}</h1>
        <h3>{product.brand}</h3>
        <h4>Qty:{product.qty}</h4>
        <button onClick={()=>changeQty(product.id)}>+</button>
            </div>
        )
        )}

    </div>
  )
}

export default Keys