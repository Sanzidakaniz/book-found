const errorDiv=document.getElementById('empty');
// input part///
const searchThis=()=>{
// const errorDiv=document.getElementById('empty');
    const search=document.getElementById('take-input');
    const searchText=search.value;
    search.value='';
//  // clear dom part////
  errorDiv.innerText="";
if(searchText==''){
    errorDiv.innerText="search field cannot be empty";
    return;
}

 const url=`https://openlibrary.org/search.json?q=${searchText}`;
    fetch (url)
    .then(res=>res.json())
    .then(data=>displayBook(data))  
}

const displayBook=data=>{
    resultNumber(data);
    if(data.status==404){
        errorDiv.innerText="No Result Found";
    }
    else{
        errorDiv.innerText="";
    }
     const containerDiv=document.getElementById('display-book');
     const books=data.docs;
      // clear dom part////
 containerDiv.innerHTML="";
     
    books?.forEach(book=>{
         console.log(book);
     const div=document.createElement('div');
     div.classList.add('col')
     div.innerHTML=` <div class="card h-100">
     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
     
       <p class="card-text">${book.author_name}</p>
       
       <p class="card-text">${book.publisher}</p>
       <p class="card-text">${book.first_publish_year}</p>
    </div>
   </div> 
    
  `;
 containerDiv.appendChild(div);
 
 })
 }
const resultNumber=count=>{
    console.log(count.num_found);
const resultDiv=document.getElementById('result');
resultDiv.innerHTML=`<p>Result found: ${count.num_found}</p>`;

}
//  // clear dom part////
//  containerDiv.innerHTML="";