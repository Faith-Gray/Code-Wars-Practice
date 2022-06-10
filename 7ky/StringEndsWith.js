// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending);
}

//I wasn't aware of the endWith method. So I originally wrote this code with a really long work around. Ultimately this was the perfect example as to why I do codewars. To learn.
