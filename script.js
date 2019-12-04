window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            //sort the Json by the total hours in space
            json.sort(function(a, b){
                return a.hoursInSpace - b.hoursInSpace;
            });
            //get the container so we can add new html to it.
            const container = document.getElementById("container");
            
            //get the astronautCount so we can put the total number in it.
            const count = document.getElementById("astronautCount")
            count.innerHTML = `Total Astronauts: ${json.length}`

            //loop through the json response and add the astronauts to the innerHTML
            for(let i = 0; i < json.length; i++){
                //create a varible to assign the different color for active astronauts
                let classStyle = "";
                if(json[i].active){
                    classStyle = "active";
                }
                else{
                    classStyle = "notActive";
                }
                //start assigning the dynamic html to the container
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                   <h3>${json[i].firstName} ${json[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${json[i].hoursInSpace}</li>
                      <li class="${classStyle}">Active: ${json[i].active}</li>
                      <li>Skills: ${json[i].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
             </div>`;
            };
            
        });
    });
});