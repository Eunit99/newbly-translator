$(document).ready(function ($) {

  // Get all all classes with .newbly in the document
  $.fn.newbly = function () {
    var newblyClass = $(".newbly");



    // Grab all classes with .newbly in the document
    var getText = function () {
      newblyClass.map(function () {

        return this.innerText;

      }).get();
    }


    var replaceText = function () {
      newblyClass.each(function () {

        var text = $(this);



        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function (data) {

            var randomUser = data;
            console.log(text.text());

            text.text(randomUser.results[0].name.title + " " + randomUser.results[0].name.first + " " + randomUser.results[0].name.last);

          }
        });


      });

    }

    replaceText();
    // console.log(getText)













  };




  // TODO Write a code to translate the contents

















































  // call the newbly function
  $("div").newbly()
});
