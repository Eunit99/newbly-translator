function getTargetLanguage() {

  let targetLanguage;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Check if the target language is available in URL params

  if ((urlParams.has("nLang"))) {

    // Assign targetLanguage to "nLang" from the URL params if it exists
    targetLanguage = urlParams.get("nLang");
  } else {
    targetLanguage = "english";
  }

  return targetLanguage;
}




function getPageURL() {
  let pageURL = window.location.href;
  return pageURL;
}

function removeNLangParamsFromURL() {

  let strippedURL;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);


  // Check if nLang parameter is available in URL params
  if ((urlParams.has("nLang"))) {

    // Delete the nLang parameter.
    strippedURL = urlParams.delete("nLang");
  }

  return strippedURL;
};


removeNLangParamsFromURL()




// This refers to the Newbly backend API URL for a specific article gotten through the pageURL
var newblyBackendAPI = "https://api.newb.ly/articles/?language=" + getTargetLanguage() + "&url=" + getPageURL();

// Support for IE
if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="lib/js/script.min.js"><\/script>');

function newblyFnc(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

newblyFnc(function () {

  let result = "";

  async function fetchArticleFromBackend(newblyBackendAPI) {
    let response = await fetch(newblyBackendAPI);
    let data = await response.json()
    return data;
  }


  async function fetchFnc() {
    result = await fetchArticleFromBackend(newblyBackendAPI);
    fetchArticleCategory(result);
  }

  fetchFnc();


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
      "a",
      "article",
      "b",
      "div",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "i",
      "li",
      "main",
      "ol",
      "p",
      "q",
      "section",
      "span",
      "strong",
      "summary",
      "u",
      "ul",
    ];

    var matches = [];
    var container;

    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var element of document.querySelectorAll(element)) {
        if (element.textContent.includes(searchString)) {
          matches.push(element);
          container = matches[matches.length - 1];


          // Call this function to append the translations to the container element

          appendTranslation(container, container.innerText);

        } else {

          // Log error regarding a particular HTML element which does not contain a particular text
          // console.error("Texts do not exist with current element: " + element);
        }
      }



    }


    return (container, container.innerText);

  }




  var appendTranslation = function (container) {


    var fetchArticleTranslated = function () {

      // console.log(result.articleTitle)

      // For article Title

      var articleTitleTranslated = result.articleTitleTranslated;
      var articleTitle = result.articleTitle;

      // If the container innerText of the document matches with articleTitle, the append articleTitleTranslated

      if (container.innerText === articleTitle) {

        // Use insertAdjacentHTML to insert the articleTitleTranslated using HTML format right a the articleTitle

        if (getTargetLanguage() === "arabic") {
          //  Add RTL stylings if translation target language is arabic
          container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171); direction: rtl;'>" + articleTitleTranslated + "</p>");
        } else {

          container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171);'>" + articleTitleTranslated + "</p>");

        }
      }



      // For article Content

      var articleContentTranslated = result.articleContentTranslated;
      var articleContent = result.articleContent;



      // Loop through array of articleContent and replace them article one by one with the respective translated version

      for (let i = 0; i < articleContent.length; i++) {



        // If the container innerText  of the document matches with articleContent[i], the append articleContentTranslated[i]


        if (container.innerText === articleContent[i]) {

          // Use insertAdjacentHTML to insert the articleContentTranslated[i] using HTML format right a the articleTitle

          if (getTargetLanguage() === "arabic") {
            //  Add RTL stylings if translation target language is arabic
            container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171); direction: rtl;'>" + articleContentTranslated[i] + "</p>");
          } else {

            container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171);'>" + articleContentTranslated[i] + "</p>");

          }


        }

      }




    }


    fetchArticleTranslated();
  }



  fetchArticleFromBackend();

});

