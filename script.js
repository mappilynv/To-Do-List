//Show a button to add a to-do. When the button is clicked:
//The text from the input box is used to add a list item to the bottom of the list

const newTodoListItems = document.getElementById('newTodoListItems');
const newList = document.getElementById('myUlList');

function addNewTodo() {
    if(newTodoListItems.value != 0){
        let newTodo = document.createElement('li');
        newTodo.innerText = newTodoListItems.value;
        document.getElementById('myUlList').appendChild(newTodo);
        //newList.appendChild(newTodo);/*.classname += 'myUlList';*/
        //Clear the text out
        document.getElementById('newTodoListItems').value = "";
    } else {
        alert ('OH NO');
    }
}

//When the user clicks on a list item, it is removed
document.querySelector('#myUlList').addEventListener('click', (e) => {
    (e.target.style.display = "none")
    //const clickList = e.target;
    //clickList.removeChild(e.target);
    //document.getElementById('myUlList').removeChild(clickList);
})

