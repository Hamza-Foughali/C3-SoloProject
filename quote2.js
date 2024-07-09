function handleAddQuote() {
  var input = document.getElementById("quoteInput");
  var text = input.value;

  quoteManager.addQuote(text);
  input.value = "";
}

function searchQuotes(search) {
  var filteredQuotes = filter(quotes, function () {
    quotes.text.toLowerCase().includes(search);
  });
  this.renderQuotes(filteredQuotes);
}
