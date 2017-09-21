const Sidebar = {
    _files:[
        {
            "name":"Autorun.bas",
            "path":"Autorun.bas",
            active: false,
            "type":"bas"
        }
    ],

    listeners:{
        click:function(element){
            //TODO: Клик по элементу
            global.$("file").removeClass("active");
            global.$(element).addClass("active");
        },
        menu:function(element){
            //TODO: Контекстное меню элемента
            return false;
        }
    },

    utils:{
        getFileById:function(id){
            //TODO: Write me...
        }
    },

    render:{
        files:function($){
            global.$("#files").html(``);
            Sidebar._files.forEach(function(e, i) {
                global.$("#files").append(`<file icon="${e.type}" onclick="Sidebar.listeners.click(this)" oncontextmenu="Sidebar.listeners.menu(this)" fileid="${i}">${e.name}</file>`);
            });
        }
    },

    //Methods

    addFile:function(name, render = false){
        let props = {
            "name":name,
            "path":name,
            "type":name.split(".").pop(),
            active:false
        };
        Sidebar._files.push(props);
        if(render) Sidebar.render.files();
    }
};

module.exports = Sidebar;