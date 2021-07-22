const genComponentTag = require('../utils/gen-component-tag')

module.exports = function (styles, options, callback) {
  let output = '/* styles */\n'
  if (styles.length) {
    styles.forEach((style) => {
      output += genComponentTag(style, {
        attrs (style) {
          const attrs = Object.assign({}, style.attrs)
          attrs.mpxStyleOptions = JSON.stringify({
            // web暂时不处理scoped
            // scoped: !!options.autoScope,
            sourceMap: !!options.needCssSourceMap,
            moduleId: options.moduleId
          })
          return attrs
        }
      })
      output += '\n'
    })
    output += '\n'
  }
  callback(null, {
    output
  })
}
