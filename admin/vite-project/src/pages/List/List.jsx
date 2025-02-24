import React, { useEffect, useState } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const List = () => {
  const url = 'http://localhost:4000';

  const [list, setList] = useState([]); // Ensure list is an array

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/list`);
      if (response.data.success) {
        setList(response.data.data);
        console.log(response.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error('API Fetch Error:', error);
    }
  };
  const removeFood=async(foodId)=>{
    console.log(foodId)
    const response=await axios.post(`${url}/api/del`,{id:foodId});
    console.log((await response).data.success)
    await fetchList();
if(await response.data.success){
    console.log('if block')
    toast.success((await response).data.message)
}    
else{
    toast.error('error')
}
  }

  useEffect(() => {
    fetchList();
  }, []); // Removed 'list' dependency to prevent infinite re-renders

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className='list-table-format' id='list-table-format'>
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))
        ) : (
          <p>No data available</p> // Handles empty list case
        )}
      </div>
    </div>
  );
};

export default List;