/*global define, require*/
/*jslint browser: true*/

/**
 * Eloqua adapter for PAF.
 */
define(['chrome_lib', 'user_info'], function (lib) {

	'use strict';

	var eloqua_url_template = 'https://s1795.t.eloqua.com/e/f2?elqSiteID=1795&elqFormName=access-redhat-com-integration&F_FormData_Trigger=RHNDOWNLOAD&QA_Version={PAF_VERSION}&C_EmailAddress={EMAIL}&A_RedirectURL={URL}';

	function trigger(event_name, e, data, callback) {
		var eloqua_url;
		if (event_name === 'RHNDownload') {
			var img = document.createElement('img');
			eloqua_url = eloqua_url_template
				.replace('{URL}', encodeURI(lib.getEventTarget(e).getAttribute('href')))
				.replace('{EMAIL}', encodeURIComponent(portal.user_info.email))
				.replace('{PAF_VERSION}', encodeURIComponent(require('analytics/main').get_version().replace('PAF ', '')));
			img.src = eloqua_url;
			callback();
		}
	}

	function wipe() {
		// empty stub.  must implement a wipe function, but in Eloqua's case it
		// doesn't need to do anything
	}

	return {
		trigger: trigger,
		wipe: wipe
	};

});

