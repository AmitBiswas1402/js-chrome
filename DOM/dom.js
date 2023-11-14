function addNewLanguage(langName){
    const li=document.createElement('li');
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li)
}
addNewLanguage("HTML")
addNewLanguage("CSS")

function addAnotherLanguage(langname){  //The better way to run code
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(li)
}
addAnotherLanguage("JavaScript")
// addAnotherLanguage("TypeScript")

//Edit the values
const editLanguage = document.querySelector("li:nth-child(0)")
console.log(editLanguage);
const NewLi=document.createElement('li')
NewLi.textContext="Java"
editLanguage.replaceWith(NewLi)

//Another way to edit values
const reditedLang=document.querySelector("li:nth-child(1)")
reditedLang.outerHTML='<li>HTML</li>'

//Removing element
const removeElement = document.querySelector("li:last-child")
removeElement.remove()