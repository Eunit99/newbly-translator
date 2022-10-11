var newbly = {
  init: function () {

    // Include the stylesheet for in the head of the page
    document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@1.0.0/lib/css/style.min.css" type="text/css"/>';


    function appendNewblyPromptModal() {
      const newblyPromptModal = `
        <div class="newbly-translation--ui-modal" id="newbly-translation--ui-modal">
              <div class="newbly-translation--ui-modal__title" id="newbly-translation--ui-modal__title">
                Translations available for this article!
              </div>

              <div class="newbly-translation--ui-modal__text" id="newbly-translation--ui-modal__text">
                Your browser is in <span id="userBrowserLanguage"></span>
                so we thought you might want to include translations in <span id="suggestedTranslation"></span> for this
                article.
              </div>

              <div class="newbly-translation--ui-modal__btn-container">
                <button id="include-translation" class="newbly-translation--ui-modal__btn__btn">
                  Include translation!
                </button>

                <button id="cancel-translation" class="newbly-translation--ui-modal__btn__btn">
                  Not this time
                </button>
              </div>
          </div>
      `;

      document.body.innerHTML += newblyPromptModal;

    }
    appendNewblyPromptModal();



    function getTargetLanguage() {

      let targetLanguage;
      let URLHasNLangParam;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params

      if ((urlParams.has("nLang")) || (urlParams.has("nlang"))) {

        startNewblyTranslation();


        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang") || (urlParams.has("nlang"));

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;
      } else {
        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query string
        URLHasNLangParam = false;
      }

      return { targetLanguage, URLHasNLangParam };
    }







    // This array contains a list of currently available newBlyAvailableTranslations, update as necessary

    var newBlyAvailableLanguageTranslations = [
      "ar", // Arabic
      "hr", // Croatian
      "en", //English
      "ro", //Romanian
      "ru", //Russian
      "sr", //Serbian
      "tr", //Turkish
      "uk", //Ukrainian
    ];



    function getLongBrowserLanguage() {
      switch (getShortBrowserLanguage()) {
        case "ar":
          longLang = "Arabic";
          break;
        case "bh":
          longLang = "Bihari";
          break;
        case "hr":
          longLang = "Croatian";
          break;
        case "en":
          longLang = "English";
          break;
        case "fr":
          longLang = "French";
          break;
        case "ro":
          longLang = "Romanian";
          break;
        case "ru":
          longLang = "Russian";
          break;
        case "sr":
          longLang = "Serbian";
          break;
        case "tr":
          longLang = "Turkish";
          break;
        case "uk":
          longLang = "Ukrainian";
          break;
        default:
          longLang = "English";
      }
      return longLang;
    }



    function isNewblyTranslationAvailable() {
      // if userBrowserLanguage is part of newBlyAvailableTranslations, then translation is supported

      let isTranslationAvailable;

      for (let i = 0; i < newBlyAvailableLanguageTranslations.length; i++) {


        if (newBlyAvailableLanguageTranslations[i] === getShortBrowserLanguage()) {

          isTranslationAvailable = true;
          console.log("Newbly translation is available for: " + getLongBrowserLanguage());
        }
      }



      return isTranslationAvailable;

    }



    var getFirstBrowserLanguage = function () {
      var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language;

      // support for HTML 5.1 "navigator.languages"
      if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
          language = nav.languages[i];
          if (language && language.length) {
            return language;
          }
        }
      }

      // support for other well known properties in browsers
      for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
          return language;
        }
      }

      return null;
    };


    function getShortBrowserLanguage() {
      let browserLang = getFirstBrowserLanguage();


      let shortLang;

      if (browserLang.indexOf('-') !== -1) {
        shortLang = browserLang.split('-')[0];
      } else if (browserLang.indexOf('_') !== -1) {
        shortLang = browserLang.split('_')[0];
      } else {
        shortLang = browserLang;
      }

      // console.log("shortLang: " + shortLang);

      return shortLang;
    }





    var displayNewblyTranslatorUIModal = function () {

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);


      // Instantiate the isNewblyTranslatorUIDisplayed var
      let isNewblyTranslatorUIDisplayed;


      // If targetLanguage is not specified in the URL query params, and if Newbly translation is available, the display the translator modal
      if (!(urlParams.has("nLang")) || !(urlParams.has("nlang")) && (isNewblyTranslationAvailable())) {


        // Set the display property of #newbly-translation--ui-modal to "block"
        document.getElementById("newbly-translation--ui-modal").style.display = "block";


        document.getElementById("userBrowserLanguage").innerText = getLongBrowserLanguage();
        document.getElementById("suggestedTranslation").innerText = getLongBrowserLanguage();


        // Initialize buttons on the Newbly translator prompt

        initNewblyTranslatorUIBtns.includeTranslation();
        initNewblyTranslatorUIBtns.cancelTranslations();


        isNewblyTranslatorUIDisplayed = true;
      } else if (!(isNewblyTranslationAvailable())) {

        // If Newbly translation is not available for the browser language, then log the error in the console
        console.error("Newbly translation is not currently available for this page. Browser language is: " + getFirstBrowserLanguage());

        isNewblyTranslatorUIDisplayed = false;

      }


      return isNewblyTranslatorUIDisplayed;

    }


    var hideNewblyTranslatorUI = function () {

      // Set the display property of #newbly-translation--ui-modal to "none"
      document.getElementById("newbly-translation--ui-modal").style.display = "none";

    }


    var initNewblyTranslatorUIBtns = {

      includeTranslation: function () {
        var includeTranslationBtn = document.getElementById("include-translation");

        includeTranslationBtn.addEventListener("click", function (e) {

          // Call the function to start fetching translations from backend
          startNewblyTranslation();

          console.info("Newbly translation started");

          // Hide the Newbly translation modal prompt
          hideNewblyTranslatorUI();
        }); // Translation started



      },

      cancelTranslations: function () {
        var cancelTranslationBtn = document.getElementById("cancel-translation");

        cancelTranslationBtn.addEventListener("click", function (e) {
          console.info("Newbly translation cancelled");

          // Hide the Newbly translation modal prompt
          hideNewblyTranslatorUI();
        }); // Translation cancelled


      },
    }












    function setNewblyUIModalLang() {

      // This function provides translations of the Newbly Modal depending on the getShortBrowserLanguage()


      let newblyUIModalLang = getShortBrowserLanguage();


      return { newblyUIModalLang }; // {newblyUIModalLang: 'fr'}

    }






























































































    function getTargetLanguage() {

      let targetLanguage;
      let URLHasNLangParam;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params

      if ((urlParams.has("nLang")) || (urlParams.has("nlang"))) {

        // Call the function to start fetching translations from backend
        startNewblyTranslation();

        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang");

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;
      } else if (!(urlParams.has("nLang")) || !(urlParams.has("nlang"))) {

        // Call the displayNewblyTranslatorUIModal function to display the Newbly prompt modal to suggest translation
        displayNewblyTranslatorUIModal()

        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query string
        URLHasNLangParam = false;
      }

      return { targetLanguage, URLHasNLangParam };
    }




    function getPageURL() {
      let pageURL = window.location.href;
      return pageURL;
    }

    function getURLToBackend() {

      // URL to be appended to the backend API
      let URLToBackend;
      let URLArray = getPageURL().split('?');
      let nonQueryPartURL = URLArray[0];
      let queryPartURL = URLArray[1];


      // If no query string (?...) is provided, then assign URLToBackend to the first part of the URLArray
      if (!queryPartURL) {

        // No query string specified in URL
        URLToBackend = URLArray[0];
      } else {

        function removeNLangParamsFromURL() {
          // URL returned after checks for nLang query string params
          let nLangContainedURL = URLArray[1];
          let strippedURL;

          // Query string specified in URL

          if ((nLangContainedURL.includes(`&nLang=${getTargetLanguage().targetLanguage}`))) {
            strippedURL = nLangContainedURL.replace(`&nLang=${getTargetLanguage().targetLanguage}`, '');
          } else if ((nLangContainedURL.includes(`?nLang=${getTargetLanguage().targetLanguage}`))) {
            strippedURL = nLangContainedURL.replace(`?nLang=${getTargetLanguage().targetLanguage}`, '');
          } else if (nLangContainedURL === `nLang=${getTargetLanguage().targetLanguage}`) {
            strippedURL = "";
          } else {
            strippedURL = nLangContainedURL;
          }


          return strippedURL
        }



        function actualURLToBackend() {
          // If NLangParams === ""
          if (!removeNLangParamsFromURL()) {

            return nonQueryPartURL

          } else {

            return nonQueryPartURL + "?" + removeNLangParamsFromURL()
          }
        }





        URLToBackend = actualURLToBackend();
      }


      // console.log("URLToBackend: " + URLToBackend);
      return URLToBackend
    }









    // This refers to the Newbly backend API URL for a specific article gotten through the pageURL
    let newblyBackendAPI = "https://api.newb.ly/articles/?language=" + getTargetLanguage().targetLanguage + "&url=" + getURLToBackend();

    // Support for IE
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="lib/js/script.min.js"><\/script>');



    // function startNewblyTranslation(fn) {
    //   // see if DOM is already available
    //   if (document.readyState === "complete" || document.readyState === "interactive") {
    //     // call on next available tick
    //     setTimeout(fn, 1);
    //   } else {
    //     document.addEventListener("DOMContentLoaded", fn);
    //   }
    // }




    var startNewblyTranslation = function () {

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

            if (getTargetLanguage().targetLanguage === "arabic") {
              //  Add RTL stylings if translation target language is arabic
              container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text arabic'>" + articleTitleTranslated + "</p>");
            } else {

              container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text'>" + articleTitleTranslated + "</p>");

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

              if (getTargetLanguage().targetLanguage === "arabic") {
                //  Add RTL stylings if translation target language is arabic
                container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text arabic'>" + articleContentTranslated[i] + "</p>");
              } else {

                container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text'>" + articleContentTranslated[i] + "</p>");

              }


            }

          }




        }


        fetchArticleTranslated();
      }




    };




    console.log("Newbly translation initialized. Learn more here: http://newb.ly/.")
    console.info("Ξunit");


  }
}


// Initialize Newbly translation
newbly.init();

