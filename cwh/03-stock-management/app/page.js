"use client";
import Header from '@/components/Header'
import { useEffect, useState } from 'react'

export default function Home() {
  
  const [productForm, setProductForm] = useState({});
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState('');
  const [dropdown, setDropdown] = useState([{
    _id: "64a96d89677819981f76d79e",
    slug: "jordam",
    quantity: "11",
    price: "1100"
  },
  {
    _id: "64a96c98677819981f76d79c",
    slug: "shirt",
    quantity: "19",
    price: "299"
  }
]);

const [loading, setLoading] = useState(false);
const [query, setQuery] = useState("");
  
  
  const addProduct = async (e)=>{
    e.preventDefault();
    
    try {
      const response = await fetch('/api/product',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(productForm)
      })
      
      if(response.ok){
        console.log('product added successfully');
        setAlert('Your Product has been added!!!');
        setProductForm({})
        
      } else{
        console.log('error adding product');
      }
    } catch (error) {
      console.log('Error',error);
    }
  }

  const handleChange =(e)=>{
    setProductForm({...productForm, [e.target.name]:e.target.value})
  }

  useEffect(()=>{
    const fetchProducts = async()=>{
         const response = await fetch('/api/product')
         let rjson = await response.json()
         setProducts(rjson.products)
    }
    fetchProducts()
  },[])
  
    const onDropdownEdit = async(e) => {
        setQuery(e.target.value)
        if(!loading){
          setLoading(true)
            const response = await fetch(`/api/search?query=${query}`)
            let rjson = await response.json()
            setDropdown(rjson.products)
          setLoading(false)
        }
    }
    

  return (
    <>
           <Header />
      <div className="container mx-auto px-10 ">
        <div className='text-green-800 text-center'>{alert}</div>
        <h1 className="text-3xl font-semibold mb-6">Search a Product</h1>
        <div className="flex mb-2">
          <input onChange={onDropdownEdit} type="text" placeholder="Enter a product name" className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md" />
          <select className="border border-gray-300 px-4 py-2 rounded-r-md">
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {loading && <div className='flex justify-center items-center'> <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="3" fill="none">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
          </div>
        }
        <div className="dropcontainer absolute w-[72vw] border-1 bg-purple-100 rounded-md ">
          
          {dropdown.map(item => {
            return <div key={item.slug} className="container flex justify-between p-2 my-1 border-b-2">

              <span className="slug"> {item.slug} ({item.quantity} available for ₹{item.price})</span>
              <div className='mx-5'>
                <button onClick={() => { buttonAction("minus", item.slug, item.quantity) }}  className="subtract inline-block px-3 py-1 cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md disabled:bg-purple-200"> - </button>

                <span className="quantity inline-block  min-w-3 mx-3">{item.quantity}</span>
                <button onClick={() => { buttonAction("plus", item.slug, item.quantity) }}  className="add inline-block px-3 py-1 cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md disabled:bg-purple-200">  + </button>

              </div>
            </div>
          })}
        </div>
      </div>

      {/* Display Current Stock  */}
      <div className="container mx-auto mt-6 px-10">
        <h1 className="text-3xl font-semibold mb-6">Add a Product</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2">Product Slug</label>
            <input value={productForm?.slug || ""} onChange={handleChange}  name='slug'  type="text" id="productName" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2">Quantity</label>
            <input value={productForm?.quantity || ""} onChange={handleChange}  name='quantity'  type="number" id="quantity" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price</label>
            <input value={productForm?.price || ""} onChange={handleChange}  name='price'  type="number" id="price" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <button onClick={addProduct} type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md font-semibold">
            Add Product
          </button>


        </form>
      </div>
      <div className="container  mx-auto mt-4 px-10">
        <h1 className="text-3xl font-semibold mb-6">Display Current Stock</h1>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              return <tr key={product.slug}>
                <td className="border px-4 py-2 ">{product.slug}</td>
                <td className="border px-4 py-2 text-center">{product.quantity}</td>
                <td className="border px-4 py-2 text-center">₹{product.price}</td>
              </tr>
            })}

          </tbody>
        </table>

      </div>

      

    </>
  )
}
