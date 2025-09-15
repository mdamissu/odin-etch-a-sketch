const generate = (num = 16) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    for(let i=0; i<num; i++){
    let row = document.createElement("div");
    row.className = "row";
    row.style.width = "50%";
    for(let j=0; j<num; j++){
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        let pad = 50/num;
        newDiv.style.padding = `${pad}%`;
        row.appendChild(newDiv);
    }

    container.appendChild(row);
    }
    const clearBtn = document.querySelector("#clearAll");
    clearBtn.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.classList.remove("hovered"); 
    });
});

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("hovered");
    });
});
}
generate();

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
  let numBox = prompt("How many boxes per row in the new grid?");
  numBox = parseInt(numBox);

  if (!isNaN(numBox) && numBox > 0) {
    generate(numBox);
  } else {
    alert("Please enter a valid number!");
  }
});
