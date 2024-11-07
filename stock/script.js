var per = document.getElementById("personalstocks");
var all = document.getElementById("allstocks");

var stockElements = {};

// fetchData , every 2 sec
setInterval(fetchData, 2000);


// getting data and return in json var
async function getData() {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json; // here onwards
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchData() {
    var data = await getData(); // returned data 
    
    if (data && data.bpi) { 
// printing cards once
        if (Object.keys(stockElements).length === 0) {
            Object.values(data.bpi).forEach(element => {
                var stockElement = document.createElement('div');
                stockElement.innerHTML = `
                <div class="list-group gap-0 row-gap-3">
                    <div class="list-group-item list-group-item-action mt-4 border-start-0 border-top-0 border-end-0" aria-current="true">
                        <div class="d-flex w-80 justify-content-between">
                            <h5 class="mb-1">${data.chartName} - ${element.description}</h5>
                        </div>
                        <p class="mb-1" id="price-${element.code}">Price in ${element.code}: ${element.rate}</p>
                        <div class="d-flex justify-content-end">
                            <a href="#" data-code="${element.code}" class="add-link link link-underline-opacity link-underline-opacity-100-hover">add</a>
                        </div>
                    </div>
                </div>
                `;
                console.log(stockElement); // whole card
                console.log(stockElements); // only prices
                
                //adding cards to upper node
                all.appendChild(stockElement);

                // refernce to edit values afterwards
                stockElements[element.code] = stockElement.querySelector(`#price-${element.code}`);

                // add , eventlistner
                var addLink = stockElement.querySelector('.add-link'); 
                if (addLink) { 
                    addLink.addEventListener('click', function(event) {
                        event.preventDefault();
                        addToPer(data.chartName, element);
                    });
                }
            });
        } else {
            // updating the card with updated data
            Object.values(data.bpi).forEach(element => {
                var price = stockElements[element.code];
                if (price) {
                    price.textContent = `Price in ${element.code}: ${element.rate}`; 
                }
            });
        }
    }
}

function addToPer(chartName, element) {
    // checking if stock is added or not
    if (!per.querySelector(`[data-code="${element.code}"]`)) { //if not
        var perStock = document.createElement('div');
        perStock.innerHTML = `
          <div class="list-group gap-0 row-gap-3">
                    <div class="list-group-item list-group-item-action mt-4 border-start-0 border-top-0 border-end-0" aria-current="true">
            <div class="d-flex w-80 justify-content-between">
                <h5 class="mb-1">${chartName} - ${element.description}</h5>
            </div>
            <p class="mb-1">Price in ${element.code}: ${element.rate}</p>
            <div class="d-flex justify-content-end">
                <a href="#" class="remove-link link link-underline-opacity link-underline-opacity-100-hover" data-code="${element.code}">remove</a>
            </div>
                        </div>

                                    </div>

        `;

// adding to personal
        per.appendChild(perStock);

        // remove,  remove eventlistner
        var removeLink = perStock.querySelector('.remove-link');
        removeLink.addEventListener('click', function(event) {
            event.preventDefault();
            perStock.remove();
        });
    } else { //already exists
        alert(`Stock ${element.code} already added to personal stocks.`);
    }
}
