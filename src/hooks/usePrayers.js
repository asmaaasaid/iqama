import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { getPrayersTime } from '../services/api';

export const usePrayers = ()=>{
    const [remainingTime , setRemainingTime] = useState(" ");
    const [city , setCity] = useState("Cairo");
    const [today , setToday] = useState(moment().format("MMMM Do YYYY | hh:mm"));
    const [time , setTime] = useState({});
    const [nextPrayer , setNextPrayer]=useState(0);

    const prayers = [
  { name: "Fajr", time: time.Fajr },
  { name: "Sunrise", time: time.Sunrise },
  { name: "Dhuhr", time: time.Dhuhr },
  { name: "Asr", time: time.Asr },
  { name: "Sunset", time: time.Sunset },
  { name: "Maghrib", time: time.Maghrib },
  { name: "Isha", time: time.Isha },
  { name: "Imsak", time: time.Imsak },
  { name: "Midnight", time: time.Midnight },
  { name: "Firstthird", time: time.Firstthird },
  { name: "Lastthird", time: time.Lastthird },
];

useEffect(() => {
    getPrayersTime(city).then(setTime);
  }, [city]);

    useEffect(() => {
    const interval = setInterval(() => {
      if (Object.keys(time).length > 0) {
        countDownTime()
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

   const countDownTime = ()=>{
      const currentMoment = moment();
      let prayerIndex = 0;
  
      if (
        currentMoment.isAfter(moment(time["Fajr"], "hh:mm")) &&
        currentMoment.isBefore(moment(time["Dhuhr"], "hh:mm"))
      ) {
        prayerIndex=2
      }
      else if(
        currentMoment.isAfter(moment(time['Dhuhr'], "hh:mm")) &&
        currentMoment.isBefore(moment(time['Asr'], "hh:mm"))
      ) {
        prayerIndex=3
      }
      else if(
        currentMoment.isAfter(moment(time['Asr'], "hh:mm")) &&
        currentMoment.isBefore(moment(time['Maghrib'], "hh:mm"))
      ) {
        prayerIndex=5
      }
      else if(
        currentMoment.isAfter(moment(time['Maghrib'], "hh:mm")) &&
        currentMoment.isBefore(moment(time['Isha'], "hh:mm"))
      ) {
        prayerIndex=6
      }
      else{
        prayerIndex=0
      }   
      
      setNextPrayer(prayerIndex)
      const nextPrayerTime = prayers[prayerIndex].time;
      let remainingTime = moment(nextPrayerTime ,'hh:mm').diff(currentMoment);
      const nextPrayerTimeMoment = moment(nextPrayerTime , 'hh:mm')
      
      if(remainingTime < 0){
        const midnightDiff = moment("23:59:59" , 'hh:mm:ss').diff(currentMoment);
        console.log(midnightDiff);
        
        const fajrToMidnight = nextPrayerTimeMoment.diff("00:00:00","hh:mm:ss");
        console.log(nextPrayerTimeMoment);
        
        console.log(fajrToMidnight);
        
        const totalDifference = midnightDiff+fajrToMidnight;
        remainingTime = totalDifference; 
        console.log(remainingTime);
        
      }
       const durationRemainingTime = moment.duration(remainingTime);
       setRemainingTime(`${durationRemainingTime.hours()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.seconds()}` )
    };
    return { city, setCity, today, prayers, remainingTime, nextPrayer };
}