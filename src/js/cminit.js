let editor = CodeMirror.fromTextArea($("#code")[0], {
    lineNumbers: true,
    mode: "text/javascript",
    matchBrackets: true,
    autoCloseBrackets: true,
    extraKeys: {
        "Ctrl-Tab": "autocomplete",
        "Ctrl-/": "toggleComment"
    },
    continueComments: "Enter",
});
editor.setOption("theme", "monokai");
editor.setSize("100%", "100%");
editor.on("keyup", function (e, s) {
    $rampage = s;
    if (s.type == "keyup" && !e.state.completionActive && s.keyCode != 13 && s.keyCode !=
        27 && s.keyCode != 32 && s.keyCode != 8 && /^[A-Zа-яА-Яa-z$_]*$/.test(s.key) && s.key
        .length == 1 && !s.ctrlKey && !s.altKey) {
        // CodeMirror.showHint(e, null, { FIXME: Ошибка
        //     completeSingle: false
        // });
        // CodeMirror.commands.autocomplete(e, null, {completeSingle: false});
    }
});