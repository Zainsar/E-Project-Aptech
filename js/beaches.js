(
    async function () {
        await fetch("json/beachapi.json").then(response => response.json()).then(beachdata => {
            console.log(beachdata)
            let searchField = document.getElementById("searchbar")
            let btn = document.getElementById("btn")
            let rows = document.getElementById("feild")
            let body = document.getElementById("body1")

            function display(result) {
                rows.innerHTML = ""
                body.innerHTML = ""
                result.forEach(value => {
                    rows.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <h1 class="card-title" style="text-transform: capitalize;font-family: playfair display;font-style: italic;margin-bottom: 20px !important;">${value.coast}</h1>
                    <div class="card" style="overflow: scroll; box-sizing: border-box; height: 100%;">
                        <img src="${value.images}" class="card-img-top" alt="..." style="height: 200px;">
                        <div class="card-body">
                          <h5 class="card-title" style="font-family: playfair display;">${value.title}</h5>
                          <p class="card-title" style="font-family: playfair display;">${value.area}</p>
                          <hr style="border: 2px solid #D6BCB5 !important;margin-top: -10px !important;">
                          ${value.description}
                          <br>
                          <a href="#" class="btn btn-primary">See More</a>
                        </div>
                      </div>
                </div>
                    `
                });
            }

            function search() {
                let query = searchField.value;
                let result = beachdata.filter(function (beach) {
                    return (
                        beach.title.toLowerCase().includes(query) ||
                        beach.coast.toLowerCase().includes(query) ||
                        beach.area.toLowerCase().includes(query)
                    )
                })
                display(result)
            }

            btn.addEventListener("click", search)

        })
    }
)()