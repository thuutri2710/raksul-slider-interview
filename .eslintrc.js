module.exports = {
	"extends": [
		"plugin:react/recommanded"
		"airbnb",
		"prettier",
	],

"plugins": [
	"prettier"
]

"rules" : {
//here we can change any rule "off/error/warn"
"prettier/prettier": "error" // or warn
// this is needed for prettier to work

//example rules

"no-unused-vars": "warn" // default in airbnb is error

//you can disable add or remove rules based on your coding taste
}