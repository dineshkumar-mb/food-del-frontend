
import { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Add.css";
import { toast } from "react-toastify";
import axios from "axios";

const Add = ({url}) => {
  // const url = "http://localhost:4000";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((Data) => ({ ...Data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        toast.success("Product added successfully!");

        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write here"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;


// import {  useState } from 'react'
// import {assets } from '../../assets/assets.js'
// import './Add.css'
// import { toast } from 'react-toastify'
// import axios from "axios"

// const Add = () => {


//  const url ="http://localhost:4000";
//      const [image,setImage] = useState(false);
//      const [data,setData] = useState({
//         name:"",
//         description:"",
//         price:"",
//         category:"salad"
//      })   

//      const onChangeHandler = (event)=>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data=>({...data,[name]:value}))
//      }
 
//      const onSubmitHandler = async (event) =>{
// event.preventDefault();
// const formData = new FormData();
// formData.append("name",data.name)
// formData.append("description",data.description)
// formData.append("price",Number(data.price))
// formData.append("category",data.category)
// formData.append("image",data.image)
// const response = await axios.post (`${url}/api/food/add`,formData);
    
// if(response.data.success){
// setData ({
//    name:"",
//         description:"",
//         price:"",
//         category:"salad"
//      }) 
//      setImage(false)  
// }
// else{

// }

// }
// }

  
//   return (
//     <div className='add'>
//      <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className='add-img-upload flex-col'>
//             <p>Upload Image</p>
//             <label htmlFor="image">
//                 <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
//             </label>
//             <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden  required/>
//         </div>
//         <div className='add-product-name flex-col'>
// <p>Product Name</p>
// <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' required/>
//         </div>
//         <div className='add-product-description flex-col'>
// <p>Product description</p>
// <textarea  onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write here' required></textarea>
//         </div>
//         <div className='add-category-price'>
// <div className='add-category flex-col'>
// <p>Product Category</p>
// <select  onChange={onChangeHandler} value={data.category} name="category">
//    <option value="Salad">Salad</option>
//    <option value="Rolls">Rools</option>
//    <option value="Deserts">Deserts</option>
//    <option value="Sandwich">Sandwich</option>
//    <option value="Cake">Cake</option>
//    <option value="Pure veg">Pure veg</option>
//    <option value="Pasta">Pasta</option>
//    <option value="Noodles">Noodles</option>
// </select>
// </div>
// <div className='add-price flex-col'>
// <p>Product Price</p>
// <input  onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' />
// </div>
//         </div>
       
// <button type='submit'className='add-btn'>ADD</button>
//         </form>  
        
//        </div>
//   )
// }

// export default Add; 