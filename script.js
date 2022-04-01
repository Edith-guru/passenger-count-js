// save-el paragrah, count-el h2 and store them in variables
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 //initalized with 0

//to add the count of people as they came in

function increment() {
    count += 1
    countEl.textContent = count
}

// save count entries

function save() {
    let save = (` ${count} - `);
    saveEl.textContent += (save);
    countEl.textContent = 0
    count = 0

}


