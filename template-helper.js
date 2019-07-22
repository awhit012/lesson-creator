
const fileName = process.argv[process.argv.length -1] 
const path = "/Users/alexwhite/Desktop/lessons/"
const lessonName = fileName.replace("-", " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

module.exports.template = `
	# ${lessonName}

	![](https://www.lifewire.com/thmb/7pE__VIDaYq0OrolEZ3TBSAusbY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dicaprio3-583e33155f9b58d5b19e3a00.jpg)
	
	## Learning Objectives
	* Objective 1
	* Objective 2
	* Objective 3

	## Sub Heading

	#### Sub Sub Heading

	## Resources
	*[]()
	*[]()
	*[]()
`

module.exports.fullPath = path + fileName + ".md"