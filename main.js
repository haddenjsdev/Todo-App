var SearchFilter = function (id) {
    var id = id;
    var domNode = document.getElementById(id);
    var callback = null;
    var button = document.querySelector('.input2');
    var listWrapper = document.querySelector('.list-wrapper');
    button.addEventListener('click', function() {
      addItem(listWrapper);
    });
}

SearchFilter.prototype.init = function () {
}

function addItem(listWrapper) {
    var input = document.querySelector('.input1');
    var newItem = document.createElement("div");
    var itemTitle = document.createElement("p");
    var metaWrapper = document.createElement("div");
    var span = document.createElement("span");

    newItem.setAttribute('class', 'todo-item');
    itemTitle.setAttribute('class', 'todo-item-title');
    metaWrapper.setAttribute('class', 'meta-wrapper');
    itemTitle.innerHTML = '';
    itemTitle.innerHTML = input.value;
    span.innerHTML = 'May 15, 8pm ';

    if(input.value != ''){
      listWrapper.appendChild(newItem);
      newItem.appendChild(itemTitle);
      newItem.appendChild(metaWrapper);
      metaWrapper.appendChild(span);
      var removeError = document.querySelector('.errorDiv');
      if(removeError){
        listWrapper.removeChild(removeError);
      }
      console.dir(input.value);
    }else{
      if(errorDiv != true){
        var errorDiv = document.createElement("div");
        var errorText = document.createElement("p");
        errorDiv.setAttribute('class', 'errorDiv');
        errorText.setAttribute('class', 'error');
        errorText.innerHTML = 'ERROR! Please enter something....';
        errorDiv.appendChild(errorText);
        listWrapper.appendChild(errorDiv);
      }
    }

}
