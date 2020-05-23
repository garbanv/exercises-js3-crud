const params = new URLSearchParams(window.location.search)
const selectedId= params.get('id');


const title = document.querySelector("#title");
const href = document.querySelector("#href");

 function getData(id) {
fetch('../json/list.json')
.then(res => res.json())
.then(function(data){

  const filterx =  data.find(function(x){
        return  x.id === selectedId;
           
    })
    return filterx;
})
.then(function(data){
    title.value=data.title;
    href.value=data.href;
})
   
    
}
getData(selectedId)

