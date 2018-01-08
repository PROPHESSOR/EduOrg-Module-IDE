const $Menu = {
	$Bar: {}
};
const $NW = require("nw.gui");

function menuAdd(a, b, d, e, f) {
	void 0 == $Menu[a] && ($Menu[a] = new $NW.Menu);
	switch (e) {
		case void 0:
			$Menu[a].append(new $NW.MenuItem({
				label: b,
				click: d
			}));
			break;
		case "subMenu":
			$Menu[a].append(new $NW.MenuItem({
				label: b,
				submenu: f
			}));
			break;
		case "checkbox":
			$Menu[a].append(new $NW.MenuItem({
				label: b,
				type: "checkbox",
				click: d
			}))
	}
	return !0
}

function menuShow(a, b, d) {
	$Menu[a].popup(b, d);
	return !0
}

function menuAddSeparator(a) {
	void 0 == $Menu[a] && ($Menu[a] = new $NW.Menu);
	$Menu[a].append(new $NW.MenuItem({
		type: "separator"
	}));
	return !0
}

function menuBarAdd(a, b, d) {
	void 0 == $Menu.$Bar[a] && ($Menu.$Bar[a] = new $NW.Menu({
		type: "menubar",
		title: b
	}));
	$Menu.$Bar[a].append(new $NW.MenuItem({
		label: b,
		submenu: $Menu[d]
	}));
	return !0
}

function menuBarShow(a) {
	$NW.Window.get().menu = $Menu.$Bar[a];
	return !0
}

module.exports = {
	menuAdd,
	menuAddSeparator,
	menuBarAdd,
	menuBarShow,
	menuShow
}