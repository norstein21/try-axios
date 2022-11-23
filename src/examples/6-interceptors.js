import { useEffect } from 'react';
import authIntercept from '../axios/interceptors';
import axios from 'axios';
const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
    const response = await authIntercept('/react-store-products')
    } catch (error) {
      console.log('error',error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
