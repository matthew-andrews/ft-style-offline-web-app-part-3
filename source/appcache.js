/**
 * Appcache Loader
 *
 * After gaining the user's permission to make the app word offline,
 * load a page with an manifest in its HTML tag in an iframe
 *
 * @author Matt Andrews <code@mattandre.ws>
 */
/*global window, APP, APP_ROOT, confirm, console, document, localStorage*/
APP.appcache = (function () {
	'use strict';

	var statuses = {
		"-1": 'timeout',
		"0": 'uncached',
		"1": 'idle',
		"2": 'checking',
		"3": 'downloading',
		"4": 'updateready',
		"5": 'obsolete'
	}, offlineEnabled;

	function innerLoad() {
		var iframe = document.createElement('IFRAME');
		iframe.setAttribute('style', 'width:0px; height:0px; visibility:hidden; position:absolute; border:none');
		iframe.src = APP_ROOT + 'manifest.html';
		iframe.id = 'appcacheloader';
		document.body.appendChild(iframe);
	}

	function logEvent(evtcode, hasChecked) {
		var s = statuses[evtcode], loaderEl;
		if (hasChecked || s === 'timeout') {
			if (s === 'uncached' || s === 'idle' || s === 'obsolete' || s === 'timeout' || s === 'updateready') {
				loaderEl = document.getElementById('appcacheloader');
				loaderEl.parentNode.removeChild(loaderEl);
			}
		}
	}

	function requestOffline() {
		return confirm("This website is capable of working offline. Would you like to enable this feature?");
	}

	function start() {
		if (offlineEnabled !== true && offlineEnabled !== false) {
			offlineEnabled = requestOffline();
			if (offlineEnabled) {
				localStorage.offlineEnabled = true;
			}
		}
		if (offlineEnabled === true) {
			innerLoad();
		}
	}

	// If offline mode already enabled, run innerLoad
	offlineEnabled = localStorage.offlineEnabled;

	if (offlineEnabled !== undefined) {
		offlineEnabled = (offlineEnabled === "true");
	}

	return {
		start: start,
		logEvent: logEvent
	};
}());