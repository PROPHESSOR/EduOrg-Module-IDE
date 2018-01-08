// const MenuBar = require("./MenuBar");

const LocalServer = require('./LocalServer');

const App = {
    bar:{
        project:{
            New:alert,
            open:alert
        },
        run: {
            run() {
                LocalServer.start(()=>{
                    alert(`Введите в EduORG-Dev-SDK: ${LocalServer.getIP()}:${LocalServer.PORT}`);
                });
            },
            
            stop() {
                LocalServer.stop();
                alert("Остановлено!");
            }
        }
    },

    menubar:function() {
        
    }
};

module.exports = App;