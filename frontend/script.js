document.getElementById("page1submit").addEventListener("click",async ()=>{
    event.preventDefault();
    const btn = document.getElementById("page1submit");
    const name=document.getElementById("name").value;
    const email = document.getElementById("search-input").value;
    if(name=="")
    {
        alert("Please Enter the name");
    }
    else if(name!="" && email=="")
    {
        alert("please enter the email id")
    }

    if(name!="" && email!="")
    {
        btn.textContent = "Searching...";
        btn.disabled = true;
        window.location.href = `results.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    }
});

