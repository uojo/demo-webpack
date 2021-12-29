require('./import_a')

console.log('92.module.hot', module.hot);
// if (module.hot) {
//   module.hot.accept('./import_a.js', function () {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }