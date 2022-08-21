var outcome = [];
document.querySelector("#search").addEventListener("click", async(e) => {
    e.preventDefault();
    var sign = document.getElementById("sign").value
    var day = document.getElementById("day").value

    const fetchUrl = await fetch (`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,{method: 'POST'})
    const data = await fetchUrl.json()
    const response = Object.entries(data).forEach(ele =>{
        let li = document.createElement("li")
        
        li.innerText = (`${ele[0]} : ${ele[1]}`)
        document.getElementById("result").append(li)
    })
});


