var arr = [
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“If you world feels dark, shine your light a little brighter! the world needs a little more of your smile !”",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“I hope that you never cower from your dark chapters, but highlight them as proof of perseverance and endurance .””",
  "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“Spread love, and you'll attract positivity. Spread hate, and negativity will follow”",
  "“Always forgive your enemies; nothing annoys them so much.”",
  "“Without music, life would be a mistake.”",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  "“The slap of time is stronger than the scorn of a relative”",
];
var authers = [
  "― Ralph Waldo Emerson",
  "― Albert Camus",
  "― Oscar Wilde",
  "― Maya Angelou",
  "― Mark Twain",
  "― Albert Camus",
  "― Ralph Waldo Emerson",
  "― Eleanor Roosevelt",
  "― Oscar Wilde",
  "― Maya Angelou",
  "― Mark Twain",
  "― Albert Camus",
  "― Oscar Wilde",
  "― Maya Angelou",
];
var p = document.getElementById("quote");
var btn = document.getElementById("lol");
var auther = document.getElementById("auther");
var speech = document.querySelector(".volume");
var copy = document.querySelector(".copyy");
var twitter = document.querySelector(".twitt");
var linkedinn = document.querySelector(".linked");
synth = speechSynthesis;
console.log(speech)
var index = -1;
function get_index(max) {
  return Math.floor(Math.random() * max);
}
btn.addEventListener("click", myFunction);
function myFunction() {
  var newIndex = get_index(arr.length);
  if (index === newIndex) {
    newIndex = (newIndex + 1) % arr.length;
  }
  p.innerHTML = arr[newIndex] ;
  auther.innerHTML=authers[newIndex]
  console.log(newIndex);
  index = newIndex;
}
speech.addEventListener("click", () => {
  if (!lol.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText}`);
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speech.classList.remove("active")
        : speech.classList.add("active");
    }, 1);
  }
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText);
 Swal.fire({
   title: "Your Quote is copied Successfully!",
   
   icon: "success",
 });
});

twitter.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(tweetUrl, "_blank");
});
