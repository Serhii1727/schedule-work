const t=[{name:"employee1",stations:[]},{name:"employee2",stations:[]},{name:"employee3",stations:[]},{name:"employee4",stations:[]},{name:"employee5",stations:[]},{name:"employee6",stations:[]},{name:"employee7",stations:[]},{name:"employee8",stations:[]},{name:"employee9",stations:[]},{name:"employee10",stations:[]}],e={buttonMakeSchedule:document.querySelector("[data-make-schedule]"),trLhFsbOkies:document.querySelector('[data-name="lh-fsb-okies"]'),trLhFsbRollOverSteam:document.querySelector('[data-name="lh-fsb-roll-over-steam"]'),trRhFsbOkies:document.querySelector('[data-name="rh-fsb-okies"]'),trRhFsbRollOverSteam:document.querySelector('[data-name="rh-fsb-roll-over-steam"]'),trLhFscOkies:document.querySelector('[data-name="lh-fsc-okies"]'),trLhFscRollOverSteam:document.querySelector('[data-name="lh-fsc-roll-over-steam"]'),trRhFscOkies:document.querySelector('[data-name="rh-fsc-okies"]'),trRhFscRollOverSteam:document.querySelector('[data-name="rh-fsc-roll-over-steam"]'),trLhCushionInstall:document.querySelector('[data-name="lh-cushion-install"]'),trRhCushionInstall:document.querySelector('[data-name="rh-cushion-install"]'),section:document.querySelector(".section-day")},s=["Sunday","Monday","Tuesday","Wendsney","Thursday","Friday","Saturday"];function o(){const t=(new Date).getDay();return s[t]}function r(t){const s=[...t].map((t=>(t.number=Number((10*Math.random()).toFixed(4)),t))).sort(((t,e)=>t.number-e.number)).map((({name:t})=>t));e.trLhFsbOkies.querySelector("[data-first]").textContent=s[0],e.trLhFsbOkies.querySelector("[data-first]").classList.add(s[0]),e.trLhFsbRollOverSteam.querySelector("[data-first]").textContent=s[1],e.trLhFsbRollOverSteam.querySelector("[data-first]").classList.add(s[1]),e.trRhFsbOkies.querySelector("[data-first]").textContent=s[2],e.trRhFsbOkies.querySelector("[data-first]").classList.add(s[2]),e.trRhFsbRollOverSteam.querySelector("[data-first]").textContent=s[3],e.trRhFsbRollOverSteam.querySelector("[data-first]").classList.add(s[3]),e.trLhFscOkies.querySelector("[data-first]").textContent=s[4],e.trLhFscOkies.querySelector("[data-first]").classList.add(s[4]),e.trLhFscRollOverSteam.querySelector("[data-first]").textContent=s[5],e.trLhFscRollOverSteam.querySelector("[data-first]").classList.add(s[5]),e.trRhFscOkies.querySelector("[data-first]").textContent=s[6],e.trRhFscOkies.querySelector("[data-first]").classList.add(s[6]),e.trRhFscRollOverSteam.querySelector("[data-first]").textContent=s[7],e.trRhFscRollOverSteam.querySelector("[data-first]").classList.add(s[7]),e.trLhCushionInstall.querySelector("[data-first]").textContent=s[8],e.trLhCushionInstall.querySelector("[data-first]").classList.add(s[8]),e.trRhCushionInstall.querySelector("[data-first]").textContent=s[9],e.trRhCushionInstall.querySelector("[data-first]").classList.add(s[9]);for(let e=0;e<s.length;e+=1)t.find((t=>{const{name:r}=t;if(r===s[e]){const e=document.querySelector(`.${r}`).parentNode,s={time:`${o()} 6-30/8-30`,station:e.dataset.name};t.stations.push(s)}})),localStorage.setItem("first",JSON.stringify(t))}var a=function(t){console.log("employyes",t);for(let s=0;s<t.length;s+=1){const r=t[s].stations[0].station;"lh-fsb-okies"===r&&(e.trLhFsbRollOverSteam.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"lh-fsb-roll-over-steam"})),"lh-fsb-roll-over-steam"===r&&(e.trLhFsbOkies.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"lh-fsb-okies"})),"rh-fsb-okies"===r&&(e.trRhFsbRollOverSteam.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"rh-fsb-roll-over-steam"})),"rh-fsb-roll-over-steam"===r&&(e.trRhFsbOkies.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"rh-fsb-okies"})),"lh-fsc-okies"===r&&(e.trLhCushionInstall.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"lh-cushion-install"})),"lh-fsc-roll-over-steam"===r&&(e.trLhFscOkies.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"lh-fsc-okies"})),"rh-fsc-okies"===r&&(e.trRhCushionInstall.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"rh-cushion-install"})),"rh-fsc-roll-over-steam"===r&&(e.trRhFscOkies.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"rh-fsc-okies"})),"lh-cushion-install"===r&&(e.trLhFscRollOverSteam.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"lh-fsc-roll-over-steam"})),"rh-cushion-install"===r&&(e.trRhFscRollOverSteam.querySelector("[data-second]").textContent=t[s].name,t[s].stations.push({time:`${o()} 8-40/10-45`,station:"rh-fsc-roll-over-steam"}))}};var n=function(t){for(let s=0;s<t.length;s+=1){const r=t[s].stations[1].station;"lh-fsb-okies"===r&&(e.trRhFscRollOverSteam.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"rh-fsc-roll-over-steam"})),"rh-cushion-install"===r&&(e.trLhFsbRollOverSteam.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"lh-fsb-roll-over-steam"})),"lh-cushion-install"===r&&(e.trRhFsbRollOverSteam.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"rh-fsb-roll-over-steam"})),"lh-fsc-okies"===r&&(e.trLhCushionInstall.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"lh-cushion-install"})),"lh-fsc-roll-over-steam"===r&&(e.trLhFsbOkies.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"lh-fsb-okies"})),"rh-fsc-roll-over-steam"===r&&(e.trRhFsbOkies.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"rh-fsb-okies"})),"rh-fsc-okies"===r&&(e.trRhCushionInstall.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"rh-cushion-install"})),"rh-fsb-okies"===r&&(e.trLhFscRollOverSteam.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"lh-fsc-roll-over-steam"})),"lh-fsb-roll-over-steam"===r&&(e.trLhFscOkies.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"lh-fsc-okies"})),"rh-fsb-roll-over-steam"===r&&(e.trRhFscOkies.querySelector("[data-third]").textContent=t[s].name,t[s].stations.push({time:`${o()} 11-05/13-00`,station:"rh-fsc-okies"}))}};var l=function(t){console.log(t);for(let s=0;s<t.length;s+=1){const r=t[s].stations[2].station;"rh-cushion-install"===r&&(e.trLhFsbRollOverSteam.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"lh-fsb-roll-over-steam"})),"lh-cushion-install"===r&&(e.trRhFsbRollOverSteam.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"rh-fsb-roll-over-steam"})),"lh-fsb-okies"===r&&(e.trRhFscRollOverSteam.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"rh-fsc-roll-over-steam"})),"lh-fsc-okies"===r&&(e.trLhCushionInstall.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"lh-cushion-install"})),"lh-fsc-roll-over-steam"===r&&(e.trLhFsbOkies.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"lh-fsb-okies"})),"rh-fsc-roll-over-steam"===r&&(e.trRhFsbOkies.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"rh-fsc-okies"})),"rh-fsc-okies"===r&&(e.trRhCushionInstall.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"rh-cushion-install"})),"rh-fsb-okies"===r&&(e.trLhFscRollOverSteam.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"lh-fsc-roll-over-steam"})),"lh-fsb-roll-over-steam"===r&&(e.trLhFscOkies.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"lh-fsc-okies"})),"rh-fsb-roll-over-steam"===r&&(e.trRhFscOkies.querySelector("[data-fourth]").textContent=t[s].name,t[s].stations.push({time:`${o()} 13-10/14-30`,station:"rh-fsc-okies"}))}};const i={counter:1};var h=function(){const t=JSON.parse(localStorage.getItem("first")),s=JSON.parse(localStorage.getItem("button-counter"));if(s&&(i.counter=s.counter),t)return t.forEach((t=>{console.log(t),"lh-fsb-okies"===t.stations[0].station&&(e.trLhFsbOkies.querySelector("[data-first]").textContent=t.name),"lh-fsb-roll-over-steam"===t.stations[0].station&&(e.trLhFsbRollOverSteam.querySelector("[data-first]").textContent=t.name),"rh-fsb-okies"===t.stations[0].station&&(e.trRhFsbOkies.querySelector("[data-first]").textContent=t.name),"rh-fsb-roll-over-steam"===t.stations[0].station&&(e.trRhFsbRollOverSteam.querySelector("[data-first]").textContent=t.name),"lh-fsc-okies"===t.stations[0].station&&(e.trLhFscOkies.querySelector("[data-first]").textContent=t.name),"lh-fsc-roll-over-steam"===t.stations[0].station&&(e.trLhFscRollOverSteam.querySelector("[data-first]").textContent=t.name),"rh-fsc-okies"===t.stations[0].station&&(e.trRhFscOkies.querySelector("[data-first]").textContent=t.name),"rh-fsc-roll-over-steam"===t.stations[0].station&&(e.trRhFscRollOverSteam.querySelector("[data-first]").textContent=t.name),"lh-cushion-install"===t.stations[0].station&&(e.trLhCushionInstall.querySelector("[data-first]").textContent=t.name),"rh-cushion-install"===t.stations[0].station&&(e.trRhCushionInstall.querySelector("[data-first]").textContent=t.name)})),t};e.buttonMakeSchedule.addEventListener("click",(()=>{if(1===i.counter)return r(t),i.counter+=1,void localStorage.setItem("button-counter",JSON.stringify(i));if(2===i.counter){const t=h();return console.log("data",t),a(t),void(i.counter+=1)}return 3===i.counter?(n(t),void(i.counter+=1)):4===i.counter?(l(t),void(i.counter=1)):void 0})),h(),function(){const t=`<p>${o()}</p>`;e.section.insertAdjacentHTML("beforeend",t)}();
//# sourceMappingURL=index.9af265db.js.map
