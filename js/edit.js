const params = new URLSearchParams(window.location.search)
const selectedId= params.get('id');

const URL = "https://api.typeform.com/forms";

const pageTitle = document.querySelector("#pageTitle");
const title = document.querySelector("#title");
const href = document.querySelector("#href");
const updateFormBtn = document.querySelector('#updateFormBtn');
updateFormBtn.addEventListener("click",updateData);

let formData= {};
let status;  
function getData(id) {
fetch(URL,{
    headers:{
        Authorization:"Bearer HtSpHjJLuZKjsNZfLepSycKYNh4Xer32rwQgc6TFP8xn",
    },
    })
.then(res => res.json())
.then(function(data){

  const filterx =  data.items.find(function(x){
        return  x.id === selectedId;
           
    })
    return filterx;
})
.then(function(data){
    title.value=data.title;
    href.value=data.self.href;
    formData.title=data.title;
    
})
   }

   getData(selectedId)


   function updateData(e, id){
    formData.title = title.value;
       
    e.preventDefault();
    fetch(`${URL}/${params.get('id')}`,{
        method:"put",
        headers:{
            Authorization:"Bearer HtSpHjJLuZKjsNZfLepSycKYNh4Xer32rwQgc6TFP8xn",
        },
        body:JSON.stringify(formData),
    })
    .then(response => status=response.ok)
    .then(clientres => status ? success() : notSuccess())

    .catch(err => console.log(err));
   
   }



function success(){
    const successMsg = document.createElement("p");
    successMsg.className="text-center alert alert-success";
    successMsg.innerText="Form updated";
    pageTitle.after(successMsg);
}

function notSuccess(){
    const notSuccessMsg = document.createElement("p");
    notSuccessMsg.className="text-center alert alert-danger";
    notSuccessMsg.innerText="Form not updated, check your life";
    pageTitle.after(notSuccessMsg);
}
