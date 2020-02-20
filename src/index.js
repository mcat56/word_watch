import $ from 'jquery'

$(document).ready(() => {
   $.ajax({
     url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
     type: 'get',
     success: function(response) {
       console.log(response)
       let topWord = Object.keys(response.word)
       let count = Object.values(response.word)
       let string = `Word: ${topWord}   Count: ${count}`
       $("#topWord").html(string);
    }});
    $("#button").click(() => {
      let new_words = $("#text").val().split(" ")
      let new_word = new_words[Math.floor(Math.random() * new_words.length)];
      $.ajax({
        type: "POST",
        url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
        data: { "word": { "value": `${new_word}`} },
        success: alert(`message: ${new_word} added!`)
      })
    })
});
