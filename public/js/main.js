let link = "https://jsonplaceholder.typicode.com/photos";

function getMyData() {
  let request = new XMLHttpRequest();
  let link = "https://jsonplaceholder.typicode.com/photos";
  request.open("GET", link, true);
  request.send();
  request.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let results = this.responseText;
      let convertTxt = JSON.parse(results);
      // console.log(convertTxt);
      let result = "";
      for (let i of convertTxt) {
        var ress = `
                        <div class="ccc bg-secondary col-md-4">
                            <h1>${i.title}</h1>
                            <h3>${i.id}</h3>
                            <img src=${i.url}>
                        </div>

                    `;
        result += ress;
      }
      document.querySelector(".fill").innerHTML += result;
    }
  };
}

// getMyData();

// another way to fetch response

function data() {
  fetch(link)
    .then((e) => {
      return e.json();
    })
    .then((data) => {
      let result = "";
      for (let i of data) {
        var ress = `
                        <div class="ccc bg-secondary col-md-4">
                            <h1>${i.title}</h1>
                            <h3>${i.id}</h3>
                            <img src=${i.url}>
                        </div>

                    `;
        result += ress;
      }
      document.querySelector(".fill").innerHTML += result;
    });
}

// data()

async function bestWay() {
  let result = await fetch(link);
  let data = await result.json();
  let res = "";
  for (let i of data) {
    var ress = `
                        <div class="ccc bg-secondary col-md-4">
                            <h1>${i.title}</h1>
                            <h3>${i.id}</h3>
                            <img src=${i.url}>
                        </div>

                    `;
    res += ress;
  }
  document.querySelector(".fill").innerHTML += res;
}
// bestWay()

async function dummy() {
  let link = await fetch("https://dummyjson.com/products");
  let data = await link.json();
  let access = data.products;
  // console.log(data.products);
  
  let res = "";
  for (let i of access) {
    console.log(i.images);
    
    var ress = `
                        <div class=" col-md-4 ">
                            <img class="w-100" src="${i.images[0]}">
                            <h3 class="text-center">${i.title}</h3>
                            <h3 class="text-center">${i.id}</h3>
                        </div>

                    `;
    res += ress;
  }
  document.querySelector(".fill").innerHTML += res;
}
dummy();
