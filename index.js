function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    name = katzDeliLine.shift();
    return `Currently serving ${name}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  var x = `The line is currently: `
  if (line.length > 0) {
    for (var i=0; i<line.length-1; i++) {
      x += `${i+1}. ${line[i]}, `
    }
    x += `${i+1}. ${line[i]}`
    console.log(x)
    return x
  }
  else {
    return "The line is currently empty."
  }
}