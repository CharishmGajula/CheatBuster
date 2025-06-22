const result=document.querySelector(".results-page");

const displayError = (message) => {
    result.innerHTML = `<div class="trust-message><p>${message}</p></div>`;
}

const displayProfile=(data)=>
{
     result.innerHTML=`
     <h1 class="results-title">Caught Red-Handed 💔</h1>
    <p class="sub-message">But don’t worry, karma’s already on the way 😌</p>
    <div class="results-card">
      <img src="${data.picture}" alt="User Image" class="results-img" />
      <div class="results-data">
        <h2 class="results-name">${data.firstName} ${data.lastName}</h2>
        <h3 class="results-email">${data.email}</h3>
        <h3 class="results-age">Age: ${data.age}</h3>
        <h3 class="results-city">City: ${data.city}</h3>
      </div>
      <button class="find-btn">Find Someone Who Deserves You ❤️</button>
    </div>
     `;

     const findButton = document.querySelector(".find-btn");
  findButton.addEventListener("click", () => {
    // Navigate to another page
    window.location.href = "./trust.html"; // change to your actual page path
  });
}


const displaySafePage=()=>
{
    result.innerHTML=`
    <div class="trust-message">
        <h1>Turns Out... They're Loyal 😇</h1>
        <p>Plot twist, huh? 🤯 We double-checked. No shady profiles, no hidden accounts. Just pure loyalty.</p>
        <p>But hey... if your gut says *“something's fishy”*, maybe it's just hunger 🐟</p>
        <p>Still not vibing? It's totally okay.  
            Let's find someone who makes you feel fireworks instead of doubt. 🎆</p>
        <button class="find-btn">Meet Some Trustworthy Matches 💖</button>
    </div>
    `;

    const findButton = document.querySelector(".find-btn");
  findButton.addEventListener("click", () => {
    // Navigate to another page
    window.location.href = "./trust.html"; // change to your actual page path
  });
}
window.addEventListener("DOMContentLoaded",async ()=>
{
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    console.log(name);
    const email = params.get("email");
    console.log(email);

    const resultDiv=document.querySelector(".results-page");
    try{
        const getData=await axios.get(`http://localhost:5001/api/search?name=${name}&email=${email}`);
        console.log(getData);
        displayProfile(getData.data);
    }
    catch(err){
        if(err.response && err.response.status==404)  
        {
            displaySafePage();
        }
        else if(err.response && err.response.status==400)  
        {
            displayError(err.response.data.error);
        }
        else{
            displayError("IT'S NOT U ITS US!!!");
        }
    }
});

