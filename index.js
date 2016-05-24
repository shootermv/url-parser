var exports = module.exports = {};

const nodeUrl = require('url');

exports.parse = function(url) {

	function isUrlValid(parsed) {
       return !!parsed.protocol;
	}
    let parsed = nodeUrl.parse(url);
  //validation
    if(!isUrlValid(parsed)){
       return  null;
    }

    
    return {
	    url : parsed.href,
	    host: parsed.host,
	    port: (parsed.port !== null) ? parsed.port : 80,
	    file: parsed.pathname,
	    path: parsed.path
	};
}


