"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var newbly = {
  init: function init() {

    // Include the stylesheet for in the head of the page
    document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@1.0.3/lib/css/style.min.css" type="text/css"/>';

    function appendNewblyPromptModal() {
      var newblyPromptModal = "\n        <div class=\"newbly-translation--ui-modal\" id=\"newbly-translation--ui-modal\">\n              <div class=\"newbly-translation--ui-modal__title\" id=\"newbly-translation--ui-modal__title\">\n                Translations are available for this article!\n              </div>\n\n              <div class=\"newbly-translation--ui-modal__text\" id=\"newbly-translation--ui-modal__text\">\n                Your browser is in <span id=\"userBrowserLanguage\">English</span>\n                so we thought you might want to include translations in <span id=\"suggestedTranslation\">English</span> for this\n                article.\n              </div>\n\n              <div class=\"newbly-translation--ui-modal__btn-container\">\n                <button id=\"include-translation\" class=\"newbly-translation--ui-modal__btn__btn\">\n                  Include translation!\n                </button>\n\n                <button id=\"cancel-translation\" class=\"newbly-translation--ui-modal__btn__btn\">\n                  Not this time.\n                </button>\n              </div>\n          </div>\n      ";

      document.body.innerHTML += newblyPromptModal;
    }
    appendNewblyPromptModal();

    function getTargetLanguage() {

      var targetLanguage = void 0;
      var URLHasNLangParam = void 0;
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params

      if (urlParams.has("nLang") || urlParams.has("nlang")) {

        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang") || urlParams.has("nlang");

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;
      } else if (!urlParams.has("nLang") || !urlParams.has("nlang")) {

        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query string
        URLHasNLangParam = false;
      }

      return { targetLanguage: targetLanguage, URLHasNLangParam: URLHasNLangParam };
    }

    // This array contains a list of currently available newBlyAvailableTranslations, update as necessary

    var newBlyAvailableLanguageTranslations = ["ar", // Arabic
    "hr", // Croatian
    "en", //English
    "ro", //Romanian
    "ru", //Russian
    "sr", //Serbian
    "tr", //Turkish
    "uk"];

    var newblyUIModalLanguages = {
      ar: {
        "title": "الترجمات متوفرة لهذا المقال!",
        "includeText": "تضمين الترجمة!",
        "cancelText": "ليس هذه المرة.",
        "translationConsentText": "متصفحك باللغة العربية لذلك اعتقدنا أنك قد ترغب في تضمين ترجمات باللغة العربية لهذه المقالة."
      },
      bh: {
        "title": "इस लेख के लिए अनुवाद उपलब्ध हैं!",
        "includeText": "अनुवाद शामिल करें!",
        "cancelText": "इस समय नहीं।",
        "translationConsentText": "आपका ब्राउज़र हिंदी में है इसलिए हमने सोचा कि आप इस लेख के लिए हिंदी में अनुवाद शामिल करना चाहेंगे।"
      },
      en: {
        "title": "Translations available for this article!",
        "includeText": "Include translation!",
        "cancelText": "Not this time.",
        "translationConsentText": "Your browser is in English so we thought you might want to include translations in English for this article."
      },
      fr: {
        "title": "Des traductions sont disponibles pour cet article !",
        "includeText": "Inclure la traduction !",
        "cancelText": "Pas cette fois.",
        "translationConsentText": "Votre navigateur est en français, nous avons donc pensé que vous voudriez peut-être inclure des traductions en français pour cet article."
      },
      hr: {
        "title": "Prijevodi su dostupni za ovaj članak!",
        "includeText": "Uključi prijevod!",
        "cancelText": "Ne ovaj put.",
        "translationConsentText": "Vaš preglednik je na hrvatskom pa smo mislili da biste mogli uključiti prijevode na hrvatski za ovaj članak."
      },
      ro: {
        "title": "Sunt disponibile traduceri pentru acest articol!",
        "includeText": "Includeți traducerea!",
        "cancelText": "Nu de data asta.",
        "translationConsentText": "Browserul dvs. este în limba română, așa că ne-am gândit că ați dori să includeți traduceri în limba română pentru acest articol."
      },
      ru: {
        "title": "Для этой статьи доступны переводы!",
        "includeText": "Включите перевод!",
        "cancelText": "Не в этот раз.",
        "translationConsentText": "Ваш браузер на русском языке, поэтому мы подумали, что вы, возможно, захотите включить русский перевод для этой статьи."
      },
      sr: {
        "title": "Преводи су доступни за овај чланак!",
        "includeText": "Укључи превод!",
        "cancelText": "Не овог пута.",
        "translationConsentText": "Ваш претраживач је на српском, па смо мислили да бисте могли да укључите преводе на српски за овај чланак."
      },
      tr: {
        "title": "Bu makale için çeviriler mevcuttur!",
        "includeText": "Çeviri dahil!",
        "cancelText": "Bu sefer değil.",
        "translationConsentText": "Tarayıcınız Türkçe olduğu için bu makaleye Türkçe çeviriler eklemek isteyebileceğinizi düşündük."
      },
      uk: {
        "title": "Для цієї статті доступні переклади!",
        "includeText": "Включіть переклад!",
        "cancelText": "Не цього разу.",
        "translationConsentText": "Ваш веб-переглядач україномовний, тому ми подумали, що ви можете включити переклад українською для цієї статті."
      }
    };

    function getLongBrowserLanguage() {

      // This function provides translations of the Newbly Modal depending on the shortLang, like fr, en, sr, ru

      var newblyUIModalLang = newblyUIModalLanguages,
          newblyModalTitle = void 0,
          newblyModalIncludeText = void 0,
          newblyModalCancelText = void 0,
          newblyTranslationConsentText = void 0;

      switch (getShortBrowserLanguage()) {
        case "ar":
          longLang = "Arabic";
          newblyModalTitle = newblyUIModalLang.ar.title;
          newblyModalIncludeText = newblyUIModalLang.ar.includeText;
          newblyModalCancelText = newblyUIModalLang.ar.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.ar.translationConsentText;
          break;
        case "bh":
          longLang = "Bihari";
          newblyModalTitle = newblyUIModalLang.bh.title;
          newblyModalIncludeText = newblyUIModalLang.bh.includeText;
          newblyModalCancelText = newblyUIModalLang.bh.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.bh.translationConsentText;
          break;
        case "en":
          longLang = "English";
          newblyModalTitle = newblyUIModalLang.en.title;
          newblyModalIncludeText = newblyUIModalLang.en.includeText;
          newblyModalCancelText = newblyUIModalLang.en.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.en.translationConsentText;
          break;
        case "fr":
          longLang = "French";
          newblyModalTitle = newblyUIModalLang.fr.title;
          newblyModalIncludeText = newblyUIModalLang.fr.includeText;
          newblyModalCancelText = newblyUIModalLang.fr.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.fr.translationConsentText;
          break;
        case "hr":
          longLang = "Croatian";
          newblyModalTitle = newblyUIModalLang.hr.title;
          newblyModalIncludeText = newblyUIModalLang.hr.includeText;
          newblyModalCancelText = newblyUIModalLang.hr.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.hr.translationConsentText;
          break;
        case "ro":
          longLang = "Romanian";
          newblyModalTitle = newblyUIModalLang.ro.title;
          newblyModalIncludeText = newblyUIModalLang.ro.includeText;
          newblyModalCancelText = newblyUIModalLang.ro.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.ro.translationConsentText;
          break;
        case "ru":
          longLang = "Russian";
          newblyModalTitle = newblyUIModalLang.ru.title;
          newblyModalIncludeText = newblyUIModalLang.ru.includeText;
          newblyModalCancelText = newblyUIModalLang.ru.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.ru.translationConsentText;
          break;
        case "sr":
          longLang = "Serbian";
          newblyModalTitle = newblyUIModalLang.sr.title;
          newblyModalIncludeText = newblyUIModalLang.sr.includeText;
          newblyModalCancelText = newblyUIModalLang.sr.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.sr.translationConsentText;
          break;
        case "tr":
          longLang = "Turkish";
          newblyModalTitle = newblyUIModalLang.tr.title;
          newblyModalIncludeText = newblyUIModalLang.tr.includeText;
          newblyModalCancelText = newblyUIModalLang.tr.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.tr.translationConsentText;
          break;
        case "uk":
          longLang = "Ukrainian";
          newblyModalTitle = newblyUIModalLang.uk.title;
          newblyModalIncludeText = newblyUIModalLang.uk.includeText;
          newblyModalCancelText = newblyUIModalLang.uk.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.uk.translationConsentText;
          break;
        default:
          longLang = "English";
          newblyModalTitle = newblyUIModalLang.en.title;
          newblyModalIncludeText = newblyUIModalLang.en.includeText;
          newblyModalCancelText = newblyUIModalLang.en.cancelText;
          newblyTranslationConsentText = newblyUIModalLang.en.translationConsentText;
      }

      newblyUIModalLang = longLang;

      return { longLang: longLang, newblyUIModalLang: newblyUIModalLang, newblyModalTitle: newblyModalTitle, newblyTranslationConsentText: newblyTranslationConsentText, newblyModalIncludeText: newblyModalIncludeText, newblyModalCancelText: newblyModalCancelText };
    }

    function isNewblyTranslationAvailable() {
      // if userBrowserLanguage is part of newBlyAvailableTranslations, then translation is supported

      var isTranslationAvailable = void 0;

      for (var i = 0; i < newBlyAvailableLanguageTranslations.length; i++) {

        if (newBlyAvailableLanguageTranslations[i] === getShortBrowserLanguage()) {

          isTranslationAvailable = true;
          console.log("Newbly translation is available for: " + getLongBrowserLanguage().longLang);
        }
      }

      return isTranslationAvailable;
    }

    var getFirstBrowserLanguage = function getFirstBrowserLanguage() {
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
      var browserLang = getFirstBrowserLanguage();

      var shortLang = void 0;

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

    var displayNewblyTranslatorUIModal = function displayNewblyTranslatorUIModal() {

      // Instantiate the isNewblyTranslatorUIDisplayed var
      var isNewblyTranslatorUIDisplayed = void 0;

      // If targetLanguage is not specified in the URL query params, and if Newbly translation is available, the display the translator modal
      if (!getTargetLanguage().URLHasNLangParam && isNewblyTranslationAvailable()) {

        // Set the display property of #newbly-translation--ui-modal to "block"
        document.getElementById("newbly-translation--ui-modal").style.display = "block";

        // If shortBrowserLanguage is "ar", then add class ".arabic" to Newbly consent modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-translation--ui-modal").classList.add("arabic");
        };

        // Display the translationConsentText depending on user's browser language
        document.getElementById("newbly-translation--ui-modal__text").innerText = getLongBrowserLanguage().newblyTranslationConsentText;

        document.getElementById("newbly-translation--ui-modal__title").innerText = getLongBrowserLanguage().newblyModalTitle;
        document.getElementById("include-translation").innerText = getLongBrowserLanguage().newblyModalIncludeText;
        document.getElementById("cancel-translation").innerText = getLongBrowserLanguage().newblyModalCancelText;

        // Initialize buttons on the Newbly translator prompt
        initNewblyTranslatorUIBtns.includeTranslation();
        initNewblyTranslatorUIBtns.cancelTranslations();

        isNewblyTranslatorUIDisplayed = true;
      } else if (!isNewblyTranslationAvailable()) {

        // If Newbly translation is not available for the browser language, then log the error in the console
        console.error("Newbly translation is not currently available for this page. Browser language is: " + getFirstBrowserLanguage());

        isNewblyTranslatorUIDisplayed = false;
      }

      return isNewblyTranslatorUIDisplayed;
    };

    var hideNewblyTranslatorUI = function hideNewblyTranslatorUI() {

      // Set the display property of #newbly-translation--ui-modal to "none"
      document.getElementById("newbly-translation--ui-modal").style.display = "none";
    };

    var initNewblyTranslatorUIBtns = {

      includeTranslation: function includeTranslation() {
        var includeTranslationBtn = document.getElementById("include-translation");

        includeTranslationBtn.addEventListener("click", function (e) {

          // Call the function to start fetching translations from backend
          startNewblyTranslation();

          console.info("Newbly translation started");

          // Hide the Newbly translation modal prompt
          hideNewblyTranslatorUI();
        }); // Translation started

      },

      cancelTranslations: function cancelTranslations() {
        var cancelTranslationBtn = document.getElementById("cancel-translation");

        cancelTranslationBtn.addEventListener("click", function (e) {
          console.info("Newbly translation cancelled");

          // Hide the Newbly translation modal prompt
          hideNewblyTranslatorUI();
        }); // Translation cancelled

      }
    };

    function getPageURL() {
      var pageURL = window.location.href;
      return pageURL;
    }

    function getURLToBackend() {

      // URL to be appended to the backend API
      var URLToBackend = void 0;
      var URLArray = getPageURL().split('?');
      var nonQueryPartURL = URLArray[0];
      var queryPartURL = URLArray[1];

      // If no query string (?...) is provided, then assign URLToBackend to the first part of the URLArray
      if (!queryPartURL) {

        // No query string specified in URL
        URLToBackend = URLArray[0];
      } else {
        var removeNLangParamsFromURL = function removeNLangParamsFromURL() {
          // URL returned after checks for nLang query string params
          var nLangContainedURL = URLArray[1];
          var strippedURL = void 0;

          // Query string specified in URL

          if (nLangContainedURL.includes("&nLang=" + getTargetLanguage().targetLanguage)) {
            strippedURL = nLangContainedURL.replace("&nLang=" + getTargetLanguage().targetLanguage, '');
          } else if (nLangContainedURL.includes("?nLang=" + getTargetLanguage().targetLanguage)) {
            strippedURL = nLangContainedURL.replace("?nLang=" + getTargetLanguage().targetLanguage, '');
          } else if (nLangContainedURL === "nLang=" + getTargetLanguage().targetLanguage) {
            strippedURL = "";
          } else {
            strippedURL = nLangContainedURL;
          }

          return strippedURL;
        };

        var actualURLToBackend = function actualURLToBackend() {
          // If NLangParams === ""
          if (!removeNLangParamsFromURL()) {

            return nonQueryPartURL;
          } else {

            return nonQueryPartURL + "?" + removeNLangParamsFromURL();
          }
        };

        URLToBackend = actualURLToBackend();
      }

      // console.log("URLToBackend: " + URLToBackend);
      return URLToBackend;
    }

    // This refers to the Newbly backend API URL for a specific article gotten through the pageURL
    var newblyBackendAPI = "https://api.newb.ly/articles/?language=" + getTargetLanguage().targetLanguage + "&url=" + getURLToBackend();

    // Support for IE
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="lib/js/script.min.js"><\/script>');

    var startNewblyTranslation = function startNewblyTranslation() {
      var fetchArticleFromBackend = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newblyBackendAPI) {
          var response, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(newblyBackendAPI);

                case 2:
                  response = _context.sent;
                  _context.next = 5;
                  return response.json();

                case 5:
                  data = _context.sent;
                  return _context.abrupt("return", data);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function fetchArticleFromBackend(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var fetchFnc = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fetchArticleFromBackend(newblyBackendAPI);

                case 2:
                  result = _context2.sent;

                  fetchArticleCategory(result);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function fetchFnc() {
          return _ref2.apply(this, arguments);
        };
      }();

      var result = "";

      fetchFnc();

      // Set the fetch data
      var fetchArticleCategory = function fetchArticleCategory(data) {

        /** We only need to call the function `displayContentsFromBackendOnPage` because we do
        * not have the backend API on our index.html page which will provide the the articles in array format
        */

        /** Call the functions `fetchArticleTitle` and `fetchArticleContent`
        */

        fetchArticleTitle(data.articleTitle);
        fetchArticleContent(data.articleContent);

        return data;
      };

      var fetchArticleTitle = function fetchArticleTitle(articleTitle) {

        if (doesTextExist(articleTitle)) {
          findContainerElement(articleTitle);
        }

        return articleTitle;
      };

      var fetchArticleContent = function fetchArticleContent(articleContent) {

        for (var i = 0; i < articleContent.length; i++) {
          if (doesTextExist(articleContent[i])) {
            findContainerElement(articleContent[i]);
          }
        }

        return articleContent;
      };

      var doesTextExist = function doesTextExist(searchString) {

        if (document.body.textContent.includes(searchString)) {
          console.info("Texts exist on page: " + searchString);

          return true;
        } else {
          console.error("Texts do not exist on page: " + searchString);

          return false;
        }
      };

      var findContainerElement = function findContainerElement(searchString) {
        // Find the container element where data is coming from and pass the text

        // The possible tags which can contain the text to be appended the newly translatedContent

        var elements = ["a", "article", "b", "div", "h1", "h2", "h3", "h4", "h5", "h6", "i", "li", "main", "ol", "p", "q", "section", "span", "strong", "summary", "u", "ul"];

        var matches = [];
        var container;

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = document.querySelectorAll(element)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

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
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return container, container.innerText;
      };

      var appendTranslation = function appendTranslation(container) {

        var fetchArticleTranslated = function fetchArticleTranslated() {

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

          for (var i = 0; i < articleContent.length; i++) {

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
        };

        fetchArticleTranslated();
      };
    };

    console.log("Newbly translation initialized. Learn more here: https://newb.ly/");
    console.info("Ξunit");

    if (getTargetLanguage().URLHasNLangParam) {
      // Call the function to start fetching translations from backend
      startNewblyTranslation();
    } else {

      // Call the displayNewblyTranslatorUIModal function to display the Newbly prompt modal to suggest translation
      displayNewblyTranslatorUIModal();
    }
  }

  // Initialize Newbly translation
};newbly.init();