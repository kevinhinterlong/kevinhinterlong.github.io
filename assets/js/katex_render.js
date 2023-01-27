// var elements = document.getElementsByTagName('script')

// Array.prototype.forEach.call(elements, function(element) {
//   if (element.type.indexOf('math/tex') != -1) {
//      // Extract math markdown
//      var textToRender = element.innerText || element.textContent;

//      // Kramdown and KaTeX workaround
//      // https://github.com/rohanchandra/type-theme/issues/47
//      textToRender = textToRender.replace(/%.*/g, '');

//      // Create span for KaTeX
//      var katexElement = document.createElement('span');

//      // Support inline and display math
//      if (element.type.indexOf('mode=display') != -1){
//        katexElement.className += "math-display";
//        textToRender = '\\displaystyle {' + textToRender + '}';
//      } else {
//        katexElement.className += "math-inline";
//      }

//      katex.render(textToRender, katexElement);
//      element.parentNode.insertBefore(katexElement, element);
//   }
// });
// const elements = [...document.getElementsByTagName('script')];
// const mathElements = elements.filter((elem) => elem.type.includes('math/tex'));

// for (let element of mathElements) {
//   // Regex needed to workaround the conflict between Kramdown and KaTeX.
//   // See: https://github.com/rohanchandra/type-theme/issues/47
//   const textToRender = (element.innerText || element.textContent).replace(/%.*/g, '');
//   const katexElement = document.createElement('span');
//   const isDisplayMode = element.type.includes('mode=display');
//   katexElement.className = isDisplayMode ? "math-display" : "math-inline";
//   katex.render(textToRender, katexElement, { displayMode: isDisplayMode });
//   element.parentNode.insertBefore(katexElement, element);
// }
