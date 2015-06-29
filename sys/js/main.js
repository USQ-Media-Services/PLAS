var ui,
	ignore,
	postMessageCallback = {},
	w = {},
	b = {one:false},
	plasMule = 'http://mystaffdesk.usq.edu.au/moodle2/pluginfile.php/89620/mod_resource/content/0/jaxxy-mule/mule.html';
	lorMule = 'https://lor.usq.edu.au/usq/file/0ba63021-40d0-4969-b503-fc71c5fd0e11/1/jaxxy-mule/mule.html';



var h;

var editor;

runWhenReady = (function () {
	var t = [];

	$(function () {

		if (typeof jaxxy === 'object') {
			jaxxy.modules.mule.init(plasMule, true, true);
			h = jaxxy;
		}
		else {
			h = $;
		}

		setTimeout(function () {
			for (var i in t) {
				t[i]();
			}
		}, 1500)
	})

	return function (f) {
		if (typeof f === 'function') t.push(f);
	}
}());




Math.randomTo = function (from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
};









function master($scope, $sce, $filter) {
	if(w.database) database = w.database;

	m = $scope;

	m.trust = function(a) {if(typeof a === 'string'){return $sce.trustAsHtml(a||'&nbsp;');} else {return '';}};

	m.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if(phase === '$apply' || phase === '$digest') {
			if(fn && (typeof(fn) === 'function')) {
				fn();
			}
		}
		else {
			this.$apply(fn);
		}
	};

	m.storageVals = [
		'plas_highlight',
		'plas_news',
		'plas_navi',
		'plas_tips'
	];

	m.skimNav = function () {

		$('#inst37844 .content p').each(function () {
			var p = $(this);

			var heading = p.find('bold,strong');
			heading.remove();

			var newNav = {
				heading: heading.text().trim(),
				items: []
			};

			p.find('*').not('*>strong').each(function () {
				var a = $(this);
				if (a.text().trim().length > 0) newNav.items.push({
					title: a.text().trim(),
					link: a.attr('href')
				});
				a.remove();
			});


			m.nav.push(newNav);

		});
	}

	m.notSorted = function(obj) {
		if (!obj) {
			return [];
		}
		return Object.keys(obj);
	}

 	var orderBy = $filter('orderBy');



	if (typeof w !== 'object') {
		m.ignore = function (a) {
			return a;
		}
	}


	m.order = function() {
		var t = {},
		k = [];
		for (var i in m.news) {
			t[m.news[i].order] = m.news[i];
		};

		for (var i in m.news) {
			k.unshift(m.news[i])
		};
		return k;
	};

	runWhenReady(function () {
		m.highlight = storage('plas_highlight', storage('plas_highlight') || {});
		database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=50549', null, true).then(function (a, b) {
			m.highlight = storage('plas_highlight', b);
			m.safeApply();
		});




		m.news = storage('plas_news', storage('plas_news') || {});
		database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=46737', null, true).then(function (a, b) {
			m.news = storage('plas_news', b);
			m.safeApply();
		});




		m.site = storage('plas_site', storage('plas_site') || {});
		database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=61566', null, true).then(function (a, b) {
			m.site = storage('plas_site', b);
			m.safeApply();
		});
	})

	m.getFrontpageImage = function() {
		return $(m.$root.frontpage).find('img').get(0).src;
	}

}









function adminPanel($scope, $sce) {
	admin = $scope;

	admin.updateNewsPosts = function () {
		box.open();

		var months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		]

		tempNews = {};
		database('http://mystaffdesk.usq.edu.au/moodle2/mod/forum/view.php?id=36509', null, true).then(function (a) {
			var newsDatabase = 'http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=46737&return=1',
			count = 0,
			maxCount = 3;
			doneCount = 0;

			$('.topic.starter a', a).each(function (i) {
				if (i < maxCount) {
					var v = $(this),
					row = {
						title: v.text(),
						link: v.attr('href')
					}

					$.get(row.link, function (d) {
						var n = $(d),
						max = 150;
						count++;
						n.find('.attachedimages').remove();
						row.author = $(n.find('.author a')[0]).text();
						row.Date = (new Date($(n.find('.author')[0]).text().substr($(n.find('.author')[0]).text().indexOf(row.author) + row.author.length + 3)))
						row.date = row.Date.getDate() + ' ' + months[row.Date.getMonth()] + ' ' + row.Date.format('{yyyy}') + ', ' + (row.Date.getHours() > 12 ?  row.Date.getHours() - 12 : row.Date.getHours()) + ':' + (row.Date.getMinutes() < 10 ? '0' :'') + row.Date.getMinutes() + ' ' + (row.Date.getHours() >= 12 ? 'PM' : 'AM');
						row.order = Date.create(row.date).getTime();
						row.text = $(n.find('.posting.fullpost')[0]).text().substr(0, max);
						tempNews[maxCount - i] = row;
						if (count === maxCount || count == $('.topic.starter a', a).length) {
							database(newsDatabase, tempNews, true).then(function (a, b) { });
							m.news = tempNews;
							m.safeApply();
							box.close(true);
						}
					});
				}
			});
		});
	}



	admin.updateTips = function () {
		box.open();
		var tempTips = [];

		$.ajaxSetup({
		  async: false
		});

		$.get('http://mystaffdesk.usq.edu.au/moodle2/mod/wiki/view.php?pageid=888', function (a) {

			var data = $(a),

			tierOne = data.find('.text_to_html [href^="http://mystaffdesk.usq.edu.au/moodle2/mod/wiki/view.php?pageid="]');

			tierOne.each(function() {
				$.get(this.href, function (b) {
					var data = $(b);
					tierTwo = data.find('.text_to_html [href^="http://mystaffdesk.usq.edu.au/moodle2/mod/wiki/view.php?pageid="]');
					tierTwo.each(function() {
						var tierThree = this;
						$.get(tierThree.href, function (c) {

							var row = {
								link: tierThree.href
							},
							v = $(c).find('.text_to_html');

							row.title = $(v.find('h1').get(0)).text().replace('[edit]','');
							row.text = $(v.find('h1').get(0)).next().text();
							tempTips.push(row);
						});
					});

				});
			});


		})

		database('http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=46958&return=1', tempTips, true).then(function () {
			box.close();
			$.ajaxSetup({
			  async: false
			});
		});
	}






	admin.updateHighlight = function () {
		box.open();
		database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=36609', null, true).then(function (a, b) {
			var data = $($(a.substr(a.indexOf('role="main"') - 5))[0]).find('.no-overflow'),
			fp = {
				title: data.find('h2').text(),
				image: data.find('img').attr('src'),
				text: (function () {
					var t = '';
					data.find('img').remove();
					data.find('p').each(function () {
						t = t + '<p>' + $(this).html() + '</p>'
					})
					return t;
				}())
			}

			database('http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=50549&return=1', fp, true).then(function () {
				box.close(true);
			});

			m.safeApply();
		});
	}
}









function tips($scope, $sce) {
	if(w.database) database = w.database;
	_cache = {};
	t = $scope;
	t.trust = function(a) {if(typeof a === 'string'){return $sce.trustAsHtml(a||'&nbsp;');} else {return '';}};

	t.safeApply = function (fn) {
		var phase = this.$root.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		}
		else {
			this.$apply(fn);
		}
	};

	runWhenReady(function () {

		t.tips = storage('plas_tips', storage('plas_tips') || [])

		database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=46958', null, true).then(function (a, b) {
			t.tips = b || t.tips || [];
			storage('plas_tips', t.tips);
		})
	})

	t.tempTips = [];


	t.getTip = function () {
		var k = t.tips || [];
		if(k.length > 0) {
			t.tip = k[Math.randomTo(0, k.length - 1)];
			setTimeout(t.getTip, 15000);
		}
		else setTimeout(t.getTip);
		t.safeApply();
	}

	t.getTip();
}









$('svg a').click(function () {
	window.open(
		$(this).attr('xlink:href'),
		$(this).attr('target')
	);
})










function navigation($scope, $sce){
	if(w.database) database = w.database;

	n = $scope;

	n.trust = function(a) {if(typeof a === 'string'){return $sce.trustAsHtml(a||'&nbsp;');} else {return '';}};

	n.dropdown = sessionStorage.getItem('menu');

	$('[heading="'+n.dropdown+'"]').toggleClass('plas_active')

	n.setHeading = function(h){
		if (!h.items) return false;
		n.dropdown = (n.dropdown===h||h);
	}

	n.getPage = function(heading){
		$.get(heading.feed, function(data){
			heading.data = $(data).find('.region-content .clearfix .no-overflow').html();
			n.safeApply();
		},'text');
	}

	n.isVisbleArray = function(feed){
		a = (feed ? [0] : false);
		return a;
	}

	n.nav = storage('plas_navi', storage('plas_navi') || []);

	runWhenReady(function () {

		if(ui) database('http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=36372', null, true).then(function (a, b) {

			n.nav = b;
			storage('plas_navi', b);
			if(w && w.hideLoading){
				w.hideLoading()
			}
			n.safeApply();

		});
	})

	if (w) n.editButton = w.editButton

	/*function fixFeedbackForm () {
		$($('.feedback-form')[0].contentDocument).find('.box.feedback_anonymousinfo').css('display', 'none').hide(0);
		$('.box.feedback_form form', $('.feedback-form')[0].contentDocument).attr('target', '_top')
		var form = $('.mform', $('.feedback-form')[0].contentDocument).clone();
		form.find('#textarea_3644').css('width', 'calc(100% - 14px)').attr('cols', '23');
		form.find('#multichoice_3638').css('width', '100%');
		html = $($('.feedback-form')[0].contentDocument).find('html').css({overflow: 'hidden', padding:0, background:'#efe9e5'});
		doc = $($('.feedback-form')[0].contentDocument.body);
		doc.empty().css({overflow: 'hidden', padding:0, background:'#efe9e5'}).append(form);
		doc.find('form').attr('target', '_top')
		$('.feedback-form').css('visibility', 'visible')
	}*/







	n.createBookNav = function() {
		if($('body').hasClass('editing')) {
			$('.block.block_book_toc').addClass('block_with_controls')
			return false;
		}

		/*Moodle Book stuff*/
		n.book = [];

		var prefix = location.href.split('/');
			prefix[prefix.length-1] = "";
			prefix = prefix.join('/');


		$('.block_book_toc .content > div > ul > li').each(function(){

			var chapter = $(this);

			var data = {
				title: $(chapter.find('*').get(0)).text().trim(),
				link: chapter.find('*').attr('href') || false,
				items: []
			}


			chapter.find('li > *').each(function(){
				var t = $(this);
				var i = {title:t.text(), link:(t.attr('href') ? (prefix)+t.attr('href'):false)}
				data.items.push(i);
			});

			n.book.push(data);
		})

		var bookHolder = $('.block_book_toc .content > div');
			bookHolder.empty();
			bookHolder.addClass('plas_book');

		for(var i in n.book){
			var v = n.book[i];
			var heading = $('<div class="plas_bookWrapper"><div class="plas_chapterHeading"><a notlink="">' + /*(parseFloat(i)+1)+'.) ' +*/ v.title+'<div class="plas_expander"></div></a></div></div>')
			bookHolder.append(heading)
			heading.find('.plas_chapterHeading').click(function(){
				$('.plas_bookWrapper.plas_active').not($(this).parent()).removeClass('plas_active');
				$(this).parent().toggleClass('plas_active');
			});

			var wrapper = $($('.plas_bookWrapper').get(i));
			var h = $('<div class="plas_bookItem "><a '+(!!v.link ? 'href="'+v.link+'"' : 'notlink=""')+'>'+/*(parseFloat(i)+1) + '.0 ' +*/'Overview</a></div>');

			wrapper.append(h)
			if(!v.link) {
				wrapper.addClass('plas_active');
				h.addClass('plas_activeItem');
			}

			for(var k in v.items) {
				var d = v.items[k];
				var item = $('<div class="plas_bookItem "><a '+(!!d.link ? 'href="'+d.link+'"' : 'notlink=""')+'>'+d.title+'</a></div>');
				if(!d.link){
					item.addClass('plas_activeItem');
					wrapper.addClass('plas_active')
				}
				wrapper.append(item)

			}

		}





		$('.plas_chapterHeading > a:before').on('click', function(){})

		$('.plas_chapterHeading > a[href=""]').off();

		$('.block_book_toc .content > div').css('display','block');

	}

	n.createBookNav();

	n.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if(phase === '$apply' || phase === '$digest') {
			if(fn && (typeof(fn) === 'function')) {
				fn();
			}
		}
		else {
			this.$apply(fn);
		}
	};
}









function modal($scope, $modalInstance, items) {
	$scope.ok = function () {
		$modalInstance.close(false);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}









function meta($scope, $modal, $sce) {

	w = $scope;

	ignore = true;

	w.editButton = function (event, button) {
		console.log(1)
		event.preventDefault();
		w.$root.editButton = button;

		var modalInstance = $modal.open({
			templateUrl: 'editButton.html',
			controller: modal,
			backdrop: 'static',
			resolve: {
				items: function () {
					return '';
				}
			}
		});


		w.$root.closeEditButton = modalInstance.close

		w.safeApply();
	}

	w.safeApply = function (fn) {
		var phase = this.$root.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		}
		else {
			this.$apply(fn);
		}
	};

	w.showSaving = function () {

		var modalInstance = $modal.open({
			templateUrl: 'saving.html',
			controller: modal,
			backdrop: 'static',
			resolve: {
				items: function () {
					return w.progress;
				}
			}
		});

		w.hideSaving = modalInstance.close
	};

	w.showLoading = function () {

		var modalInstance = $modal.open({
			templateUrl: 'loadingDatabase.html',
			controller: modal,
			backdrop: 'static',
			resolve: {
				items: function () {
					return w.progress;
				}
			}
		});

		w.hideLoading = modalInstance.close
	};

	w.edit = function (data) {
		w.$root.editData = data;

		var panel = function () {

			var modalInstance = $modal.open({
				templateUrl: 'editLink.html',
				controller: modal,
				resolve: {
					items: function () {
						return w.progress;
					}
				}
			});
			modalInstance.result.then(function () {
			}, function () {
			});

		};

		panel();
	}


	/*
	w.get = function(url, func, async) {

		var moodle = $('#mystaffdesk')[0],
		lor = $('#studyreserveprd')[0],
		direct = $('#direct')[0],
		id = getEpoch() + '-' + Math.randomTo(100000,999999) + '-' + Math.randomTo(100000,999999)  + '-' + Math.randomTo(100000,999999),
		payload = JSONfn.stringify({id:id, url:url, async: async, func: function(prev) {
			//$.ajaxSetup({async: prev.async});
			$.get(prev.url, function (data) {
				parent.postMessage(JSONfn.stringify({id:prev.id, data:data}), "*");
				//$.ajaxSetup({async: true});
			}, 'text');
		}})

		if (url.indexOf('mystaffdesk') !== -1) {
			moodle.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('direct') !== -1) {
			direct.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('studyreserveprd') !== -1) {
			lor.contentWindow.postMessage(payload, "*");
		}
		else {
			//$.ajaxSetup({async: async});

			$.get(url, function (data) {
				func(data);
			}, 'text');

			//$.ajaxSetup({async: true});
		}

		postMessageCallback[id] = function (e) { func(e); };
	}*/

	/*
	w.post = function(url, data, func) {
		var moodle = $('#mystaffdesk')[0],
		lor = $('#studyreserveprd')[0],
		direct = $('#direct')[0],
		id = getEpoch() + '-' + Math.randomTo(100000,999999) + '-' + Math.randomTo(100000,999999)  + '-' + Math.randomTo(100000,999999),
		payload = JSONfn.stringify({id:id, url:url, data:data, func: function(prev) {
			$.ajax({
				xhr: function () {
					var req = $.ajaxSettings.xhr();
					if (req) {
						req.upload.addEventListener('progress', function (event) {
							if (event.lengthComputable) {
								parent.postMessage(JSONfn.stringify({id:'progress', data:(event.loaded / event.total) * 100}), "*");
							}
						}, false);
					}
					return req;
				},
				type: "POST",
				url: prev.url,
				data: prev.data,
				contentType: "application/x-www-form-urlencoded;charset=UTF-8"
			}).done(function (d) {
				parent.postMessage(JSONfn.stringify({id:prev.id, data:d}), "*");
			})
		}})

		if (url.indexOf('mystaffdesk') !== -1) {
			moodle.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('studyreserveprd') !== -1) {
			lor.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('direct') !== -1) {
			direct.contentWindow.postMessage(payload, "*");
		}
		postMessageCallback[id] = function (e) { func(e); };
	}*/

	/*
		w.database = (function ()  {
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

				//if (!$) {
				//	return false;
				//}


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
					w.database(url, null, true).then(function (raw, db) {

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
	*/

	w.saveDatabase = function (data, next) {
		w.safeApply(w.$root.progress = 0);
		w.database('http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=36372&return=1', n.nav, true).then(next);
	}

	w.saveNavBlock = function (next) {
		w.$root.progress = 0;
		w.safeApply();
		h.get('http://mystaffdesk.usq.edu.au/moodle2/course/view.php?id=2018', {}, function (err, data) {
			var k = data, p1, d;

			p1 = k.indexOf('"sesskey":"')
			k = k.substr(p1 + 11)
			k = k.substr(0, k.indexOf('"'))
			h.get('http://mystaffdesk.usq.edu.au/moodle2/course/view.php?id=2018&sesskey=' + k + '&bui_editid=37844', {}, function (err, data) {

				var d = $($(data).find('form')).serializeArray();
				var y = {};
				for (var i in d) {
					y[d[i].name] = d[i].value
				}

				if (!!d && !!y) {
					w.getData('navblock', function (data) {
						y['config_text[text]'] = data;
						d[11].value = data;
						var t = h.post('http://mystaffdesk.usq.edu.au/moodle2/course/view.php?id=2018&sesskey=' + k + '&bui_editid=37844', y).success(function () {
							next();
						})
					})
				}
			});
		});
	}

	w.saveSplash = function (next) {
		w.$root.progress = 0;
		w.safeApply();

		h.get('http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=61566&return=1', {}, function (err, data) {
			var d = $($(data).find('form')[0]).serializeArray();
			var y = {};
			for (var i in d) {
				y[d[i].name] = d[i].value
			}

			if (!!d && !!y) {
				w.getData('frontpage', function (data) {
					y['summary_editor[text]'] = data;
					w.safeApply(w.$root.progress = 0);
					w.database('http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?update=61566&return=1', m.site, true).then(next);
					//h.post('http://mystaffdesk.usq.edu.au/moodle2/course/editsection.php?id=84566&sr=0', y, next)
				})
			}
		});
	}

	w.getData = function (type, callback, noContent) {

		if (!type) return false;

		var counter = $('link[data-' + type + ']').length + $('script[data-' + type + ']').length,
			counter2 = counter,
			html = '';

		var final = function(y){
			var t = $('div[data-' + type + ']');

			t.find('*').not('ng-skip')
			.removeClass('ng-scope')
			.removeClass('ng-controller')
			.removeClass('ng-valid')
			.removeClass('angular-medium-editor')
			.removeClass('ng-show')
			//.removeClass('ng-hide')
			.removeClass('ng-dirty')
			.removeClass('ng-pristine')
			.removeAttr('contenteditable')
			.removeAttr('ng-src')
			.removeAttr('ng-href')
			.removeAttr('ng-click')
			.removeAttr('medium-editor')
			.removeAttr('disable-links')
			.removeAttr('ng-show')
			.removeAttr('ng-touch')
			.removeAttr('ng-init')
			//.removeAttr('ng-hide')
			.removeAttr('ng-model')
			.removeAttr('ng-hide-in-editor')
			.removeAttr('ng-class')
			.removeAttr('ng-include')
			.removeAttr('ng-style')
			.removeAttr('ng-repeat')
			.removeAttr('options')
			.removeAttr('data-medium-element')
			.removeAttr('data-placeholder');


			t.find('.editorItem').remove();
			callback( (!!noContent ? y : (y + t.html()).replace(/switch-/g, 'ng-')) );
		}


		$($('style[data-' + type + ']').get().reverse()).each(function (i, e) {
			html = html + ('<link rel="stylesheet" type="text/css"  href="' + 'data:text/css;base64,' + B64.encode($(e).html()) + '" >');
		});


		$('link[data-' + type + ']').each(function (i, e) {
			counter2--;
				html = html + '[' + counter2 + ']';
				(function(i, e) {
					jaxxy.modules.get(e.href,'', true).success(function (a) {
						counter = counter - 1;
						html = html.replace('[' + i + ']', '<link rel="stylesheet" type="text/css" data-oldsrc="' + e.href + '" href="' + 'data:text/css;base64,' +  B64.encode(a) + '">')
						if(counter === 0) final(html)
					});

				})(counter2, e);
		});




		$($('script[data-' + type + ']')).each(function (i, e) {
			counter2--;
				html = html + '[' + counter2 + ']';
				(function(i, e) {
					jaxxy.modules.get(e.src, '', true).success(function (a) {
						counter = counter - 1;
						html = html.replace('[' + i + ']', '<script type="application/javascript" data-oldsrc="' + e.src + '" src="' + 'data:application/javascript;base64,' +  B64.encode(a) + '"></script>')
						if(counter === 0) final(html)
					}, {}, true);
				})(counter2, e);
		});
	}

	w.save = function () {
		w.showSaving();
		w.$root.saveTitle = 'Saving Database (Operation: 1/3)';
		w.safeApply();
		w.saveDatabase(w.buttons, function () {
			w.$root.saveTitle = 'Saving Navigation (Operation: 2/3)';
			w.safeApply();

			w.saveNavBlock(function () {
				w.$root.saveTitle = 'Saving Homepage (Operation: 3/3)';
				w.safeApply();
				w.saveSplash(function () {
					w.hideSaving();
					w.safeApply();
				});
			})
		})
	}

	w.pages = [
		{title: 'Navigation', page: 'navBlock', saveFunc: function () {

		}},
		{title: 'Frontpage', page: 'splashPage', saveFunc: function () {
			w.showSaving();
			w.saveDatabase(w.buttons, w.saveSplash)
		}}
	]

	w.confirm = function (next, arr, sec) {
		if(confirm('Are you sure?')) next(arr, sec);
	}

	w.add = function (arr, blank) {
		if (!arr) {
			arr = [];
		}
		if (window.confirm('Are you sure?')) {
			arr.push(JSON.parse(JSON.stringify(blank)));
		}
	}

	w.remove = function (arr, index) {
		if (!arr || !index) return false
		if (window.confirm('Are you sure?')) {
			arr.splice(index,1)
			w.safeApply();
		}
	}

	w.blankItem = {title:'Placeholder', link:'', image:'https://studyreserveprd.usq.edu.au/usq/file/d0c67c69-1e1b-4ada-b565-6a43f2b67513/1/icons/Splash_Placeholder.svg'};

	w.showLoading();

	w.safeApply(w.$root.progress = 0);
}











runWhenReady(function fixIframeStyles() {
	getIframes = setInterval(function () {
		$(function () {
			$('[rel="stylesheet"]').each(function () {
				var ss = this;
				$('.mceIframeContainer iframe').each(function () {
					clearInterval(getIframes);
					var body = $(this.contentDocument.head);
					if(body.find('[rel="stylesheet"]').length < $('[rel="stylesheet"]').length) {
						body.append($(ss).clone())
					}
				})
			});

		})
	}, 250);

	if (!editor) $('.plas_middleContent').find('[contenteditable]').removeAttr('contenteditable');
	$('.do-not-show').removeClass('do-not-show');

	if (typeof w === 'object') {
		w.database = database;

	}
})







var modules = [];
if (ui) {
	modules.push('ui.bootstrap')
	modules.push('contenteditable')
}

_app = angular.module('PLAS', modules)

_app.filter('reverse', function() {
  return function(items) {
    return (arguments[0] || [] ).reverse();
  };
})



_app.directive('ngHoverIn', function () {
	return function (scope, element, attrs) {
		element.bind('PointerOver', function () {
			try {
				scope.$apply(attrs['ngHoverOver']);
			} catch (e) {}
		});
	};
})

_app.directive('ngHoverOut', function () {
	return function (scope, element, attrs) {
		element.bind('PointerOut', function () {
			try {
				scope.$apply(attrs['ngHoverOut']);
			} catch (e) {}
		});
	};
})
