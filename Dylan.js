// This is Joe's change
let list = [];

let toDo = prompt('What would you like to do?');

while(toDo !==  'quit'){

if(toDo === 'new'){

let newToDo = prompt("Enter new to do");

list.push(newToDo);

console.log(list.length);

}

if(toDo === 'list'){
    for(let i = 0; i < list.length; i++){

        console.log(`Number ${i} is ${list[i]}`);
    }
}

if(toDo === 'delete'){
    let index = parseInt(prompt("what number would you like to delete"));

    list.splice(index,1);

    console.log('item removed from list');
}

toDo = prompt('What would you like to do?');


}