// 1. Reverse a String (Manual)
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Piche se ek-ek character uthana
    }
    return reversed;
}
// 2. Remove Duplicates from Array (Manual)
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) unique.push(arr[i]);
    }
    return unique;
}
// 3. Second Largest Number (Manual)
function secondLargest(arr) {
    let max = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] > second && arr[i] < max) {
            second = arr[i];
        }
    }
    return second;
}
// 4. String Palindrome Checker (Manual)
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false; // Agar match nahi hua toh palindrome nahi hai
        }
    }
    return true;
}
// 5. Find Min and Max in Array (Manual)
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { min, max };
}