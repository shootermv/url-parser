var test = require('tape');
var parser =  require('../parser');
test('valid url', function (t) {
    t.plan(2);
    let parsed = parser.parse('http://www.node.org/docs/index.html');
    t.deepEqual(
		parsed.url,
		'http://www.node.org/docs/index.html',
		"tests url"
	);
    t.deepEqual(
		parsed.host,
		'www.node.org',
		"tests host"
	);
	
});
test('invalid url', function (t) {
    t.plan(1);
    let parsed = parser.parse('koko');
    t.equal(
		parsed,
		null
	);

	
});