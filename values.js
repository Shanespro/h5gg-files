        function fnBigBody(input) {

            if (typeof addr49 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber(
                    "1.613775153007164e-314",
                    "F64",
                    "0x00000000",
                    "0x200000000"
                );
                h5gg.searchNearby("1", "F32", "0x100");
                h5gg.searchNearby("1", "F32", "0x100");
                h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("100", "0", "F32");

                count49 = h5gg.getResultsCount();
                r49 = h5gg.getResults(count49);
                for (var i = 0; i < count49; i++) {
                    addr49 = r49[i].address;
                    h5gg.setValue(addr49, input.value * 1, "F32");
                    h5gg.clearResults();
                }
            } else {
                for (var i = 0; i < count49; i++) {
                    addr49 = r49[i].address;
                    h5gg.setValue(addr49, input.value * 1, "F32");
                }
            }
        }
function fps(input) {
if (typeof addr12 === 'undefined') {
  h5gg.clearResults();
 
h5gg.searchNumber("-1.70142e+38", 'F32', '0x00000000', '0x400000000');
h5gg.searchNearby("4.243991582918676e-314", 'F64', '0x100');
h5gg.searchNearby("30", 'F32', '0x20');
h5gg.searchNumber("30", 'F32', '0x00000000', '0x200000000');
h5gg.editAll('144', 'F32');  
count12 = h5gg.getResultsCount();
                            r12 = h5gg.getResults(count12);
                            for (var i = 0; i < count12; i++) {
                                addr12 = r12[i].address;
                              h5gg.setValue(addr12, input.value, 'F32');
  h5gg.clearResults()
                            }
                     }
                      else{
           
                            
                        
                                h5gg.setValue(addr12, input.value, 'F32');
                                
                            }
      
                     };
    
     function fnSpeedG(input) {

            if (typeof addr84 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("-980", "F32", "0x00000000", "0x400000000");
                h5gg.searchNearby("0.0005", "F32", "0x164");
                h5gg.searchNumber("-980", "F32", "0x00000000", "0x400000000");
                h5gg.getResults("100", "0", "F32");
                count84 = h5gg.getResultsCount();
                r84 = h5gg.getResults(count84);
                for (var i = 0; i < count84; i++) {
                    addr84 = r84[i].address;
                    addr84 = addr84 - -0x154;
                    h5gg.setValue(addr84, input.value * 1, "F32");
                }
                h5gg.clearResults();
            } else {
                h5gg.setValue(addr84, input.value * 1, "F32");
            }
        }

        function fnSpeedP(input) {

            if (typeof addr3 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("-2373.004", "F32", "0x00000000", "0x200000000");
                h5gg.searchNearby("1", "F32", "0x100");
                h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("1", "F32");
                count3 = h5gg.getResultsCount();
                r3 = h5gg.getResults(count3);
                for (var i = 0; i < count3; i++) {
                    addr3 = r3[i].address;
                    h5gg.setValue(addr3, input.value * 1, "F32");
                    h5gg.clearResults();
                }
            } else {
                h5gg.setValue(addr3, input.value * 1, "F32");
            }
        }

        function fnFOVW(input) {

            if (typeof addr8 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("256", "F32", "0x00000000", "0x200000000");
                h5gg.searchNearby("4", "I32", "0x20");
                h5gg.searchNearby("0.8", "F32", "0x20");
                h5gg.searchNumber("256", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("1", "F32");
                count8 = h5gg.getResultsCount();
                r8 = h5gg.getResults(count8);
                for (var i = 0; i < count8; i++) {
                    addr8 = r8[i].address;
                    h5gg.setValue(addr8, input.value * 256, "F32");
                    h5gg.clearResults();
                }
            } else {
                h5gg.setValue(addr8, input.value * 256, "F32");
            }
        }

		function Fov(input) {

		if (typeof addr48 === 'undefined'){
        h5gg.clearResults();
        h5gg.searchNumber('89.9', 'F32', '0x00000000', '0x200000000');
        h5gg.searchNearby('90', 'F32', '0x100');
        h5gg.searchNumber('90', 'F32', '0x00000000', '0x200000000');
h5gg.getResults('100','0', 'F32');

count48 = h5gg.getResultsCount();
        r48 = h5gg.getResults(count48);
for (var i = 0; i < count48; i++) {
          addr48 = r48[i].address;
h5gg.setValue(addr48,input.value *1, 'F32');
h5gg.clearResults()
}}
else{
  for (var i = 0; i < count48; i++) {addr48 = r48[i].address;
  h5gg.setValue(addr48,input.value *1, 'F32');
}}}

        function fnBigHead(input) {

            if (typeof addr47 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("-7.296562", "F32", "0x00000000", "0x200000000");
                h5gg.searchNearby("1", "F32", "0x10");
                h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("100", "0", "F32");

                count47 = h5gg.getResultsCount();
                r47 = h5gg.getResults(count47);
                for (var i = 0; i < count47; i++) {
                    addr47 = r47[i].address;
                    h5gg.setValue(addr47, input.value / 1, "F32");
                    h5gg.clearResults();
                }
            } else {
                for (var i = 0; i < count47; i++) {
                    addr47 = r47[i].address;
                    h5gg.setValue(addr47, input.value / 1, "F32");
                }
            }
        }
                function fnBigHead2(input) {

            if (typeof addr911 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("3232863993", "I32", "0x00000000", "0x200000000");
                h5gg.searchNearby("1", "F32", "0x10");
                h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("100", "0", "F32");

                count911 = h5gg.getResultsCount();
                r911 = h5gg.getResults(count911);
                for (var i = 0; i < count911; i++) {
                    addr911 = r911[i].address;
                    h5gg.setValue(addr911, input.value / 1, "F32");
                    h5gg.clearResults();
                }
            } else {
                for (var i = 0; i < count911; i++) {
                    addr911 = r911[i].address;
                    h5gg.setValue(addr911, input.value / 1, "F32");
                }
            }
        }
        	
			  
function Burst(a){
h5gg.clearResults();
h5gg.searchNumber('-2.5625', 'F32', '0x00000000', '0x400000000'); 

count7 = h5gg.getResultsCount();
r7 = h5gg.getResults(count7);
for (var i = 0; i < count7; i++) {
addr7 = r7[i].address;

if (
(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.3' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.15' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.65' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.475' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.4' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '1.05' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.6' )
||(Number(h5gg.getValue(Number(addr7) - 160,'F32')) == '0.1' )
){

h5gg.setValue(Number(addr7) - 160,"0.01", 'F32');

}

}

addr7 = undefined
}  			  function NoSpeedSpam(a) {

			 h5gg.searchNumber('1074020928', 'I32', '0x00000000', '0x400000000');
			 h5gg.searchNearby("1", 'F32', '0x50');
			 h5gg.searchNumber("1", 'F32', '0x00000000', '0x400000000');
			 h5gg.editAll("30", 'F32');
			 h5gg.clearResults();
			 h5gg.searchNumber('-2052', 'F32', '0x00000000', '0x400000000');
			 h5gg.searchNearby("1", 'F32', '0x50');
			 h5gg.searchNumber("1", 'F32', '0x00000000', '0x400000000');
			 h5gg.editAll("30", 'F32');
			 h5gg.clearResults();
			 }
function hidemenu(){
setWindowVisible(false);
}
 			 
 
/* Structure Antenna */


function StorageChest(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr587 === "undefined") {
    h5gg.searchNumber('0.26083999872', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count587 = h5gg.getResultsCount();
    r587 = h5gg.getResults(count587);
    for (var i = 0; i < count587; i++) {
      addr587 = r587[i].address;
      h5gg.setValue(addr587, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count587; i++) {
      addr587 = r587[i].address;
      h5gg.setValue(addr587, avs, "F32");
    }
  }
}   
function Mortar(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr441 === "undefined") {
    h5gg.searchNumber("10.04549980164", "F32", "0x100000000", "0x160000000");
    h5gg.getResults("100", "F32");
    count441 = h5gg.getResultsCount();
    r441 = h5gg.getResults(count441);
    for (var i = 0; i < count441; i++) {
      addr441 = r441[i].address;
      h5gg.setValue(addr441, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count441; i++) {
      addr441 = r441[i].address;
      h5gg.setValue(addr441, avs, "F32");
    }
  }
}
function Vault(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr442 === "undefined") {
    h5gg.searchNumber('71.15730285645', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count442 = h5gg.getResultsCount();
    r442 = h5gg.getResults(count442);
    for (var i = 0; i < count442; i++) {
      addr442 = r442[i].address;
      h5gg.setValue(addr442, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count442; i++) {
      addr442 = r442[i].address;
      h5gg.setValue(addr442, avs, "F32");
    }
  }
}
function Generator(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr443 === "undefined") {
    h5gg.searchNumber('38.64680099487', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count443 = h5gg.getResultsCount();
    r443 = h5gg.getResults(count443);
    for (var i = 0; i < count443; i++) {
      addr443 = r443[i].address;
      h5gg.setValue(addr443, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count443; i++) {
      addr443 = r443[i].address;
      h5gg.setValue(addr443, avs, "F32");
    }
  }
}
function Smithy(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr444 === "undefined") {
    h5gg.searchNumber('39.02690887451', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count444 = h5gg.getResultsCount();
    r444 = h5gg.getResults(count444);
    for (var i = 0; i < count444; i++) {
      addr444 = r444[i].address;
      h5gg.setValue(addr444, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count444; i++) {
      addr444 = r444[i].address;
      h5gg.setValue(addr444, avs, "F32");
    }
  }
}
function Fabricator(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr445 === "undefined") {
    h5gg.searchNumber('50.88019943237', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count445 = h5gg.getResultsCount();
    r445 = h5gg.getResults(count445);
    for (var i = 0; i < count445; i++) {
      addr445 = r445[i].address;
      h5gg.setValue(addr445, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count445; i++) {
      addr445 = r445[i].address;
      h5gg.setValue(addr445, avs, "F32");
    }
  }
}
function BlackTurret(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr446 === "undefined") {
    h5gg.searchNumber('50.1378364563', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count446 = h5gg.getResultsCount();
    r446 = h5gg.getResults(count446);
    for (var i = 0; i < count446; i++) {
      addr446 = r446[i].address;
      h5gg.setValue(addr446, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count446; i++) {
      addr446 = r446[i].address;
      h5gg.setValue(addr446, avs, "F32");
    }
  }
}
function ClothBed(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr447 === "undefined") {
    h5gg.searchNumber('20.52215576172', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count447 = h5gg.getResultsCount();
    r447 = h5gg.getResults(count447);
    for (var i = 0; i < count447; i++) {
      addr447 = r447[i].address;
      h5gg.setValue(addr447, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count447; i++) {
      addr447 = r447[i].address;
      h5gg.setValue(addr447, avs, "F32");
    }
  }
}
function StoneForge(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr448 === "undefined") {
    h5gg.searchNumber('60.20741653442', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count448 = h5gg.getResultsCount();
    r448 = h5gg.getResults(count448);
    for (var i = 0; i < count448; i++) {
      addr448 = r448[i].address;
      h5gg.setValue(addr448, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count448; i++) {
      addr448 = r448[i].address;
      h5gg.setValue(addr448, avs, "F32");
    }
  }
}
function SmallBox(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr449 === "undefined") {
    h5gg.searchNumber('40.76482772827', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count449 = h5gg.getResultsCount();
    r449 = h5gg.getResults(count449);
    for (var i = 0; i < count449; i++) {
      addr449 = r449[i].address;
      h5gg.setValue(addr449, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count449; i++) {
      addr449 = r449[i].address;
      h5gg.setValue(addr449, avs, "F32");
    }
  }
}   
function fnUwShoot(a) {
  const avs = a.checked ? 0.0000001 : 999;
  if (typeof addr31 === "undefined") {
    h5gg.searchNumber("56623104", "I32", "0x000000000", "0x200000000");
    h5gg.searchNearby("6", "F32", "0x30");
    h5gg.getResults("1", "F32");
    count31 = h5gg.getResultsCount();
    r31 = h5gg.getResults(count31);
    for (var i = 0; i < count31; i++) {
      addr31 = r31[i].address;
      h5gg.setValue(addr31, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count31; i++) {
      addr31 = r31[i].address;
      h5gg.setValue(addr31, avs, "F32");
    }
  }
}
function DungeonVision(a) {
  const avs = a.checked ? 30 : 1;

  if (typeof addr451 === "undefined") {
    h5gg.searchNumber('7.292903900800989e-304', 'F64', '0x100000000', '0x160000000'); 
    h5gg.searchNearby("0.85", 'F32', '0x100');
    h5gg.getResults("100", "F32");
    count451 = h5gg.getResultsCount();
    r451 = h5gg.getResults(count451);
    for (var i = 0; i < count451; i++) {
      addr451 = r451[i].address;
      h5gg.setValue(addr451, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count451; i++) {
      addr451 = r451[i].address;
      h5gg.setValue(addr451, avs, "F32");
    }
  }
}
function UnderwaterVision(a) {
  const avs = a.checked ? 12 : 1;

  if (typeof addr452 === "undefined") {
    h5gg.searchNumber('-8.538039785799280e+24', 'F64', '0x100000000', '0x160000000'); 
    h5gg.searchNearby("1", 'I32', '0x100');
    h5gg.searchNearby("1", 'F32', '0x4');
    h5gg.searchNearby("1", 'I32', '0x4');
    h5gg.getResults("100", "F32");
    count452 = h5gg.getResultsCount();
    r452 = h5gg.getResults(count452);
    for (var i = 0; i < count452; i++) {
      addr452 = r452[i].address;
      h5gg.setValue(addr452, avs, "I32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count452; i++) {
      addr452 = r452[i].address;
      h5gg.setValue(addr452, avs, "I32");
    }
  }
}
function InvisibleLand(a) {
  const avs = a.checked ? 2.716841317300385e-314 : 1;

  if (typeof addr453 === "undefined") {
    h5gg.searchNumber('2.575036587209649e-314', 'F64', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count453 = h5gg.getResultsCount();
    r453 = h5gg.getResults(count453);
    for (var i = 0; i < count453; i++) {
      addr453 = r453[i].address;
      h5gg.setValue(addr453, avs, "F64");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count453; i++) {
      addr453 = r453[i].address;
      h5gg.setValue(addr453, avs, "F64");
    }
  }
}
function NightVision(a) {
  const avs = a.checked ? 8 : 1;

  if (typeof addr454 === "undefined") {
    h5gg.searchNumber('17.99', 'F32', '0x100000000', '0x160000000'); 
    h5gg.searchNearby("0.34", 'F32', '0x100');
    h5gg.searchNearby("0.4", 'F32', '0x100');
    h5gg.getResults("100", "F32");
    count454 = h5gg.getResultsCount();
    r454 = h5gg.getResults(count454);
    for (var i = 0; i < count454; i++) {
      addr454 = r454[i].address;
      h5gg.setValue(addr454, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count454; i++) {
      addr454 = r454[i].address;
      h5gg.setValue(addr454, avs, "F32");
    }
  }
}
function AntennaGC(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr455 === "undefined") {
    h5gg.searchNumber('2.42400026321', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count455 = h5gg.getResultsCount();
    r455 = h5gg.getResults(count455);
    for (var i = 0; i < count455; i++) {
      addr455 = r455[i].address;
      h5gg.setValue(addr455, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count455; i++) {
      addr455 = r455[i].address;
      h5gg.setValue(addr455, avs, "F32");
    }
  }
}

function AntennaSnail1(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr456 === "undefined") {
    h5gg.searchNumber('26.417345047', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count456 = h5gg.getResultsCount();
    r456 = h5gg.getResults(count456);
    for (var i = 0; i < count456; i++) {
      addr456 = r456[i].address;
      h5gg.setValue(addr456, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count456; i++) {
      addr456 = r456[i].address;
      h5gg.setValue(addr456, avs, "F32");
    }
  }
}
function AntennaSnail2(a){
const avs = a.checked ? 999999 : 1;
  
  if (typeof addr613 === "undefined") {
    h5gg.searchNumber('0.86554718', 'F32', '0x100000000', '0x161300000'); 
    h5gg.getResults("100", "F32");
    count613 = h5gg.getResultsCount();
    r613 = h5gg.getResults(count613);
    for (var i = 0; i < count613; i++) {
      addr613 = r613[i].address;
      h5gg.setValue(addr613, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count613; i++) {
      addr613 = r613[i].address;
      h5gg.setValue(addr613, avs, "F32");
    }
  }
}   
function AntennaSnail(a){
  AntennaSnail1(a);
  AntennaSnail2(a);
}
function BagCache(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr553 === "undefined") {
    h5gg.searchNumber('12.51569747925', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count553 = h5gg.getResultsCount();
    r553 = h5gg.getResults(count553);
    for (var i = 0; i < count553; i++) {
      addr553 = r553[i].address;
      h5gg.setValue(addr553, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count553; i++) {
      addr553 = r553[i].address;
      h5gg.setValue(addr553, avs, "F32");
    }
  }
}   




function ClearMesh(a) {
  const avs = a.checked ? 2.99992003187 : 0.001;

  if (typeof addr457 === "undefined") {
    h5gg.searchNumber('0.000005', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count457 = h5gg.getResultsCount();
    r457 = h5gg.getResults(count457);
    for (var i = 0; i < count457; i++) {
      addr457 = r457[i].address;
      h5gg.setValue(addr457, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count457; i++) {
      addr457 = r457[i].address;
      h5gg.setValue(addr457, avs, "F32");
    }
  }
}
function DisableChat(a) {
  const avs = a.checked ? 1000000 : 0.2;

  if (typeof addr261 === "undefined") {
    h5gg.searchNumber('3', 'F32', '0x100000000', '0x160000000'); 
	  h5gg.searchNearby('8', 'F32', '0x10');
    h5gg.getResults("100", "F32");
    count261 = h5gg.getResultsCount();
    r261 = h5gg.getResults(count261);
    for (var i = 0; i < count261; i++) {
      addr261 = r261[i].address;
      h5gg.setValue(addr261, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count261; i++) {
      addr261 = r261[i].address;
      h5gg.setValue(addr261, avs, "F32");
    }
  }
}


function AntennaPlayer(a) {
    if (a.checked === true) {
        h5gg.clearResults();
        h5gg.searchNumber(
            "-5.140667156606297e-315",
            "F64",
            "0x100000000",
            "0x200000000"
        );
        h5gg.getResults("2", "0", "F32");
        count881 = h5gg.getResultsCount();
        r881 = h5gg.getResults(count881);
        for (var i = 0; i < count881; i++) {
            addr881 = r881[i].address;
            h5gg.setValue(addr881, "7.186329346908974e+45", "F64");
        }

        // ---- //
        h5gg.clearResults();
        h5gg.searchNumber("-0.98875373602", "F32", "0x100000000", "0x200000000");
        h5gg.searchNearby("-6.874347686909405e-41", "F64", "0x8");
        h5gg.searchNumber(
            "-6.874347686909405e-41",
            "F64",
            "0x100000000",
            "0x200000000"
        );
        h5gg.getResults("2", "0", "F32");
        count882 = h5gg.getResultsCount();
        r882 = h5gg.getResults(count882);
        for (var i = 0; i < count882; i++) {
            addr882 = r882[i].address;
            h5gg.setValue(addr882, "-6.874346696665740e-41", "F64");
        }
        h5gg.clearResults();
    } else {
        for (var i = 0; i < count881; i++) {
            addr881 = r881[i].address;

            h5gg.setValue(addr881, "-5.140667156606297e-315", "F64");
        }
        for (var i = 0; i < count882; i++) {
            addr882 = r882[i].address;
            h5gg.setValue(addr882, "-6.874347686909405e-41", "F64");
        }
    }
}

function PlayerHeight(input) {

            if (typeof addr999 === "undefined") {
                h5gg.clearResults();
                h5gg.searchNumber("-88.02314", "F32", "0x00000000", "0x200000000");
                h5gg.getResults("100", "0", "F32");
                count999 = h5gg.getResultsCount();
                r999 = h5gg.getResults(count999);
                for (var i = 0; i < count999; i++) {
                    addr999 = r999[i].address;
                    h5gg.setValue(addr999, input.value / 1, "F32");
                    h5gg.clearResults();
                }
            } else {
                for (var i = 0; i < count999; i++) {
                    addr999 = r999[i].address;
                    h5gg.setValue(addr999, input.value / 1, "F32");
                }
            }
         }
         
function GhostMode(a) {
    if (a.checked) {
        h5gg.clearResults();
        h5gg.searchNumber("-2373.004", "F32", "0x100000000", "0x160000000");
        h5gg.editAll("1", "F32");
    } else {
        h5gg.editAll("-2373.004", "F32");
        h5gg.clearResults();
    }
}

function InvisibleIcon(a) {
    if (a.checked) {
    setButtonImage("https://media.discordapp.net/attachments/946363594172428299/1004223955915259974/IMG_3902.PNG");   
    } else {
    setButtonImage("https://media.discordapp.net/attachments/899533932297584661/994101321995145246/IMG_1792.png");    
    }
}
function AllAntenna(a){
SmallBox(a);
StoneForge(a);
ClothBed(a);
BlackTurret(a);
Fabricator(a);
Smithy (a);
Generator(a);
Vault(a);
Mortar(a);
Bin1(a);
Bin2(a);
Bin3(a);
Bin4(a);
BagCache(a);
StorageChest(a);
}
function Freeze(a) {
  const avs = a.checked ? 0 : 1;

  if (typeof addr147 === "undefined") {
    h5gg.searchNumber("-2373.004", "F32", "0x00000000", "0x200000000");
    h5gg.searchNearby("1", "F32", "0x100");
    h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
    h5gg.getResults("1", "F32"); 
    count147 = h5gg.getResultsCount();
    r147 = h5gg.getResults(count147);
    for (var i = 0; i < count147; i++) {
      addr147 = r147[i].address;
      h5gg.setValue(addr147, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count147; i++) {
      addr147 = r147[i].address;
      h5gg.setValue(addr147, avs, "F32");
    }
  }
}
function BodyColor(a){

h5gg.searchNumber('0.08152', 'F32', '0x00000000', '0x200000000');
h5gg.searchNearby('0.9', 'F32', '0x490'); 
h5gg.editAll('38429', 'F64');
h5gg.clearResults();
  }
       
       function HairColor(a){

			 h5gg.searchNumber('0.1285700053', 'F32', '0x00000000', '0x400000000');
			 h5gg.searchNearby("0.2", 'F32', '0x50');
			 h5gg.editAll("30", 'F32');
			 h5gg.clearResults();
       }

      function RocketTurretTilt(a){
      if (a.checked){
       h5gg.clearResults();
       h5gg.searchNumber('90', 'F32', '0x00000000', '0x400000000');
			 h5gg.editAll("60", 'F32');
       } else {
       h5gg.editAll("90", 'F32');
       h5gg.clearResults();
       }
    }
			
      function Bin1(a) {
  const avs = a.checked ? 999999 : 1;

  if (typeof addr584 === "undefined") {
    h5gg.searchNumber('10.17922592163', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count584 = h5gg.getResultsCount();
    r584 = h5gg.getResults(count584);
    for (var i = 0; i < count584; i++) {
      addr584 = r584[i].address;
      h5gg.setValue(addr584, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count584; i++) {
      addr584 = r584[i].address;
      h5gg.setValue(addr584, avs, "F32");
    }
  }
}   
     
      function Bin2(a) {
const avs = a.checked ? 999999 : 1;

  if (typeof addr585 === "undefined") {
    h5gg.searchNumber('10.12138938904', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count585 = h5gg.getResultsCount();
    r585 = h5gg.getResults(count585);
    for (var i = 0; i < count585; i++) {
      addr585 = r585[i].address;
      h5gg.setValue(addr585, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count585; i++) {
      addr585 = r585[i].address;
      h5gg.setValue(addr585, avs, "F32");
    }
  }
}   
function Bin3(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr586 === "undefined") {
    h5gg.searchNumber('10.24617958069', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count586 = h5gg.getResultsCount();
    r586 = h5gg.getResults(count586);
    for (var i = 0; i < count586; i++) {
      addr586 = r586[i].address;
      h5gg.setValue(addr586, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count586; i++) {
      addr586 = r586[i].address;
      h5gg.setValue(addr586, avs, "F32");
    }
  }
}   

function Bin4(a){
  const avs = a.checked ? 999999 : 1;

  if (typeof addr587 === "undefined") {
    h5gg.searchNumber('10.28960037231', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count587 = h5gg.getResultsCount();
    r587 = h5gg.getResults(count587);
    for (var i = 0; i < count587; i++) {
      addr587 = r587[i].address;
      h5gg.setValue(addr587, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count587; i++) {
      addr587 = r587[i].address;
      h5gg.setValue(addr587, avs, "F32");
    }
  }
}  
function PreservingBin(a){
Bin1(a);
Bin2(a);
Bin3(a);
Bin4(a);
} 

/* Tame Antenna */

function Anky(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr588 === "undefined") {
    h5gg.searchNumber('14.78124046326', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count588 = h5gg.getResultsCount();
    r588 = h5gg.getResults(count588);
    for (var i = 0; i < count588; i++) {
      addr588 = r588[i].address;
      h5gg.setValue(addr588, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count588; i++) {
      addr588 = r588[i].address;
      h5gg.setValue(addr588, avs, "F32");
    }
  }
} 
function Tuso1(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr590 === "undefined") {
    h5gg.searchNumber('10.95200252533', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count590 = h5gg.getResultsCount();
    r590 = h5gg.getResults(count590);
    for (var i = 0; i < count590; i++) {
      addr590 = r590[i].address;
      h5gg.setValue(addr590, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count590; i++) {
      addr590 = r590[i].address;
      h5gg.setValue(addr590, avs, "F32");
    }
  }
}  

function Tuso2(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr591 === "undefined") {
    h5gg.searchNumber('12.78458213806', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count591 = h5gg.getResultsCount();
    r591 = h5gg.getResults(count591);
    for (var i = 0; i < count591; i++) {
      addr591 = r591[i].address;
      h5gg.setValue(addr591, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count591; i++) {
      addr591 = r591[i].address;
      h5gg.setValue(addr591, avs, "F32");
    }
  }
}  

function Tuso(a){
Tuso1(a);
Tuso2(a);
} 


function Penguin(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr589 === "undefined") {
    h5gg.searchNumber('12.78458213806', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count589 = h5gg.getResultsCount();
    r589 = h5gg.getResults(count589);
    for (var i = 0; i < count589; i++) {
      addr589 = r589[i].address;
      h5gg.setValue(addr589, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count589; i++) {
      addr589 = r589[i].address;
      h5gg.setValue(addr589, avs, "F32");
    }
  }
}
function Quetzal(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr592 === "undefined") {
    h5gg.searchNumber('91.17437744141', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count592 = h5gg.getResultsCount();
    r592 = h5gg.getResults(count592);
    for (var i = 0; i < count592; i++) {
      addr592 = r592[i].address;
      h5gg.setValue(addr592, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count592; i++) {
      addr592 = r592[i].address;
      h5gg.setValue(addr592, avs, "F32");
    }
  }
}   
function Purlovia1(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr593 === "undefined") {
    h5gg.searchNumber('2.84905195236', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count593 = h5gg.getResultsCount();
    r593 = h5gg.getResults(count593);
    for (var i = 0; i < count593; i++) {
      addr593 = r593[i].address;
      h5gg.setValue(addr593, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count593; i++) {
      addr593 = r593[i].address;
      h5gg.setValue(addr593, avs, "F32");
    }
  }
} 
function Purlovia2(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr596 === "undefined") {
    h5gg.searchNumber('2.73268485069', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count596 = h5gg.getResultsCount();
    r596 = h5gg.getResults(count596);
    for (var i = 0; i < count596; i++) {
      addr596 = r596[i].address;
      h5gg.setValue(addr596, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count596; i++) {
      addr596 = r596[i].address;
      h5gg.setValue(addr596, avs, "F32");
    }
  }
}  
function Purlovia3(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr597 === "undefined") {
    h5gg.searchNumber('10.24617958069', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count597 = h5gg.getResultsCount();
    r597 = h5gg.getResults(count597);
    for (var i = 0; i < count597; i++) {
      addr597 = r597[i].address;
      h5gg.setValue(addr597, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count597; i++) {
      addr597 = r597[i].address;
      h5gg.setValue(addr597, avs, "F32");
    }
  }
}
function Purlovia4(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr598 === "undefined") {
    h5gg.searchNumber('2.76479482651', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count598 = h5gg.getResultsCount();
    r598 = h5gg.getResults(count598);
    for (var i = 0; i < count598; i++) {
      addr598 = r598[i].address;
      h5gg.setValue(addr598, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count598; i++) {
      addr598 = r598[i].address;
      h5gg.setValue(addr598, avs, "F32");
    }
  }
} 
function Purlovia5(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr599 === "undefined") {
    h5gg.searchNumber('2.80198407173', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count599 = h5gg.getResultsCount();
    r599 = h5gg.getResults(count599);
    for (var i = 0; i < count599; i++) {
      addr599 = r599[i].address;
      h5gg.setValue(addr599, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count599; i++) {
      addr599 = r599[i].address;
      h5gg.setValue(addr599, avs, "F32");
    }
  }
} 
function Purlovia6(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr600 === "undefined") {
    h5gg.searchNumber('2.88683199883', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count600 = h5gg.getResultsCount();
    r600 = h5gg.getResults(count600);
    for (var i = 0; i < count600; i++) {
      addr600 = r600[i].address;
      h5gg.setValue(addr600, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count600; i++) {
      addr600 = r600[i].address;
      h5gg.setValue(addr600, avs, "F32");
    }
  }
}   

function PurloviaAll(a){
  Purlovia1(a);
  Purlovia2(a);
  Purlovia3(a);
  Purlovia4(a);
  Purlovia5(a);
  Purlovia6(a);
}





function Rhino1(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr594 === "undefined") {
    h5gg.searchNumber('10.35401344299', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count594 = h5gg.getResultsCount();
    r594 = h5gg.getResults(count594);
    for (var i = 0; i < count594; i++) {
      addr594 = r594[i].address;
      h5gg.setValue(addr594, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count594; i++) {
      addr594 = r594[i].address;
      h5gg.setValue(addr594, avs, "F32");
    }
  }
}   
function Rhino2(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr595 === "undefined") {
    h5gg.searchNumber('112.29441070557', 'F32', '0x100000000', '0x160000000'); 
    h5gg.getResults("100", "F32");
    count595 = h5gg.getResultsCount();
    r595 = h5gg.getResults(count595);
    for (var i = 0; i < count595; i++) {
      addr595 = r595[i].address;
      h5gg.setValue(addr595, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count595; i++) {
      addr595 = r595[i].address;
      h5gg.setValue(addr595, avs, "F32");
    }
  }
} 
function Rhino(a){
 Rhino1(a);
 Rhino2(a);
}

function SkyQuetzal1(a){
const avs = a.checked ? -999999 : 1;

  if (typeof addr601 === "undefined") {
    h5gg.searchNumber('110.57530975342', 'F32', '0x100000000', '0x160100000'); 
    h5gg.getResults("100", "F32");
    count601 = h5gg.getResultsCount();
    r601 = h5gg.getResults(count601);
    for (var i = 0; i < count601; i++) {
      addr601 = r601[i].address;
      h5gg.setValue(addr601, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count601; i++) {
      addr601 = r601[i].address;
      h5gg.setValue(addr601, avs, "F32");
    }
  }
}   
function SkyQuetzal2(a){
const avs = a.checked ? -999999 : 1;

  if (typeof addr602 === "undefined") {
    h5gg.searchNumber('110.10461425781', 'F32', '0x100000000', '0x160200000'); 
    h5gg.getResults("100", "F32");
    count602 = h5gg.getResultsCount();
    r602 = h5gg.getResults(count602);
    for (var i = 0; i < count602; i++) {
      addr602 = r602[i].address;
      h5gg.setValue(addr602, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count602; i++) {
      addr602 = r602[i].address;
      h5gg.setValue(addr602, avs, "F32");
    }
  }
}
function SkyQuetzal3(a){
const avs = a.checked ? -999999 : 1;

  if (typeof addr603 === "undefined") {
    h5gg.searchNumber('110.10456085205', 'F32', '0x100000000', '0x160300000'); 
    h5gg.getResults("100", "F32");
    count603 = h5gg.getResultsCount();
    r603 = h5gg.getResults(count603);
    for (var i = 0; i < count603; i++) {
      addr603 = r603[i].address;
      h5gg.setValue(addr603, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count603; i++) {
      addr603 = r603[i].address;
      h5gg.setValue(addr603, avs, "F32");
    }
  }
}  
function SkyQuetzal4(a){
const avs = a.checked ? -999999 : 1;

  if (typeof addr604 === "undefined") {
    h5gg.searchNumber('110.14945220947', 'F32', '0x100000000', '0x160400000'); 
    h5gg.getResults("100", "F32");
    count604 = h5gg.getResultsCount();
    r604 = h5gg.getResults(count604);
    for (var i = 0; i < count604; i++) {
      addr604 = r604[i].address;
      h5gg.setValue(addr604, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count604; i++) {
      addr604 = r604[i].address;
      h5gg.setValue(addr604, avs, "F32");
    }
  }
}   
function SkyQuetzal5(a){
const avs = a.checked ? -999999 : 1;

  if (typeof addr605 === "undefined") {
    h5gg.searchNumber('110.1304473877', 'F32', '0x100000000', '0x160500000'); 
    h5gg.getResults("100", "F32");
    count605 = h5gg.getResultsCount();
    r605 = h5gg.getResults(count605);
    for (var i = 0; i < count605; i++) {
      addr605 = r605[i].address;
      h5gg.setValue(addr605, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count605; i++) {
      addr605 = r605[i].address;
      h5gg.setValue(addr605, avs, "F32");
    }
  }
}  

function SkyQuetzal(a){
  SkyQuetzal1(a);
  SkyQuetzal2(a);
  SkyQuetzal3(a);
  SkyQuetzal4(a);
  SkyQuetzal5(a);
  }
function JellyFish(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr607 === "undefined") {
    h5gg.searchNumber('50.83782196045', 'F32', '0x100000000', '0x160700000'); 
    h5gg.getResults("100", "F32");
    count607 = h5gg.getResultsCount();
    r607 = h5gg.getResults(count607);
    for (var i = 0; i < count607; i++) {
      addr607 = r607[i].address;
      h5gg.setValue(addr607, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count607; i++) {
      addr607 = r607[i].address;
      h5gg.setValue(addr607, avs, "F32");
    }
  }
}   

/* This 1 function made me wanna kill myself (Tame Antenna)  */

function TameAntennaAll(a){

  SkyQuetzal1(a);
  SkyQuetzal2(a);
  SkyQuetzal3(a);
  SkyQuetzal4(a);
  SkyQuetzal5(a);
  SkyQuetzal6(a);
  Rhino1(a);
  Rhino2(a); 
  JellyFish(a);
  Anky(a);
  AntennaSnail(a); 
  Purlovia1(a);
  Purlovia2(a);
  Purlovia3(a);
  Purlovia4(a);
  Purlovia5(a);
  Purlovia6(a);
  Quetzal(a);
  Tuso1(a);
  Tuso2(a);
  Penguin(a);
}

function QuetzPlat1(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr608 === "undefined") {
    h5gg.searchNumber('110.57530975342', 'F32', '0x100000000', '0x160800000'); 
    h5gg.getResults("100", "F32");
    count608 = h5gg.getResultsCount();
    r608 = h5gg.getResults(count608);
    for (var i = 0; i < count608; i++) {
      addr608 = r608[i].address;
      h5gg.setValue(addr608, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count608; i++) {
      addr608 = r608[i].address;
      h5gg.setValue(addr608, avs, "F32");
    }
  }
}  
function QuetzPlat2(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr609 === "undefined") {
    h5gg.searchNumber('110.10461425781', 'F32', '0x100000000', '0x160900000'); 
    h5gg.getResults("100", "F32");
    count609 = h5gg.getResultsCount();
    r609 = h5gg.getResults(count609);
    for (var i = 0; i < count609; i++) {
      addr609 = r609[i].address;
      h5gg.setValue(addr609, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count609; i++) {
      addr609 = r609[i].address;
      h5gg.setValue(addr609, avs, "F32");
    }
  }
}   
function QuetzPlat3(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr610 === "undefined") {
    h5gg.searchNumber('110.10456085205', 'F32', '0x100000000', '0x161000000'); 
    h5gg.getResults("100", "F32");
    count610 = h5gg.getResultsCount();
    r610 = h5gg.getResults(count610);
    for (var i = 0; i < count610; i++) {
      addr610 = r610[i].address;
      h5gg.setValue(addr610, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count610; i++) {
      addr610 = r610[i].address;
      h5gg.setValue(addr610, avs, "F32");
    }
  }
}  
function QuetzPlat4(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr611 === "undefined") {
    h5gg.searchNumber('110.14945220947', 'F32', '0x100000000', '0x161100000'); 
    h5gg.getResults("100", "F32");
    count611 = h5gg.getResultsCount();
    r611 = h5gg.getResults(count611);
    for (var i = 0; i < count611; i++) {
      addr611 = r611[i].address;
      h5gg.setValue(addr611, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count611; i++) {
      addr611 = r611[i].address;
      h5gg.setValue(addr611, avs, "F32");
    }
  }
}   
function QuetzPlat5(a){
const avs = a.checked ? 999999 : 1;

  if (typeof addr612 === "undefined") {
    h5gg.searchNumber('110.1304473877', 'F32', '0x100000000', '0x161200000'); 
    h5gg.getResults("100", "F32");
    count612 = h5gg.getResultsCount();
    r612 = h5gg.getResults(count612);
    for (var i = 0; i < count612; i++) {
      addr612 = r612[i].address;
      h5gg.setValue(addr612, avs, "F32");
    }
    h5gg.clearResults();
  } else {
    for (var i = 0; i < count612; i++) {
      addr612 = r612[i].address;
      h5gg.setValue(addr612, avs, "F32");
    }
  }
}   
function QuetzPlat(a){
 QuetzPlat1(a);
 QuetzPlat2(a);
 QuetzPlat3(a);
 QuetzPlat4(a);
 QuetzPlat5(a);
}

function FemalePlayer(a){
if (typeof addr21 === 'undefined') {
              h5gg.clearResults();
              h5gg.searchNumber('-0.98875373602', 'F32', '0x100000000', '0x160000000');
              h5gg.searchNearby('-6.874347686909405e-41', 'F64', '0x8');
              h5gg.searchNumber('-6.874347686909405e-41', 'F64', '0x100000000', '0x160000000');
              h5gg.getResults("-6.874346696665740e-41", "F64");
              count21 = h5gg.getResultsCount();
              r21 = h5gg.getResults(count21);
              for (var i = 0; i < count21; i++) {
                  addr21 = r21[i].address;
                  h5gg.setValue(addr21, -6.874346696665740e-41, 'F64');
                  h5gg.clearResults()
                  Flags4 = 1
              }
          }

          else {

              var test;
              if (typeof Flags4 === 'undefined') {
                  for (var i = 0; i < count21; i++) {
                      addr21 = r21[i].address;
                      h5gg.setValue(addr21, -6.874346696665740e-41, 'F64');
                      Flags4 = 1
                  }
              } else {
                  for (var i = 0; i < count21; i++) {
                      addr21 = r21[i].address;
                      h5gg.setValue(addr21, -6.874347686909405e-41, 'F32');
                      Flags4 = undefined
                  }
              }
          }
      }
      
function MalePlayer(a){
if (typeof addr20 === 'undefined') {
              
              h5gg.clearResults();
              h5gg.searchNumber('-5.140667156606297e-315', 'F64', '0x100000000', '0x160000000');
              h5gg.getResults("7.186329346908974e+45", "F64");
              count20 = h5gg.getResultsCount();
              r20 = h5gg.getResults(count20);
              for (var i = 0; i < count20; i++) {
                  addr20 = r20[i].address;
                  h5gg.setValue(addr20, 7.186329346908974e+45, 'F64');
                  h5gg.clearResults()
                  Flags3 = 1
              }
          }

          else {

              var test;
              if (typeof Flags3 === 'undefined') {
                  for (var i = 0; i < count20; i++) {
                      addr20 = r20[i].address;
                      h5gg.setValue(addr20, 7.186329346908974e+45, 'F64');
                      Flags3 = 1
                  }
              } else {
                  for (var i = 0; i < count20; i++) {
                      addr20 = r20[i].address;
                      h5gg.setValue(addr20, -5.140667156606297e-315, 'F64');
                      Flags3 = undefined
                  }
              }
          }
      }








  			var elem = document.getElementById('slider1');
  			var target = document.getElementById('numvalue1');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));
  			
  			  
  			var elem = document.getElementById('slider2');
  			var target = document.getElementById('numvalue2');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));


  
  			var elem = document.getElementById('slider3');
  			var target = document.getElementById('numvalue3');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));


  
  			var elem = document.getElementById('slider4');
  			var target = document.getElementById('numvalue4');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));


  
  			var elem = document.getElementById('slider5');
  			var target = document.getElementById('numvalue5');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));
  			
  			var elem = document.getElementById('slider7');
  			var target = document.getElementById('numvalue7');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
  			elem.addEventListener('input', rangeValue(elem, target));
  			
  			var elem = document.getElementById('slider8');
  			var target = document.getElementById('numvalue8');
  			var rangeValue = function (elem, target) {
  			  return function(evt){
  			    target.innerHTML = elem.value;
  			  }
  			}
      			elem.addEventListener('input', rangeValue(elem, target));       			

        		var elem = document.getElementById('slider9');
  				var target = document.getElementById('numvalue9');
  				var rangeValue = function (elem, target) {
  				  return function(evt){
  				    target.innerHTML = elem.value;
  				  }
  				}
     	 		elem.addEventListener('input', rangeValue(elem, target));       			
  		        		var elem = document.getElementById('slider10');
  				var target = document.getElementById('numvalue10');
  				var rangeValue = function (elem, target) {
  				  return function(evt){
  				    target.innerHTML = elem.value;
  				  }
  				}
     	 		elem.addEventListener('input', rangeValue(elem, target));       			
  		
