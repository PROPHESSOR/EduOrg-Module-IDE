const Sidebar = require("./js/Sidebar");
const App     = require("./js/App");

// const MenuBar = require("./MenuBar");

global.$ = jQuery;

$(document).on("load", function(){
    Sidebar.render.files($);
})

$("body").on("selectstart",()=>!1);
$(".code").resizable();
$("aside").resizable({
    minWidth: 200
});

$$$ = {
    menubar:function() {
        menuAdd("project", "Новый проект", App.bar.project.New);
        menuAdd("project", "Открыть проект", App.bar.project.open);

        menuAdd("run", "Запустить", App.bar.run.run);
        menuAdd("run", "Остановить", App.bar.run.stop);
        menuAddSeparator("run");

        menuBarAdd("bar", "Проект", "project");
        menuBarAdd("bar", "Запуск", "run");
        menuBarShow("bar");
    }
}

$$$.menubar();