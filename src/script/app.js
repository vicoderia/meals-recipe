const content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-recipe");
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            getMeal(searchInput.value)
        }
    })
});


function getMeal(mealName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    xhr.onload = function handleSuccess() {
        const data = JSON.parse(this.responseText);
        showMeal(data)
    };
    xhr.onerror = function handleError() {
        console.log('Ups, Failed to load data :(')
    };
    xhr.send()
}

function showMeal(data) {
    let responseText = `<div class="row">`;

    if (data.meals !== null) {
        data.meals.forEach(function (item) {
            responseText += `<div class="col-md"> <div class="card" style="width: 18rem;">
        <img src="${item.strMealThumb}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${item.strMeal}</h5>
            <p class="card-text">This Recipe is from ${item.strArea}</p>
                <a href="${item.strSource}" class="btn">See Full Recipe</a>
         </div>
        </div></div>`
        });
    } else {
        responseText += `<p class="center">Data Not Found :(</p>`
    }

    responseText += `</div>`;
    content.innerHTML = responseText;
}