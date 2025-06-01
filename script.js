//your JS code here. If required.

let button=document.querySelector("#submit");
let output=document.querySelector("#book-list");
let form=document.querySelector("form-group");

button.addEventListener("click",(e)=>{
	e.preventDefault();
	
	let title=document.querySelector("#title").value;
let author=document.querySelector("#author").value;
let isbn=parseInt(document.querySelector("#isbn").value);

	let tr=document.createElement('tr');
	tr.innerHTML=`<td>${title}</td>
	             <td>${author}</td>
	               <td>${isbn}</td>
				   <td><button class="delete">X</button></td>`


	output.append(tr);
	form.reset();
  
	
})
