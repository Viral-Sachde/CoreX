// accessing all class points 
var fromm = document.getElementById('fromm');
var too = document.getElementById('too');


var userValFrom= document.getElementById('from');
var userValTo= document.getElementById('to');
//base value of selected options
var base; 

//click on links reaches first here 

function lengthClicked() { 
    lengthRunKaro();
}

function tempratureClicked() { 
    tempratureRunKaro(); 
}

function areaClicked() { 
    areaRunKaro(); 
}

function volumeClicked() { 
    volumeRunKaro();  
}

function weightClicked() { 
    weightRunKaro(); 
}
function timeClicked() { 
    timeRunKaro();
}



//changing base selection options thing for changing options
function lengthRunKaro() {
     
        //clearing previos options if any
        while (fromm.options.length > 1) {
            fromm.remove(1);
            too.remove(1);
        }
    


        //adding options of length (fromm and too both)

        const options = [
            { value: '1', text: 'Meter' },
            { value: '2', text: 'Kilometer' },
            { value: '3', text: 'Centimeter' },
            { value: '4', text: 'milimeter' },
            { value: '5', text: 'Nanometer' },
            { value: '6', text: 'Mile' },
            { value: '7', text: 'Foot' },
            { value: '8', text: 'Yard' },
            { value: '9', text: 'Inch' },
            { value: '10', text: 'LightYear' },

        ];
        // adding options in fromm

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.text = option.text;
            fromm.appendChild(opt);
        });
        // adding options in too
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.text = option.text;
            too.appendChild(opt);
        });




        //formulation of the whole thing

        const formulationlength = { 
                                    //meter to all
                                    MtoC : (a) => { return a*100 },
                                    MtoK: (a) => { return a/1000 }, 
                                    Mtom: (a) => { return  a * 1000 }, 
                                    MtoN: (a) => {  return a * 1e9 }, 
                                    MtoM: (a) => { return a / 1609.34; }, 
                                    MtoF: (a) => { return a * 3.28084 }, 
                                    MtoY: (a) => {  return a * 1.09361 }, 
                                    MtoI: (a) => { return a * 39.3701}, 
                                    MtoL: (a) => { return a / 9.461e15 }, 
                                    MtoMi : (a) => { return a / 1609.34 }, 
                                    //kilometer to all
                                    KtoC : (a) => { return a * 100000; } , 
                                    KtoM : (a) => { return a * 1000; } ,
                                    Ktom : (a) => { return a * 1e6; } ,   
                                    KtoN : (a) => { return a * 1e12; }   , 
                                    KtoMi : (a) => { return a / 1.60934; } ,
                                    KtoF : (a) => { return a * 3280.84; },
                                    KtoY : (a) => { return a * 1093.61; },
                                    KtoI : (a) => { return a * 39370.1; },
                                    KtoL : (a) => { return a / 9.461e12; } ,
                                // Centimeters to All
                                    CtoK : (a) => { return a / 100000 },
                                    CtoM : (a) => { return a / 100 },
                                    Ctom : (a) => { return a * 10 },
                                    CtoN : (a) => { return a * 1e7 },
                                    CtoMi : (a) => { return a / 160934 },
                                    CtoF : (a) => { return a / 30.48 },
                                    CtoY : (a) => { return a / 91.44 },
                                    CtoI : (a) => { return a / 2.54 },
                                    CtoL : (a) => { return a / 9.461e17 },

                                    // Millimeters to All
                                    mtoK : (a) => { return a / 1e6 },
                                    mtoM : (a) => { return a / 1000 },
                                    mtoC : (a) => { return a / 10 },
                                    mtoN : (a) => { return a * 1e6 },
                                    mtoMi : (a) => { return a / 1.609e6 },
                                    mtoF : (a) => { return a / 304.8 },
                                    mtoY : (a) => { return a / 914.4 },
                                    mtoI : (a) => { return a / 25.4 },
                                    mtoL : (a) => { return a / 9.461e18 },

                                    // Nanometers to All
                                    NtoK : (a) => { return a / 1e12 },
                                    NtoM : (a) => { return a / 1e9 },
                                    NtoC : (a) => { return a / 1e7 },
                                    Ntom : (a) => { return a / 1e6 },
                                    NtoMi : (a) => { return a / 1.609e12 },
                                    NtoF : (a) => { return a / 3.048e8 },
                                    NtoY : (a) => { return a / 9.144e8 },
                                    NtoI : (a) => { return a / 2.54e7 },
                                    NtoL : (a) => { return a / 9.461e24 },

                                    // Miles to All
                                    MitoK : (a) => { return a * 1.60934 },
                                    MitoM : (a) => { return a * 1609.34 },
                                    MitoC : (a) => { return a * 160934 },
                                    Mitom : (a) => { return a * 1.609e6 },
                                    MitoN : (a) => { return a * 1.609e12 },
                                    MitoF : (a) => { return a * 5280 },
                                    MitoY : (a) => { return a * 1760 },
                                    MitoI : (a) => { return a * 63360 },
                                    MitoL : (a) => { return a / 5.879e12 },

                                    // Feet to All
                                    FtoK : (a) => { return a / 3280.84 },
                                    FtoM : (a) => { return a / 3.28084 },
                                    FtoC : (a) => { return a * 30.48 },
                                    Ftom : (a) => { return a * 304.8 },
                                    FtoN : (a) => { return a * 3.048e8 },
                                    FtoMi : (a) => { return a / 5280 },
                                    FtoY : (a) => { return a / 3 },
                                    FtoI : (a) => { return a * 12 },
                                    FtoL : (a) => { return a/ 3.104e16 },

                                    // Yards to All
                                    YtoK : (a) => { return a / 1093.61 },
                                    YtoM : (a) => { return a / 1.09361 },
                                    YtoC : (a) => { return a * 91.44 },
                                    Ytom : (a) => { return a * 914.4 },
                                    YtoN : (a) => { return a * 9.144e8 },
                                    YtoMi : (a) => { return a / 1760 },
                                    YtoF : (a) => { return a * 3 },
                                    YtoI : (a) => { return a * 36 },
                                    YtoL : (a) => { return a / 9.461e15 },

                                    // Inches to All
                                    ItoK : (a) => { return a / 39370.1 },
                                    ItoM : (a) => { return a / 39.3701 },
                                    ItoC : (a) => { return a * 2.54 },
                                    Itom : (a) => { return a * 25.4 },
                                    ItoN : (a) => { return a * 2.54e7 },
                                    ItoMi : (a) => { return a / 63360 },
                                    ItoF : (a) => { return a / 12 },
                                    ItoY : (a) => { return a / 36 },
                                    ItoL : (a) => { return a / 3.104e17 },

                                    // Light-Years to All
                                    LtoK : (a) => { return a * 9.461e12 },
                                    LtoM : (a) => { return a * 9.461e15 },
                                    LtoC : (a) => { return a * 9.461e17 },
                                    Ltom : (a) => { return a * 9.461e18 },
                                    LtoN : (a) => { return a * 9.461e24 },
                                    LtoMi : (a) => { return a * 5.879e12 },
                                    LtoF : (a) => { return a * 3.104e16 },
                                    LtoY : (a) => { return a * 1.035e16 },
                                    LtoI : (a) => { return a * 3.725e17 }

        }

  


        //every second getting values which are selected in optinosss
        setInterval(fetchingLenOps, 2500);
        console.log("control here")

        function fetchingLenOps() {
            var fromOp= fromm.options[fromm.selectedIndex].text;
            var tooOp= too.options[too.selectedIndex].text;
            console.log(fromOp, tooOp);

            setTimeout ( calcLength(fromOp,tooOp), 2000);
        }

        // calculating it awayyyy
        function calcLength (fromOp, tooOp) 
        {

                if(fromOp === tooOp) {
                //collecting and parsing a value into float  
                console.log(parseFloat(this.userValFrom.value));
                let uvf = parseFloat(this.userValFrom.value);

                userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second

                    }

                else{

                    if(fromOp === "Choose the unit you want to convert from." || tooOp === "Choose the unit you want to be converted into.") { 
                        // printing out it that select properly
                    }
                    else {
                //getting key here to access formulation maamu
                            if ( tooOp === "Mile" ) {
                                var callingItAwayKey = fromOp[0] + "to" + "Mi";
                                console.log(callingItAwayKey);
                            }
                            else if (fromOp ==="Mile")
                            {var callingItAwayKey = "Mi" + "to" + tooOp[0];
                                console.log(callingItAwayKey);}
                            else {
                                var callingItAwayKey = fromOp[0] + "to" + tooOp[0];
                                console.log(callingItAwayKey);
                            }   
            
                    //getting value of from here maamu 
                console.log(parseFloat(this.userValFrom.value));
                var uvf = parseFloat(this.userValFrom.value);    
                
                
            let finalAns =formulationlength[callingItAwayKey]; //formulation lidho dictionary maathi
            let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
            console.log(temp); // printing it aise hi 
            userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second


                }
            }
            
        }



 };

function tempratureRunKaro() {

            //clearing previos options if any
            while (fromm.options.length > 1) {
                fromm.remove(1);
                too.remove(1);
            }
      

            //adding options of temp (fromm and too both)
            const options = [
                { value: '1', text: 'Celsius' },
                { value: '2', text: 'Kelvin' },
                { value: '3', text: 'Fahrenheit' },
              

            ];
            // adding options in fromm

            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.text = option.text;
                fromm.appendChild(opt);
            });
            // adding options in too
            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.text = option.text;
                too.appendChild(opt);
            });


            // formulation temprature
                const formulationtemp = {
                    CtoF : (a) => { return (a * 9/5) + 32 },  
                    CtoK : (a) => { return a + 273.15 },

                    FtoC : (a) => { return (a - 32) * 5/9 },  
                    FtoK : (a) => { return ((a - 32) * 5/9) + 273.15 },

                    KtoC : (a) => { return a - 273.15 },      
                    KtoF : (a) => { return ((a - 273.15) * 9/5) + 32 },

                }

                setInterval(fetchingTempOps, 2500);
                console.log("control here")
                function fetchingTempOps() {
                    var fromOp= fromm.options[fromm.selectedIndex].text;
                    var tooOp= too.options[too.selectedIndex].text;
                    console.log(fromOp, tooOp);
        
                    setTimeout ( calcTemp(fromOp,tooOp), 2000);
                }
                // calculating it awayyyy
        
                function calcTemp (fromOp, tooOp) 
                {
        
                        if(fromOp === tooOp) {
                        //collecting and parsing a value into float  
                        console.log(parseFloat(this.userValFrom.value));
                        let uvf = parseFloat(this.userValFrom.value);
        
                        userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second
        
                            }
        
                        else{
        
                            if(fromOp === "Choose the unit you want to convert from." || tooOp === "Choose the unit you want to be converted into.") { 
                                // printing out it that select properly
                            }
                            else {
                        //getting key here to access formulation maamu
                                  
                                        var callingItAwayKey = fromOp[0] + "to" + tooOp[0];
                                        console.log(callingItAwayKey);
                                    }   
                    
                            //getting value of from here maamu 
                        console.log(parseFloat(this.userValFrom.value));
                        var uvf = parseFloat(this.userValFrom.value);    
                        
                        
                    let finalAns =formulationtemp[callingItAwayKey]; //formulation lidho dictionary maathi
                    let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
                    console.log(temp); // printing it aise hi 
                    userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second
        
        
                        }
                    }
                    
                
        
        
};


function areaRunKaro ( ) {

      //clearing previos options if any
   while (fromm.options.length > 1) {
    fromm.remove(1);
    too.remove(1);
}
//adding optins of area (in both fromm and too)
    const options = [
        { value: '1', text: 'Square Meter' },
        { value: '2', text: 'Square Kilometer' },
        { value: '3', text: 'Square Centimeter' },
        { value: '4', text: 'Square Micrometer' },
        { value: '5', text: 'Square Mile' },
        { value: '6', text: 'Square Ton' },
        { value: '7', text: 'Hectare' },
        { value: '8', text: 'Square Yard' },
        { value: '9', text: 'Square Foot' },
        { value: '10', text: 'Square Inch' },
        { value: '11', text: 'Acre' },
    ];

       // adding options in fromm

       options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        fromm.appendChild(opt);
    });

    // adding options in too
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        too.appendChild(opt);
    });

                // formulation area
            
                const formulationarea = {
                    SMtoSK: (a) => a / 1e6,
                    SMtoSC: (a) => a * 1e4,
                    SMtoSMic: (a) => a * 1e12,
                    SMtoSMil: (a) => a / 2.59e6,
                    SMtoST: (a) => a * 0.000001,
                    SMtoH: (a) => a / 1e4,
                    SMtoSY: (a) => a * 1.19599,
                    SMtoSF: (a) => a * 10.7639,
                    SMtoSI: (a) => a * 1550,
                    SMtoA: (a) => a / 4046.86,
                
                    SKtoSM: (a) => a * 1e6,
                    SKtoSC: (a) => a * 1e10,
                    SKtoSMic: (a) => a * 1e18,
                    SKtoSMil: (a) => a / 2.59,
                    SKtoST: (a) => a * 1000,
                    SKtoH: (a) => a * 100,
                    SKtoSY: (a) => a * 1.19599e6,
                    SKtoSF: (a) => a * 1.076e7,
                    SKtoSI: (a) => a * 1.55e9,
                    SKtoA: (a) => a * 247.105,
                
                    SCtoSM: (a) => a / 1e4,
                    SCtoSK: (a) => a / 1e10,
                    SCtoSMic: (a) => a * 1e8,
                    SCtoSMil: (a) => a / 2.59e10,
                    SCtoST: (a) => a * 1e-10,
                    SCtoH: (a) => a / 1e8,
                    SCtoSY: (a) => a * 0.000119599,
                    SCtoSF: (a) => a * 0.00107639,
                    SCtoSI: (a) => a * 0.155,
                    SCtoA: (a) => a / 4.04686e7,
                
                    SMictoSM: (a) => a / 1e12,
                    SMictoSK: (a) => a / 1e18,
                    SMictoSC: (a) => a / 1e8,
                    SMictoSMil: (a) => a / 2.59e18,
                    SMictoST: (a) => a * 1e-18,
                    SMictoH: (a) => a / 1e16,
                    SMictoSY: (a) => a * 1.19599e-12,
                    SMictoSF: (a) => a * 1.07639e-11,
                    SMictoSI: (a) => a * 1.55e-9,
                    SMictoA: (a) => a / 4.04686e12,
                
                    SMiltoSM: (a) => a * 2.59e6,
                    SMiltoSK: (a) => a * 2.59,
                    SMiltoSC: (a) => a * 2.59e10,
                    SMiltoSMic: (a) => a * 2.59e18,
                    SMiltoST: (a) => a * 2.59e6,
                    SMiltoH: (a) => a * 259,
                    SMiltoSY: (a) => a * 3.098e6,
                    SMiltoSF: (a) => a * 2.788e7,
                    SMiltoSI: (a) => a * 4.014e9,
                    SMiltoA: (a) => a * 640,
                
                    STtoSM: (a) => a * 1e6,
                    STtoSK: (a) => a / 1000,
                    STtoSC: (a) => a * 1e10,
                    STtoSMic: (a) => a * 1e18,
                    STtoSMil: (a) => a / 2.59e6,
                    STtoH: (a) => a * 100,
                    STtoSY: (a) => a * 1.19599e6,
                    STtoSF: (a) => a * 1.076e7,
                    STtoSI: (a) => a * 1.55e9,
                    STtoA: (a) => a * 247.105,
                
                    HtoSM: (a) => a * 1e4,
                    HtoSK: (a) => a / 100,
                    HtoSC: (a) => a * 1e8,
                    HtoSMic: (a) => a * 1e16,
                    HtoSMil: (a) => a / 259,
                    HtoST: (a) => a * 1e4,
                    HtoSY: (a) => a * 11959.9,
                    HtoSF: (a) => a * 107639,
                    HtoSI: (a) => a * 1.55e7,
                    HtoA: (a) => a * 2.47105,
                
                    SYtoSM: (a) => a / 1.19599,
                    SYtoSK: (a) => a / 1.196e6,
                    SYtoSC: (a) => a * 8361.27,
                    SYtoSMic: (a) => a * 8.36127e11,
                    SYtoSMil: (a) => a / 3.098e6,
                    SYtoST: (a) => a / 1.19599e6,
                    SYtoH: (a) => a / 11959.9,
                    SYtoSF: (a) => a * 9,
                    SYtoSI: (a) => a * 1296,
                    SYtoA: (a) => a / 4840,
                
                    SFtoSM: (a) => a / 10.7639,
                    SFtoSK: (a) => a / 1.076e7,
                    SFtoSC: (a) => a * 929.03,
                    SFtoSMic: (a) => a * 9.2903e10,
                    SFtoSMil: (a) => a / 2.788e7,
                    SFtoST: (a) => a / 1.076e7,
                    SFtoH: (a) => a / 107639,
                    SFtoSY: (a) => a / 9,
                    SFtoSI: (a) => a * 144,
                    SFtoA: (a) => a / 43560,
                
                    SItoSM: (a) => a / 1550,
                    SItoSK: (a) => a / 1.55e9,
                    SItoSC: (a) => a * 6.4516,
                    SItoSMic: (a) => a * 6.4516e8,
                    SItoSMil: (a) => a / 4.014e9,
                    SItoST: (a) => a / 1.55e9,
                    SItoH: (a) => a / 1.55e7,
                    SItoSY: (a) => a / 1296,
                    SItoSF: (a) => a / 144,
                    SItoA: (a) => a / 6.273e6,
                
                    AtoSM: (a) => a * 4046.86,
                    AtoSK: (a) => a / 247.105,
                    AtoSC: (a) => a * 4.047e7,
                    AtoSMic: (a) => a * 4.047e15,
                    AtoSMil: (a) => a / 640,
                    AtoST: (a) => a * 4046.86,
                    AtoH: (a) => a * 0.404686,
                    AtoSY: (a) => a * 4840,
                    AtoSF: (a) => a * 43560,
                    AtoSI: (a) => a * 6272640
                };
                setInterval(fetchingAreaOps, 2500);
                console.log("control here")
                function fetchingAreaOps() {
                    var fromOp= fromm.options[fromm.selectedIndex].text;
                    var tooOp= too.options[too.selectedIndex].text;
                    console.log(fromOp, tooOp);
        
                    setTimeout ( calcArea(fromOp,tooOp), 2000);
                }
        
                // calculating it awayyyy
                function calcArea (fromOp, tooOp) 
                {
        
                        if(fromOp === tooOp) {
                        //collecting and parsing a value into float  
                        console.log(parseFloat(this.userValFrom.value));
                        let uvf = parseFloat(this.userValFrom.value);
        
                        userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second
        
                            }
        
                        else{
                        
                            let sub =fromOp.split(' ').map(word => word.charAt(0)).join('');
                            let sub1 =tooOp.split(' ').map(word => word.charAt(0)).join('');

                            console.log(sub,sub1);

                            var callingItAwayKey = sub + "to" + sub1;
                            console.log(callingItAwayKey);
                        
                         
                            //getting value of from here maamu 
                        console.log(parseFloat(this.userValFrom.value));
                        var uvf = parseFloat(this.userValFrom.value);    
                        
                        
                    let finalAns =formulationarea[callingItAwayKey]; //formulation lidho dictionary maathi
                    let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
                    console.log(temp); // printing it aise hi 
                    userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second
        
        
                        
                    }
                    
                }
                
                

    
};
function volumeRunKaro ( ) {

   //clearing previos options if any
   while (fromm.options.length > 1) {
    fromm.remove(1);
    too.remove(1);
}

//adding optins of volume (in both fromm and too)
const options = [
    { value: '1', text: 'Cubic Meter' }, //cm
    { value: '2', text: 'Cubic Kilometer' },
    { value: '3', text: 'Cubic Centimeter' },
    { value: '4', text: 'Cubic Mili Meter' }, //cmm
    { value: '5', text: 'Cubic XMile' }, //cx where x is mile
    { value: '6', text: 'Cubic Yard' },
    { value: '7', text: 'Cubic Foot' },
    { value: '8', text: 'Cubic Inch' },
    { value: '9', text: 'Liter' },
    { value: '10', text: 'Milliliter' },
    { value: '11', text: 'US Gallon' },
    { value: '12', text: 'US Quart' },
    { value: '13', text: 'US Pint' },
    { value: '14', text: 'US Cup' },
    { value: '15', text: 'US Fluid Ounce' },
    { value: '16', text: 'US Table Spoon' },
    { value: '17', text: 'US Tea Spoon' },
    { value: '18', text: 'Imperial Gallon' },
    { value: '19', text: 'Imperial Quart' },
    { value: '20', text: 'Imperial Pint' },
    { value: '21', text: 'Imperial Fluid Ounce' },
    { value: '22', text: 'Imperial Table Spoon' },
    { value: '23', text: 'Imperial Tea Spoon' },
];

   // adding options in fromm

   options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.text = option.text;
    fromm.appendChild(opt);
});
// adding options in too
options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.text = option.text;
    too.appendChild(opt);
});

// formlation for volume

const formulationvolume= {
        CMtoKM: a => a / 1e9,
        CMtoCC: a => a * 1e6,
        CMtoCMM: a => a * 1e6,
        CMtoCX: a => a / 4.168e9,
        CMtoCY: a => a / 764.6,
        CMtoCF: a => a / 28316.8,
        CMtoCI: a => a * 61023.7,
        CMtoL: a => a * 1000,
        CMtoML: a => a * 1e6,
        CMtoUSG: a => a / 3785.41,
        CMtoUSQ: a => a / 946.353,
        CMtoUSP: a => a / 473.176,
        CMtoUC: a => a / 236.588,
        CMtoUFO: a => a * 33814,
        CMtoUTS: a => a * 0.067628,
        CMtoUTT: a => a * 0.202884,
        CMtoITE: a => a * 0.0351951,
        CMtoIG: a => a / 4546.09,
        CMtoIQ: a => a * 0.0351951,
        CMtoIP: a => a * 0.000264172,
        CMtoIFO: a => a * 0.0000351951,
        CMtoITS: a => a * 0.000264172,
        CMtoITT: a => a * 0.000264172,
    
        KMtoCM: a => a * 1e9,
        KMtoCC: a => a * 1e12,
        KMtoCMM: a => a * 1e15,
        KMtoCX: a => a * 0.239913,
        KMtoCY: a => a * 1.30795e9,
        KMtoCF: a => a * 3.53147e9,
        KMtoCI: a => a * 1.63985e12,
        KMtoL: a => a * 1e6,
        KMtoML: a => a * 1e9,
        KMtoUSG: a => a * 264172,
        KMtoUSQ: a => a * 1056.69,
        KMtoUSP: a => a * 2113.98,
        KMtoUC: a => a * 4226.75,
        KMtoUFO: a => a * 3.78541e9,
        KMtoUTS: a => a * 0.067628,
        KMtoUTT: a => a * 0.202884,
        KMtoITE: a => a * 0.0351951,
        KMtoIG: a => a * 2.64172e9,
        KMtoIQ: a => a * 0.0351951,
        KMtoIP: a => a * 0.000264172,
        KMtoIFO: a => a * 0.0000351951,
        KMtoITS: a => a * 0.000264172,
        KMtoITT: a => a * 0.000264172,
    
        CCtoCM: a => a / 1e6,
        CCtoKM: a => a / 1e12,
        CCtoCMM: a => a * 1e3,
        CCtoCX: a => a / 3.78541e6,
        CCtoCY: a => a / 28316.8,
        CCtoCF: a => a / 30.48,
        CCtoCI: a => a * 61.0237,
        CCtoL: a => a / 1000,
        CCtoML: a => a * 1000,
        CCtoUSG: a => a / 3785.41,
        CCtoUSQ: a => a / 946.353,
        CCtoUSP: a => a / 473.176,
        CCtoUC: a => a / 236.588,
        CCtoUFO: a => a * 33814,
        CCtoUTS: a => a * 0.067628,
        CCtoUTT: a => a * 0.202884,
        CCtoITE: a => a * 0.0351951,
        CCtoIG: a => a / 4546.09,
        CCtoIQ: a => a * 0.0351951,
        CCtoIP: a => a * 0.000264172,
        CCtoIFO: a => a * 0.0000351951,
        CCtoITS: a => a * 0.000264172,
        CCtoITT: a => a * 0.000264172,
    
        CMMtoCM: a => a / 1e6,
        CMMtoKM: a => a / 1e12,
        CMMtoCC: a => a / 1e3,
        CMMtoCX: a => a / 3.78541e6,
        CMMtoCY: a => a / 28316.8,
        CMMtoCF: a => a / 30.48,
        CMMtoCI: a => a * 61.0237,
        CMMtoL: a => a / 1000,
        CMMtoML: a => a * 1000,
        CMMtoUSG: a => a / 3785.41,
        CMMtoUSQ: a => a / 946.353,
        CMMtoUSP: a => a / 473.176,
        CMMtoUC: a => a / 236.588,
        CMMtoUFO: a => a * 33814,
        CMMtoUTS: a => a * 0.067628,
        CMMtoUTT: a => a * 0.202884,
        CMMtoITE: a => a * 0.0351951,
        CMMtoIG: a => a / 4546.09,
        CMMtoIQ: a => a * 0.0351951,
        CMMtoIP: a => a * 0.000264172,
        CMMtoIFO: a => a * 0.0000351951,
        CMMtoITS: a => a * 0.000264172,
        CMMtoITT: a => a * 0.000264172,
    
        CXtoCM: a => a * 4.168e9,
        CXtoKM: a => a * 0.239913,
        CXtoCC: a => a * 3.78541e6,
        CXtoCMM: a => a * 3.78541e6,
        CXtoCY: a => a * 1.30795e9,
        CXtoCF: a => a * 3.53147e9,
        CXtoCI: a => a * 1.63985e12,
        CXtoL: a => a * 1e6,
        CXtoML: a => a * 1e9,
        CXtoUSG: a => a * 264172,
        CXtoUSQ: a => a * 1056.69,
        CXtoUSP: a => a * 2113.98,
        CXtoUC: a => a * 4226.75,
        CXtoUFO: a => a * 3.78541e9,
        CXtoUTS: a => a * 0.067628,
        CXtoUTT: a => a * 0.202884,
        CXtoITE: a => a * 0.0351951,
        CXtoIG: a => a * 2.64172e9,
        CXtoIQ: a => a * 0.0351951,
        CXtoIP: a => a * 0.000264172,
        CXtoIFO: a => a * 0.0000351951,
        CXtoITS: a => a * 0.000264172,
        CXtoITT: a => a * 0.000264172,
    
        CYtoCM: a => a * 764.6,
        CYtoKM: a => a / 1.30795e9,
        CYtoCC: a => a * 764600,
        CYtoCMM: a => a * 764600000,
        CYtoCX: a => a * 0.0007646,
        CYtoCF: a => a * 27.004,
        CYtoCI: a => a * 46656,
        CYtoL: a => a * 0.7646,
        CYtoML: a => a * 764600,
        CYtoUSG: a => a * 0.200378,
        CYtoUSQ: a => a * 0.80028,
        CYtoUSP: a => a * 1.33333,
        CYtoUC: a => a * 3.20037,
        CYtoUFO: a => a * 0.000061,
        CYtoUTS
    
    : a => a * 0.000062,
        CYtoUTT: a => a * 0.000162,
        CYtoITE: a => a * 0.000052,
        CYtoIG: a => a / 4546.09,
        CYtoIQ: a => a * 0.000052,
        CYtoIP: a => a * 0.000052,
        CYtoIFO: a => a * 0.000052,
        CYtoITS: a => a * 0.000052,
        CYtoITT: a => a * 0.000052,
    
        CFtoCM: a => a * 28316.8,
        CFtoKM: a => a / 3.53147e9,
        CFtoCC: a => a * 28316.8,
        CFtoCMM: a => a * 28316800,
        CFtoCX: a => a * 0.000283168,
        CFtoCY: a => a / 27.004,
        CFtoCI: a => a * 1728,
        CFtoL: a => a * 28.3168,
        CFtoML: a => a * 28316.8,
        CFtoUSG: a => a / 128,
        CFtoUSQ: a => a / 33.814,
        CFtoUSP: a => a * 1,
        CFtoUC: a => a * 8,
        CFtoUFO: a => a * 0.000006,
        CFtoUTS: a => a * 0.067628,
        CFtoUTT: a => a * 0.202884,
        CFtoITE: a => a * 0.000052,
        CFtoIG: a => a * 0.000052,
        CFtoIQ: a => a * 0.000052,
        CFtoIP: a => a * 0.000052,
        CFtoIFO: a => a * 0.000052,
        CFtoITS: a => a * 0.000052,
        CFtoITT: a => a * 0.000052,
    
        CItoCM: a => a / 61023.7,
        CItoKM: a => a / 1.63985e12,
        CItoCC: a => a / 61.0237,
        CItoCMM: a => a / 61023.7,
        CItoCX: a => a / 1728,
        CItoCY: a => a / 46656,
        CItoCF: a => a / 1728,
        CItoL: a => a * 0.0163871,
        CItoML: a => a * 16.3871,
        CItoUSG: a => a / 231,
        CItoUSQ: a => a / 58.422,
        CItoUSP: a => a / 8,
        CItoUC: a => a * 0.058422,
        CItoUFO: a => a * 0.0000163871,
        CItoUTS: a => a * 0.067628,
        CItoUTT: a => a * 0.202884,
        CItoITE: a => a * 0.000052,
        CItoIG: a => a * 0.000052,
        CItoIQ: a => a * 0.000052,
        CItoIP: a => a * 0.000052,
        CItoIFO: a => a * 0.000052,
        CItoITS: a => a * 0.000052,
        CItoITT: a => a * 0.000052,
    
        LtoCM: a => a / 0.001,
        LtoKM: a => a / 1e6,
        LtoCC: a => a * 1000,
        LtoCMM: a => a * 1e6,
        LtoCX: a => a * 0.264172,
        LtoCY: a => a * 1.316,
        LtoCF: a => a * 33.814,
        LtoCI: a => a * 61.0237,
        LtoML: a => a * 1000,
        LtoUSG: a => a / 3.78541,
        LtoUSQ: a => a / 946.353,
        LtoUSP: a => a * 2.11338,
        LtoUC: a => a * 4.22675,
        LtoUFO: a => a * 33.814,
        LtoUTS: a => a * 0.067628,
        LtoUTT: a => a * 0.202884,
        LtoITE: a => a * 0.0351951,
        LtoIG: a => a / 4546.09,
        LtoIQ: a => a * 0.0351951,
        LtoIP: a => a * 0.000264172,
        LtoIFO: a => a * 0.0000351951,
        LtoITS: a => a * 0.000264172,
        LtoITT: a => a * 0.000264172,
    
        MLtoCM: a => a / 1e6,
        MLtoKM: a => a / 1e9,
        MLtoCC: a => a * 1000,
        MLtoCMM: a => a * 1e6,
        MLtoCX: a => a * 0.264172,
        MLtoCY: a => a * 1.316,
        MLtoCF: a => a * 33.814,
        MLtoCI: a => a * 61.0237,
        MLtoL: a => a / 1000,
        MLtoUSG: a => a / 3785.41,
        MLtoUSQ: a => a / 946.353,
        MLtoUSP: a => a * 2.11338,
        MLtoUC: a => a * 4.22675,
        MLtoUFO: a => a * 33.814,
        MLtoUTS: a => a * 0.067628,
        MLtoUTT: a => a * 0.202884,
        MLtoITE: a => a * 0.0351951,
        MLtoIG: a => a / 4546.09,
        MLtoIQ: a => a * 0.0351951,
        MLtoIP: a => a * 0.000264172,
        MLtoIFO: a => a * 0.0000351951,
        MLtoITS: a => a * 0.000264172,
        MLtoITT: a => a * 0.000264172,
    
        USGtoCM: a => a * 3785.41,
        USGtoKM: a => a / 264.172,
        USGtoCC: a => a * 3785410,
        USGtoCMM: a => a * 3785410000,
        USGtoCX: a => a * 0.000378541,
        USGtoCY: a => a * 4.804,
        USGtoCF: a => a * 128,
        USGtoCI: a => a * 231,
        USGtoL: a => a * 3.78541,
        USGtoML: a => a * 3785410,
        USGtoUSQ: a => a * 4,
        USGtoUSP: a => a * 8,
        USGtoUC: a => a * 16,
        USGtoUFO: a => a * 0.000378541,
        USGtoUTS: a => a * 0.067628,
        USGtoUTT: a => a * 0.202884,
        USGtoITE: a => a * 0.0351951,
        USGtoIG: a => a / 4546.09,
        USGtoIQ: a => a * 0.0351951,
        USGtoIP: a => a * 0.000264172,
        USGtoIFO: a => a * 0.0000351951,
        USGtoITS: a => a * 0.000264172,
        USGtoITT: a => a * 0.000264172,
    
        USQtoCM: a => a * 946.353,
        USQtoKM: a => a / 1056.69,
        USQtoCC: a => a * 946353,
        USQtoCMM: a => a * 946353000,
        USQtoCX: a => a * 0.000946353,
        USQtoCY: a => a * 1.10122,
        USQtoCF: a => a * 32,
        USQtoCI: a => a * 58.422,
        USQtoL: a => a * 0.946353,
        USQtoML: a => a * 946353,
        USQtoUSG: a => a / 4,
        USQtoUSP: a => a *
    
     2,
        USQtoUC: a => a * 4,
        USQtoUFO: a => a * 0.000946353,
        USQtoUTS: a => a * 0.067628,
        USQtoUTT: a => a * 0.202884,
        USQtoITE: a => a * 0.0351951,
        USQtoIG: a => a / 4546.09,
        USQtoIQ: a => a * 0.0351951,
        USQtoIP: a => a * 0.000264172,
        USQtoIFO: a => a * 0.0000351951,
        USQtoITS: a => a * 0.000264172,
        USQtoITT: a => a * 0.000264172,
    
        USPtoCM: a => a * 473.176,
        USPtoKM: a => a / 2113.98,
        USPtoCC: a => a * 473176,
        USPtoCMM: a => a * 473176000,
        USPtoCX: a => a * 0.000473176,
        USPtoCY: a => a * 0.000219,
        USPtoCF: a => a * 1,
        USPtoCI: a => a * 8,
        USPtoL: a => a / 2.11338,
        USPtoML: a => a * 473176,
        USPtoUSG: a => a / 8,
        USPtoUSQ: a => a / 2,
        USPtoUC: a => a * 0.476,
        USPtoUFO: a => a * 0.000473176,
        USPtoUTS: a => a * 0.067628,
        USPtoUTT: a => a * 0.202884,
        USPtoITE: a => a * 0.0351951,
        USPtoIG: a => a / 4546.09,
        USPtoIQ: a => a * 0.0351951,
        USPtoIP: a => a * 0.000264172,
        USPtoIFO: a => a * 0.0000351951,
        USPtoITS: a => a * 0.000264172,
        USPtoITT: a => a * 0.000264172,
    
        UCtoCM: a => a * 236.588,
        UCtoKM: a => a / 4226.75,
        UCtoCC: a => a * 236588,
        UCtoCMM: a => a * 236588000,
        UCtoCX: a => a * 0.000236588,
        UCtoCY: a => a * 0.3125,
        UCtoCF: a => a * 8,
        UCtoCI: a => a * 4,
        UCtoL: a => a / 4.22675,
        UCtoML: a => a * 236588,
        UCtoUSG: a => a / 16,
        UCtoUSQ: a => a / 4,
        UCtoUSP: a => a * 2,
        UCtoUFO: a => a * 0.000236588,
        UCtoUTS: a => a * 0.067628,
        UCtoUTT: a => a * 0.202884,
        UCtoITE: a => a * 0.0351951,
        UCtoIG: a => a / 4546.09,
        UCtoIQ: a => a * 0.0351951,
        UCtoIP: a => a * 0.000264172,
        UCtoIFO: a => a * 0.0000351951,
        UCtoITS: a => a * 0.000264172,
        UCtoITT: a => a * 0.000264172,
    
        UFOtoCM: a => a / 33814,
        UFOtoKM: a => a / 3.78541e9,
        UFOtoCC: a => a * 33814,
        UFOtoCMM: a => a * 33814000,
        UFOtoCX: a => a * 0.00033814,
        UFOtoCY: a => a * 0.000219,
        UFOtoCF: a => a * 128,
        UFOtoCI: a => a * 231,
        UFOtoL: a => a / 33.814,
        UFOtoML: a => a * 33814,
        UFOtoUSG: a => a / 0.000378541,
        UFOtoUSQ: a => a / 0.000946353,
        UFOtoUSP: a => a * 2113.98,
        UFOtoUC: a => a * 4226.75,
        UFOtoUTS: a => a * 0.067628,
        UFOtoUTT: a => a * 0.202884,
        UFOtoITE: a => a * 0.0351951,
        UFOtoIG: a => a / 4546.09,
        UFOtoIQ: a => a * 0.0351951,
        UFOtoIP: a => a * 0.000264172,
        UFOtoIFO: a => a * 0.0000351951,
        UFOtoITS: a => a * 0.000264172,
        UFOtoITT: a => a * 0.000264172,
    
        UTStoCM: a => a * 14.7868,
        UTStoKM: a => a / 0.0000147868,
        UTStoCC: a => a * 14786.8,
        UTStoCMM: a => a * 14786800,
        UTStoCX: a => a * 0.0000147868,
        UTStoCY: a => a * 0.000233,
        UTStoCF: a => a / 67.628,
        UTStoCI: a => a * 48,
        UTStoL: a => a / 67.628,
        UTStoML: a => a * 14800,
        UTStoUSG: a => a / 256,
        UTStoUSQ: a => a / 64,
        UTStoUSP: a => a * 1,
        UTStoUC: a => a * 0.0625,
        UTStoUFO: a => a * 0.0000147868,
        UTStoUTT: a => a * 0.300781,
        UTStoITE: a => a * 0.0000351951,
        UTStoIG: a => a / 4546.09,
        UTStoIQ: a => a * 0.000052,
        UTStoIP: a => a * 0.000052,
        UTStoIFO: a => a * 0.000052,
        UTStoITS: a => a * 0.000052,
        UTStoITT: a => a * 0.000052,
    
        UTTtoCM: a => a * 4.92892,
        UTTtoKM: a => a / 0.00000492892,
        UTTtoCC: a => a * 4928.92,
        UTTtoCMM: a => a * 4928920,
        UTTtoCX: a => a * 0.00000492892,
        UTTtoCY: a => a * 0.000081,
        UTTtoCF: a => a / 48,
        UTTtoCI: a => a * 24,
        UTTtoL: a => a / 48,
        UTTtoML: a => a * 4929,
        UTTtoUSG: a => a / 1536,
        UTTtoUSQ: a => a / 384,
        UTTtoUSP: a => a * 1,
        UTTtoUC: a => a * 0.0208333,
        UTTtoUFO: a => a * 0.00000492892,
        UTTtoUTS: a => a * 3.00042,
        UTTtoITE: a => a * 0.0000351951,
        UTTtoIG: a => a / 4546.09,
        UTTtoIQ: a => a * 0.000052,
        UTTtoIP: a => a * 0.000052,
        UTTtoIFO: a => a * 0.000052,
        UTTtoITS: a => a * 0.000052,
        UTTtoITT: a => a * 0.000052
    };


setInterval(fetchingVolumeOps, 2500);
console.log("control here")
function fetchingVolumeOps() {
    var fromOp= fromm.options[fromm.selectedIndex].text;
    var tooOp= too.options[too.selectedIndex].text;
    console.log(fromOp, tooOp);

    setTimeout ( calcVolume(fromOp,tooOp), 2000);
}

// calculating it awayyyy
function calcVolume (fromOp, tooOp) 
{

        if(fromOp === tooOp) {
        //collecting and parsing a value into float  
        console.log(parseFloat(this.userValFrom.value));
        let uvf = parseFloat(this.userValFrom.value);

        userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second

            }

        else{

            if(fromOp === "Choose the unit you want to convert from." || tooOp === "Choose the unit you want to be converted into.") { 
                // printing out it that select properly
            }
            else {
        //getting key here to access formulation maamu
        let sub =fromOp.split(' ').map(word => word.charAt(0)).join('');
        let sub1 =tooOp.split(' ').map(word => word.charAt(0)).join('');

        console.log(sub,sub1);

        var callingItAwayKey = sub + "to" + sub1;
        console.log(callingItAwayKey);
    
    
            //getting value of from here maamu 
        console.log(parseFloat(this.userValFrom.value));
        var uvf = parseFloat(this.userValFrom.value);    
        
        
    let finalAns =formulationvolume[callingItAwayKey]; //formulation lidho dictionary maathi
    let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
    console.log(temp); // printing it aise hi 
    userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second


        }
    }
    
}

};


function weightRunKaro ( ) {

     //clearing previos options if any
     while (fromm.options.length > 1) {
        fromm.remove(1);
        too.remove(1);
    }
    //adding options of weight (fromm and too both)
    const options = [
        { value: '1', text: 'Kilogram' },
        { value: '2', text: 'Gram' },
        { value: '3', text: 'Milligram' },
        { value: '4', text: 'Metric Ton' }, 
        { value: '5', text: 'Long Ton' },
        { value: '6', text: 'Short Ton' },
        { value: '7', text: 'Pound' },
        { value: '8', text: 'Ounce' },
        { value: '9', text: 'Carrat' },
        { value: '10', text: 'Atomic Mass Unit' },
    ];

       // adding options in fromm

       options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        fromm.appendChild(opt);
    });
    // adding options in too
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        too.appendChild(opt);
    });

    const formulationweight = {
        // Kilogram conversions
        KtoG: (a) => a * 1000,             
        KtoM: (a) => a * 1e6,          
        KtoMT: (a) => a / 1000,          
        KtoLT: (a) => a / 1016.04691,      
        KtoST: (a) => a / 907.18474,      
        KtoP: (a) => a * 2.20462,            
        KtoO: (a) => a * 35.274,         
        KtoC: (a) => a * 5000,           
        KtoAMU: (a) => a * 6.022e26,         
    
        // G conversions
        GtoK: (a) => a / 1000,             
        GtoM: (a) => a * 1000,      
        GtoMT: (a) => a / 1e6,     
        GtoLT: (a) => a / 1.016e6,
        GtoST: (a) => a / 907185,    
        GtoP: (a) => a / 453.59237,     
        GtoO: (a) => a / 28.34952,    
        GtoC: (a) => a * 5,          
        GtoAMU: (a) => a * 6.022e23,       
    
        // M conversionST
        MtoK: (a) => a / 1e6,          
        MtoG: (a) => a / 1000,       
        MtoMT: (a) => a / 1e9, 
        MtoLT: (a) => a / 1.016e9, 
        MtoST: (a) => a / 9.072e8,
        MtoP: (a) => a / 453592.37, 
        MtoO: (a) => a / 28349.52, 
        MtoC: (a) => a / 200,      
        MtoAMU: (a) => a * 6.022e20,   
    
        // MTtric Ton conversions
        MTtoK: (a) => a * 1000,        
        MTtoG: (a) => a * 1e6,       
        MTtoM: (a) => a * 1e9,  
        MTtoLT: (a) => a / 1.01605,
        MTtoST: (a) => a * 1.10231, 
        MTtoP: (a) => a * 2204.62,  
        MTtoO: (a) => a * 35274,    
        MTtoC: (a) => a * 5e6,           
        MTtoAMU: (a) => a * 6.022e29,   
        // LTong Ton conversions
        LTtoK: (a) => a * 1016.04691,     
        LTtoG: (a) => a * 1.016e6,      
        LTtoM: (a) => a * 1.016e9, 
        LTtoMT: (a) => a * 1.01605, 
        LTtoST: (a) => a * 1.12,    
        LTtoP: (a) => a * 2240,        
        LTtoO: (a) => a * 35840,      
        LTtoC: (a) => a * 5.08e6,     
        LTtoAMU: (a) => a * 6.12e29,       
    
        // Short Ton conversions
        STtoK: (a) => a * 907.18474,     
        STtoG: (a) => a * 907185,      
        STtoM: (a) => a * 9.072e8,
        STtoMT: (a) => a / 1.10231,
        STtoLT: (a) => a / 1.12,    
        STtoP: (a) => a * 2000,       
        STtoO: (a) => a * 32000,      
        STtoC: (a) => a * 4.536e6,   
        STtoAMU: (a) => a * 5.46e29,      
    
        // P conversions
        PtoK: (a) => a / 2.20462,           
        PtoG: (a) => a * 453.59237,      
        PtoM: (a) => a * 453592.37,  
        PtoMT: (a) => a / 2204.62,    
        PtoLT: (a) => a / 2240,         
        PtoST: (a) => a / 2000,        
        PtoO: (a) => a * 16,             
        PtoC: (a) => a * 2267.96,       
        PtoAMU: (a) => a * 2.73e26,          
    
        // O conversions
        OtoK: (a) => a / 35.274,            
        OtoG: (a) => a * 28.34952,        
        OtoM: (a) => a * 28349.52,   
        OtoMT: (a) => a / 35274,      
        OtoLT: (a) => a / 35840,        
        OtoST: (a) => a / 32000,       
        OtoP: (a) => a / 16,             
        OtoC: (a) => a * 141.7475,     
        OtoAMU: (a) => a * 1.71e25,          
    
        // C conversions
        CtoK: (a) => a / 5000,             
        CtoG: (a) => a / 5,              
        CtoM: (a) => a * 200,       
        CtoMT: (a) => a / 5e6,        
        CtoLT: (a) => a / 5.08e6,       
        CtoST: (a) => a / 4.536e6,     
        CtoP: (a) => a / 2267.96,       
        CtoO: (a) => a / 141.7475,      
        CtoAMU: (a) => a * 1.2e23,            
    
        // Atomic Mass Unit conversions
        AMUtoK: (a) => a / 6.022e26,            
        AMUtoG: (a) => a / 6.022e23,          
        AMUtoM: (a) => a / 6.022e20,   
        AMUtoMT: (a) => a / 6.022e29,    
        AMUtoLT: (a) => a / 6.12e29,       
        AMUtoST: (a) => a / 5.46e29,       
        AMUtoP: (a) => a / 2.73e26,          
        AMUtoO: (a) => a / 1.71e25,           
        AMUtoC: (a) => a / 1.2e23,         
    };
    
    setInterval(fetchingWeightOps, 2500);
    console.log("control here")
    function fetchingWeightOps() {
        var fromOp= fromm.options[fromm.selectedIndex].text;
        var tooOp= too.options[too.selectedIndex].text;
        console.log(fromOp, tooOp);

        setTimeout ( calcWeight(fromOp,tooOp), 2000);
    }

    // calculating it awayyyy
    function calcWeight (fromOp, tooOp) 
    {

            if(fromOp === tooOp) {
            //collecting and parsing a value into float  
            console.log(parseFloat(this.userValFrom.value));
            let uvf = parseFloat(this.userValFrom.value);

            userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second

                }

            else{

                let sub =fromOp.split(' ').map(word => word.charAt(0)).join('');
                let sub1 =tooOp.split(' ').map(word => word.charAt(0)).join('');
        
                console.log(sub,sub1);
        
                var callingItAwayKey = sub + "to" + sub1;
                console.log(callingItAwayKey);

            //getting value of from here maamu 
            console.log(parseFloat(this.userValFrom.value));
            var uvf = parseFloat(this.userValFrom.value);    
            
            
        let finalAns =formulationweight[callingItAwayKey]; //formulation lidho dictionary maathi
        let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
        console.log(temp); // printing it aise hi 
        userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second


            
        }
        
    }


};
function timeRunKaro ( ) {

     //clearing previos options if any
     while (fromm.options.length > 1) {
        fromm.remove(1);
        too.remove(1);
    }

        //adding options of time (fromm and too both)
        const options = [
            { value: '1', text: 'Second' },
            { value: '2', text: 'Millisecond' },
            { value: '3', text: 'Microsecond' },  
            { value: '4', text: 'Nanosecond' },
            { value: '5', text: 'Picosecond' },
            { value: '6', text: 'Minute' },
            { value: '7', text: 'Hour' },
            { value: '8', text: 'Day' },
            { value: '9', text: 'Week' },
            { value: '10', text: 'Month' }, 
            { value: '11', text: 'Year' },

        ];


           // adding options in fromm

           options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.text = option.text;
            fromm.appendChild(opt);
        });
        // adding options in too
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.text = option.text;
            too.appendChild(opt);
        });

        const formulationtime = {
            SectoMil: (a) => a * 1000,
            SectoMic: (a) => a * 1e6,
            SectoNan: (a) => a * 1e9,
            SectoPic: (a) => a * 1e12,
            SectoMin: (a) => a / 60,
            SectoHou: (a) => a / 3600,
            SectoDay: (a) => a / 86400,
            SectoWee: (a) => a / 604800,
            SectoMon: (a) => a / 2.628e6,
            SectoYea: (a) => a / 3.154e7,
        
            MiltoSec: (a) => a / 1000,
            MiltoMic: (a) => a * 1000,
            MiltoNan: (a) => a * 1e6,
            MiltoPic: (a) => a * 1e9,
            MiltoMin: (a) => a / 60000,
            MiltoHou: (a) => a / 3.6e6,
            MiltoDay: (a) => a / 8.64e7,
            MiltoWee: (a) => a / 6.048e8,
            MiltoMon: (a) => a / 2.628e9,
            MiltoYea: (a) => a / 3.154e10,
        
            MictoSec: (a) => a / 1e6,
            MictoMil: (a) => a / 1000,
            MictoNan: (a) => a * 1000,
            MictoPic: (a) => a * 1e6,
            MictoMin: (a) => a / 6e7,
            MictoHou: (a) => a / 3.6e9,
            MictoDay: (a) => a / 8.64e10,
            MictoWee: (a) => a / 6.048e11,
            MictoMon: (a) => a / 2.628e12,
            MictoYea: (a) => a / 3.154e13,
        
            NantoSec: (a) => a / 1e9,
            NantoMil: (a) => a / 1e6,
            NantoMic: (a) => a / 1000,
            NantoPic: (a) => a * 1000,
            NantoMin: (a) => a / 6e10,
            NantoHou: (a) => a / 3.6e12,
            NantoDay: (a) => a / 8.64e13,
            NantoWee: (a) => a / 6.048e14,
            NantoMon: (a) => a / 2.628e15,
            NantoYea: (a) => a / 3.154e16,
        
            PictoSec: (a) => a / 1e12,
            PictoMil: (a) => a / 1e9,
            PictoMic: (a) => a / 1e6,
            PictoNan: (a) => a / 1000,
            PictoMin: (a) => a / 6e13,
            PictoHou: (a) => a / 3.6e15,
            PictoDay: (a) => a / 8.64e16,
            PictoWee: (a) => a / 6.048e17,
            PictoMon: (a) => a / 2.628e18,
            PictoYea: (a) => a / 3.154e19,
        
            MintoSec: (a) => a * 60,
            MintoMil: (a) => a * 60000,
            MintoMic: (a) => a * 6e7,
            MintoNan: (a) => a * 6e10,
            MintoPic: (a) => a * 6e13,
            MintoHou: (a) => a / 60,
            MintoDay: (a) => a / 1440,
            MintoWee: (a) => a / 10080,
            MintoMon: (a) => a / 43800,
            MintoYea: (a) => a / 525600,
        
            HoutoSec: (a) => a * 3600,
            HoutoMil: (a) => a * 3.6e6,
            HoutoMic: (a) => a * 3.6e9,
            HoutoNan: (a) => a * 3.6e12,
            HoutoPic: (a) => a * 3.6e15,
            HoutoMin: (a) => a * 60,
            HoutoDay: (a) => a / 24,
            HoutoWee: (a) => a / 168,
            HoutoMon: (a) => a / 730,
            HoutoYea: (a) => a / 8760,
        
            DaytoSec: (a) => a * 86400,
            DaytoMil: (a) => a * 8.64e7,
            DaytoMic: (a) => a * 8.64e10,
            DaytoNan: (a) => a * 8.64e13,
            DaytoPic: (a) => a * 8.64e16,
            DaytoMin: (a) => a * 1440,
            DaytoHou: (a) => a * 24,
            DaytoWee: (a) => a / 7,
            DaytoMon: (a) => a / 30.417,
            DaytoYea: (a) => a / 365,
        
            WeetoSec: (a) => a * 604800,
            WeetoMil: (a) => a * 6.048e8,
            WeetoMic: (a) => a * 6.048e11,
            WeetoNan: (a) => a * 6.048e14,
            WeetoPic: (a) => a * 6.048e17,
            WeetoMin: (a) => a * 10080,
            WeetoHou: (a) => a * 168,
            WeetoDay: (a) => a * 7,
            WeetoMon: (a) => a / 4.345,
            WeetoYea: (a) => a / 52.143,
        
            MontoSec: (a) => a * 2.628e6,
            MontoMil: (a) => a * 2.628e9,
            MontoMic: (a) => a * 2.628e12,
            MontoNan: (a) => a * 2.628e15,
            MontoPic: (a) => a * 2.628e18,
            MontoMin: (a) => a * 43800,
            MontoHou: (a) => a * 730,
            MontoDay: (a) => a * 30.417,
            MontoWee: (a) => a * 4.345,
            MontoYea: (a) => a / 12,
        
            YeatoSec: (a) => a * 3.154e7,
            YeatoMil: (a) => a * 3.154e10,
            YeatoMic: (a) => a * 3.154e13,
            YeatoNan: (a) => a * 3.154e16,
            YeatoPic: (a) => a * 3.154e19,
            YeatoMin: (a) => a * 525600,
            YeatoHou: (a) => a * 8760,
            YeatoDay: (a) => a * 365,
            YeatoWee: (a) => a * 52.143,
            YeatoMon: (a) => a * 12,
        };

        setInterval(fetchingTimeOps, 2500);
        console.log("control here")
        function fetchingTimeOps() {
            var fromOp= fromm.options[fromm.selectedIndex].text;
            var tooOp= too.options[too.selectedIndex].text;
            console.log(fromOp, tooOp);

            setTimeout ( calcTime(fromOp,tooOp), 2000);
        }

        // calculating it awayyyy
        function calcTime (fromOp, tooOp) 
        {

                if(fromOp === tooOp) {
                //collecting and parsing a value into float  
                console.log(parseFloat(this.userValFrom.value));
                let uvf = parseFloat(this.userValFrom.value);

                userValTo.innerHTML = "<h3 class=\"display-6 \"> " + uvf + " </h3>"; //print karyu same value after a glance of second

                    }

                else{

                    if(fromOp === "Choose the unit you want to convert from." || tooOp === "Choose the unit you want to be converted into.") { 
                        // printing out it that select properly
                    }
                    else {
                //getting key here to access formulation maamu
                           
                                let sub = fromOp.substring(0,3);
                                let sub1 = tooOp.substring(0,3);

                                console.log(sub,sub1);

                                
                                var callingItAwayKey = sub + "to" + sub1;
                                console.log(callingItAwayKey);
                            
            
                    //getting value of from here maamu 
                console.log(parseFloat(this.userValFrom.value));
                var uvf = parseFloat(this.userValFrom.value);    
                
                
            let finalAns =formulationtime[callingItAwayKey]; //formulation lidho dictionary maathi
            let temp = finalAns(uvf); //temporary function ma value pass kari a ni and ans malyo temp ma
            console.log(temp); // printing it aise hi 
            userValTo.innerHTML = "<h3 class=\"display-6\"> " + temp + " </h3>"; //print karyu same value after a glance of second


                }
            }
            
        }




        
        
};