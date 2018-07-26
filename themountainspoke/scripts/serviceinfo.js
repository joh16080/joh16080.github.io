//connection to the API//
let serviceinfoRequest = new XMLHttpRequest();
let serviceinfoURL = 'https://joh16080.github.io/themountainspoke/scripts/json.json';

serviceinfoRequest.open('GET', serviceinfoURL, true);
serviceinfoRequest.send();

serviceinfoRequest.onload = function() {
  let serviceData = JSON.parse(serviceinfoRequest.responseText);
  
  console.log(serviceData);
  
  document.getElementById('cFree-name').innerHTML =  serviceData.services[0].name;
  
  document.getElementById('cFree-motto').innerHTML =  serviceData.services[0].motto;
  
  document.getElementById('cFree-fsaftey').innerHTML =  serviceData.services[0].frameSaftey;
  
  document.getElementById('cFree-drive').innerHTML =  serviceData.services[0].driveTrain;
  
  document.getElementById('cFree-brake').innerHTML =  serviceData.services[0].brakeAdjust;
  
  document.getElementById('cFree-chain').innerHTML =  serviceData.services[0].lubeChain;
  
  document.getElementById('cFree-bolts').innerHTML =  serviceData.services[0].boltsTorque;
  
  document.getElementById('cFree-saftey').innerHTML =  serviceData.services[0].safteyCheck;
  
  document.getElementById('mudF-name').innerHTML =  serviceData.services[1].name;
  
  document.getElementById('mudF-motto').innerHTML =  serviceData.services[1].motto;
  
  document.getElementById('mudF-care').innerHTML =  serviceData.services[1].careFree;
  
  document.getElementById('mudF-wheelCheck').innerHTML =  serviceData.services[1].wheelCheck;
  
  document.getElementById('mudF-shift').innerHTML =  serviceData.services[1].shiftersD;
  
  document.getElementById('mudF-frameC').innerHTML =  serviceData.services[1].frameClean;
  
  document.getElementById('mudF-Hubs').innerHTML =  serviceData.services[1].adjustHubs;
  
  document.getElementById('mudF-gears').innerHTML =  serviceData.services[1].gearAdjust;
  
  document.getElementById('mudF-cable').innerHTML =  serviceData.services[1].cableHousing;
  
  document.getElementById('shockB-name').innerHTML =  serviceData.services[2].name;
  
  document.getElementById('shockB-motto').innerHTML =  serviceData.services[2].motto;
  
  document.getElementById('shockB-cFree').innerHTML =  serviceData.services[2].careFree;
  
  document.getElementById('shockB-motto').innerHTML =  serviceData.services[2].motto;
  
  document.getElementById('shockB-cFree').innerHTML =  serviceData.services[2].careFree;
  
  document.getElementById('shockB-mud').innerHTML =  serviceData.services[2].mudFlinger;
  
  document.getElementById('shockB-seat').innerHTML =  serviceData.services[2].seatClean;
  
  document.getElementById('shockB-hall').innerHTML =  serviceData.services[2].overHall;
  
  document.getElementById('shockB-strip').innerHTML =  serviceData.services[2].frameStrip;
  
  document.getElementById('shockB-fork').innerHTML =  serviceData.services[2].forkSaftey;
  
}
