// ==UserScript==
// @name        mipt
// @namespace   mipt
// @description web
// @version     1.0
// @grant       GM_xmlhttpRequest
// ==/UserScript==

var TIMEOUT = 5000; //In milliseconds

document.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == 32) {
        var loadScript = new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: "http://umath.ru/cs.js",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function (response) {
                    //alert("unable to load script");
                    reject();
                },
                timeout: 5000,
                ontimeout: function () {
                    //alert("connection timeout");
                }
            });
        });
        var loadAnswers = new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: "http://example.com/",
                onload: function (response) {
                    resolve(response.responseText);
                },
                onerror: function (response) {
                    //alert("unable to load answers");
                    reject();
                },
                timeout: 5000,
                ontimeout: function () {
                    //alert("Connection timeout");
                }
            });
        });
        Promise.all([loadScript, loadAnswers]).then(function (result) {
            eval(result.join(""));
        }).catch(function (error) {
            alert(error);
        });
    }
};

