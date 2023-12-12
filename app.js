const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
function addItem() {
    const newItemText = itemInput.value;
    if(newItemText != ''){

        const newItemList = careteListItem(newItemText);
        itemList.appendChild(newItemList);
        itemInput.value='';
    }
   
}

function careteListItem(text){
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}