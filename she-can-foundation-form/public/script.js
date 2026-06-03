const form =
document.getElementById("contactForm");

const messageBox =
document.getElementById("message");

const counter =
document.getElementById("counter");

messageBox.addEventListener("input",()=>{

counter.innerText =
`${messageBox.value.length} / 300`;

});

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const btn =
document.getElementById("submitBtn");

btn.innerText="Submitting...";
btn.disabled=true;

const data={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
message:document.getElementById("message").value
};

try{

const response =
await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result =
await response.json();

document.getElementById("response")
.innerHTML=
"✅ Form Submitted Successfully";

form.reset();

counter.innerText="0 / 300";

}
catch(err){

document.getElementById("response")
.innerHTML=
"❌ Something went wrong";

}

btn.innerText="Submit Message";
btn.disabled=false;

});