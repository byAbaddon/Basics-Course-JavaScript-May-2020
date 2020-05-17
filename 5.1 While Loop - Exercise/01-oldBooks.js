function oldBooks(arg) {
  book = arg.shift()
  bookCount = 0
  bookIndex = arg.indexOf(book)

  console.log(bookIndex > -1 
   ? `You checked ${bookIndex} books and found it.` 
   : `The book you search is not here!\nYou checked ${arg.length -1} books.`
  )
}

//  oldBooks(['Troy','Stronger','Life Style','Troy'])

//  oldBooks((["Bourne",
//  "True Story",
//  "Forever",
//  "More Space",
//  "The Girl",
//  "Spaceship",
//  "Strongest",
//  "Profit",
//  "Tripple",
//  "Stella",
//  "The Matrix",
//  "Bourne"]))


  
 
  
