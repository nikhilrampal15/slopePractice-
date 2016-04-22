module.exports = {
  countChar: function (str) {
    var total = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === "B") {
        total++;
      }
    }
    return total;
  },
  range: function (start, end, step) {
    if (!step) {
      step = 1;
    }
    var arr = [];
    for (var i = start; start <= end ? i <= end : i >= end; i += step) {
      arr.push(i);
    }
    return arr;
  },
  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  reverseArray: function (arr) {
    newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i])
    }
    return newArr;
  },
  reverseInPlace: function (arr) {
    var temp = 0;
    for (var i = 0; i <= arr.length / 2; i++) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  },
  isPalindrome: function Palindrome(str) {
    var arr = str.split("");
    var check = arr.reverse();
    var glue = check.join("");
    if (str == glue) {
      return true;
    }
    else {
      return false;
    }
  },
  isPrime: function (num) {
    for (var i = 0; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  },
  findLongestWord: function (arr) {
    arr.sort(function (a, b) {
      return b.length - a.length
    });
    return arr[0];
  },
  filterLongWords: function (arr, num) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > num) {
        results.push(arr[i])
      }
    }
    return results;
  },
  createObject: function (key, value) {
    var myObj = {};
    myObj[key] = value;
    return myObj
  },
  numberObject: function (num) {
    var myObj = {};
    for (var i = 0; i < num; i++) {
      myObj[i] = i * 5;
    }
    return myObj;
  },
  reverseString: function (string) {
    return string.split(' ').map(function (item) {
      return item.split('').reverse().join('');
    }).join(' ');
  },
  youngestPerson: function (arr) {
    var smallestAge = 500;
    var youngest = " ";
    for (var i = 0; i < arr.length; i++) {
      for (var key in arr[i]) {
        if (arr[i][key] < smallestAge) {
          smallestAge = arr[0][key];
          youngest = key
        }
      }
      return youngest;
    }
  },
  keys: function (obj) {
    var results = [];
    for (var keys in obj) {
      results.push(keys)
    }
    return results;
  }

};
