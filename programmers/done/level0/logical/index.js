// x1	x2	x3	x4	result
// false	true	true	true	true
// true	false	false	false	false
// let x1 = false;
// let x2 = true;
// let x3 = true;
// let x4 = true;
let x1 = true;
let x2 = false;
let x3 = false;
let x4 = false;

// (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T
// v -> | , ∧ -> &

function solution(x1, x2, x3, x4) {
    return (x1 | x2) & (x3 | x4) ? true : false
}

console.log(solution(x1, x2, x3, x4));
/*
x	y	x ∨ y	x ∧ y
T	T	  T       T
T	F     T	      F
F	T	  T	      F
F	F	  F	      F
 */

// x v y -> |
