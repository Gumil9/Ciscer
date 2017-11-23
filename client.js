// ==UserScript==
// @name        mipt
// @namespace   mipt
// @description web
// @version     1.0
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// ==/UserScript==


var xmlHttpRequest = (GM && GM.xmlHttpRequest) || GM_xmlhttpRequest;

var TIMEOUT = 5000; //In milliseconds
var PATH = "https://raw.githubusercontent.com/Gumil9/Ciscer/master/";

var loaded = false;

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
    if (!loaded && e.ctrlKey && e.keyCode == 32) {
        var loadCore = new Promise(function (resolve, reject) {
            xmlHttpRequest({
                method: "GET",
                url: PATH + "core.js",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function () {
                    reject("core load error");
                },
                timeout: TIMEOUT,
                ontimeout: function () {
                    reject("core connection timeout");
                }
            });
        });
        var loadAnswers = new Promise(function (resolve, reject) {
            xmlHttpRequest({
                method: "GET",
                url: PATH + "answers.js",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function () {
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
        }).catch(function () {
            alert("Unable to load resources.");
        });
    }
}
