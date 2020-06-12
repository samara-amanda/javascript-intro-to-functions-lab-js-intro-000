function shout(word) {
  return string.toUpperCase()
}

function whisper(word) {
  return string.toLowerCase()
}

function logShout(word) {
  console.log(word.toUpperCase())
}

function logWhisper(word) {
  console.log(word.toLowerCase())
}

function sayHiToGrandma(sentence) {
  if (sentence === "I love you, Grandma") {
    return "I love you, too."
  } else if (sentence === whisper(sentence)) {
    return "I can't hear you!"
  } else if (sentence === shout(sentence)) {
    return 'YES INDEED!'
  }
}
