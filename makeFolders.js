const fs = require('fs');

for (let i = 1; i < 45; i++) {
  if (i%5) {
    let number = i < 10 ? '0' + i : i
    let folderName = `day-${number}`
    let title = `Day ${number}`
    let template = `
[Table of Contents](/README.md)

# ${title}

## Review

## Challenge

## Notes

## Resources
    `
    fs.mkdir(folderName, () => {
      fs.mkdir(`${folderName}/examples`, () => {
        fs.writeFile(`${folderName}/README.md`, template, (e) => {
          console.log(e);
        })
      })
    })
  }
}
