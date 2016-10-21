var COLOR = '#dddddd'; //Label's text color

var tests = new Tests();
var prompts = new Prompts();

var label = new Label();
var selection = new Selection();
var answerSigner = new AnswerSigner(tests);

document.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener("wheel", handleWheel);

function handleClick() {
    label.setText(tests.getAnswer(window.getSelection().toString()));
}

function handleKeyDown(event) {

    //Ctrl + Alt + (↑ or ↓)
    if (event.ctrlKey && event.altKey && (event.keyCode == 38 || event.keyCode == 40)) {
        label.changeDisposition();
    }

    //Ctrl + Alt + ←
    if (event.ctrlKey && event.altKey && event.keyCode == 37) {
        label.setText(prompts.getPrevious());
    }

    //Ctrl + Alt + →
    if (event.ctrlKey && event.altKey && event.keyCode == 39) {
        label.setText(prompts.getNext());
    }

    //Ctrl + Shift
    if (event.ctrlKey && event.shiftKey) {
        selection.changeSelectionColor();
    }

    //Ctrl + Space
    if (event.ctrlKey && event.keyCode == 32) {
        answerSigner.run();
    }
}

function handleWheel(event) {
    if (event.ctrlKey && event.altKey) {
        var delta = event.deltaY || event.detail || event.wheelDelta;
        if (delta > 0) {
            label.setText(prompts.getNext());
        } else if (delta < 0) {
            label.setText(prompts.getPrevious());
        }
    }
}

/*Stores and finds answers to multiple choice and fill-in-the-blank questions*/
function Tests() {
    var testsArray = []; //array with questions and answers
    this.add = function (question) {
        arguments.slice = [].slice;
        var answers = arguments.slice(1);
        testsArray.push(new Test(question, answers));

        function Test(question, answers) {
            this.question = question;
            this.answers = answers;
        }
    };

    /*
     * Following constant defines minimum length of question (selected text) to search answers to.
     * It is required for secrecy with outside users.
     */
    var QUESTION_MIN_LENGTH = 10;
    this.getAnswer = function (question) {
        if (question.length < QUESTION_MIN_LENGTH) {
            return '';
        }
        var answer;
        testsArray.forEach(function (test) {
            if (~test.question.indexOf(question)) {
                answer = test.answers.join('<br>');
            }
        });
        return answer || 'not found';
    };
    this.getTests = function () {
        return testsArray;
    }
}

/*
 * Stores prompts for drag-and-drop (matching) questions and Packet Tracer Labs
 */
function Prompts() {
    var promptsArray = [];
    var selectedIndex = -1;

    this.getNext = function () {
        selectedIndex = (selectedIndex + 1) % promptsArray.length;
        return promptsArray[selectedIndex];
    };

    this.getPrevious = function () {
        selectedIndex = (--selectedIndex >= 0) ? selectedIndex : selectedIndex + promptsArray.length;
        return promptsArray[selectedIndex];
    };

    this.add = function (prompt) {
        promptsArray.push(prompt);
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
    var topPosition = false;

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
        if (topPosition) {
            topPosition = false;
            this.displayBelow();
        } else {
            topPosition = true;
            this.displayAbove();
        }
    };
}

function AnswerSigner(tests) {
    var ANSWER_MIN_LENGTH = 5; //This constant defines minimum length of answers to mark.

    this.run = function () {
        var labelElements = document.getElementsByTagName("label");

        var testsArray = tests.getTests();
        testsArray.sort(function compareByLength(a, b) {
            return b.answers[0].length - a.answers[0].length;
        });

        testsArray.forEach(function (test) {
            var answers = test.answers;
            answers.forEach(function (answer) {
                findAndSign(answer);
            });
        });

        function findAndSign(answer) {
            if (answer.length < ANSWER_MIN_LENGTH) {
                return;
            }
            var regExp = new RegExp(answer, 'i');

            Array.prototype.forEach.call(labelElements, function (element) {
                if (element.textContent == answer) {
                    console.log(element);
                    element.innerHTML = '<span style="color: ' + COLOR + ' !important;">·</span>' + element.innerHTML;
                }
                if (element.innerHTML.indexOf('·') == -1) {
                    element.innerHTML = element.innerHTML.replace(regExp,
                        '<span style="color: ' + COLOR + ' !important;">·</span>' + answer);
                }
            });
        }
    };
}

function Selection() {
    var secretSelection = false;
    this.enableSecretSelection = function () {
        if (!secretSelection) {
            document.styleSheets[0].insertRule(
                '::-moz-selection {background: #fcfcfc !important;}', 0);
            secretSelection = true;
        }
    };
    this.disableSecretSelection = function () {
        if (secretSelection) {
            document.styleSheets[0].deleteRule(0);
            secretSelection = false;
        }
    };
    this.changeSelectionColor = function () {
        if (secretSelection) {
            this.disableSecretSelection();
        } else {
            this.enableSecretSelection();
        }
    };
}