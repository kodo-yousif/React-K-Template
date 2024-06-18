import * as fs from "fs"
import * as path from "path"

const currentLanguages = ["en", "ckb", "ar"]

const readJsonFile = (fileName) => {
  const filePath = path.join(`./public/locales/${fileName}.json`)
  const rawData = fs.readFileSync(filePath, "utf8")
  return JSON.parse(rawData)
}

const writeJsonFile = (fileName, data) => {
  const filePath = path.join(`./public/locales/${fileName}.json`)
  const jsonData = JSON.stringify(data, null, 2)
  fs.writeFileSync(filePath, jsonData, "utf8")
}

const addingFields = []
const deletingFields = []

// deletingFields.push("kodo")

// addingFields.push({
//   key: "kodo",
//   en: "kodo",
//   ckb: "kodo",
//   ar: "kodo",
// })

addingFields.forEach(({ key, ...languages }) => {
  Object.entries(languages).forEach(([lang, value]) => {
    const json = readJsonFile(lang)
    json[key] = value
    writeJsonFile(lang, json)
  })
})

deletingFields.forEach((key) => {
  currentLanguages.forEach((lang) => {
    const json = readJsonFile(lang)
    delete json[key]
    writeJsonFile(lang, json)
  })
})
