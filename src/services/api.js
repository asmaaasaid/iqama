import axios from 'axios';
export const  getPrayersTime = async (city) => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`);
       return response.data.data.timings
  }