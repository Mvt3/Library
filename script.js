//Arreglo que almacenará los libros.
const myLibrary = [];

let visible = true;
let counter = 1;

//Constructor Book
function Book(nameBook, author, pages){
    this.nameBook = nameBook;
    this.author = author;
    this.pages = pages;
} 



document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".newBookB");
    const form = document.querySelector(".hiddenDiv");
    const sendBtn = document.querySelector(".add-btn");
    
    
        toggleButton.addEventListener("click", function() {
            // Alternar la visibilidad del div al hacer clic en el botón
            form.classList.toggle("hiddenDiv");
            toggleButton.innerHTML = "Add a new book!";
            visible = !visible;
            if(visible === false){
                toggleButton.innerHTML = "Stop adding books"
            }
            
          });

        sendBtn.addEventListener("click",()=>{
            mostrarDatos();
            const bookTitle = document.querySelector("#bookTitle")
            const bookAuthor = document.querySelector("#bookAuth")
            const bookPages = document.querySelector("#bookPags")
            const container = document.querySelector(".cards");//En donde almacenaŕe las tarjetas individuales
            const newCard = document.createElement("div");
            myLibrary.forEach((book)=>{
               // bookTitle.innerHTML = book.nameBook;
               // bookAuthor.innerHTML = book.author;
               // bookPages.innerHTML = book.pages;

                //agrego clase al div newCard
                newCard.classList.add("single-card");

                newCard.innerHTML = `
                <div>Book title: <div class="cardText">${book.nameBook}</div></div>
                <div>Author: <div class="cardText">${book.author}</div></div>
                <div>Pages: <div class="cardText">${book.pages}</div>
                <div><button class="delBtn">Remove book</button></div></div>
              `;

              container.appendChild(newCard);
            })//Fin listener boton de envio

        });
    
        //Dentro de todo cards agrego un listener click, si ese click se hace en el boton, ejecutar logica.
       document.querySelector(".cards").addEventListener("click", function(e){
            if (e.target.classList.contains("delBtn")){
                const card = e.target.closest(".single-card")
                const bookName = card.querySelector(".cardText").textContent.trim()
                delBook(myLibrary, bookName);
                card.remove(); //Elimino el Div tarjeta
                
            }
       });



  }); //End eventListener DOM


  //Almacena el objeto con las propeidades en el arreglo.
function mostrarDatos(){

    let nameBook = document.querySelector("#bookName").value;
    let author = document.querySelector("#bookAuthor").value;
    let pages = document.querySelector("#bookPages").value;
    

    newBook = new Book(nameBook, author, pages);
    newBook.name = "BookId" + counter;
    counter++;
    myLibrary.push(newBook);
    console.log(myLibrary);

};



//Borrará un libro del arreglo
function delBook(array, name){
    const index = array.findIndex(objeto => objeto.nameBook === name);

    if(index !== -1){
        array.splice(index, 1)    
    };


};