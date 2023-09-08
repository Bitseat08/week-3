function concatenateWord(word, n) {
    let concatenated = '';
  
    for (let i = 0; i < n; i++) {
      concatenated += word;
    }
  
    return concatenated;
  }
  
  // Example :
  let result = concatenateWord('Hello', 3);
  console.log(result); // This will print 'HelloHelloHello'
  
