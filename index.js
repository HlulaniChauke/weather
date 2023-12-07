document.addEventListener("DOMContentLoaded", function() {
    const search = document.getElementById("goButton");
   

    search.addEventListener("click", () => {
        const locationInput = document.getElementById("location");
        let place = locationInput.value;
        
        fetch('https://api.weatherapi.com/v1/current.json?key=6aa176aa398e4cbf85963130230712&q='+ place, {mode: 'cors'})
        .then(function(response) {
          return(response.json());
        })
        .then(function(response){
             const condition = document.getElementById("condition");
             const temp = document.getElementById("temp");
             const  theDate = document.getElementById("date");
             const theLocation = document.getElementById("place");

            theLocation.innerHTML = place;
            condition.innerHTML = response.current.condition.text;
            temp.innerHTML = response.current.temp_c +"°C";
            theDate.innerHTML = response.current.last_updated;
        });
    });
});