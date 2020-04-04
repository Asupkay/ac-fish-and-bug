var fs = require('fs');
var files = fs.readdirSync('./bugs/');
files.forEach((file) => {
  const fileName = file.replace(/\.[^/.]+$/, "");
  console.log(`import ${fileName} from '../public/bugs/${file}';`);
});
console.log(files);
