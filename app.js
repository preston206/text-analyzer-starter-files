
function getTokens(rawText) {
    return rawText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function removeHiddenClass() {
    $('dl').removeClass('hidden');
}

function totalWordCount() {
    var text = $('#user-text').val();
    var words = getTokens(text);
    $('.js-word-count').html(words.length);
}

function uniqueWordCount() {
    var text = $('#user-text').val();
    var words = getTokens(text);
    var wordCount = {};
    var uniqueWords = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] in wordCount) {
            wordCount[words[i]]++;
        }
        else {
            wordCount[words[i]]=1;
        }
    }
    console.log(wordCount);
    Object.keys(wordCount).forEach(function(key) {
        if (key = 1) {
            uniqueWords++;
        }
    })
    $('.js-unique-count').html(uniqueWords);
}

function averageWordLength() {
    var text = $('#user-text').val();
    var words = getTokens(text);
    var wordLength = {};
    var wordLengthSum = 0;
    for (var i = 0; i < words.length; i++) {
        wordLength[words[i]] = words[i].length;
        wordLengthSum += words[i].length;
    }
    console.log(wordLength);
    console.log(wordLengthSum);
    var average = wordLengthSum / words.length;
    $('.js-average-length').html(average + " characters");
}

$('button').click(function(event) {
    event.preventDefault();
    removeHiddenClass();
    totalWordCount();
    uniqueWordCount();
    averageWordLength();
})
