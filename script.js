function setLang(lang){

let elements=document.querySelectorAll(".lang")

elements.forEach(el=>{
el.style.display="none"
})

document.querySelectorAll(".lang."+lang).forEach(el=>{
el.style.display="block"
})

}
