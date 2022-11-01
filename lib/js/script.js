"use strict";

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
              function(value) { step("next", value); },
              function(err) { step("throw", err); });
        }
      }
      return step("next");
    });
  };
}

var newbly = {
  init : function init() {
    var updateDOMContentWithLocalStorage = function() {
      var _ref = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            var localStorageArticleContent, title, content, i, currentElement;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getLocalStorageArticleContent();

                case 2:
                  localStorageArticleContent = _context.sent;

                  // Initialize these variables depending on if they exist on
                  // the local storage
                  title = void 0;
                  content = void 0;

                  if (localStorageArticleContent !== null) {
                    title = localStorageArticleContent.title;
                  } else {
                    title = "";
                  };

                  if (localStorageArticleContent !== null) {
                    content = localStorageArticleContent.content;
                  } else {
                    content = [];
                  };

                  // Replace the title with content from localStorage
                  document.getElementById("newbly-translated-text-null")
                      .innerHTML = title;

                  for (i = 0; i < content.length; i++) {
                    currentElement =
                        document.getElementById("newbly-translated-text-" + i);

                    if (content[i] && currentElement) {
                      document.getElementById("newbly-translated-text-" + i)
                          .innerHTML = content[i];
                    }
                  }

                case 11:
                case "end":
                  return _context.stop();
                }
              }
            }, _callee, this);
          }));

      return function updateDOMContentWithLocalStorage() {
        return _ref.apply(this, arguments);
      };
    }();

    var getArticleId = function() {
      var _ref2 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
            var articleId, fetchURL, response, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                case 0:
                  articleId = "";
                  fetchURL = newblyBackendAPI();
                  _context2.next = 4;
                  return fetch(fetchURL);

                case 4:
                  response = _context2.sent;
                  _context2.next = 7;
                  return response.json();

                case 7:
                  data = _context2.sent;

                  if (!response.ok) {
                    _context2.next = 13;
                    break;
                  }

                  articleId = data.articleId;

                  return _context2.abrupt("return", articleId);

                case 13:
                  console.error(
                      "Something went wrong while contacting the Newbly server. Could not fetch articleId.");
                  toastr.error(
                      "Something went wrong while contacting the Newbly server. Could not fetch articleId.");
                  return _context2.abrupt("return", false);

                case 16:
                case "end":
                  return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

      return function getArticleId() { return _ref2.apply(this, arguments); };
    }();

    var localStorageArticleKey = function() {
      var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
            var articleId, key;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return getArticleId();

                case 2:
                  articleId = _context3.sent;
                  key = getLongBrowserLanguage().longLang.toLowerCase() + "_" +
                        articleId;
                  return _context3.abrupt("return", key);

                case 5:
                case "end":
                  return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

      return function
      localStorageArticleKey() { return _ref3.apply(this, arguments); };
    }();

    var setLocalStorageArticleContent = function() {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(
          function _callee4(articleId, articleContent) {
            var key, localStorageArticleContent, title, content, suggestions,
                value, index;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return localStorageArticleKey();

                case 2:
                  key = _context4.sent;
                  _context4.next = 5;
                  return getLocalStorageArticleContent();

                case 5:
                  localStorageArticleContent = _context4.sent;

                  // Initialize these variables depending on if they exist on
                  // the local storage
                  title = void 0;
                  content = void 0;
                  suggestions = void 0;

                  if (localStorageArticleContent !== null) {
                    title = localStorageArticleContent.title;
                  } else {
                    title = "";
                  };

                  if (localStorageArticleContent !== null) {
                    content = localStorageArticleContent.content;
                  } else {
                    content = [];
                  };

                  if (localStorageArticleContent !== null) {
                    suggestions = localStorageArticleContent.suggestions;
                  } else {
                    suggestions = [];
                  };

                  value = {
                    title : title,
                    suggestions : suggestions,
                    content : content
                  };

                  // This part represent the article title since it is assigned
                  // an Id of null

                  if (articleId === null) {
                    value.title = articleContent;
                  }

                  // This part corresponds to an acyual articleContent since we
                  // never assigned articleId as null
                  if (articleId !== null) {
                    index = articleId;

                    // If suggestion has already been provided, then, replace
                    // that suggestion with the new one

                    if (value.content[articleId]) {
                      value.content.splice(articleId, 1, articleContent);
                      // Else add the suggestion to the array since it does not
                      // already exist
                    } else {
                      value.content.push(articleContent);
                    }
                  }

                  // Keep track of the number of suggestions done by the user
                  value.suggestions.push(value.suggestions.length);

                  // Set the value to localStorage
                  localStorage.setItem(key, JSON.stringify(value));

                  // function to replace DOM content with that from localStorage
                  _context4.next = 22;
                  return updateDOMContentWithLocalStorage();

                case 22:
                case "end":
                  return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

      return function setLocalStorageArticleContent(
          _x, _x2) { return _ref4.apply(this, arguments); };
    }();

    var getLocalStorageArticleContent = function() {
      var _ref5 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
            var key;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return localStorageArticleKey();

                case 2:
                  key = _context5.sent;
                  return _context5.abrupt(
                      "return", JSON.parse(localStorage.getItem(key)));

                case 4:
                case "end":
                  return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

      return function
      getLocalStorageArticleContent() { return _ref5.apply(this, arguments); };
    }();

    var replaceDOMContentWithCustomSuggestions = function() {
      var _ref6 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
            var localStorageKey, articleId, generatedKey;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return localStorageArticleKey();

                case 2:
                  localStorageKey = _context6.sent;
                  _context6.next = 5;
                  return getArticleId();

                case 5:
                  articleId = _context6.sent;
                  generatedKey =
                      getLongBrowserLanguage().longLang.toLowerCase() + "_" +
                      articleId;

                  if (!(localStorageKey === generatedKey)) {
                    _context6.next = 10;
                    break;
                  }

                  _context6.next = 10;
                  return updateDOMContentWithLocalStorage();

                case 10:
                case "end":
                  return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

      return function replaceDOMContentWithCustomSuggestions() {
        return _ref6.apply(this, arguments);
      };
    }();

    var saveSuggestion = function() {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(
          function _callee7(articleContentIndex, updatedTranslations) {
            var articleId, payload, options;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return getArticleId();

                case 2:
                  articleId = _context7.sent;
                  payload = {
                    articleContentIndex : articleContentIndex,
                    articleTranslatedPartCorrection : updatedTranslations
                  };
                  options = {
                    method : "PATCH",
                    headers : {
                      Accept : "application/json",
                      "Content-Type" : "application/json; charset=UTF-8",
                      Authorization : "Bearer " + keycloak.token
                    },
                    body : JSON.stringify(payload)
                  };

                  fetch("https://api.newb.ly/articles/" + articleId +
                            "/suggestion",
                        options)
                      .then(function(data) {
                        if (!data.ok) {
                          setSuggestionsSentToBackend(false);
                          throw Error(data.status);
                        }
                        return data.json();
                      })
                      .then(function(response) {
                        console.info(
                            "The suggestion was successfully submitted!");
                        toastr.success(
                            "The suggestion was successfully submitted!");
                        setSuggestionsSentToBackend(true);
                      })
                      .catch(function(e) {
                        console.error("An error occurred: " + e);
                        toastr.error("An error occurred");
                        setSuggestionsSentToBackend(false);
                      });

                case 6:
                case "end":
                  return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

      return function saveSuggestion(
          _x3, _x4) { return _ref7.apply(this, arguments); };
    }();

    /*
     * This function loadData is called when the user is authenticated
     * If the user is not authenticated, this function will not be called
     * This function retrieves user details
     */

    /*
     * GLOBAL VARIABLES
     * --------------------------------
     * These are the global variables used.
     */

    var release = "1.0.10"; // Current release version
    var stylesheet = "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" +
                     release +
                     "/lib/css/style.min.css"; // Link to hosted stylesheet
    var IEScript =
        "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" + release +
        "/lib/js/script.js"; // Link to hosted script compatible with IE
    // 11
    var editIconLink =
        "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" + release +
        "/assets/icons/edit-icon.svg";
    var keycloakFileURL =
        "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" + release +
        "/vendor/keycloak.min.js";
    var toastrScript =
        "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" + release +
        "/vendor/toastr.min.js";
    var toastrStyle = "https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@" +
                      release + "/vendor/toastr.min.css";

    /*
     * Include the jQuery script in the head of the page from Cloudflare CDN
     */
    document.head.innerHTML +=
        "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>";

    /*
     * Include the stylesheet for Newbly in the head of the page
     */
    document.head.innerHTML += "<link rel=\"stylesheet\" href=\"" + stylesheet +
                               "\" type=\"text/css\"/>";

    /*
     * Provide support to legacy IE browser
     */

    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent))
      document.write("<script src=\"" + IEScript + "\"></script>");

    /*
     * Include the toastr styles in the head of the page
     */
    document.head.innerHTML += "<link rel=\"stylesheet\" href=\"" +
                               toastrStyle + "\" type=\"text/css\"/>";

    /*
     * Include the toastr script in the head of the page
     */
    document.head.innerHTML += "<script src=\"" + toastrScript + "\"></script>";

    /*
     * Include the keycloakFileURL script in the head of the page
     */
    document.head.innerHTML +=
        "<script src=\"" + keycloakFileURL + "\"></script>";

    /*
     * Get current page URL
     * --------------------------------------------------------------
     * function to return current page URL
     */

    function getPageURL() {
      var pageURL = window.location.href;
      return pageURL;
    }

    /*
     * KEYCLOAK ADAPTER
     * --------------------------------------------------------------
     * Keycloak is used to provide authentication service for user
     * If a user needs to submit their correction, then they must be
     * authenticated We use Keycloak to handle auth
     */

    setTimeout(function() {
      var keycloak = Keycloak({
        realm : "newbly",
        "auth-server-url" : "https://sso.newb.ly/auth",
        "ssl-required" : "external",
        resource : "newbly",
        "public-client" : true,
        "confidential-port" : 0,
        url :
            "https://sso.newb.ly/auth/realms/newbly/protocol/openid-connect/auth?client_id=newbly-ui&redirect_uri=" +
                getPageURL() +
                "&state=addc88ed-299c-4a1b-b304-555bdffb8909&response_mode=fragment&response_type=code&scope=openid&nonce=e19093ff-fab9-4a80-80a8-99f9a979a836",
        clientId : "newbly-api",
        "enable-cors" : true
      });
    }, 3000);

    function setTranslationModalViewed() {
      localStorage.setItem("@translationModalViewed", true);
    }

    function getTranslationModalViewed() {
      return JSON.parse(localStorage.getItem("@translationModalViewed"));
    }

    var loadData = function loadData() {
      if (keycloak.idToken) {
        // IDToken
        console.log(keycloak.idTokenParsed);
      } else {
        keycloak.loadUserProfile(
            function() {
              // Account Service
              console.log(keycloak.profile);
            },
            function() {
              console.log(
                  "Failed to retrieve user details. Please enable claims or account role");
            });
      }
    };

    /*
     * This function loadFailure is called when the user is not authenticated
     * If the user is authenticated, this  function will not be called
     */
    var loadFailure = function loadFailure() {
      console.error("Failed to load data. Check console log");
      toastr.error("Failed to load data. Check console log");
    };

    var reloadData = function reloadData() {
      keycloak.updateToken(30).then(loadData).catch(function() {
        loadFailure();
        console.error("Failed to load data. User is logged out.");
        toastr.error("Failed to load data. User is logged out.");
      });
    };

    /*
     * ALL CURRENTLY SUPPORTED TRANSLATIONS
     * ----------------------------------------------------------------
     * This array contains a list of currently available
     * newBlyAvailableTranslations, update as necessary Please update as more
     * translations are available
     */

    var newBlyAvailableLanguageTranslations = [
      "ar", // Arabic
      // "bh", // Hindi
      "hr", // Croatian
      "en", // English
      "ro", // Romanian
      "ru", // Russian
      "sr", // Serbian
      "tr", // Turkish
      "uk"
    ];

    /*
     * UI Modal languages
     *----------------------------------------------------------------
     * This newblyUIModalLanguages object corresponds to the translations of the
     *UI IF YOU ADD ADDITIONAL LANGUAGE SUPPORT TO THE
     *newBlyAvailableLanguageTranslations array, DO WELL UPDATE
     *newblyUIModalLanguages TOO
     */

    var newblyUIModalLanguages = {
      ar : {
        title : "الترجمات متوفرة لهذا المقال!",
        includeText : "تضمين الترجمة!",
        notThisTime : "ليس هذه المرة.",
        translationConsentText :
            "متصفحك باللغة العربية لذلك اعتقدنا أنك قد ترغب في تضمين ترجمات باللغة العربية لهذه المقالة.",
        saveChanges : "احفظ التغييرات",
        cancel : "يلغي",
        discardChanges : "تجاهل التغييرات",
        loginRegister : "دخولتسجيل",
        authTextOne : "رائع! لقد ساهمت بإصلاح خطأ في الترجمة!",
        authTextTwo :
            "لكي نتمكن من مراجعة اقتراحاتك ، عليك أولاً تسجيل الدخول. إذا لم يكن لديك حساب بعد ، فإن التسجيل سهل للغاية!",
        areYouSure : "هل أنت واثق؟"
      },
      bh : {
        title : "इस लेख के लिए अनुवाद उपलब्ध हैं!",
        includeText : "अनुवाद शामिल करें!",
        notThisTime : "इस समय नहीं।",
        translationConsentText :
            "आपका ब्राउज़र हिंदी में है इसलिए हमने सोचा कि आप इस लेख के लिए हिंदी में अनुवाद शामिल करना चाहेंगे।",
        saveChanges : "परिवर्तनों को सुरक्षित करें",
        cancel : "रद्द करना",
        discardChanges : "परिवर्तनों को निरस्त करें",
        loginRegister : "लॉग इन / रजिस्टर",
        authTextOne : "बहुत बढ़िया! आपने अनुवाद त्रुटि को ठीक करके योगदान दिया है!",
        authTextTwo :
            "हमारे लिए आपके सुझावों की समीक्षा करने के लिए, आपको पहले लॉग इन करना होगा। यदि आपके पास अभी तक कोई खाता नहीं है, तो साइन अप करना बहुत आसान है!",
        areYouSure : "क्या आपको यकीन है?"
      },
      en : {
        title : "Translations available for this article!",
        includeText : "Include translation!",
        notThisTime : "Not this time.",
        translationConsentText :
            "Your browser is in English so we thought you might want to include translations in English for this article.",
        saveChanges : "Save changes",
        cancel : "Cancel",
        discardChanges : "Discard changes",
        loginRegister : "Login / Register",
        authTextOne : "Awesome! You contributed by fixing a translation error!",
        authTextTwo :
            "In order for us to review your suggestions, you need first to log in. If you do not yet have an account, signing up is very easy!",
        areYouSure : "Are you sure?"
      },
      fr : {
        title : "Des traductions sont disponibles pour cet article !",
        includeText : "Inclure la traduction !",
        notThisTime : "Pas cette fois.",
        translationConsentText :
            "Votre navigateur est en français, nous avons donc pensé que vous voudriez peut-être inclure des traductions en français pour cet article.",
        saveChanges : "Sauvegarder les modifications",
        cancel : "Annuler",
        discardChanges : "Annuler les modifications",
        loginRegister : "Connexion ou Inscription",
        authTextOne :
            "Impressionnant! Vous avez contribué en corrigeant une erreur de traduction !",
        authTextTwo :
            "Pour que nous puissions examiner vos suggestions, vous devez d'abord vous connecter. Si vous n'avez pas encore de compte, l'inscription est très simple !",
        areYouSure : "Êtes-vous sûr?"
      },
      hr : {
        title : "Prijevodi su dostupni za ovaj članak!",
        includeText : "Uključi prijevod!",
        notThisTime : "Ne ovaj put.",
        translationConsentText :
            "Vaš preglednik je na hrvatskom pa smo mislili da biste mogli uključiti prijevode na hrvatski za ovaj članak.",
        saveChanges : "Spremi promjene",
        cancel : "Otkazati",
        discardChanges : "Odbaciti promjene",
        loginRegister : "Prijavite se ili se registrirajte",
        authTextOne :
            "Super! Doprinijeli ste ispravljanjem pogreške u prijevodu!",
        authTextTwo :
            "Kako bismo mogli pregledati vaše prijedloge, morate se prvo prijaviti. Ako još nemate račun, prijava je vrlo jednostavna!",
        areYouSure : "Jesi li siguran?"
      },
      ro : {
        title : "Sunt disponibile traduceri pentru acest articol!",
        includeText : "Includeți traducerea!",
        notThisTime : "Nu de data asta.",
        translationConsentText :
            "Browserul dvs. este în limba română, așa că ne-am gândit că ați dori să includeți traduceri în limba română pentru acest articol.",
        saveChanges : "Salvează modificările",
        cancel : "Anulare",
        discardChanges : "Renunțați la modificări",
        loginRegister : "Autentificați-vă sau înregistrați-vă",
        authTextOne :
            "Minunat! Ai contribuit prin remedierea unei erori de traducere!",
        authTextTwo :
            "Pentru ca noi să examinăm sugestiile dvs., trebuie mai întâi să vă conectați. Dacă nu aveți încă un cont, înregistrarea este foarte ușoară!",
        areYouSure : "Esti sigur?"
      },
      ru : {
        title : "Для этой статьи доступны переводы!",
        includeText : "Включите перевод!",
        notThisTime : "Не в этот раз.",
        translationConsentText :
            "Ваш браузер на русском языке, поэтому мы подумали, что вы, возможно, захотите включить русский перевод для этой статьи.",
        saveChanges : "Сохранить изменения",
        cancel : "Отмена",
        discardChanges : "Отменить изменения",
        loginRegister : "Войдите или зарегистрируйтесь",
        authTextOne :
            "Потрясающий! Вы внесли свой вклад, исправив ошибку перевода!",
        authTextTwo :
            "Чтобы мы рассмотрели ваши предложения, вам необходимо сначала войти в систему. Если у вас еще нет учетной записи, зарегистрироваться очень просто!",
        areYouSure : "Ты уверен?"
      },
      sr : {
        title : "Преводи су доступни за овај чланак!",
        includeText : "Укључи превод!",
        notThisTime : "Не овог пута.",
        translationConsentText :
            "Ваш претраживач је на српском, па смо мислили да бисте могли да укључите преводе на српски за овај чланак.",
        saveChanges : "Сачувај измене",
        cancel : "Поништити, отказати",
        discardChanges : "Одбаците промене",
        loginRegister : "Пријавите се или региструјте",
        authTextOne : "Сјајно! Ви сте допринели исправљањем грешке у преводу!",
        authTextTwo :
            "Да бисмо прегледали ваше предлоге, прво се морате пријавити. Ако још увек немате налог, регистрација је веома лака!",
        areYouSure : "Да ли сте сигурни?"
      },
      tr : {
        title : "Bu makale için çeviriler mevcuttur!",
        includeText : "Çeviri dahil!",
        notThisTime : "Bu sefer değil.",
        translationConsentText :
            "Tarayıcınız Türkçe olduğu için bu makaleye Türkçe çeviriler eklemek isteyebileceğinizi düşündük.",
        saveChanges : "Değişiklikleri Kaydet",
        cancel : "İptal",
        discardChanges : "Değişiklikleri gözardı et",
        loginRegister : "Giriş yap veya kaydol",
        authTextOne :
            "Mükemmel! Bir çeviri hatasını düzelterek katkıda bulundunuz!",
        authTextTwo :
            "Önerilerinizi inceleyebilmemiz için öncelikle giriş yapmanız gerekiyor. Henüz bir hesabınız yoksa üye olmak çok kolay!",
        areYouSure : "Emin misin?"
      },
      uk : {
        title : "Для цієї статті доступні переклади!",
        includeText : "Включіть переклад!",
        notThisTime : "Не цього разу.",
        translationConsentText :
            "Ваш веб-переглядач україномовний, тому ми подумали, що ви можете включити переклад українською для цієї статті.",
        saveChanges : "Зберегти зміни",
        cancel : "Скасувати",
        discardChanges : "Скасувати зміни",
        loginRegister : "Увійти або зареєструватися",
        authTextOne :
            "Чудово! Ви зробили свій внесок, виправивши помилку перекладу!",
        authTextTwo :
            "Щоб ми могли розглянути ваші пропозиції, вам потрібно спочатку ввійти. Якщо у вас ще немає облікового запису, зареєструватися дуже просто!",
        areYouSure : "Ти впевнений?"
      }
    };

    function getLongBrowserLanguage() {
      // This function provides translations of the Newbly Modal depending on
      // the shortLang, like fr, en, sr, ru

      var newblyUIModalLang = newblyUIModalLanguages, newblyModalTitle = void 0,
          newblyModalIncludeText = void 0, newblyModalCancelText = void 0,
          newblyTranslationConsentText = void 0, saveChanges = void 0,
          cancel = void 0, discardChanges = void 0, loginRegister = void 0,
          authTextOne = void 0, authTextTwo = void 0, areYouSure = void 0;

      switch (getShortBrowserLanguage()) {
      case "ar":
        longLang = "Arabic";
        newblyModalTitle = newblyUIModalLang.ar.title;
        newblyModalIncludeText = newblyUIModalLang.ar.includeText;
        newblyModalCancelText = newblyUIModalLang.ar.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ar.translationConsentText;
        saveChanges = newblyUIModalLang.ar.saveChanges;
        cancel = newblyUIModalLang.ar.cancel;
        discardChanges = newblyUIModalLang.ar.discardChanges;
        loginRegister = newblyUIModalLang.ar.loginRegister;
        authTextOne = newblyUIModalLang.ar.authTextOne;
        authTextTwo = newblyUIModalLang.ar.authTextTwo;
        areYouSure = newblyUIModalLang.ar.areYouSure;
        break;
      case "bh":
        longLang = "Bihari";
        newblyModalTitle = newblyUIModalLang.bh.title;
        newblyModalIncludeText = newblyUIModalLang.bh.includeText;
        newblyModalCancelText = newblyUIModalLang.bh.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.bh.translationConsentText;
        saveChanges = newblyUIModalLang.bh.saveChanges;
        cancel = newblyUIModalLang.bh.cancel;
        discardChanges = newblyUIModalLang.bh.discardChanges;
        loginRegister = newblyUIModalLang.bh.loginRegister;
        authTextOne = newblyUIModalLang.bh.authTextOne;
        authTextTwo = newblyUIModalLang.bh.authTextTwo;
        areYouSure = newblyUIModalLang.bh.areYouSure;
        break;
      case "en":
        longLang = "English";
        newblyModalTitle = newblyUIModalLang.en.title;
        newblyModalIncludeText = newblyUIModalLang.en.includeText;
        newblyModalCancelText = newblyUIModalLang.en.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.en.translationConsentText;
        saveChanges = newblyUIModalLang.en.saveChanges;
        cancel = newblyUIModalLang.en.cancel;
        discardChanges = newblyUIModalLang.en.discardChanges;
        loginRegister = newblyUIModalLang.en.loginRegister;
        authTextOne = newblyUIModalLang.en.authTextOne;
        authTextTwo = newblyUIModalLang.en.authTextTwo;
        areYouSure = newblyUIModalLang.en.areYouSure;
        break;
      case "fr":
        longLang = "French";
        newblyModalTitle = newblyUIModalLang.fr.title;
        newblyModalIncludeText = newblyUIModalLang.fr.includeText;
        newblyModalCancelText = newblyUIModalLang.fr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.fr.translationConsentText;
        saveChanges = newblyUIModalLang.fr.saveChanges;
        cancel = newblyUIModalLang.fr.cancel;
        discardChanges = newblyUIModalLang.fr.discardChanges;
        loginRegister = newblyUIModalLang.fr.loginRegister;
        authTextOne = newblyUIModalLang.fr.authTextOne;
        authTextTwo = newblyUIModalLang.fr.authTextTwo;
        areYouSure = newblyUIModalLang.fr.areYouSure;
        break;
      case "hr":
        longLang = "Croatian";
        newblyModalTitle = newblyUIModalLang.hr.title;
        newblyModalIncludeText = newblyUIModalLang.hr.includeText;
        newblyModalCancelText = newblyUIModalLang.hr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.hr.translationConsentText;
        saveChanges = newblyUIModalLang.hr.saveChanges;
        cancel = newblyUIModalLang.hr.cancel;
        discardChanges = newblyUIModalLang.hr.discardChanges;
        loginRegister = newblyUIModalLang.hr.loginRegister;
        authTextOne = newblyUIModalLang.hr.authTextOne;
        authTextTwo = newblyUIModalLang.hr.authTextTwo;
        areYouSure = newblyUIModalLang.hr.areYouSure;
        break;
      case "ro":
        longLang = "Romanian";
        newblyModalTitle = newblyUIModalLang.ro.title;
        newblyModalIncludeText = newblyUIModalLang.ro.includeText;
        newblyModalCancelText = newblyUIModalLang.ro.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ro.translationConsentText;
        saveChanges = newblyUIModalLang.ro.saveChanges;
        cancel = newblyUIModalLang.ro.cancel;
        discardChanges = newblyUIModalLang.ro.discardChanges;
        loginRegister = newblyUIModalLang.ro.loginRegister;
        authTextOne = newblyUIModalLang.ro.authTextOne;
        authTextTwo = newblyUIModalLang.ro.authTextTwo;
        areYouSure = newblyUIModalLang.ro.areYouSure;
        break;
      case "ru":
        longLang = "Russian";
        newblyModalTitle = newblyUIModalLang.ru.title;
        newblyModalIncludeText = newblyUIModalLang.ru.includeText;
        newblyModalCancelText = newblyUIModalLang.ru.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ru.translationConsentText;
        saveChanges = newblyUIModalLang.ru.saveChanges;
        cancel = newblyUIModalLang.ru.cancel;
        discardChanges = newblyUIModalLang.ru.discardChanges;
        loginRegister = newblyUIModalLang.ru.loginRegister;
        authTextOne = newblyUIModalLang.ru.authTextOne;
        authTextTwo = newblyUIModalLang.ru.authTextTwo;
        areYouSure = newblyUIModalLang.ru.areYouSure;
        break;
      case "sr":
        longLang = "Serbian";
        newblyModalTitle = newblyUIModalLang.sr.title;
        newblyModalIncludeText = newblyUIModalLang.sr.includeText;
        newblyModalCancelText = newblyUIModalLang.sr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.sr.translationConsentText;
        saveChanges = newblyUIModalLang.sr.saveChanges;
        cancel = newblyUIModalLang.sr.cancel;
        discardChanges = newblyUIModalLang.sr.discardChanges;
        loginRegister = newblyUIModalLang.sr.loginRegister;
        authTextOne = newblyUIModalLang.sr.authTextOne;
        authTextTwo = newblyUIModalLang.sr.authTextTwo;
        areYouSure = newblyUIModalLang.sr.areYouSure;
        break;
      case "tr":
        longLang = "Turkish";
        newblyModalTitle = newblyUIModalLang.tr.title;
        newblyModalIncludeText = newblyUIModalLang.tr.includeText;
        newblyModalCancelText = newblyUIModalLang.tr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.tr.translationConsentText;
        saveChanges = newblyUIModalLang.uk.saveChanges;
        cancel = newblyUIModalLang.uk.cancel;
        discardChanges = newblyUIModalLang.uk.discardChanges;
        loginRegister = newblyUIModalLang.uk.loginRegister;
        authTextOne = newblyUIModalLang.uk.authTextOne;
        authTextTwo = newblyUIModalLang.uk.authTextTwo;
        areYouSure = newblyUIModalLang.tr.areYouSure;
        break;
      case "uk":
        longLang = "Ukrainian";
        newblyModalTitle = newblyUIModalLang.uk.title;
        newblyModalIncludeText = newblyUIModalLang.uk.includeText;
        newblyModalCancelText = newblyUIModalLang.uk.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.uk.translationConsentText;
        saveChanges = newblyUIModalLang.uk.saveChanges;
        cancel = newblyUIModalLang.uk.cancel;
        discardChanges = newblyUIModalLang.uk.discardChanges;
        loginRegister = newblyUIModalLang.uk.loginRegister;
        authTextOne = newblyUIModalLang.uk.authTextOne;
        authTextTwo = newblyUIModalLang.uk.authTextTwo;
        areYouSure = newblyUIModalLang.uk.areYouSure;
        break;
      default:
        longLang = "English";
        newblyModalTitle = newblyUIModalLang.en.title;
        newblyModalIncludeText = newblyUIModalLang.en.includeText;
        newblyModalCancelText = newblyUIModalLang.en.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.en.translationConsentText;
        saveChanges = newblyUIModalLang.en.saveChanges;
        cancel = newblyUIModalLang.en.cancel;
        discardChanges = newblyUIModalLang.en.discardChanges;
        loginRegister = newblyUIModalLang.en.loginRegister;
        authTextOne = newblyUIModalLang.en.authTextOne;
        authTextTwo = newblyUIModalLang.en.authTextTwo;
        areYouSure = newblyUIModalLang.en.areYouSure;
      }

      newblyUIModalLang = longLang;

      setLanguage(getShortBrowserLanguage(), longLang);

      return {
        longLang : longLang,
        newblyUIModalLang : newblyUIModalLang,
        newblyModalTitle : newblyModalTitle,
        newblyTranslationConsentText : newblyTranslationConsentText,
        newblyModalIncludeText : newblyModalIncludeText,
        newblyModalCancelText : newblyModalCancelText,
        saveChanges : saveChanges,
        cancel : cancel,
        discardChanges : discardChanges,
        loginRegister : loginRegister,
        authTextOne : authTextOne,
        authTextTwo : authTextTwo,
        areYouSure : areYouSure
      };
    }

    var append = {
      appendNewblyPromptModal : function appendNewblyPromptModal() {
        var newblyPromptModal =
            "\n        <div class=\"newbly-translation--ui-modal\" id=\"newbly-translation--ui-modal\">\n              <div class=\"newbly-translation--ui-modal__title\" id=\"newbly-translation--ui-modal__title\"></div>\n\n              <div class=\"newbly-translation--ui-modal__text\" id=\"newbly-translation--ui-modal__text\"></div>\n\n              <div class=\"newbly-translation--ui-modal__btn-container\">\n                <button id=\"include-translation\" class=\"newbly-translation--ui-modal__btn__btn\"></button>\n\n                <button id=\"cancel-translation\" class=\"newbly-translation--ui-modal__btn__btn\"></button>\n              </div>\n          </div>\n      ";

        document.body.innerHTML += newblyPromptModal;
      },

      appendNewblyTextarea : function appendNewblyTextarea(contentIndex,
                                                           content) {
        var textarea =
            "\n          <div class=\"enhance-newbly modal-wrapper\" id=\"newbly-textarea-modal-wrapper\">\n            <div class=\"enhance-newbly modal\" id=\"\">\n              <div class=\"enhance-newbly editable-container\" id=\"newbly-textarea-container\">\n                <div class=\"enhance-newbly edit-section\">\n                  <textarea\n                  dir=" +
            getTextDirection() +
            "\n                  class=\"enhance-newbly\" spellcheck=\"false\" id=\"enhance-translations\">" +
            content +
            "</textarea>\n                  <div class=\"enhance-newbly edit-buttons\" id=\"\">\n                    <button class=\"enhance-newbly disabled\" id=\"save-suggested-changes\"></button>\n                    <button class=\"enhance-newbly\" id=\"cancel-changes\"></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        ";

        document.body.innerHTML += textarea;

        // If shortBrowserLanguage is "ar", then add class ".arabic" to  modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-textarea-modal-wrapper")
              .classList.add("arabic");
        }

        // Add content depending on user's browser language
        document.getElementById("save-suggested-changes").innerText =
            getLongBrowserLanguage().saveChanges;
        document.getElementById("cancel-changes").innerText =
            getLongBrowserLanguage().cancel;

        /*
         * Initialize the modal buttons
         * This is needed so user can click on the cancel button
         * to cancel or close the modal
         */
        initModalBtns.newblyTextareaBtns(contentIndex, content);

        // Display the translationConsentText depending on user's browser
        // language
        document.getElementById("newbly-translation--ui-modal__text")
            .innerText = getLongBrowserLanguage().newblyTranslationConsentText;
      },

      appendNewblyConfirmationModal : function appendNewblyConfirmationModal(
          contentIndex, content) {
        var confirmationPrompt =
            "\n          <!-- Confirmation modal -->\n          <div class=\"enhance-newbly modal-wrapper\" id=\"newbly-enhance-confirmation-modal\">\n            <div class=\"enhance-newbly modal\" id=\"\">\n              <div class=\"enhance-newbly editable-container\" id=\"\">\n              <!-- Modal (Are you sure) -->\n                <p class=\"enhance-newbly\" id=\"are-you-sure\"></p>\n                <div class=\"enhance-newbly edit-buttons\" id=\"\">\n                  <button class=\"enhance-newbly\" id=\"close-newbly-enhance-textarea\"></button>\n                  <button class=\"enhance-newbly\" id=\"close-newbly-modal\"></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        ";

        document.body.innerHTML += confirmationPrompt;

        // If shortBrowserLanguage is "ar", then add class ".arabic" to  modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-enhance-confirmation-modal")
              .classList.add("arabic");
        }

        // Add content depending on user's browser language
        document.getElementById("are-you-sure").innerText =
            getLongBrowserLanguage().areYouSure;
        document.getElementById("close-newbly-enhance-textarea").innerText =
            getLongBrowserLanguage().discardChanges;
        document.getElementById("close-newbly-modal").innerText =
            getLongBrowserLanguage().cancel;

        document.getElementById("newbly-enhance-confirmation-modal")
            .style.display = "flex";

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyConfirmationBtns(contentIndex, content);
      },

      appendNewblyAuthenticationModal :
          function appendNewblyAuthenticationModal() {
            var authPrompt =
                "\n          <!-- Authentication modal -->\n          <div class=\"enhance-newbly modal-wrapper\" id=\"enhance-newbly-auth-wrapper\">\n            <div class=\"enhance-newbly modal\">\n              <div class=\"enhance-newbly close-button\" id=\"enhance-newbly-auth-wrapper-close-button\"><svg fill=\"#b0adab\" width=\"35\" height=\"35\" viewBox=\"0 0 24 24\">\n                  <path d=\"M0 0h24v24H0V0z\" fill=\"none\"></path>\n                  <path\n                    d=\"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\">\n                  </path>\n                </svg></div>\n              <div class=\"enhance-newbly modal-content\">\n                <p class=\"enhance-newbly\" id=\"enhance-newbly-auth-text-one\"></p>\n                <p class=\"enhance-newbly\" id=\"enhance-newbly-auth-text-two\"></p>\n                  <button class=\"enhance-newbly login-button\" id=\"enhance-newbly-auth-button\"><span\n                    class=\"enhance-newbly\"></span>\n                  </button>\n              </div>\n            </div>\n          </div>\n        ";

            document.body.innerHTML += authPrompt;

            document.getElementById("enhance-newbly-auth-wrapper")
                .style.display = "flex";

            // If shortBrowserLanguage is "ar", then add class ".arabic" to
            // modal
            if (getShortBrowserLanguage() === "ar") {
              document.getElementById("enhance-newbly-auth-wrapper")
                  .classList.add("arabic");
            }

            // Add content depending on user's browser language
            document.getElementById("enhance-newbly-auth-text-one").innerText =
                getLongBrowserLanguage().authTextOne;
            document.getElementById("enhance-newbly-auth-text-two").innerText =
                getLongBrowserLanguage().authTextTwo;
            document.getElementById("enhance-newbly-auth-button").innerText =
                getLongBrowserLanguage().loginRegister;

            // Initialize the buttons waiting for corresponding actions
            initModalBtns.newblyAuthModalBtns();
          }
    };

    /*
     * Call the appendNewblyPromptModal function to append the Newbly prompt
     * modal to the document
     */
    append.appendNewblyPromptModal();

    var enhanceNewbly = {
      editIconContainer : function editIconContainer(index, translatedText) {
        handleEditIconBtn(index, translatedText);

        /*
         * Append the editIcon to the container containing the translated text
         * fetchArticleTranslated currently calls this function
         */
        var editIcon =
            "\n          <!-- Edit icons -->\n          <span class=\"newbly-translated-text edit-icon\" id=\"edit-icon-" +
            index + "\">\n            <img src=\"" + editIconLink +
            "\" alt=\"Edit\">\n          </span>\n          <!-- Edit icons -->\n        ";

        return editIcon;
      }
    };

    var hideModals = {
      textareaModal : function textareaModal() {
        document.getElementById("newbly-textarea-modal-wrapper").style.display =
            "none";
      },

      confirmationModal : function confirmationModal() {
        document.getElementById("newbly-enhance-confirmation-modal")
            .style.display = "none";
      },

      authenticationModal : function authenticationModal() {
        document.getElementById("enhance-newbly-auth-wrapper").style.display =
            "none";
      },

      NewblyTranslatorUIModal : function NewblyTranslatorUIModal() {
        // Hide #newbly-translation--ui-modal"
        document.getElementById("newbly-translation--ui-modal").style.display =
            "none";
      }
    };

    var handleTextareaChange = function handleTextareaChange(
        translatedTextIndex, translatedText) {
      var textarea = document.getElementById("enhance-translations");
      var saveBtn = document.getElementById("save-suggested-changes");
      var isTextChange = false;
      var currentTextareaContent = void 0;

      textarea.addEventListener("input", function(e) {
        currentTextareaContent = e.target.value;

        if (currentTextareaContent !== translatedText) {
          saveBtn.classList.remove("disabled");
          isTextChange = true;

          /*
           * Set setSuggestionsSentToBackend to false because
           * This new suggestion has not been sent to the backend yet
           */
          setSuggestionsSentToBackend(false);
        } else {
          saveBtn.classList.add("disabled");
          isTextChange = false;
        }
      });

      return isTextChange;
    };

    var displayNewblyTextarea = function displayNewblyTextarea(
        translatedTextIndex, translatedText) {
      /*
       * Call the appendNewblyTextarea function to append the Newbly textarea to
       * the document Note that there is display: none in the styles for
       * .modal-wrapper by default
       */
      append.appendNewblyTextarea(translatedTextIndex, translatedText);

      // Change display styles to flex
      document.getElementById("newbly-textarea-modal-wrapper").style.display =
          "flex";

      handleTextareaChange(translatedTextIndex, translatedText);
    };

    var handleEditIconBtn = function handleEditIconBtn(translatedTextIndex,
                                                       translatedText) {
      var editIconId = void 0;

      if (translatedTextIndex === null) {
        /*
         * If translatedTextIndex is null, then, the edit-icon corresponds to
         * that of the articleTitle Article title does not have an
         * translatedTextIndex from the response received from the API,
         * remember?
         */
        editIconId = "edit-icon-null";
      } else {
        editIconId = "edit-icon-" + translatedTextIndex;
      }

      setTimeout(function() {
        document.getElementById(editIconId)
            .addEventListener("click", function(e) {
              /*
               * Call displayNewblyTextarea in 1s to allow appending of editIcon
               * to the document when the edit icon is clicked So we can attach
               * an even to it
               */

              displayNewblyTextarea(translatedTextIndex, translatedText);
            });
      }, 1000);
    };

    function replaceTranslationWithCorrectedTranslation(
        contentIndex, currentTextareaContent) {
      var textId = "newbly-translated-text-" + contentIndex;

      document.getElementById(textId).innerHTML = currentTextareaContent;
    }

    function getTargetLanguage() {
      var targetLanguage = void 0;
      var URLHasNLangParam = void 0;
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params
      if (urlParams.has("nLang") || urlParams.has("nlang")) {
        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang") || urlParams.get("nlang");

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;
      } else if (!urlParams.has("nLang") || !urlParams.has("nlang")) {
        // Assign "english" to the target language if URL does not have "nLang"
        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query
        // string
        URLHasNLangParam = false;
      }

      return {
        targetLanguage : targetLanguage,
        URLHasNLangParam : URLHasNLangParam
      };
    }

    function isNewblyTranslationAvailable() {
      // if userBrowserLanguage is part of newBlyAvailableTranslations, then
      // translation is supported

      var isTranslationAvailable = void 0;

      for (var i = 0; i < newBlyAvailableLanguageTranslations.length; i++) {
        if (newBlyAvailableLanguageTranslations[i] ===
            getShortBrowserLanguage()) {
          isTranslationAvailable = true;
          console.log("Newbly translation is available for: " +
                      getLongBrowserLanguage().longLang);
        }
      }

      return isTranslationAvailable;
    }

    var getFirstBrowserLanguage = function getFirstBrowserLanguage() {
      var nav = window.navigator,
          browserLanguagePropertyKeys =
              [
                "language", "browserLanguage", "systemLanguage", "userLanguage"
              ],
          i, language;

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

      if (browserLang.indexOf("-") !== -1) {
        shortLang = browserLang.split("-")[0];
      } else if (browserLang.indexOf("_") !== -1) {
        shortLang = browserLang.split("_")[0];
      } else {
        shortLang = browserLang;
      }

      return shortLang;
    }

    function setLanguage(shortLang, longLang) {
      var value = {code : shortLang, name : longLang, native : longLang};

      localStorage.setItem("@language", JSON.stringify(value));
    }

    function setSuggestionsSentToBackend(value) {
      localStorage.setItem("@suggestionsSent", value);
    }

    function isSuggestionsSentToBackend() {
      return JSON.parse(localStorage.getItem("@suggestionsSent"));
    }

    var displayNewblyTranslatorUIModal =
        function displayNewblyTranslatorUIModal() {
      // Instantiate the isNewblyTranslatorUIDisplayed variable
      var isNewblyTranslatorUIDisplayed = void 0;

      // If targetLanguage is not specified in the URL query params, and if
      // Newbly translation is available, the display the translator modal
      if (!getTargetLanguage().URLHasNLangParam &&
          isNewblyTranslationAvailable()) {
        // Set the display property of #newbly-translation--ui-modal to "block"
        document.getElementById("newbly-translation--ui-modal").style.display =
            "block";

        // If shortBrowserLanguage is "ar", then add class ".arabic" to Newbly
        // consent modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-translation--ui-modal")
              .classList.add("arabic");
        }

        // Display the translationConsentText depending on user's browser
        // language
        document.getElementById("newbly-translation--ui-modal__text")
            .innerText = getLongBrowserLanguage().newblyTranslationConsentText;

        document.getElementById("newbly-translation--ui-modal__title")
            .innerText = getLongBrowserLanguage().newblyModalTitle;
        document.getElementById("include-translation").innerText =
            getLongBrowserLanguage().newblyModalIncludeText;
        document.getElementById("cancel-translation").innerText =
            getLongBrowserLanguage().newblyModalCancelText;

        // Initialize buttons on the Newbly translator prompt
        initNewblyTranslatorUIBtns.includeTranslation();
        initNewblyTranslatorUIBtns.cancelTranslations();

        isNewblyTranslatorUIDisplayed = true;
      } else if (!isNewblyTranslationAvailable()) {
        // If Newbly translation is not available for the browser language, then
        // log the error in the console
        console.error(
            "Newbly translation is not currently available for this page. Browser language is: " +
            getFirstBrowserLanguage());

        isNewblyTranslatorUIDisplayed = false;
      }

      return isNewblyTranslatorUIDisplayed;
    };

    var initNewblyTranslatorUIBtns = {
      includeTranslation : function includeTranslation() {
        var includeTranslationBtn =
            document.getElementById("include-translation");

        includeTranslationBtn.addEventListener("click", function(e) {
          /*
           * THIS FUNCTION IS RESPONSIBLE FOR THE TRANSLATION
           * ----------------------------------------------------------------
           * startNewblyTranslation() - Start fetching the translations from
           * the backend
           */

          startNewblyTranslation();

          console.info("Newbly translation started!");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();

          /*
           * Call setTranslationModalViewed
           * ----------------------------------------------------------------
           * sets @translationModalViewed to true
           */
          setTranslationModalViewed();
        }); // Translation started
      },

      cancelTranslations : function cancelTranslations() {
        var cancelTranslationBtn =
            document.getElementById("cancel-translation");

        cancelTranslationBtn.addEventListener("click", function(e) {
          console.info("Newbly translation cancelled");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();
        }); // Translation cancelled
      }
    };

    function getURLToBackend() {
      // URL to be appended to the backend API
      var URLToBackend = void 0;
      var URLArray = getPageURL().split("?");
      var nonQueryPartURL = URLArray[0];
      var queryPartURL = URLArray[1];

      // If no query string (...) is provided, then assign URLToBackend to the
      // first part of the URLArray
      if (!queryPartURL) {
        // No query string specified in URL
        URLToBackend = URLArray[0];
      } else {
        var removeNLangParamsFromURL = function removeNLangParamsFromURL() {
          // URL returned after checks for nLang query string params
          var nLangContainedURL = URLArray[1];
          var strippedURL = void 0;

          // Query string specified in URL

          if (nLangContainedURL.includes("&nLang=" +
                                         getTargetLanguage().targetLanguage)) {
            strippedURL = nLangContainedURL.replace(
                "&nLang=" + getTargetLanguage().targetLanguage, "");
          } else if (nLangContainedURL.includes(
                         "?nLang=" + getTargetLanguage().targetLanguage)) {
            strippedURL = nLangContainedURL.replace(
                "?nLang=" + getTargetLanguage().targetLanguage, "");
          } else if (nLangContainedURL ===
                     "nLang=" + getTargetLanguage().targetLanguage) {
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

      return URLToBackend;
    }

    function newblyBackendAPI() {
      // This refers to the Newbly backend API URL for a specific article gotten
      // through the pageURL
      var API_URL = void 0;

      if (!getTargetLanguage().URLHasNLangParam) {
        API_URL = "https://api.newb.ly/articles/?language=" +
                  getLongBrowserLanguage().longLang.toLowerCase() +
                  "&url=" + getURLToBackend();
      } else {
        API_URL = "https://api.newb.ly/articles/?language=" +
                  getTargetLanguage().targetLanguage +
                  "&url=" + getURLToBackend();
      }

      return API_URL;
    }

    /*
     * Actions and activities that happen in the enhance modal
     * These functions control the displaying of the different modals depending
     * on the action taken from the different buttons These modals include the
     * textareaModal, confirmationModal, authenticationModal
     */
    var enhanceNewblyModalActions = {
      // cancel button
      handleTextareaCancelBtn : function handleTextareaCancelBtn(contentIndex,
                                                                 content) {
        hideModals.textareaModal();

        /*
         * Call the appendNewblyConfirmationModal function to append the Newbly
         * confirmation modal to the document if the textarea content did change
         * Note that there is display: none in the styles for .modal-wrapper by
         * default
         */
        append.appendNewblyConfirmationModal(content);
      },

      // Save changes button
      handleSaveChangesBtn : function() {
        var _ref8 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(
            function _callee8(contentIndex, content) {
              var currentTextareaContent;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                  case 0:
                    currentTextareaContent =
                        document.getElementById("enhance-translations").value;

                    replaceTranslationWithCorrectedTranslation(
                        contentIndex, currentTextareaContent);

                    /*
                     * Call the setLocalStorageArticleContent to set the
                     * corresponding currentTextareaContent to localStorage
                     */
                    _context8.next = 4;
                    return setLocalStorageArticleContent(
                        contentIndex, currentTextareaContent);

                  case 4:

                    /*
                     * Hide the textarea modal once button is clicked
                     */
                    hideModals.textareaModal();

                    setTimeout(function() {
                      keycloak.init({onLoad : "check-sso", flow : "implicit"})
                          .then(function(authenticated) {
                            /*
                             * Use Keycloak to check if user is authenticated
                             * If authenticated, call saveSuggestion()
                             * else call appendNewblyAuthenticationModal()
                             */

                            if (authenticated) {
                              /*
                               * Check if this suggestion has not already been
                               * sent to backend If suggestion has not been
                               * sent, Then call the saveSuggestion function to
                               * send a PATCH reques Else do not call
                               * saveSuggestion function
                               */

                              if (!isSuggestionsSentToBackend()) {
                                saveSuggestion(contentIndex,
                                               currentTextareaContent);
                              }
                            } else {
                              /*
                               * Call appendNewblyAuthenticationModal() to
                               * append the authModal since user is not
                               * authenticated
                               */

                              append.appendNewblyAuthenticationModal();
                            }
                          })
                          .catch(function() {
                            console.error("Failed to initialize Keycloak");
                            toastr.error("Failed to initialize Keycloak");
                          });
                    }, 3000);

                  case 6:
                  case "end":
                    return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

        function handleSaveChangesBtn(_x5, _x6) {
          return _ref8.apply(this, arguments);
        }

        return handleSaveChangesBtn;
      }(),

      // cancel button in confirmation modal
      handleCancelConfirmationBtn : function handleCancelConfirmationBtn(
          content) {
        hideModals.confirmationModal();

        displayNewblyTextarea();
      },

      // Discard changes button in confirmation modal upon click, will hide the
      // modal
      handleDiscardChangesBtn : function handleDiscardChangesBtn() {
        hideModals.textareaModal();
        hideModals.confirmationModal();

        // TODO Write a function to allow editBtn to still be clicked agin
        handleEditIconBtn(5, "translatedText");
      },

      handleCloseAuthModalBtn : function handleCloseAuthModalBtn(e) {
        // Hide the textarea modal
        hideModals.textareaModal();

        // Hide the authentication prompt modal
        hideModals.authenticationModal();
      },

      handleAuthBtn : function handleAuthBtn(e) {
        // Hide the authentication prompt modal
        hideModals.authenticationModal();

        setTimeout(function() {
          keycloak.init({onLoad : "login-required", flow : "implicit"});
        }, 3000);
      }
    };

    /*
     * Initialize buttons in the enhance modals such as texareaModal,
     * confirmationModal, authenticationModal, etc Depending upon the button
     * that was clicked, Call the corresponding function
     */

    var initModalBtns = {
      newblyTextareaBtns : function newblyTextareaBtns(contentIndex, content) {
        document.getElementById("cancel-changes")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleTextareaCancelBtn(contentIndex,
                                                                content);
            });

        document.getElementById("save-suggested-changes")
            .addEventListener("click", function(e) {
              e.preventDefault();

              enhanceNewblyModalActions.handleSaveChangesBtn(contentIndex,
                                                             content);
            });
      },

      newblyConfirmationBtns : function newblyConfirmationBtns(content) {
        document.getElementById("close-newbly-modal")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleCancelConfirmationBtn(content);
            });

        document.getElementById("close-newbly-enhance-textarea")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleDiscardChangesBtn(content);
            });
      },

      newblyAuthModalBtns : function newblyAuthModalBtns() {
        document.getElementById("enhance-newbly-auth-wrapper-close-button")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleCloseAuthModalBtn();
            });

        document.getElementById("enhance-newbly-auth-button")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleAuthBtn();
            });
      }
    };

    var startNewblyTranslation = function startNewblyTranslation(fetchURL) {
      var fetchArticleFromBackend = function() {
        var _ref9 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee9(fetchURL) {
              var response, data;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return fetch(fetchURL);

                  case 2:
                    response = _context9.sent;
                    _context9.next = 5;
                    return response.json();

                  case 5:
                    data = _context9.sent;

                    if (!response.ok) {
                      _context9.next = 10;
                      break;
                    }

                    return _context9.abrupt("return", data);

                  case 10:
                    console.error(
                        "Something went wrong while contacting the Newbly server. Could not fetch translations.");
                    toastr.error(
                        "Something went wrong while contacting the Newbly server. Could not fetch translations.");

                    return _context9.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

        return function fetchArticleFromBackend(
            _x7) { return _ref9.apply(this, arguments); };
      }();

      var fetchFnc = function() {
        var _ref10 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee10(fetchURL) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return fetchArticleFromBackend(fetchURL);

                  case 2:
                    result = _context10.sent;

                    fetchData(result);

                  case 4:
                  case "end":
                    return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

        return function fetchFnc(_x8) { return _ref10.apply(this, arguments); };
      }();

      var result = "";

      fetchFnc(newblyBackendAPI());

      // Set the fetch data
      var fetchData = function fetchData(data) {
        /**
         * We only need to call the function `displayContentsFromBackendOnPage`
         * because we do not have the backend API on our index.html page which
         * will provide the the articles in array format
         */

        /**
         * Call the functions `fetchArticleTitle` and `fetchArticleContent`
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
        // Find the container element where data is coming from and pass the
        // text

        // The possible tags which can contain the text to be appended the newly
        // translatedContent

        var elements = [
          "a",       "article", "b",      "div",     "h1",   "h2", "h3", "h4",
          "h5",      "h6",      "i",      "li",      "main", "ol", "p",  "q",
          "section", "span",    "strong", "summary", "u",    "ul"
        ];

        var matches = [];
        var container;

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator =
                         document.querySelectorAll(element)[Symbol.iterator](),
                     _step;
                 !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                 _iteratorNormalCompletion = true) {
              var element = _step.value;

              if (element.textContent.includes(searchString)) {
                matches.push(element);
                container = matches[matches.length - 1];

                // Call this function to append the translations to the
                // container element

                getContainerAndContent(container, container.innerText);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return ) {
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

      var appendTranslation = function appendTranslation(id, container,
                                                         translatedText) {
        /*
         * Use insertAdjacentHTML to insert the translatedText using HTML format
         * right a the articleTitle
         */

        container.insertAdjacentHTML(
            "beforeend",
            "<p class='newbly-translated-text' id='newbly-translated-text-" +
                id + "'> " + translatedText + "</p>");

        /*
         *  Add RTL stylings if translation target language is arabic
         * This is done by adding the .arabic class
         */

        if (getTargetLanguage().targetLanguage === "arabic" ||
            getLongBrowserLanguage().longLang.toLowerCase() === "arabic") {
          var arTranslations =
              document.querySelectorAll(".newbly-translated-text");

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = arTranslations[Symbol.iterator](), _step2;
                 !(_iteratorNormalCompletion2 =
                       (_step2 = _iterator2.next()).done);
                 _iteratorNormalCompletion2 = true) {
              var arTranslation = _step2.value;

              arTranslation.classList.add("arabic");
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return ) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      };

      var getContainerAndContent = function getContainerAndContent(container) {
        var fetchArticleTranslated = function fetchArticleTranslated() {
          // For article Title

          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;

          // If the container innerText of the document matches with
          // articleTitle, the append articleTitleTranslated

          if (container.innerText === articleTitle) {
            /*
             * Use insertAdjacentHTML to insert the articleTitleTranslated using
             * HTML format right a the articleTitle null represent the index, we
             * shall use it to represent the id for the title
             */
            appendTranslation(null, container, articleTitleTranslated);

            /*
             * Append the editIcon to the container and pass null as an id and
             * articleTitleTranslated as parameters to it
             */
            container.insertAdjacentHTML(
                "beforeend",
                enhanceNewbly.editIconContainer(null, articleTitleTranslated));
          }

          // For article Content

          var articleContentTranslated = result.articleContentTranslated;
          var articleContent = result.articleContent;

          // Loop through array of articleContent and replace them article one
          // by one with the respective translated version

          for (var i = 0; i < articleContent.length; i++) {
            /*
             * If the container innerText  of the document matches with
             * articleContent[i], the append articleContentTranslated[i]
             */

            if (container.innerText === articleContent[i]) {
              /*
               * Use insertAdjacentHTML to insert the
               * articleContentTranslated[i] using HTML format right a the
               * articleTitle i represent the index, we shall use it to
               * differentialte the ids
               */

              appendTranslation(i, container, articleContentTranslated[i]);

              // Append the editIcon to container and pass the index of the
              // translatedContent and articleContentTranslated[i] as parameters
              // to it
              container.insertAdjacentHTML("beforeend",
                                           enhanceNewbly.editIconContainer(
                                               i, articleContentTranslated[i]));
            }
          }
        };

        fetchArticleTranslated();
      };

      /*
       * INITIALIZE KEYCLOAK
       * --------------------------------
       * Keycloak is initialized here since the user chose to include
       * translations on the webpage
       */

      setTimeout(function() {
        keycloak.init({onLoad : "check-sso", flow : "implicit"})
            .then(reloadData);
      }, 3000);

      // call the function to automatically replace contents on the page with
      // custom suggestions
      replaceDOMContentWithCustomSuggestions();
    };

    function getTextDirection() {
      var textDirection = void 0;

      if (getShortBrowserLanguage() === "ar") {
        textDirection = "rtl";
      } else {
        textDirection = "ltr";
      }

      return textDirection;
    }

    console.log(
        "Newbly translation initialized. Learn more here: https://newb.ly/");
    console.info("Ξunit");

    /*
     * Controls wether to start translations or display the consent modal
     *----------------------------------------------------------------
     * If URLHasNLangParam === true, then start translations automatically
     * If URLHasNLangParam !== true, then start check for check if translation
     *modal has been viewed If translation modal has been viewed, start
     *translations automatically, else display the translation consent modal
     */

    if (getTargetLanguage().URLHasNLangParam) {
      /*
       * Call the function to start fetching translations from backend
       * Since the URL has nLang query parameter
       */
      startNewblyTranslation();
    } else if (getTranslationModalViewed()) {
      startNewblyTranslation();
    } else {
      // Call the displayNewblyTranslatorUIModal function to display the Newbly
      // prompt modal to suggest translation
      displayNewblyTranslatorUIModal();
    }
  }
};

// Initialize Newbly translation
newbly.init();