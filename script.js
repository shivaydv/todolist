const list = document.getElementById("list");
const btn = document.getElementById("btn");
let item = document.getElementById("item");

// ---------------------- calling additem function on putting value -------------
item.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        additem()
    }
})
btn.addEventListener("click", additem);

// ****************************************************************************

const tasks = localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")): [];

showTasks()

// -------------------------display all tasks in the array ------------ 
function showTasks(){
    tasks.forEach((value)=>{
        let li = document.createElement("li")
        li.innerHTML = `<span>${value}</span><button class="del" onclick="deleteitem(this)">Delete</button>`
        list.appendChild(li)
        item.value = ""
    })
}

// ---------------------------------add item to the array ------------------------
function additem() {
    if (item.value != "") {
        removeAll()    //remove all li element but not delete tasks in array
        tasks.push(item.value) // add element in the array
        localStorage.setItem("items",JSON.stringify(tasks)) // add array in local storage
        showTasks() // Show the updated task list by creating li elements
    }
    else {
        alert("Enter Something To Add")
    }  
}

// ----------- only remove the li elements but tasks array is not affected ----------
function removeAll(){
        tasks.forEach(()=>{
            const listItem = document.querySelector("li")
            listItem.remove();
        }) 
}

function deleteitem(i) {
    const deletedItem = i.previousElementSibling.innerHTML;
    const index= tasks.indexOf(deletedItem);
    tasks.splice(index,1)
    localStorage.setItem("items",JSON.stringify(tasks))
    i.parentElement.remove()
}