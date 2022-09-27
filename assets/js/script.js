$(document).ready(function ($) {

  // This refers to the Newbly backend API URL for a specific article

  var newblyBackendAPI = "https://api.newb.ly/articles/gVe8WHhm?language=english&country=austria&fbclid=IwAR3IA_dgK8W_kakCh44PUJv3lMajeJWYqIotGcSdlSMFnFRKGS3yeceZp3o";


  var fetchArticleFromBackend = function () {

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

    /** We only need to call the function `displayContentsFromBackendOnPage` because we do
    * not have the backend API on our index.html page which will provide the the articles in array format
    */

    /** Call the functions `fetchArticleTitle` and `fetchArticleContent`
    */

    fetchArticleTitle(data.articleTitle);
    fetchArticleContent(data.articleContent);


    return data;

  }






  var fetchArticleTitle = function (articleTitle) {

    if (doesTextExist(articleTitle)) {
      findContainerElement(articleTitle);
    }

    return articleTitle;
  }



  var fetchArticleContent = function (articleContent) {


    for (let i = 0; i < articleContent.length; i++) {
      if (doesTextExist(articleContent[i])) {
        findContainerElement(articleContent[i]);
      }
    }


    return articleContent;
  }



  var doesTextExist = function (searchString) {

    if (document.body.textContent.includes(searchString)) {
      console.info("Texts exist on page: " + searchString);

      return true;
    } else {
      console.error("Texts do not exist on page: " + searchString);

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




      // Call these function in 2s to append the translations of articleTitleTranslated and articleContentTranslated to the container element

      appendTitleTranslation(container, container.innerTex);
      appendContentTranslation(container, container.innerTex);

    }


    return (container, container.innerText);

  }




  var appendTitleTranslation = function (container) {


    var fetchArticleTitleTranslated = function () {

      $.ajax({
        url: newblyBackendAPI,
        dataType: "json",
        success: function (result) {
          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;

          // If the container innerText of the document matches with articleTitle, the append articleTitleTranslated

          if (container.innerText === articleTitle) {

            // Use insertAdjacentHTML to insert the articleTitleTranslated using HTML format right a the articleTitle

            container.insertAdjacentHTML("beforeend", "<p class='newbly-translated'>" + articleTitleTranslated + "</p>");

          }


        },
        error: function (xhr) {
          console.error("An error occurred: " + xhr.status + " " + xhr.statusText);
        }
      });
    }



    fetchArticleTitleTranslated();
  }



  var appendContentTranslation = function (container) {


    var fetchArticleContentTranslated = function () {

      $.ajax({
        url: newblyBackendAPI,
        dataType: "json",
        success: function (result) {
          var articleContentTranslated = result.articleContentTranslated;
          var articleContent = result.articleContent;



          // Loop through array of articleContent and replace them article one by one with the respective translated version

          for (let i = 0; i < articleContent.length; i++) {



            // If the container innerText  of the document matches with articleContent[i], the append articleContentTranslated[i]


            if (container.innerText === articleContent[i]) {

              // Use insertAdjacentHTML to insert the articleContentTranslated[i] using HTML format right a the articleTitle

              container.insertAdjacentHTML("beforeend", "<p class='newbly-translated'>" + articleContentTranslated[i] + "</p>");
            }
          }




        },
        error: function (xhr) {
          console.error("An error occurred: " + xhr.status + " " + xhr.statusText);
        }
      });
    }


    fetchArticleContentTranslated();
  }





  fetchArticleFromBackend();

}(jQuery));

