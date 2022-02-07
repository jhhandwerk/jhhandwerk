const kanji = document.getElementById("kanji");
const input = document.getElementById("input");
//const value = input.value;
const result = document.getElementById("result");
const kanjiList = ["担当",
"係員",
"束",
"腕",
"抱える",
"独立",
"希望",
"燃える",
"耕す",
"種",
"草",
"虫",
"作物",
"守る",
"混乱",
"肩",
"抜く",
"閉じる",
"呼吸",
"首相",
"状況",
"認める",
"雨量",
"湿度",
"途中",
"突然",
"死亡",
"深い",
"沈む",
"優しい",]
const yomiList = ["tantou",
"kakariinn",
"taba",
"ude",
"kakeru",
"dokuritsu",
"kibou",
"moeru",
"tagayasu",
"tane",
"kusa",
"mushi",
"sakumotsu",
"mamoru",
"konran",
"kata",
"nuku",
"tojiru",
"kokyuu",
"jyusyou",
"jyoukyou",
"mitomeru",
"uryou",
"shitsudo",
"tocyuu",
"totsuzen",
"shibou",
"fukai",
"shizumu",
"yasashii",]
const englishList = ["responsible person",
"Clerk",
"bundle",
"arm",
"Hold",
"independent",
"hope",
"burn",
"Plow",
"kind",
"Grass",
"insect",
"crop",
"protect",
"confusion",
"shoulder",
"Pull out",
"close up",
"breathe",
"Prime Minister",
"Situation",
"Admit",
"rainfall",
"humidity",
"in the middle",
"Sudden",
"die",
"deep",
"Sink",
"kind",]
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