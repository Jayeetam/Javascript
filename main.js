var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();


  var newItem = document.getElementById(`item`).value;
  var description = document.getElementById(`description`).value;


  var li = document.createElement(`li`);
  li.className = `list-group-item`;

  var itemnode = document.createTextNode(newItem);
  var descriptionNode = document.createTextNode(" "+description);

  li.appendChild(itemnode);
  li.appendChild(descriptionNode);
  // Append li to list
  itemList.appendChild(li);

  var deleteBtn = document.createElement(`button`);
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);

  var editBtn = document.createElement(`button`);
  editBtn.className = 'btn btn-danger btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);

}

  

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete') || e.target.classList.contains('edit')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
  console.log(items);
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var descrip = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1 || descrip.toLocaleLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};