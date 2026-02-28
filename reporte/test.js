const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptContext = html.split('<script>')[1].split('</script>')[0];

console.log('Script length:', scriptContext.length);
try {
  new Function(scriptContext);
  console.log("No syntax errors.");
} catch(e) {
  console.log("Syntax error inside HTML script:", e);
}
