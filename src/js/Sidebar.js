const Sidebar = {
    _files:[
        {
            "name":"Autorun.bas",
            "path":"Autorun.bas",
            active: false
        }
    ],

    listeners:{
        click:function(){
            //TODO: Write me...
        }
    },

    utils:{
        getFileById:function(){
            //TODO: Write me...
        }
    },

    render:{
        files:function(){
            //TODO: Write me...
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