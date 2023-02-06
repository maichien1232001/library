const a = document.querySelector(".newbook")
const b = document.querySelector(".btn-newbook")
const c = document.querySelector(".close")
const d =document.querySelector(".container")


function open(){
    a.classList.add("open")
}

function remove(){
    a.classList.remove("open")
}

b.addEventListener("click", open)
c.addEventListener("click", remove)
d.addEventListener("click", function (e){
    e.stopPropagation()
})

const checkbox = document.querySelector(".checkbox")
const library = document.querySelector(".library")
const btnAdd = document.querySelector(".btn-add")
const inTitle = document.querySelector(".inputTitle")
const inAuthor = document.querySelector(".inputAuthor")
const inPages = document.querySelector(".inputPages")






let books =[]
let isRead =false
let id = 0
let bookTitle = bookAuthor = bookPages = ''

function setBook(){
    return{
        'bookTitle': inTitle.value,
        'bookAuthor': inAuthor.value,
        'bookPages': inPages.value,
        'isRead': checkbox.checked
    }
}

function setLibrary(){
    books.push(setBook())
}


function setLocalStorage(){
    localStorage.setItem('libarary', JSON.stringify(books));
}

function reset(){
    inTitle.value = ''
    inAuthor.value = ''
    inPages.value = ''
    checkbox.checked = false
}

function getInputValue(){
    bookTitle= inTitle.value
    bookAuthor = inAuthor.value
    bookPages = inPages.value
    isRead = checkbox.checked
}


function createBook(){
    const div = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const btn = document.createElement('div')
    const btnRead = document.createElement('button')
    const btnRemove = document.createElement('button')
    
    div.classList.add('book')
    library.appendChild(div)
    div.id = `book${id ++}`
    

    title.classList.add("title")
    title.innerHTML = bookTitle
    div.appendChild(title)

    author.classList.add("author")
    author.innerHTML = bookAuthor
    div.appendChild(author)

    pages.classList.add("pages")
    pages.innerHTML = bookPages
    div.appendChild(pages)

    btn.classList.add("btn")
    div.appendChild(btn)

    btnRead.classList.add("btnRead")
    btn.appendChild(btnRead)

    btnRemove.classList.add("btnRemove")
    btnRemove.innerHTML = "Remove"
    btn.appendChild(btnRemove)

    if(isRead){
        btnRead.textContent = "Read"
        btnRead.classList.add('btnRead')
    }
    else{
        btnRead.textContent = "Not Read"
        btnRead.classList.add('notRead')
    }
    btnRemove.classList.add('primary')
    btnRemove.id = `remove${id}`
    btnRemove.textContent = "Remove"

    function clickRead(){
        if(btnRead.textContent === "Read"){
            btnRead.textContent = "Not Read"
            btnRead.classList.add('notRead') 
        }
        else{
            btnRead.textContent = "Read"
            btnRead.classList.remove('notRead') 
        }
    }
    btnRead.addEventListener("click", clickRead)
    
}




function removeBook(id){
    const a = document.getElementById(`book${id}`)
    console.log(a);
    library.removeChild(a)
}

btnAdd.addEventListener("click", function(e){
    e.preventDefault()
    getInputValue()
    createBook()
    reset
    setLibrary()

    const remove = document.querySelectorAll(".btnRemove")
    remove.forEach((childRemove,index) => childRemove.onclick = () => {
        removeBook(index)
        books = books.filter((_,i)=>i!==index)
        id--
        setLocalStorage()
    })
    setLocalStorage
}) 
    






function openLibrary(){
    library.classList.add("open")
}

btnAdd.addEventListener("click", openLibrary)

console.log(books);








