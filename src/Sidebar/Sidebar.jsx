import React, { Component } from 'react';
import "./Sidebar.css";
import "./Icons.css";

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <header>Файлы проекта:<button>+</button></header>
                <file icon="bas">Autorun.bas</file>
            </aside>
        );
    }
}

export default Sidebar;