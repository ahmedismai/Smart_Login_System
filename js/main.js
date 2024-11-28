let dataInput=document.getElementById('dataInput');
let data=JSON.parse(localStorage.getItem("siteContainer"));
for (let i=0; i<data.length; i++)
{
    dataInput.innerHTML=`${data[i].name}`;
}