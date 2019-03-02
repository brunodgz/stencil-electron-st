var fs = require('fs');

const buildType = process.argv.slice(2)[0];
const codeDir   = buildType == 'dev' ? 'src' : 'www';
console.log(buildType);
 
//Replace slash to relative path navigation
var contents = fs.readFileSync(codeDir+'/index.html', 'utf8');
var replaced = contents.replace(/=\"\//g, "=\"");
replaced = replaced.replace("/sw.js", "sw.js");

console.log(replaced);
fs.writeFileSync(codeDir+'/index.html', replaced, (error)=>{

});
