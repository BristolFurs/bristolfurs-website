export default class Egg {
  constructor($element) {
    if (!$element) {
      $element = document.body
    }

    if (!($element instanceof HTMLElement)) {
      return
    }

    this.$element = $element

    this.replaceTextNodes()
  }

  findTextNodes() {
    const textNodes = []

    const treeWalker = document.createTreeWalker(this.$element, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        // Exclude text strings embedded within script, style or form elements;
        // also reject empty strings.
        if (
          ["SCRIPT", "STYLE", "INPUT", "TEXTAREA", "SELECT"].includes(node.parentNode.nodeName.toUpperCase()) ||
          node.data.trim() === ""
        ) {
          return NodeFilter.FILTER_REJECT
        }
        return NodeFilter.FILTER_ACCEPT
      },
    })

    // Push the matching nodes into an array
    while (treeWalker.nextNode()) {
      textNodes.push(treeWalker.currentNode)
    }

    return textNodes
  }

  createCharacterMap(string) {
    const characters = string.split("")
    const output = []

    characters.forEach((c) => {
      if (c.match(/[A-Z]/g)) {
        output.push("A")
      } else if (c.match(/[a-z]/g)) {
        output.push("a")
      } else {
        output.push(c)
      }
    })

    return output.join("")
  }

  generateWords(sentence) {
    // TODO: Turn Aaaaas into words

    return sentence
  }

  replaceTextNodes() {
    const nodes = this.findTextNodes(this.$element)

    nodes.forEach((node) => {
      let str = node.data

      str = this.createCharacterMap(str)
      str = this.generateWords(str)

      // Replace string
      node.data = str
    })
  }
}
