var newbly = {
  init: function () {


    /*
    * GLOBAL VARIABLES
    * --------------------------------
    * These are the global variables used.
    */

    const release = "1.0.7"; // Current release version
    const stylesheet = `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${release}/lib/css/style.min.css`; // Link to hosted stylesheet
    const IEScript = `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${release}/lib/js/script.js`; // Link to hosted script compatible with IE 11
    const editIconLink = `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${release}/assets/icons/edit-icon.svg`;

    /*
    * Include the stylesheet for Newbly in the head of the page
    */
    document.head.innerHTML += `<link rel="stylesheet" href="${stylesheet}" type="text/css"/>`;

    /*
    * Provide support to legacy IE browser
    */

    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write(`<script src="${IEScript}"><\/script>`);


    var append = {
      appendNewblyPromptModal: function () {


        const newblyPromptModal = `
        <div class="newbly-translation--ui-modal" id="newbly-translation--ui-modal">
              <div class="newbly-translation--ui-modal__title" id="newbly-translation--ui-modal__title">
                Translations are available for this article!
              </div>

              <div class="newbly-translation--ui-modal__text" id="newbly-translation--ui-modal__text">
                Your browser is in <span id="userBrowserLanguage">English</span>
                so we thought you might want to include translations in <span id="suggestedTranslation">English</span> for this
                article.
              </div>

              <div class="newbly-translation--ui-modal__btn-container">
                <button id="include-translation" class="newbly-translation--ui-modal__btn__btn">
                  Include translation!
                </button>

                <button id="cancel-translation" class="newbly-translation--ui-modal__btn__btn">
                  Not this time.
                </button>
              </div>
          </div>
      `;

        document.body.innerHTML += newblyPromptModal;
      },

      appendNewblyTextarea: function (content) {


        const textarea = `
          <div class="enhance-newbly modal-wrapper" id="newbly-textarea-modal-wrapper">
            <div class="enhance-newbly modal" id="">
              <div class="enhance-newbly editable-container" id="newbly-textarea-container">
                <div class="enhance-newbly edit-section">
                  <textarea
                  dir=${getTextDirection()}
                  class="enhance-newbly" spellcheck="false" id="enhance-translations">${content}</textarea>
                  <div class="enhance-newbly edit-buttons" id="">
                    <button class="enhance-newbly" id="save-suggested-changes">
                      Save changes
                    </button>
                    <button class="enhance-newbly" id="cancel-changes">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += textarea;

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyTextareaBtns(content);

      },

      appendNewblyConfirmationModal: function (content) {

        const confirmationPrompt = `
          <!-- Confirmation modal -->
          <div class="enhance-newbly modal-wrapper" id="newbly-enhance-confirmation-modal">
            <div class="enhance-newbly modal" id="">
              <div class="enhance-newbly editable-container" id="">
              <!-- Modal (Are you sure) -->
                <p class="enhance-newbly" id="">Are you sure?!</p>
                <div class="enhance-newbly edit-buttons" id="">
                  <button class="enhance-newbly" id="close-newbly-enhance-textarea">
                    Discard changes</button>
                  <button class="enhance-newbly" id="close-newbly-modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += confirmationPrompt;

        document.getElementById("newbly-enhance-confirmation-modal").style.display = "flex";

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyConfirmationBtns(content);
      },


      appendNewblyAuthenticationModal: function () {

        const authPrompt = `
          <!-- Authentication modal -->
          <div class="enhance-newbly modal-wrapper" id="enhance-newbly-auth-wrapper">
            <div class="enhance-newbly modal">
              <div class="enhance-newbly close-button" id="enhance-newbly-auth-wrapper-close-button"><svg fill="#b0adab" width="35" height="35" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z">
                  </path>
                </svg></div>
              <div class="enhance-newbly modal-content">
                <p class="enhance-newbly" id="enhance-newbly-auth-first-text">Awesome that you contributes by fixing a translation error!</p>
                <p class="enhance-newbly" id="enhance-newbly-auth-second-text">In order for us to review your suggestions, you need to first login. If you don’t have
                  an account yet, it is very easy to sign up!</p>
                  <button class="enhance-newbly login-button" id="enhance-newbly-auth-button"><span
                    class="enhance-newbly">Login / Register</span>
                  </button>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += authPrompt;

        document.getElementById("enhance-newbly-auth-wrapper").style.display = "flex";

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyAuthModalBtns();
      },

    };


    /*
    * Call the appendNewblyPromptModal function to append the Newbly prompt modal to the document
    */
    append.appendNewblyPromptModal();



    var enhanceNewbly = {
      editIconContainer: function (index, translatedText) {
        handleEditIconBtn(index, translatedText);

        /*
        * Append the editIcon to the container containing the translated text
        * fetchArticleTranslated currently calls this function
        */
        const editIcon = `
          <!-- Edit icons -->
          <span class="newbly-translated-text edit-icon" id="edit-icon-${index}">
            <img src="${editIconLink}" alt="Edit">
          </span>
          <!-- Edit icons -->
        `;

        return editIcon;
      },

    };



    var hideModals = {
      textareaModal: function () {
        document.getElementById("newbly-textarea-modal-wrapper").style.display = "none";
      },

      confirmationModal: function () {
        document.getElementById("newbly-enhance-confirmation-modal").style.display = "none";
      },

      authenticationModal: function () {
        document.getElementById("enhance-newbly-auth-wrapper").style.display = "none";
      },

      NewblyTranslatorUIModal: function () {
        // Hide #newbly-translation--ui-modal"
        document.getElementById("newbly-translation--ui-modal").style.display = "none";
      },
    };





    var displayNewblyTextarea = function (translatedText) {

      /*
       * Call the appendNewblyTextarea function to append the Newbly textarea to the document
       * Note that there is display: none in the styles for .modal-wrapper by default
       */
      append.appendNewblyTextarea(translatedText);

      // Change display styles to flex
      document.getElementById("newbly-textarea-modal-wrapper").style.display = "flex";


    };



    var handleEditIconBtn = function (index, translatedText) {
      let editIconId;

      if (index === null) {

        /*
        * If index is null, then, the edit-icon corresponds to that of the articleTitle
        * Article title does not have an index from the response received from the API, remember?
        */
        editIconId = "edit-icon-null"
      } else {
        editIconId = `edit-icon-${index}`
      }

      setTimeout(() => {

        document.getElementById(editIconId).addEventListener("click", function (e) {

          /*
          * Call displayNewblyTextarea in 1s to allow appending of editIcon to the document when the edit icon is clicked
          * So we can attach an even to it
          */

          displayNewblyTextarea(translatedText);


        });

      }, 1000);

    };






    function getTargetLanguage() {

      let targetLanguage;
      let URLHasNLangParam;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params
      if ((urlParams.has("nLang")) || (urlParams.has("nlang"))) {


        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang") || urlParams.get("nlang");

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;


      } else if (!(urlParams.has("nLang")) || !(urlParams.has("nlang"))) {

        // Assign "english" to the target language if URL does not have "nLang"
        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query string
        URLHasNLangParam = false;
      }

      return { targetLanguage, URLHasNLangParam };
    }




    /*
    * ALL CURRENTLY SUPPORTED TRANSLATIONS
    * ----------------------------------------------------------------
    * This array contains a list of currently available newBlyAvailableTranslations, update as necessary
    * Please update as more translations are available
    */

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

    /*
    * UI Modal languages
    *----------------------------------------------------------------
    * This newblyUIModalLanguages object corresponds to the translations of the UI
    * IF YOU ADD ADDITIONAL LANGUAGE SUPPORT TO THE newBlyAvailableLanguageTranslations array, DO WELL UPDATE newblyUIModalLanguages TOO
    */

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
      },
    };



    function getLongBrowserLanguage() {

      // This function provides translations of the Newbly Modal depending on the shortLang, like fr, en, sr, ru

      let newblyUIModalLang = newblyUIModalLanguages,
        newblyModalTitle,
        newblyModalIncludeText,
        newblyModalCancelText,
        newblyTranslationConsentText;

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

      return { longLang, newblyUIModalLang, newblyModalTitle, newblyTranslationConsentText, newblyModalIncludeText, newblyModalCancelText };
    }



    function isNewblyTranslationAvailable() {
      // if userBrowserLanguage is part of newBlyAvailableTranslations, then translation is supported

      let isTranslationAvailable;

      for (let i = 0; i < newBlyAvailableLanguageTranslations.length; i++) {


        if (newBlyAvailableLanguageTranslations[i] === getShortBrowserLanguage()) {

          isTranslationAvailable = true;
          console.log("Newbly translation is available for: " + getLongBrowserLanguage().longLang);
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
          };
        };
      };

      // support for other well known properties in browsers
      for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
          return language;
        };
      };

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


      // Instantiate the isNewblyTranslatorUIDisplayed var
      let isNewblyTranslatorUIDisplayed;


      // If targetLanguage is not specified in the URL query params, and if Newbly translation is available, the display the translator modal
      if (!(getTargetLanguage().URLHasNLangParam) && (isNewblyTranslationAvailable())) {


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
      } else if (!(isNewblyTranslationAvailable())) {

        // If Newbly translation is not available for the browser language, then log the error in the console
        console.error("Newbly translation is not currently available for this page. Browser language is: " + getFirstBrowserLanguage());

        isNewblyTranslatorUIDisplayed = false;

      }


      return isNewblyTranslatorUIDisplayed;

    };




    var initNewblyTranslatorUIBtns = {

      includeTranslation: function () {
        var includeTranslationBtn = document.getElementById("include-translation");

        includeTranslationBtn.addEventListener("click", function (e) {

          // Call the function to start fetching translations from backend
          startNewblyTranslation();

          console.info("Newbly translation started");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();
        }); // Translation started



      },

      cancelTranslations: function () {
        var cancelTranslationBtn = document.getElementById("cancel-translation");

        cancelTranslationBtn.addEventListener("click", function (e) {
          console.info("Newbly translation cancelled");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();
        }); // Translation cancelled


      },
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



    function newblyBackendAPI() {

      // This refers to the Newbly backend API URL for a specific article gotten through the pageURL
      let API_URL;


      if (!getTargetLanguage().URLHasNLangParam) {
        API_URL = "https://api.newb.ly/articles/?language=" + getLongBrowserLanguage().longLang.toLowerCase() + "&url=" + getURLToBackend();
      } else {
        API_URL = "https://api.newb.ly/articles/?language=" + getTargetLanguage().targetLanguage + "&url=" + getURLToBackend()
      }


      return API_URL;
    };






    /*
    * Actions and activities that happen in the enhance modal
    * These functions control the displaying of the different modals depending on the action taken from the different buttons
    * These modals include the textareaModal, confirmationModal, authenticationModal
    */
    var enhanceNewblyModalActions = {

      // cancel button
      handleTextareaCancelBtn: function (content) {
        hideModals.textareaModal();


        /*
        * Call the appendNewblyConfirmationModal function to append the Newbly confirmation modal to the document
        * Note that there is display: none in the styles for .modal-wrapper by default
        */

        append.appendNewblyConfirmationModal(content);


      },

      // Save changes button
      handleSaveChangesBtn: function () {
        let isSignedIn = isUserLoggedIn().isLoggedIn;
        console.log("isSignedIn :" + isSignedIn);


        if (isSignedIn) {

          saveSuggestion("updatedTranslations");
        } else {
          append.appendNewblyAuthenticationModal();
        }
      },

      // cancel button in confirmation modal
      handleCancelConfirmationBtn: function (content) {
        hideModals.confirmationModal();

        displayNewblyTextarea();
      },

      // Discard changes button in confirmation modal upon click, will hide the modal
      handleDiscardChangesBtn: function () {

        hideModals.textareaModal();
        hideModals.confirmationModal();


        // TODO Write a function to allow editBtn to still be clicked agin
        handleEditIconBtn(5, "translatedText");

      },

      handleCloseAuthModalBtn: function (e) {

        // Hide the textarea modal
        hideModals.textareaModal();

        // Hide the authentication prompt modal
        hideModals.authenticationModal();
      },

      handleAuthBtn: function (e) {


        // Hide the authentication prompt modal
        hideModals.authenticationModal();


      },



    };



    /*
    * Initialize buttons in the enhance modals such as texareaModal, confirmationModal, authenticationModal, etc
    * Depending upon the button that was clicked,
    * Call the corresponding function
    */

    var initModalBtns = {
      newblyTextareaBtns: function (content) {

        document.getElementById("cancel-changes").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleTextareaCancelBtn(content);
        });

        document.getElementById("save-suggested-changes").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleSaveChangesBtn(content);
        })
      },


      newblyConfirmationBtns: function (content) {

        document.getElementById("close-newbly-modal").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleCancelConfirmationBtn(content);
        });

        document.getElementById("close-newbly-enhance-textarea").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleDiscardChangesBtn(content);
        })
      },


      newblyAuthModalBtns: function () {

        document.getElementById("enhance-newbly-auth-wrapper-close-button").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleCloseAuthModalBtn();
        });

        document.getElementById("enhance-newbly-auth-button").addEventListener("click", function (e) {
          enhanceNewblyModalActions.handleAuthBtn();
        });

      },

    }



    var startNewblyTranslation = function (fetchURL) {

      let result = "";

      async function fetchArticleFromBackend(fetchURL) {
        let response = await fetch(fetchURL);
        let data = await response.json();

        if (response.ok) {

          return data;
        } else {
          console.error("Something went wrong while contacting the Newbly server. Could not fetch translations.")
          return false;
        }
      }


      async function fetchFnc(fetchURL) {
        result = await fetchArticleFromBackend(fetchURL);
        fetchData(result);
      };


      fetchFnc(newblyBackendAPI());


      // Set the fetch data
      var fetchData = function (data) {

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
      };



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

              getContainerAndContent(container, container.innerText);

            }
          }


        }

        return (container, container.innerText);

      }


      var appendTranslation = function (container, translatedText) {

        if (getTargetLanguage().targetLanguage === "arabic" || getLongBrowserLanguage().longLang.toLowerCase() === "arabic") {

          //  Add RTL stylings if translation target language is arabic
          container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text arabic'>" + translatedText + "</p>");

        } else {

          // Use insertAdjacentHTML to insert the translatedText using HTML format right a the articleTitle
          container.insertAdjacentHTML("beforeend", "<p class='newbly-translated-text'>" + translatedText + "</p>");

        }
      };



      var getContainerAndContent = function (container) {


        var fetchArticleTranslated = function () {

          // For article Title

          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;


          // If the container innerText of the document matches with articleTitle, the append articleTitleTranslated

          if (container.innerText === articleTitle) {

            appendTranslation(container, articleTitleTranslated);

            /*
            * Append the editIcon to the container and pass null as an id and articleTitleTranslated as parameters to it
            */
            container.insertAdjacentHTML("beforeend", enhanceNewbly.editIconContainer(null, articleTitleTranslated));

          }


          // For article Content

          var articleContentTranslated = result.articleContentTranslated;
          var articleContent = result.articleContent;



          // Loop through array of articleContent and replace them article one by one with the respective translated version

          for (let i = 0; i < articleContent.length; i++) {



            // If the container innerText  of the document matches with articleContent[i], the append articleContentTranslated[i]


            if (container.innerText === articleContent[i]) {

              // Use insertAdjacentHTML to insert the articleContentTranslated[i] using HTML format right a the articleTitle

              appendTranslation(container, articleContentTranslated[i]);

              // Append the editIcon to container and pass the index of the translatedContent and articleContentTranslated[i] as parameters to it
              container.insertAdjacentHTML("beforeend", enhanceNewbly.editIconContainer(i, articleContentTranslated[i]));

            };

          };


        };


        fetchArticleTranslated();


      };


    };


    function getTextDirection() {
      let textDirection;

      if (getShortBrowserLanguage() === "ar") {
        textDirection = "rtl"
      } else {
        textDirection = "ltr"
      }


      return textDirection;
    };





    console.log("Newbly translation initialized. Learn more here: https://newb.ly/");
    console.info("Ξunit");





    /*
      * Controls wether to start translations or display the consent modal
      *----------------------------------------------------------------
      * If URLHasNLangParam === true, then start translations automatically
      * If URLHasNLangParam !== true, then start display the translation consent modal
    */

    if (getTargetLanguage().URLHasNLangParam) {
      // Call the function to start fetching translations from backend
      startNewblyTranslation();
    } else {

      // Call the displayNewblyTranslatorUIModal function to display the Newbly prompt modal to suggest translation
      displayNewblyTranslatorUIModal();
    }


    var isUserLoggedIn = function (user) {
      // checks if user is logged in and  if so, returns  true

      let logInStatus = true;

      let isLoggedIn;
      user = null;

      if (logInStatus) {
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }

      return { isLoggedIn, user };
    };


    async function getArticleId(fetchURL) {
      let articleId = "";

      let response = await fetch(fetchURL);
      let data = await response.json();

      if (response.ok) {
        articleId = data.articleId;

        return articleId;
      } else {
        console.error("Something went wrong while contacting the Newbly server. Could not fetch articleId.")
        return false;
      }

    }


    async function saveSuggestion(articleContentIndex, updatedTranslations) {


      let articleId = await getArticleId(newblyBackendAPI());


      const payload = {
        "articleContentIndex": articleContentIndex,
        "articleTranslatedPartCorrection": updatedTranslations,
      };

      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };


      fetch(`https://api.newb.ly/articles/${articleId}/suggestion`, options)
        .then(data => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        }).then(update => {
          console.log(update);
        }).catch(e => {
          console.log(e);
        });
    };


  }

};



// Initialize Newbly translation
newbly.init();
