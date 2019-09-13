// ==UserScript==
// @name		CanvasPaint
// @namespace	CanvasPaint
// @description	Edit course cover images in Canvas LMS (student)
// @author		Sleeyax
// @include		*instructure.com*
// @version		1.0.0
// @require	    style_injector.js
// @require	    ui.js
// @resource	edit_icon ../res/edit.svg
// @grant		GM_addStyle
// @grant		GM_setValue
// @grant		GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant		GM_getResourceText
// ==/UserScript==

// NOTE: customize your masterpiece by modifying these options
const options = {disableColorOverlay: true};

injectCss(options);
updateUI();