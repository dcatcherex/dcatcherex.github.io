const str = "I cut my hair because you don't care my herat"

console.log('original',str);
console.log('toLowerCase',str.toLowerCase());
console.log('toUpperCase',str.toUpperCase());
console.log('trim',str.trim());

const strSplitArray = str.split(' ')
console.log(strSplitArray);

const quote = 'stay hungry, stay foolish'
console.log(quote.slice(5,11));

console.log(quote.indexOf('hungry'));
const startIndex = quote.indexOf('hungry')
const endIndex = startIndex + 'hungry'.length
console.log(quote.slice(startIndex,endIndex));

const extractText = (text, textToExtract)=>{
    const startIndex = quote.indexOf('text')
const endIndex = startIndex + textToExtract.length
const extractedText = text.slice(startIndex,endIndex);
if(extractedText){
    return extractedText
}else{
    return 'NOT FOUND'
}
}

console.log(quote.concat('stay saved','stay sweet'))

