
[
    {
        "key": "ctrl+k ctrl+b",
        "command": "workbench.action.toggleStatusbarVisibility"
    },
    {
        "key": "ctrl+shift+/",
        "command": "workbench.action.createTerminalEditor"
    },
    {
        "key": "ctrl+v ctrl+h",
        "command": "vim-cheatsheet.open"
    },
    {
        "key": "ctrl+alt+v",
        "command": "toggleVim"
    },
    {
        "key": "ctrl+c",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "ctrl+insert",
        "command": "-editor.action.clipboardCopyAction"
    },
    {
        "key": "ctrl+v",
        "command": "-extension.vim_ctrl+v",
        "when": "editorTextFocus && vim.active && vim.use<C-v> && !inDebugRepl"
    },
    {
        "key": "ctrl+v",
        "command": "-workbench.action.terminal.sendSequence",
        "when": "terminalFocus && !accessibilityModeEnabled && terminalShellType == 'pwsh'"
    },
    {
        "key": "ctrl+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+v",
        "command": "-workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+v",
        "command": "filesExplorer.paste",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "ctrl+v",
        "command": "-filesExplorer.paste",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "ctrl+v",
        "command": "notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+v",
        "command": "markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "ctrl+v",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "shift+insert",
        "command": "-editor.action.clipboardPasteAction"
    },
    {
        "key": "backspace",
        "command": "-extension.vim_backspace",
        "when": "editorTextFocus && vim.active && !inDebugRepl"
    },
    {
        "key": "ctrl+l ctrl+c",
        "command": "workbench.view.extension.leetcode",
        "when": "viewContainer.workbench.view.extension.leetcode.enabled"
    },
    {
        "key": "ctrl+alt+n",
        "command": "welcome.showNewFileEntries"
    },
    {
        "key": "ctrl+alt+win+n",
        "command": "-welcome.showNewFileEntries"
    },
    {
        "key": "ctrl+alt+p",
        "command": "python.execInTerminal"
    },
    {
        "key": "ctrl+g ctrl+f",
        "command": "github.copilot.completions.disable",
        "when": "config.editor.inlineSuggest.enabled && github.copilot.activated && github.copilot.completions.enabled"
    },
    {
        "key": "ctrl+p",
        "command": "-extension.vim_ctrl+p",
        "when": "editorTextFocus && vim.active && vim.use<C-p> && !inDebugRepl || vim.active && vim.use<C-p> && !inDebugRepl && vim.mode == 'CommandlineInProgress' || vim.active && vim.use<C-p> && !inDebugRepl && vim.mode == 'SearchInProgressMode'"
    },
    {
        "key": "ctrl+shift+g",
        "command": "workbench.view.scm",
        "when": "workbench.scm.active && !gitlens:disabled && config.gitlens.keymap == 'chorded'"
    },
    {
        "key": "ctrl+shift+g g",
        "command": "-workbench.view.scm",
        "when": "workbench.scm.active && !gitlens:disabled && config.gitlens.keymap == 'chorded'"
    },
    {
        "key": "ctrl+t ctrl+w",
        "command": "workbench.action.terminal.killEditor",
        "when": "terminalEditorFocus && terminalFocus && terminalHasBeenCreated || terminalEditorFocus && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.terminal.killEditor",
        "when": "terminalEditorFocus && terminalFocus && terminalHasBeenCreated || terminalEditorFocus && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+alt+s",
        "command": "workbench.action.openGlobalKeybindings"
    },
    {
        "key": "ctrl+k ctrl+s",
        "command": "-workbench.action.openGlobalKeybindings"
    },
    {
        "key": "ctrl+d",
        "command": "-extension.vim_ctrl+d",
        "when": "editorTextFocus && vim.active && vim.use<C-d> && !inDebugRepl"
    },
    {
        "key": "ctrl+b",
        "command": "-extension.vim_ctrl+b",
        "when": "editorTextFocus && vim.active && vim.use<C-b> && !inDebugRepl && vim.mode != 'Insert'"
    },
    {
        "key": "ctrl+s",
        "command": "-extension.vim_ctrl+s",
        "when": "editorTextFocus && vim.active && vim.use<C-s> && !inDebugRepl"
    },
    {
        "key": "ctrl+shift+t",
        "command": "-workbench.action.reopenClosedEditor"
    },
    {
        "key": "ctrl+shift+t",
        "command": "workbench.action.terminal.switchTerminal"
    },
    {
        "key": "ctrl+shift+t",
        "command": "workbench.action.quickOpenTerm"
    },
    {
        "key": "ctrl+alt+g ctrl+alt+v",
        "command": "git-graph.view"
    },
    {
        "key": "ctrl+e ctrl+c",
        "command": "github.copilot.completions.enable",
        "when": "github.copilot.activated && !config.editor.inlineSuggest.enabled || github.copilot.activated && !github.copilot.completions.enabled"
    },
    {
        "key": "ctrl+e ctrl+x",
        "command": "github.copilot.chat.explain.palette",
        "when": "!editorReadonly && !github.copilot.interactiveSession.disabled"
    },
    {
        "key": "ctrl+t ctrl+c",
        "command": "github.copilot.completions.toggle"
    },
    {
        "key": "ctrl+shift+i",
        "command": "-workbench.action.chat.openEditSession",
        "when": "chatEditingParticipantRegistered && !chatSetupHidden && view != 'workbench.panel.chat.view.edits'"
    },
    {
        "key": "ctrl+shift+i",
        "command": "-workbench.action.toggleDevTools",
        "when": "isDevelopment"
    },
    {
        "key": "ctrl+; ctrl+shift+i",
        "command": "-testing.toggleInlineCoverage"
    },
    {
        "key": "ctrl+alt+i",
        "command": "-workbench.action.chat.open",
        "when": "!chatSetupHidden"
    },
    {
        "key": "ctrl+alt+l",
        "command": "workbench.panel.chat.view.copilot.toggleVisibility"
    },
    {
        "key": "ctrl+alt+,",
        "command": "github.copilot.toggleStatusMenu"
    },
    {
        "key": "ctrl+d",
        "command": "-editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+d",
        "command": "-notebook.addFindMatchToSelection",
        "when": "config.notebook.multiCursor.enabled && notebookCellEditorFocused && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "ctrl+i",
        "command": "-workbench.action.chat.startVoiceChat",
        "when": "chatIsEnabled && hasSpeechProvider && inChatInput && !chatSessionRequestInProgress && !editorFocus && !notebookEditorFocused && !scopedVoiceChatGettingReady && !speechToTextInProgress || chatIsEnabled && hasSpeechProvider && inlineChatFocused && !chatSessionRequestInProgress && !editorFocus && !notebookEditorFocused && !scopedVoiceChatGettingReady && !speechToTextInProgress"
    },
    {
        "key": "ctrl+i",
        "command": "-workbench.action.chat.stopListeningAndSubmit",
        "when": "inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'editor' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'inline' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'quick' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'view' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'editor' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'inline' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'quick' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'view'"
    },
    {
        "key": "ctrl+i",
        "command": "-editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        "key": "ctrl+i",
        "command": "-extension.vim_ctrl+i",
        "when": "editorTextFocus && vim.active && vim.use<C-i> && !inDebugRepl"
    },
    {
        "key": "ctrl+i",
        "command": "-focusSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "ctrl+shift+b",
        "command": "-workbench.action.tasks.build",
        "when": "taskCommandsRegistered"
    },
    {
        "key": "ctrl+shift+b",
        "command": "workbench.action.focusActivityBar"
    },
    {
        "key": "ctrl+shift+h",
        "command": "-workbench.action.replaceInFiles"
    },
    {
        "key": "ctrl+shift+h",
        "command": "workbench.action.activityBarLocation.hide"
    }
]