const kanji = document.getElementById("kanji");
const input = document.getElementById("input");
//const value = input.value;
const result = document.getElementById("result");
const kanjiList = ["悩む",
"相談",
"絶対",
"約束",
"破る",
"警備",
"都合",
"延期",
"住宅",
"光",
"奥",
"届く",
"政府",
"調査",
"農産物",
"被害",
"記事",
"汗",
"流す",
"働く",
"警告",
"飲酒",
"習慣",
"改める",
"一方",
"姉妹",
"姿",
"似る",
"結ぶ",
"著者",
"地域",
"住民",
"観察",
"歴史"]
const yomiList = [
"nayamu",
"soudan",
"zettai",
"yakusoku",
"yaburu",
"keibi",
"tsugou",
"enki",
"jyuutaku",
"Hikari",
"oku",
"todoku",
"seifu",
"cyousa",
"nousannbutsu",
"higai",
"kiji",
"ase",
"nagasu",
"hataraku",
"keikoku",
"inshu",
"shyuukann",
"aratameru",
"ippou",
"shimai",
"sugata",
"niru",
"musubu",
"chosha",
"chiiki",
"jyuuminn",
"kansatsu",
"rekishi"
]
const englishList = [
    "to worry",
    "consultation",
    "absolutely",
    "promise",
    "Break",
    "security",
    "circumstances",
    "postpone",
    "House",
    "Light",
    "Oh",
    "reach",
    "government",
    "Research",
    "Agricultural product",
    "damage",
    "article",
    "Sweat",
    "Flush",
    "work",
    "warn",
    "Drink",
    "Habit",
    "change",
    "on the other hand",
    "Sister",
    "figure",
    "Resemble",
    "tie",
    "author",
    "area",
    "residents",
    "observation",
    "history",
]
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

function twitterExample() {
  window.open(`https://twitter.com/search?q=${kanjiList[randomNum]}&src=typed_query`, target='_blank')
};

function jishoExample() {
  window.open(`https://jisho.org/search/${kanjiList[randomNum]}%20%23sentences`, target='_blank')
};