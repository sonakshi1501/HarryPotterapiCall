// hide loader
//document.getElementById('loader').style.display="none" --- to hide the loader
document.getElementById('loader').style.display = "block" // for visibility
document.getElementById('myData').style.display = "none"

fetch("http://hp-api.herokuapp.com/api/characters").then(res => res.json()).then(data => {
    console.log(data)
    printData(data)
}).catch(err => console.log(err))


function printData(data) {

    for (let i = 0; i < data.length; i++) {
        document.getElementById('data').innerHTML += `
        <div class="col-md-3">
                <div class="card mycard">
                    <img src="${data[i].image}" class="card-img-top myimage" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center>${data[i].actor}</h5>
                      </div>
                  </div>
            </div>
        `
    }
    document.getElementById('loader').style.display = "none" // for hiding
    document.getElementById('myData').style.display = "block"
}