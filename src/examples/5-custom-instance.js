import axios from 'axios';
import { useEffect } from 'react';
import apiDefault from '../axios/customSetup';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
   try{
    const response1 = await axios(randomUserUrl);
    const response2 = await apiDefault('/react-store-products')
    console.log(response1)
    console.log(response2)
   } catch(error){
    console.log(error.response)
   }
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
