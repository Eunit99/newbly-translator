$(document).ready(function ($) {

  var fetchArticleFromBackend = function () {
    var newblyBackendAPI = "https://api.newb.ly/articles/gVe8WHhm?language=english&country=austria&fbclid=IwAR3IA_dgK8W_kakCh44PUJv3lMajeJWYqIotGcSdlSMFnFRKGS3yeceZp3o";

    $.ajax({
      url: newblyBackendAPI,
      dataType: "json",
      success: function (result) {
        fetchArticleCategory(result);
      },
      error: function (xhr) {
        console.error("An error occurred: " + xhr.status + " " + xhr.statusText);
      }
    });
  }

  // Set the fetch data
  var fetchArticleCategory = function (data) {
    fetchArticleTitle(data.articleTitle);
    fetchArticleContent(data.articleContent);
    fetchArticleContentTranslated(data.articleContentTranslated);





    return data;

  }









  var fetchArticleTitle = function (articleTitle) {
    // console.log(articleTitle);

    if (searchIfTextExist(articleTitle)) {
      findContainerElement(articleTitle);
    }

    return articleTitle;
  }



  var fetchArticleContent = function (articleContent) {
    console.log(articleContent);

    // TODO Loop the array of articleContent and call searchIfTextExist(data)


    searchIfTextExist(articleContent);

    return articleContent;
  }

  var fetchArticleContentTranslated = function (articleContentTranslated) {
    console.log(articleContentTranslated);

    // TODO Loop the array of articleContentTranslated and call replaceText(articleContentTranslated) ?

    return articleContentTranslated;
  }



























































  var searchIfTextExist = function (searchString) {

    if (document.body.textContent.includes(searchString)) {
      console.info("Text exist on page: " + searchString);

      return true;
    } else {
      console.error("Text does not exist on page: " + searchString);
      return false;

    }

  }


  var findContainerElement = function (searchString) {
    // Find the container element where data is coming from and pass the text

    // The possible tags which can contain the text to be appended the newly translatedContent
    const elements = [
      "p",
      // "div",
      // "b"
    ];
    const matches = [];
    var container;

    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var element of document.querySelectorAll(element)) {
        if (element.textContent.includes(searchString)) {
          matches.push(element);
        }
      }
      container = matches[matches.length - 1];

      appendTitleTranslation(container, container.innerTex);
    }


    return (container, container.innerText);

  }




  var appendTitleTranslation = function (container) {




    var fetchArticleTitleTranslated = function () {



      var newblyBackendAPI = "https://api.newb.ly/articles/gVe8WHhm?language=english&country=austria&fbclid=IwAR3IA_dgK8W_kakCh44PUJv3lMajeJWYqIotGcSdlSMFnFRKGS3yeceZp3o";

      $.ajax({
        url: newblyBackendAPI,
        dataType: "json",
        success: function (result) {
          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;


          console.log(articleTitleTranslated);
          console.log(articleTitle);
          console.log(container.innerText);
          console.log(container);


          if (container.innerText === articleTitle) {

            // TODO Write actual logic to append text
            console.log("We are going to append text here");

            container.append("<div class='translated'>" + articleTitleTranslated + "</div>");
          }


        },
        error: function (xhr) {
          console.error("An error occurred: " + xhr.status + " " + xhr.statusText);
        }
      });
    }


    // console.log(container);
    // console.log(container.innerText);



    fetchArticleTitleTranslated();
  }



























































  fetchArticleFromBackend();

}(jQuery));

