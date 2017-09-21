import React, { Component } from 'react';
import "./Sidebar.css";
import "./Icons.css";

class File extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(`You was click ${this.props.file.name}`);
    }

    render() {
        let filename = this.props.file.name;
        return <file icon={filename.split(".").pop()} onClick={this.handleClick}>{filename}</file>
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleAddFile = this.handleAddFile.bind(this);
        this.state = {
            files: [{
                name: "Autorun.bas",
            }]
        };
    }
    handleAddFile() {
        var filename = prompt("Filename: ");
        if(!filename) return;
        this.setState({
            files: this.state.files.concat({
                name: filename
            })
        });
    }
    render() {
        return (
            <aside>
                <header>Файлы проекта:<button onClick={this.handleAddFile}>+</button></header>
                {this.state.files.map(file => <File file={file} key={file.name} />)}
            </aside>
        );
    }
}

export default Sidebar;