var secondElement= document.getElementById("secondArray");
var minuteElement= document.getElementById("minuteArray");
var hourElement= document.getElementById("hourArray");
var dayOfWeekElement= document.getElementById("dayOfWeek");
var monthElement= document.getElementById("month");
var dayElement= document.getElementById("day");
var clockDigitalElement = document.getElementById("clockDigital");
setInterval(function() {
    var date = new Date();
    dayChange();
    secondElement.style.transform= 'rotate('+ (date.getSeconds() * 6 - 90 )+'deg)';
    minuteElement.style.transform= 'rotate('+ (date.getMinutes() * 6 - 90 )+'deg)';
    hourElement.style.transform= 'rotate('+ (date.getHours() * 30 - 90 )+'deg)';

  if (date.getMinutes() < 10)
    clockDigitalElement.innerHTML=date.getHours().toString()+ ":0" + date.getMinutes().toString();
  else
    clockDigitalElement.innerHTML= date.getHours().toString()+ ":"+date.getMinutes().toString();
  if (date.getHours() === 0);
   dayChange();
}, 1000);

function dayChange() {
    var date =new Date();
    var dayOfWeekCheck =date.getDay();
    switch (dayOfWeekCheck) {
            case 0:
            {
                dayOfWeekElement.innerHTML='SUN';
                  break;
            }
            case 1:
                {
                    dayOfWeekElement.innerHTML='MON';
                      break;
                }    
            case 2:
            {
                dayOfWeekElement.innerHTML='TUE';
                  break;
            }
            case 3:
            {
                dayOfWeekElement.innerHTML='WED';
                  break;
            }
            case 4:
            {
                dayOfWeekElement.innerHTML='THUR';
                  break;
            }
            case 5:
            {
                dayOfWeekElement.innerHTML='FRI';
                  break;
            }
            case 6:
            {
                dayOfWeekElement.innerHTML='SAT';
                  break;
            }
          
    
        
    }


var monthCheck = date.getMonth();
switch (monthCheck) {
    
        case 0:
        {
            monthElement.innerHTML='JAN';
              break;
        }
        case 1:
        {
            monthElement.innerHTML='FEB';
             break;
        }
        case  2:
        {
            monthElement.innerHTML='MAR';
            break;
        }
        case 3:
        {
            monthElement.innerHTML='APR';
            break;
        }
        case 4:
         {
            monthElement.innerHTML='MAY';
           break;
         }
         case 5:
         {
            monthElement.innerHTML='JUN';
           break;
         }
         case 6:
         {
            monthElement.innerHTML='JUL';
           break;
         }
         case 7:
         {
            monthElement.innerHTML='AUG';
           break;
         }
         case 8:
         {
            monthElement.innerHTML='SEP';
           break;
         }
         case 9:
         {
            monthElement.innerHTML='OCT';
           break;
         }
         case 10:
         {
            monthElement.innerHTML='NOV';
           break;
         }
         case 11:
         {
            monthElement.innerHTML='DEC';
           break;
         }
        

    }

var dayCheck = date.getDate();
dayElement.innerHTML= dayCheck.toString();


}