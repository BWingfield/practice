// # Write a method that will take a string as input, and return a new
// # string with the same letters in reverse order.
// #
// # Don't use String's reverse method; that would be too simple.
// #
// # Difficulty: easy.

function reverse(word){
  temp = '';
  for(i = word.length-1; i >= 0; i--){
    temp += word.charAt(i);
  }
  return temp
}

// # These are tests to check that your code is working. After writing
// # your solution, they should all print true.

console.log("\nTests for #reverse");
console.log("===============================================")
    console.log(
      'reverse("abc") == "cba": ' + (reverse("abc") == "cba")
    )
    console.log(
      'reverse("a") == "a": ' + (reverse("a") == "a")
    )
    console.log(
      'reverse("") == "": ' + (reverse("") == "")
    )
console.log("===============================================")
