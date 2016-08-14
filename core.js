var COLOR = '#dddddd'; //Label's text color

var tests = new Tests();
var prompts = new Prompts();

var label = new Label();
var selection = new Selection();
var answerSigner = new AnswerSigner(tests);

document.onclick = function handleClick() {
    label.setText(tests.getAnswer(window.getSelection().toString()));
};

document.body.onkeydown = function handleKeyCombination(e) {

    //Ctrl + Alt + (↑ or ↓)
    if (e.ctrlKey && e.altKey && (e.keyCode == 38 || e.keyCode == 40)) {
        label.changeDisposition();
    }

    //Ctrl + Alt + ←
    if (e.ctrlKey && e.altKey && e.keyCode == 37) {
        label.setText(prompts.getPrevious());
    }

    //Ctrl + Alt + →
    if (e.ctrlKey && e.altKey && e.keyCode == 39) {
        label.setText(prompts.getNext());
    }

    //Ctrl+Shift
    if (e.ctrlKey && e.shiftKey) {
        selection.changeSelectionColor();
    }

    //Ctrl+Space
    if (e.ctrlKey && e.keyCode == 32) {
        answerSigner.run();
    }

};

document.body.addEventListener("wheel", function wheelHandler(e) {
    if (e.ctrlKey && e.altKey) {
        var delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
            label.setText(prompts.getNext());
        } else if (delta < 0) {
            label.setText(prompts.getPrevious());
        }
    }
});

/*Stores and finds answers to multiple choice and fill-in-the-blank questions*/
function Tests() {
    var arr = []; //array with questions and answers
    this.add = function (question) {
        arguments.slice = [].slice;
        var answer = arguments.slice(1);
        arr.push(new Test(question, answer));

        function Test(question, answer) {
            this.question = question;
            this.answer = answer;
        }
    };

    /*
     Following constant defines minimum length of question (selected text) to search answers to.
     It is required for secrecy with outside users.
     */
    var QUESTION_MIN_LENGTH = 10;
    this.getAnswer = function (question) {
        if (question.length < QUESTION_MIN_LENGTH) {
            return '';
        }
        for (var i = 0; i < arr.length; i++) {
            if (~arr[i].question.indexOf(question)) {
                return arr[i].answer.join('<br>');
            }
        }
        return 'not found';
    };
    this.getTests = function () {
        return arr;
    }
}

/*Stores prompts for drag-and-drop (matching) questions and Packet Tracer Labs*/
function Prompts() {
    var array = [];
    var index = -1;

    this.getNext = function () {
        index = (index + 1) % array.length;
        return array[index];
    };

    this.getPrevious = function () {
        index = (--index >= 0) ? index : index + array.length;
        return array[index];
    };

    this.add = function (prompt) {
        array.push(prompt);
    };

}

function Label() {
    var div = document.createElement('div'); //div block with answers
    div.setAttribute('id', 'mipt_ans');
    div.style.position = 'fixed';
    div.style.left = '20px';
    div.style.bottom = '100px';
    div.style.color = COLOR;
    div.style.zIndex = 1000000;
    div.style.display = 'block';
    document.body.appendChild(div);
    var above = false;

    this.setText = function (answer) {
        div.innerHTML = answer;
    };

    this.displayAbove = function () {
        div.style.top = '40px';
        div.style.bottom = null;
    };

    this.displayBelow = function () {
        div.style.top = null;
        div.style.bottom = '100px';
    };

    this.changeDisposition = function () {
        if (above) {
            above = false;
            this.displayBelow();
        } else {
            above = true;
            this.displayAbove();
        }
    };
}

function AnswerSigner(tests) {
    var ANSWER_MIN_LENGTH = 5; //This constant defines minimum length of answer to mark.

    this.run = function () {
        var label = document.getElementsByTagName('label');

        var arr = tests.getTests();
        arr.sort(function compareByLength(a, b) {
            return b.answer[0].length - a.answer[0].length;
        });

        for (var i = 0; i < arr.length; i++) {
            var answer = arr[i].answer;
            for (var j = 0; j < answer.length; j++) {
                findAndSign(answer[j]);
            }
        }
        function findAndSign(answer) {
            if (answer.length < ANSWER_MIN_LENGTH) {
                return;
            }
            var regExp = new RegExp(answer, 'i');
            for (var i = 0; i < label.length; i++) {
                if (label[i].textContent == answer) {
                    label[i].innerHTML = '<span style="color: ' + COLOR + ' !important;">·</span>' + label[i].innerHTML;
                }
                if (label[i].innerHTML.indexOf('·') == -1) {
                    label[i].innerHTML = label[i].innerHTML.replace(regExp,
                        '<span style="color: ' + COLOR + ' !important;">·</span>' + answer);
                }
            }
        }
    };
}

function Selection() {
    var secretSelection = false;
    this.setSecretSelection = function () {
        if (!secretSelection) {
            document.styleSheets[0].insertRule(
                '::-moz-selection {background: #fcfcfc !important;}', 0);
            secretSelection = true;
        }
    };
    this.cancelSecretSelection = function () {
        if (secretSelection) {
            document.styleSheets[0].deleteRule(0);
            secretSelection = false;
        }
    };
    this.changeSelectionColor = function () {
        if (secretSelection) {
            this.cancelSecretSelection();
        } else {
            this.setSecretSelection();
        }
    };
}