import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeServiceService {

  constructor() { }

  getDateTime(){
    let date = new Date();
    function minutes(){
      if(date.getMinutes()<10){
        return '0'+date.getMinutes();
      } else {
        return ''+date.getMinutes();
      }
    }

    function hours(){
      if(date.getHours()<10){
        return '0' + date.getHours();
      } else {
        return '' + date.getHours();
      }
    }
    function weekDay(){
      let weekDaysArr = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return weekDaysArr[date.getDay()];


    }

    function monthName(){
      let monthNamesArr = ["January", "February", "March"
      , "April", "May", "June", "July", "August"
      , "September", "October", "November", "December"];

      return monthNamesArr[date.getMonth()];

    }
   


    return {
      currentMinutes: minutes(),
      currentHours: hours(),
      currentDay: date.getDate(),
      currentWeekDay: weekDay(),
      currentMonth:  monthName(),
      currentYear: date.getFullYear(), 
    }

}
}


