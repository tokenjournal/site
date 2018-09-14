const Y = require('js-yaml')
const R = require('ramda')
const md = require('markdown-it')()
    .use(require('markdown-it-katex'))
    // .use(require('markdown-it-front-matter'), function(fm) {
    //     let s = frontmatter()
    //     let fm = Y.safeLoad(fm)
    // })

const path = require('path')
const fs   = require('fs')
const content = x => path.join(__dirname, 'content', x)
const root    = x => path.join(__dirname, x)

function generatePage(name) {
  const indexMD  = fs.readFileSync(content(name + ".md"), {encoding: 'utf8'})
  const template = fs.readFileSync(root('template.html'), {encoding: 'utf8'})

  const indexHTML = md.render(indexMD)

  const output = R.replace('«CONTENT»', indexHTML, template)
  const outfn = path.join(__dirname, 'public', name + '.html')

  fs.writeFileSync(outfn, output)
}

generatePage("index");
generatePage("editorial-policy");
generatePage("boards");
