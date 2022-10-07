"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getTargetLanguage() {

  var targetLanguage = void 0;
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  // Check if the target language is available in URL params

  if (urlParams.has("nLang")) {

    // Assign targetLanguage to "nLang" from the URL params if it exists
    targetLanguage = urlParams.get("nLang");
  } else {
    targetLanguage = "english";
  }

  return targetLanguage;
}

function getPageURL() {
  var pageURL = window.location.href;
  return pageURL;
}

function getURLToBackend() {

  // URL to be appended to the backend API
  var URLToBackend = void 0;
  var URLArray = getPageURL().split('?');
  var nonQueryURLPart = URLArray[0];
  var queryPart = URLArray[1];

  // If no query string (?...) is provided, then assign nLangContainedURL to the first part of the URLArray
  if (!queryPart) {

    // No query string specified in URL
    URLToBackend = URLArray[0];
  } else {
    var removeNLangParamsFromURL = function removeNLangParamsFromURL() {
      // URL returned after checks for nLang query string params
      var nLangContainedURL = URLArray[1];
      var strippedURL;

      // Query string specified in URL

      if (nLangContainedURL.includes("&nLang=" + getTargetLanguage())) {
        strippedURL = nLangContainedURL.replace("&nLang=" + getTargetLanguage(), '');
      } else if (nLangContainedURL.includes("?nLang=" + getTargetLanguage())) {
        strippedURL = nLangContainedURL.replace("?nLang=" + getTargetLanguage(), '');
      } else if (nLangContainedURL === "nLang=" + getTargetLanguage()) {
        strippedURL = "";
      } else {
        strippedURL = nLangContainedURL;
      }

      return strippedURL;
    };

    var joinURLParts = function joinURLParts() {
      // If NLangParams === ""
      if (!removeNLangParamsFromURL()) {

        return nonQueryURLPart;
      } else {

        return nonQueryURLPart + "?" + removeNLangParamsFromURL();
      }
    };

    URLToBackend = joinURLParts();
  }

  // console.log("URLToBackend: " + URLToBackend);
  return URLToBackend;
}

// This refers to the Newbly backend API URL for a specific article gotten through the pageURL
var newblyBackendAPI = "https://api.newb.ly/articles/?language=" + getTargetLanguage() + "&url=" + getURLToBackend();

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

      for (var i = 0; i < articleContent.length; i++) {

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
    };

    fetchArticleTranslated();
  };

  fetchArticleFromBackend();
});