var fs = require('fs');
var exec = require('child_process').exec;

const templateHelper = require('./template-helper')

const done = () => {
	console.log(`Success! ${templateHelper.fullPath} written.`)
	exec(`open ${templateHelper.fullPath}`);
}

fs.writeFile(templateHelper.fullPath, templateHelper.template, done)