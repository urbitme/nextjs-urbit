// This script is required to support globbing with glob-http
// If you are using glob-ames you may remove it from the build script

const { dirname } = require('path')
const glob = require('glob')
const { renameSync } = require('fs')
const replace = require('replace-in-file')

function nextOutRename(oldName, newName) {
  const files = glob.sync(`out/_next/static/*/${oldName}`)
  if (files.length == 1) {
    const file = files[0]
    console.log(`Renaming: ${file}`)
    renameSync(file, `${dirname(file)}/${newName}`)

    const replaceOpts = {
      files: 'out/**/*.html',
      from: new RegExp(oldName, 'g'),
      to: newName,
    }
    replace.sync(replaceOpts)
  }
}

nextOutRename('_buildManifest.js', '_buildmanifest.js')
nextOutRename('_ssgManifest.js', '_ssgmanifest.js')

