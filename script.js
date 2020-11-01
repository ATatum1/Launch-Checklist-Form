// Write your JavaScript code here!

window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then( function(json) {
            const missionTarget = document.getElementById("missionTarget");
            let index = 3;
            
                missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance}</li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                <img src="${json[index].image}">
            `;

            
        });//end response line 
});// end fetch line 
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotnameInput = document.querySelector("input[name=pilotName]");
        let copilotnameInput = document.querySelector("input[name=copilotName]");
        let fuellevelInput = document.querySelector("input[name=fuelLevel]");
        let cargomassInput = document.querySelector("input[name=cargoMass]");

        if(pilotnameInput.value ==="" || copilotnameInput.value ==="" ||fuellevelInput.value ==="" || cargomassInput.value === ""){
            alert("All Fields are Required!");
        }   
        if(!isNaN(pilotnameInput.value) || !isNaN(copilotnameInput.value) ){
            alert("Name must only contain letters!");
       // }else if(!isNAN(pilotnameInput.value)){
          //  alert("Name must only contain letters!");

        //}else if(!isNAN(copilotnameInput.value)){
          //  alert("Name must only contain letters!");

        }else if(isNaN(fuellevelInput.value)){
            alert("Fuel Level must be a number!");
           

        } else if(isNaN(cargomassInput.value)){
            alert("Cargo Mass must be a number!");
            

        } else if(fuellevelInput.value<10000 && cargomassInput.value>10000) {
            let faulty = document.getElementById("faultyItems");
            faulty.style.visibility = "visible";
            document. getElementById("pilotStatus").innerHTML=`Pilot ${pilotnameInput.value} Ready`;
            document. getElementById("copilotStatus").innerHTML=`Co-pilot ${copilotnameInput.value} Ready`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            
        
        }else if(fuellevelInput.value<10000){ //10,000
            let faulty = document.getElementById("faultyItems");
            faulty.style.visibility = "visible";
            document. getElementById("pilotStatus").innerHTML=`Pilot ${pilotnameInput.value} Ready`;
            document. getElementById("copilotStatus").innerHTML=`Co-pilot ${copilotnameInput.value} Ready`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
             

        } else if(cargomassInput.value>10000){//10,000
            let faulty = document.getElementById("faultyItems");
            faulty.style.visibility = "visible";
            document. getElementById("pilotStatus").innerHTML=`Pilot ${pilotnameInput.value} Ready`;
            document. getElementById("copilotStatus").innerHTML=`Co-pilot ${copilotnameInput.value} Ready`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
             
           
        } else{
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "green";
               
        }
       
        


    });//end form
    
    
})// end load

/*function fuelLevel(fuellevelInput){
    if(fuellevelInput<10000){
        let level = document.getElementById("faultyItems");
        level.setAttribute("visible", "");
    }
}
    
*/
 




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
