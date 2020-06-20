//codificador
let input = "ola meu nome e patrick".split("")
let output = ""

for (letter of input) {
  if (letter === "e") {
    output += "enter"
  } else if (letter === "i") {
    output += "imes"
  } else if (letter === "a") {
    output += "ai"
  } else if (letter === "o") {
    output += "ober"
  } else if (letter === "u") {
    output += "ufat"
  } else {
    output += letter
  }
}

console.log(output)

// decodificador

let input = "oberlai menterufat nobermenter enter timesaigober"
let output = ""

output = input.replaceAll("enter", "e")
output = output.replaceAll("imes", "i")
output = output.replaceAll("ai", "a")
output = output.replaceAll("ober", "o")
output = output.replaceAll("ufat", "u")

console.log(output)

//decodificador
let input = "oberlai menterufat nobermenter enter timesaigober"
let output = ""

output = input.split("enter").join("e")
output = output.split("imes").join("i")
output = output.split("ai").join("a")
output = output.split("ober").join("o")
output = output.split("ufat").join("u")

console.log(output)