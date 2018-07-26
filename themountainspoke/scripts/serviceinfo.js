//connection to the API//
let serviceinfoRequest = new XMLHttpRequest();
let serviceinfoURL = 'https://joh16080.github.io/themountainspoke/scripts/servicedata.json';

serviceinfoRequest.open('GET', serviceinfoURL, true);
serviceinfoRequest.send();

serviceinfoRequest.onload = function() {
  let serviceData = JSON.parse(serviceinfoRequest.responseText);
  
  console.log(serviceData);
  
  document.getElementById('cFree-name').innerHTML =  serviceData.service[0].name;
  
  document.getElementById('cFree-motto').innerHTML =  serviceData.service[0].motto;
  
  document.getElementById('cFree-fsaftey').innerHTML =  serviceData.service[0].frameSaftey;
  
  document.getElementById('cFree-drive').innerHTML =  serviceData.service[0].driveTrain;
  
  document.getElementById('cFree-brake').innerHTML =  serviceData.service[0].brakeAdjust;
  
  document.getElementById('cFree-chain').innerHTML =  serviceData.service[0].lubeChain;
  
  document.getElementById('cFree-bolts').innerHTML =  serviceData.service[0].boltsTorque;
  
  document.getElementById('cFree-saftey').innerHTML =  serviceData.service[0].safteyCheck;
  
  document.getElementById('mudF-name').innerHTML =  serviceData.service[1].name;
  
  document.getElementById('mudF-motto').innerHTML =  serviceData.service[1].motto;
  
  document.getElementById('mudF-care').innerHTML =  serviceData.service[1].careFree;
  
  document.getElementById('mudF-wheelCheck').innerHTML =  serviceData.service[1].wheelCheck;
  
  document.getElementById('mudF-shift').innerHTML =  serviceData.service[1].shiftersD;
  
  document.getElementById('mudF-frameC').innerHTML =  serviceData.service[1].frameClean;
  
  document.getElementById('mudF-Hubs').innerHTML =  serviceData.service[1].adjustHubs;
  
  document.getElementById('mudF-gears').innerHTML =  serviceData.service[1].gearAdjust;
  
  document.getElementById('mudF-cable').innerHTML =  serviceData.service[1].cableHousing;
  
  document.getElementById('shockB-name').innerHTML =  serviceData.service[2].name;
  
  document.getElementById('shockB-motto').innerHTML =  serviceData.service[2].motto;
  
  document.getElementById('shockB-cFree').innerHTML =  serviceData.service[2].careFree;
  
  document.getElementById('shockB-motto').innerHTML =  serviceData.service[2].motto;
  
  document.getElementById('shockB-cFree').innerHTML =  serviceData.service[2].careFree;
  
  document.getElementById('shockB-mud').innerHTML =  serviceData.service[2].mudFlinger;
  
  document.getElementById('shockB-seat').innerHTML =  serviceData.service[2].seatClean;
  
  document.getElementById('shockB-hall').innerHTML =  serviceData.service[2].overHall;
  
  document.getElementById('shockB-strip').innerHTML =  serviceData.service[2].frameStrip;
  
  document.getElementById('shockB-fork').innerHTML =  serviceData.service[2].forkSaftey;
}
