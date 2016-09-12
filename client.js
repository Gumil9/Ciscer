// ==UserScript==
// @name        mipt
// @namespace   mipt
// @description web
// @version     1.0
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var TIMEOUT = 5000; //In milliseconds
var PATH = "https://raw.githubusercontent.com/Gumil9/Ciscer/master/";

var loaded = false;
document.onkeydown = function (e) {
    if (!loaded && e.ctrlKey && e.keyCode == 32) {
        var loadCore = new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: PATH + "core.js",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function (response) {
                    reject("core load error");
                },
                timeout: TIMEOUT,
                ontimeout: function () {
                    reject("core connection timeout");
                }
            });
        });
        var loadAnswers = new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: PATH + "answers.js",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function (response) {
                    reject("answers load error");
                },
                timeout: TIMEOUT,
                ontimeout: function () {
                    reject("answers connection timeout");
                }
            });
        });
        Promise.all([loadCore, loadAnswers]).then(function (result) {
            eval(result.join(""));
            loaded = true;
        }).catch(function (error) {
            alert("Unable to load resources.");
        });
    }
};

