
database = (function ()  {
		var cache = {};
		return function(url, data) {
			
			var o = {
				thenFuncs:[],
				errorFuncs:[],
				then: function(a){
					if (typeof a === 'function') o.thenFuncs.push(a);
					return o;
				},
				error: function(a){
					if (typeof a === 'function') o.errorFuncs.push(a);
					return o;
				}
			};

			if (!!cache[url]) {
				for (var i = 0; i < o.thenFuncs.length; i++) {
					o.thenFuncs[i](cache[url].raw, cache[url].db);
				}
			}

			/*if (!$) {
				return false;
			}*/


			if(!data) {
				h.get(url, data, function(err, a) {

					var db = false;
					try{
						db = JSON.parse(B64.decode($('.generalbox  .no-overflow', a).text().trim().replace(/\n|\r/g,'')));
					} catch(e){}

					cache[url] = {
						raw: a,
						db: db
					}

					for (var i = 0; i < o.thenFuncs.length; i++) {
						o.thenFuncs[i](a, db);
					}
				})
			}

			else {
				database(url, null, true).then(function (raw, db) {

					var t = $('<form ' + raw.substr(raw.indexOf('form'))).serializeArray(), i, nd = {};
					for (i in t) {
						nd[t[i].name] = t[i].value;
					}
					delete nd.cancel;
					nd.submitbutton = 'Save and display'
					nd["page[text]"] = B64.encode(JSON.stringify(data));

					h.post(url, nd, function(a){

						for (var i = 0; i < o.thenFuncs.length; i++) {
							o.thenFuncs[i](a, db);
						}

					})

				}).error(function(a,b,c){
					for (var i = 0; i < o.errorFuncs.length; i++) {
						o.errorFuncs[i](a,b,c);
					}
				})
			}

			return o
		};
	})();

