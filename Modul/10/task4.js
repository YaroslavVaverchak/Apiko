function calculateWordsInString(string) {
    
    const wordsArray = string.split(" ");
  
    const nonEmptyWordsArray = wordsArray.filter(word => word !== "");
  
    const wordCount = nonEmptyWordsArray.length;
  
    console.log(`кількість слів у стрічці - ${wordCount}`);
  }

  calculateWordsInString("Easy string for count"); 
  calculateWordsInString("Easy"); 
  calculateWordsInString("Some string with a triple   space");  
  calculateWordsInString("Some?  string, with a triple   space"); 