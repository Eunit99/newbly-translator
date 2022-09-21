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
    fetchArticleTitleTranslated(data.articleTitleTranslated);
    fetchArticleContent(data.articleContent);
    fetchArticleContentTranslated(data.articleContentTranslated);

    return data;

  }










  var fetchArticleTitle = function (data) {
    console.log(data);
    searchIfTextExist(data);

    return data;
  }

  var fetchArticleTitleTranslated = function (data) {
    console.log(data);
    return data;
  }


  var fetchArticleContent = function (data) {
    console.log(data);

    // TODO Loop the array of data and call searchIfTextExist(data)


    searchIfTextExist(data);

    return data;
  }

  var fetchArticleContentTranslated = function (data) {
    console.log(data);

    // TODO Loop the array of data and call replaceText(data) ?

    return data;
  }



























































  var searchIfTextExist = function (data) {

    if (document.body.textContent.includes(data)) {
      appendText(data);
    } else {
      console.error('text does not exist on page');
    }

  }


  var appendText = function (data) {
    // TODO FIND THE PARENT where data is coming from and append it to the documentElement
    document.innerText = data;
  }









  // fetchArticleFromBackend();

}(jQuery));


