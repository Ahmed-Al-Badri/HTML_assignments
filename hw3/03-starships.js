let url = "https://swapi.dev/api/starships/";
let starships = [];
const fetchData = (url) => {
  // REtrieve the data from the API
  starships = [];
  fetch(url)
    .then((Response) => {
      console.log(Response);
      return Response.json();
    })
    .then((results) => {
      for (data in results.results) {
        starships.push(results.results[data]);
      }
    });
};

fetchData(url);
/*
const starships = fetchData(url).then((data) => {
  console.log(data.results[1]);
  return data.results[1];
});
*/

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.className = "starships";
  //set class done for main.

  //set for main_info
  let stat = document.createElement("section");
  stat.className = "main_info";
  //
  let infos = document.createElement("h1");
  infos.textContent = spaceship.name;
  stat.appendChild(infos);
  //Set for credits
  infos = document.createElement("h1");
  infos.textContent = spaceship.cost_in_credits + " credits";
  stat.appendChild(infos);

  //
  //add to container
  container.appendChild(stat);
  //set for info
  //infos.removeAttribute("main_info");
  infos = document.createElement("p");
  //infos.setAttribute = "main_info";
  infos.textContent = spaceship.manufacturer;
  container.appendChild(infos);
  //create stat section

  stat = document.createElement("section");
  stat.className = "info";
  let inner_info = document.createElement("section");
  inner_info.className = "spec";
  //
  infos = document.createElement("h1");
  infos.textContent = spaceship.max_atmosphering_speed;
  inner_info.appendChild(infos);
  infos = document.createElement("p");
  infos.textContent = "Max Atmosphering Speed";
  inner_info.appendChild(infos);
  stat.appendChild(inner_info);
  //
  inner_info = document.createElement("section");
  inner_info.className = "spec";
  infos = document.createElement("h1");
  infos.textContent = spaceship.cargo_capacity;
  inner_info.appendChild(infos);
  infos = document.createElement("p");
  infos.textContent = "Cargo Capacity";
  inner_info.appendChild(infos);
  stat.appendChild(inner_info);
  //
  container.appendChild(stat);
  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let founded = [];
  for (data in input) {
    if (10 > input[data].passengers && 1 < input[data].passengers) {
      founded.push(input[data]);
    }
  }
  return founded;
};

const reduceStarships = (input) => {
  let ship = input;

  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 0;

  for (data in ship) {
    //console.log(ship[data].cost_in_credits);
    if (ship[data].cost_in_credits != "unknown")
      totalCost += Number(ship[data].cost_in_credits);
  }

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
