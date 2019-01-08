const Vue = require("./vue.min.js")

const vm = new Vue({
  data: {
    aaa: 12345
  },
  methods: {
    aa() {
      return 123 + this.aaa
    }
  }
})

console.log(vm.aa())

/*
test(
  calcChord(["c5", "e5", "g5", "b5"]),
  {chords: ["CMaj7", "C", "Em"], diff:[]}
)

test(
  calcChord(["c5", "e5", "f5", "g5", "b5"]),
  {chords: ["CMaj7", "C", "Em"], diff:["f5"]}
)

test(
  calcChord(["f4", c5", "e5", "f5", "g5", "b5"]),
  {chords: ["CMaj7 / F", "C / F", "Em / F"], diff:[]}
)
*/