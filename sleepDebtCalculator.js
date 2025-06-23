function getSleepHours(day){
  let hours = 0;
  switch(day){
    case 'monday':
       hours = 8;
       break;
    case 'tuesday':
        hours = 10;
        break;
    case 'wednesday':
        hours = 6;
        break;
    case 'thursday':
         hours = 7;
         break;
    case 'friday':
         hours = 8;
         break;
    case 'saturday':
          hours = 6;
          break;
    case 'sunday':
          hours = 9;
          break;
  }
  return hours;
}

//console.log(getSleepHours('tusday'))

function getAcualSleepHours(){
  const daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  sleepSum = 0;
  for (let i = 0; i < daysOfTheWeek.length; i++){
    sleepSum += getSleepHours(daysOfTheWeek[i]);
  }
  return sleepSum;
}

//console.log(getAcualSleepHours())

function getIdealSleepHours(hoursNeeded){
  return hoursNeeded * 7;
}

//console.log(getIdealSleepHours())

function calculateSleepDebt(){
  let actualSleepHours = getAcualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  
  let sleepDebt = idealSleepHours - actualSleepHours;
  if (actualSleepHours == idealSleepHours){
      console.log('You are geting the prefect amount of sleep');
  }else if(actualSleepHours > idealSleepHours){
      let excessSleep = actualSleepHours - idealSleepHours;
      console.log('You are getting ' + excessSleep + ' more hours of sleep than needed.');
  } else{
      let sleepDebt = idealSleepHours - actualSleepHours;
      console.log('You have a sleep debt of ' + sleepDebt + ' hours and should get some more sleep.')
  }
     
}

calculateSleepDebt()

