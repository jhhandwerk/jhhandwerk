const kanji = document.getElementById("kanji");
const input = document.getElementById("input");
//const value = input.value;
const result = document.getElementById("result");
const kanjiList = [
"そいうなんと言うかな、切り口",
"そいうなんと言うかな、状態",
"そいうなんと言うかな、現状",]
const yomiList = [
"soiunanntoiukanakirikuchi",
"soiunanntoiukanajyoutai",
"soiunanntoiukanagennjyou",
]
const englishList = []
const sentenceList = []
const vocabList = ["何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)"]
const extraVocabList = [
    {
        
    },
    {

    },
    {
        
    }
]
const rootsList = [
    {
        "a": "日",
        "b": "雨",
        "c": "ニ",
    }
]
const random = Math.floor(Math.random()*kanjiList.length);
const correction = document.getElementById("correction");
const english = document.getElementById("english");
// const sentence = document.getElementById("sentence");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const extravocab = document.getElementById("vocab");
// const roots = document.getElementById("roots");
let randomNum = 0;


//main functionality, checks result, displays result, gets new question
//try adding a seperate get random number function
function randomNumber()
 {
    return Math.floor(Math.random()*kanjiList.length);
 }
function myFunction()
    {
    if (input.value === yomiList[randomNum]){
        //extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
        //roots.innerHTML = rootsList[0].a+"<br>"+rootsList[0].b+"<br>"+rootsList[0].c;
        //extravocab.innerHTML = vocabList[randomNum];
        result.innerHTML  = 'すごいです！'
        correct.innerHTML++;
        correction.innerHTML = '問題ないです！'
       // sentence.innerHTML = sentenceList[randomNum];
        english.innerHTML = englishList[randomNum];
        //extravocab.innerHTML = extraVocabList[randomNum];
        input.value = "";


        }else{
        //extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
       // roots.innerHTML = rootsList[0].a+"<br>"+rootsList[0].b+"<br>"+rootsList[0].c;
       // extravocab.innerHTML = vocabList[randomNum];;
        result.innerHTML = '残念です。'
        incorrect.innerHTML++;
        correction.innerHTML = yomiList[randomNum];
        english.innerHTML = englishList[randomNum];
       // sentence.innerHTML = sentenceList[randomNum];
        //extravocab.innerHTML = extraVocabList[randomNum];
        input.value = "";
        

        
        }
    }

//event listener for hitting the enter key
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13)
    {
    myFunction()
    }
});
//event listener for setting the kanji
    btn.addEventListener("click", function(){
    //alert('hello');
    randomNum = randomNumber();
    // extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
    kanji.innerHTML = kanjiList[randomNum];
    result.innerHTML = ("&nbsp;")
    correction.innerHTML = ("&nbsp;");
    english.innerHTML = ("&nbsp;");
    //sentence.innerHTML = (".");
    //extravocab.innerHTML = (".");


});