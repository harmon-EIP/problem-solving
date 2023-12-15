// s	return
// "Zbcdefg"	"gfedcbZ"

let s = "Zbcdefg" // gfedcbZ

function solution(s) {
    return s.split('').map(v => v.charCodeAt(0)).sort((a, b) => b - a).map(e => String.fromCharCode(e)).join('');
}

console.log(solution(s));

// done 20231012

function solution(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join("");
  }
  