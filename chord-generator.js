
const util = require("util")


Array.prototype.diff = function(a) {
  return this.filter(function(i) {
    return a.indexOf(i) < 0;
  });
};


const KEY_TABLE = ["c", "d-", "d", "e-", "e", "f", "g-", "g", "a-", "a", "b-", "b"]
const CHORD_TABLE = {
      "": [0, 4, 7],
     "m": [0, 3, 7],
  "sus2": [0, 2, 7],
  "sus4": [0, 5, 7],
   "dim": [0, 3, 6],
   "aug": [0, 4, 8],
     "7": [0, 4, 7, 10],
    "M7": [0, 4, 7, 11],
    "m7": [0, 3, 7, 10],
  "add9": [0, 4, 7, 14]
}

function generate(key, chordType) {
  const notes = CHORD_TABLE[chordType].map((note) => {
    const transposedNote = (note + KEY_TABLE.length + key) % KEY_TABLE.length
    return KEY_TABLE[transposedNote]
  })

  const chord = {
    name: KEY_TABLE[key].toUpperCase() + chordType,
    composedOf: notes
  }

  // 表示
  const composedOf = chord.composedOf.map((element) => {
    return `"${element}"`.padStart(4, " ")
  }).join(",")
  const paddedChordName = `'${chord.name}'`.padStart(chordType.length + 4  , " ")
  process.stdout.write(`{name: ${paddedChordName}, composedOf: [${composedOf}]},\n`)

  return chord
}

function test(chord, tobe) {
  if (chord.name === tobe.name && chord.composedOf.diff(tobe.composedOf).length === 0) {
  } else {
    console.error("NG", chord, tobe);
  }
}

// --------------------------------------------------------------------------------
;(function() {
  console.log("// major")
  const chordType = ""

  test(generate(0, chordType), {name:"C", composedOf: ["c", "e", "g"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"D", composedOf: ["d", "g-", "a"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// minor")
  const chordType = "m"

  test(generate(0, chordType), {name:"Cm", composedOf: ["c", "e-", "g"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Dm", composedOf: ["d", "f", "a"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// sus2")
  const chordType = "sus2"

  test(generate(0, chordType), {name:"Csus2", composedOf: ["c", "d", "g"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Dsus2", composedOf: ["d", "e", "a"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// sus4")
  const chordType = "sus4"

  test(generate(0, chordType), {name:"Csus4", composedOf: ["c", "f", "g"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Dsus4", composedOf: ["d", "g", "a"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// dim")
  const chordType = "dim"

  test(generate(0, chordType), {name:"Cdim", composedOf: ["c", "e-", "g-"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Ddim", composedOf: ["d", "f", "a-"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// aug")
  const chordType = "aug"

  test(generate(0, chordType), {name:"Caug", composedOf: ["c", "e", "a-"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Daug", composedOf: ["d", "g-", "b-"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// 7")
  const chordType = "7"

  test(generate(0, chordType), {name:"C7", composedOf: ["c", "e", "g", "b-"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"D7", composedOf: ["d", "g-", "a", "c"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// M7")
  const chordType = "M7"

  test(generate(0, chordType), {name:"CM7", composedOf: ["c", "e", "g", "b"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"DM7", composedOf: ["d", "g-", "a", "d-"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// m7")
  const chordType = "m7"

  test(generate(0, chordType), {name:"Cm7", composedOf: ["c", "e-", "g", "b-"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Dm7", composedOf: ["d", "f", "a", "c"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())

// --------------------------------------------------------------------------------
;(function() {
  console.log("// add9")
  const chordType = "add9"

  test(generate(0, chordType), {name:"Cadd9", composedOf: ["c", "e", "g", "d"]})
  generate(1, chordType)
  test(generate(2, chordType), {name:"Dadd9", composedOf: ["d", "g-", "a", "e"]})
  generate(3, chordType)
  generate(4, chordType)
  generate(5, chordType)
  generate(6, chordType)
  generate(7, chordType)
  generate(8, chordType)
  generate(9, chordType)
  generate(10, chordType)
  generate(11, chordType)
}())
