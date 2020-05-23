function getData(){
    
    const tbody = document.querySelector('#tbody');
    fetch('../json/list.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
      return  data.map(function(type){
             const tdTitle = document.createElement("td");
             const tdHref = document.createElement("td");
             const tdDelete = document.createElement("td");
             const tdEdit = document.createElement("td");
 
             const hrefLink = document.createElement("a");

             const editLink = document.createElement("a");
             
             const tr = document.createElement("tr");

             const trashIcon = document.createElement("i");
             const editIcon = document.createElement("i");

            trashIcon.className ="far fa-trash-alt";
            editIcon.className ="far fa-edit";

            tdTitle.innerText=type.title;
            tdDelete.appendChild(trashIcon)
            tdHref.appendChild(hrefLink);
            hrefLink.setAttribute('href', `${type.href}`)
            editLink.setAttribute('href',`http://127.0.0.1:5500/pages/edit.html?id=${type.id}`)
            tdEdit.appendChild(editLink)
            tdEdit.className = "text-center"
            tdDelete.className = "text-center"    
            hrefLink.innerText=type.href;

            editLink.appendChild(editIcon);
            
            tr.appendChild(tdTitle);
            tr.appendChild(tdHref);
            tr.appendChild(tdEdit);
            tr.appendChild(tdDelete);
            
            trashIcon.addEventListener("click", removeItem)

            tbody.appendChild(tr);
        })
    })
    .catch(err => console.log(err))
}


function removeItem(){
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}

getData()