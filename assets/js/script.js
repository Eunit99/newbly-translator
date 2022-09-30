var pageURL = window.location.href;
var targetLanguage = "english";

// This refers to the Newbly backend API URL for a specific article gotten through the pageURL
var newblyBackendAPI = "https://api.newb.ly/articles/?language=" + targetLanguage + "&url=" + pageURL;


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


  // Function to fetch articles from the backendAPI
  var fetchArticleFromBackend = function () {

    fetch(newblyBackendAPI)
      // Handle success
      .then(response => response.json())  // convert to json
      .then(result => {
        fetchArticleCategory(result);
        // console.log(result);
      })
      .catch(err => console.log('Request Failed', err)); // Catch errors
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
    var elements = [
      "a",
      "abbr",
      "acronym",
      "address",
      "applet",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "basefont",
      "bdi",
      "bdo",
      "bgsound",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "isindex",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "listing",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "nobr",
      "noframes",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "plaintext",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "xmp"
    ];

    var matches = [];
    var container;

    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var element of document.querySelectorAll(element)) {
        if (element.textContent.includes(searchString)) {
          matches.push(element);
          container = matches[matches.length - 1];


          // Call these function to append the translations of articleTitleTranslated and articleContentTranslated to the container element

          appendTitleTranslation(container, container.innerText);
          appendContentTranslation(container, container.innerText);

        } else {

          // Log error regarding a particular HTML element which does not contain a particular text
          // console.error("Texts do not exist with current element: " + element);
        }
      }



    }


    return (container, container.innerText);

  }




  var appendTitleTranslation = function (container) {


    var fetchArticleTitleTranslated = function () {



      fetch(newblyBackendAPI)
        // Handle success
        .then(response => response.json())  // convert to json
        .then(result => {

          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;

          // If the container innerText of the document matches with articleTitle, the append articleTitleTranslated

          if (container.innerText === articleTitle) {

            // Use insertAdjacentHTML to insert the articleTitleTranslated using HTML format right a the articleTitle

            container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171);'>" + articleTitleTranslated + "</p>");

          }
          // console.log(result);
        })
        .catch(err => console.log('Request Failed', err)); // Catch errors

    }



    fetchArticleTitleTranslated();
  }



  var appendContentTranslation = function (container) {


    var fetchArticleContentTranslated = function () {


      fetch(newblyBackendAPI)
        // Handle success
        .then(response => response.json())  // convert to json
        .then(result => {

          var articleContentTranslated = result.articleContentTranslated;
          var articleContent = result.articleContent;



          // Loop through array of articleContent and replace them article one by one with the respective translated version

          for (let i = 0; i < articleContent.length; i++) {



            // If the container innerText  of the document matches with articleContent[i], the append articleContentTranslated[i]


            if (container.innerText === articleContent[i]) {

              // Use insertAdjacentHTML to insert the articleContentTranslated[i] using HTML format right a the articleTitle

              container.insertAdjacentHTML("beforeend", "<p class='newbly-translated' style='color: rgb(172, 171, 171);'>" + articleContentTranslated[i] + "</p>");
            }

          }

          // console.log(result);
        })
        .catch(err => console.log('Request Failed', err)); // Catch errors


    }


    fetchArticleContentTranslated();
  }





  fetchArticleFromBackend();

});

