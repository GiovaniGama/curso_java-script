function joinStrings(array, separator) {
    return array.reduce((result, current) => result.concat(separator, current))
}
  
const strings = ['Hello', 'World', 'OpenAI', 'Chatbot'];
const separator = ', ';
const result = joinStrings(strings, separator);
console.log(result); // Saída: 'Hello, World, OpenAI, Chatbot'
  