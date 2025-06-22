

const trusted=document.querySelector(".result-page");

async function render_data()
{
     try{
        const random=await axios.get(`http://localhost:5001/api/random`);
    const data=random.data;


    trusted.innerHTML=`
        <div class="results-card">
            <img src="${data[0].picture}" alt="User Image" class="results-img" />
            <div class="results-data">
            <h2 class="results-name">${data[0].firstName} ${data[0].lastName}</h2>
            <h3 class="results-email">${data[0].email}</h3>
            <h3 class="results-age">Age: ${data[0].age}</h3>
            <h3 class="results-city">City: ${data[0].city}</h3>
        </div>
        </div>

        <div class="results-card">
        <img src="${data[1].picture}" alt="User Image" class="results-img" />
        <div class="results-data">
            <h2 class="results-name">${data[1].firstName} ${data[1].lastName}</h2>
            <h3 class="results-email">${data[1].email}</h3>
            <h3 class="results-age">Age: ${data[1].age}</h3>
            <h3 class="results-city">City: ${data[1].city}</h3>
        </div>
        </div>

        <div class="results-card">
        <img src="${data[2].picture}" alt="User Image" class="results-img" />
        <div class="results-data">
            <h2 class="results-name">${data[2].firstName} ${data[2].lastName}</h2>
            <h3 class="results-email">${data[2].email}</h3>
            <h3 class="results-age">Age: ${data[2].age}</h3>
            <h3 class="results-city">City: ${data[2].city}</h3>
        </div>
        </div>

        <div class="results-card">
        <img src="${data[4].picture}" alt="User Image" class="results-img" />
        <div class="results-data">
            <h2 class="results-name">${data[4].firstName} ${data[4].lastName}</h2>
            <h3 class="results-email">${data[4].email}</h3>
            <h3 class="results-age">Age: ${data[4].age}</h3>
            <h3 class="results-city">City: ${data[4].city}</h3>
        </div>
    </div>
    `
    }
    catch{
        console.log("IT'S NOT YOU ITS US!!!");
    }
    
}


window.addEventListener("DOMContentLoaded",async ()=>
{
   render_data();
})

document.getElementById("refresh-button").addEventListener("click",()=>
{
    render_data();
})