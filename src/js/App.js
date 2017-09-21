const App = {
    bar:{
        project:{
            New:alert,
            open:alert
        }
    },

    menubar:function(){
        menuAdd("project", "Новый проект", App.bar.project.New);
        menuAdd("project", "Открыть проект", App.bar.project.open);

        menuBarAdd("bar", "Проект", "project");
        menuBarShow("bar");
    }
};

module.exports = App;