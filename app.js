const section = document.querySelector(".section");

async function getRecipe() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=cake";
  const response = await fetch(url);
  const data = await response.json();
  showfood(data.meals);
  console.log(data.meals);
}

function showfood(food) {
  food.forEach((item) => {
    const src = item.strMealThumb;
    const box = document.createElement("div");
    box.classList.add("recipe");
    box.innerHTML = `
    <div class="imgCon">
        <img src="${src}" alt="" />
    </div>
    <div class="disc">
        <h3>${item.strMeal}</h3>
    </div>
    <div class="tutorial">
      <button class="getRecipe"> recipe </button>
    </div>
    `;
    const button = box.querySelector(".getRecipe");

    button.addEventListener("click", (e) => {
      e.preventDefault;

      const con = document.createElement("div");
      con.classList.add("recipeCon");
      box.appendChild(con);

      const h2 = document.createElement("h2");
      h2.innerHTML = `recipe to make ${item.strMeal}`;
      con.appendChild(h2);

      const h4 = document.createElement("h4");
      h4.innerHTML = `ingrideant`;
      con.appendChild(h4);

      const ul = document.createElement("ul");
      con.appendChild(ul);

      for (let i = 1; i < 20; i++) {
        const ingrideantAll = item[`strMeasure${i}`];
        const strIngredient = item[`strIngredient${i}`];
        const li = document.createElement("li");
        li.innerHTML = `${ingrideantAll}  ${strIngredient}`;
        ul.appendChild(li);
      }
    });

    section.appendChild(box);
  });
}

getRecipe();
