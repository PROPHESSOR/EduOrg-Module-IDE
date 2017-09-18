import React, { Component } from 'react';
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <header>Файлы проекта:</header>
                <file icon="bas">Autorun.bas</file>
            </aside>
        );
    }
}

export default Sidebar;