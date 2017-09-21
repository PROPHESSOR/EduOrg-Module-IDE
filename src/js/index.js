const Sidebar = require("./js/Sidebar");
const App     = require("./js/App");

global.$ = jQuery;

$(document).on("load", function(){
    Sidebar.render.files($);
})

$("body").on("selectstart",()=>!1);

// App.menubar();