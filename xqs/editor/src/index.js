import $ from 'jquery'

class Editor {
  constructor(toolbarSelector, textSelector) {
    this.toolbarSelector = toolbarSelector;
    this.textSelector = textSelector;

    this.customConfig = {}
  }
  create() {
    this._initDom()
  }

  _initDom() {
    let $root = $(this.toolbarSelector)
    let $toolbarElem = $('<div>this is toolbar</div>')
    let $textContainerElem = $(this.textSelector) || $('<div>this is text</div>')

    $root.append($toolbarElem).append($textContainerElem)
  }
}

window.myEditor = Editor

export default (window.myEditor || Editor)
