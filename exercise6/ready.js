$(document).ready(function() {
  // words for cycling through the typwriter
  var words = ['Awesome People', 'Brave', 'Agile', 'Intelligent', 'Product People'];

  // How often it outputs a character
  var delay = 100;





  function writeText(word) {
    // Code goes here
    $.each(word.split(""), function(i, letter){
      setTimeout(function(){
        $(".typewriter-text").append(letter);
      }, delay * i);  
    });
  }

  // calls the first words element, 'Awesome People', and not the rest;
  writeText(words[0]);








  //  // BONUS

  // function writeWords(words) {
  //   // Code goes here
  // }

  // writeWords(words);

  


});