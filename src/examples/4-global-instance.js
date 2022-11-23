import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
    const response1 = await axios(productsUrl);
    console.log('Response 1',response1.data)
    const response2 = await axios(randomUserUrl);
    console.log(response2)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
