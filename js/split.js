function getPageURL() {

  // Does not have query string parameters
  // const pageURL = "https://www.diepresse.com/6191779/Recherche_Niederoesterreich_FakeMails-im-Namen-von-OeVPMitgliedern";

  // Does not have nLang
  // const pageURL = "https://www.diepresse.com/6191779/Recherche_Niederoesterreich_FakeMails-im-Namen-von-OeVPMitgliedern?from=rss";

  // Has query parts, ?from=rss&nLang=arabic
  // const pageURL = "https://www.diepresse.com/6191779/Recherche_Niederoesterreich_FakeMails-im-Namen-von-OeVPMitgliedern?from=rss&nLang=arabic";

  // Has query parts, ?nLang=arabic
  // const pageURL = "https://www.diepresse.com/6191779/Recherche_Niederoesterreich_FakeMails-im-Namen-von-OeVPMitgliedern?nLang=arabic";

  const pageURL = "http://127.0.0.1:5500/index.html?from=rss&nLang=arabic"

  return pageURL;
};


let targetLanguage = "arabic";
// <!-- ========== Delete Up ========== -->


function getURLToBackend() {

  // URL to be appended to the backend API
  let URLToBackend;
  let URLArray = getPageURL().split('?');
  let nonQueryURLPart = URLArray[0];
  let queryPart = URLArray[1];


  // If no query string (?...) is provided, then assign nLangContainedURL to the first part of the URLArray
  if (!queryPart) {

    // No query string specified in URL
    URLToBackend = URLArray[0];
  } else {

    function removeNLangParamsFromURL() {
      // URL returned after checks for nLang query string params
      let nLangContainedURL = URLArray[1];
      var strippedURL;

      // Query string specified in URL

      if ((nLangContainedURL.includes(`&nLang=${targetLanguage}`))) {
        strippedURL = nLangContainedURL.replace(`&nLang=${targetLanguage}`, '');
      } else if ((nLangContainedURL.includes(`?nLang=${targetLanguage}`))) {
        strippedURL = nLangContainedURL.replace(`?nLang=${targetLanguage}`, '');
      } else if (nLangContainedURL === `nLang=${targetLanguage}`) {
        strippedURL = "";
      } else {
        strippedURL = nLangContainedURL;
      }


      return strippedURL
    }



    function joinURLParts() {
      // If NLangParams === ""
      if (!removeNLangParamsFromURL()) {

        return nonQueryURLPart

      } else {

        return nonQueryURLPart + "?" + removeNLangParamsFromURL()
      }
    }





    URLToBackend = joinURLParts();
  }


  console.log("URLToBackend: " + URLToBackend);
  return URLToBackend
}







getURLToBackend();