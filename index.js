function fetchBooks() {
  // Send a fetch request to 'https://anapioficeandfire.com/api/books'
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(books => {
      // Render book titles into the DOM by passing the JSON object to renderBooks
      renderBooks(books);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
