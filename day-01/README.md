
[Table of Contents](/README.md)

# Day 01

<!-- ## Review -->

<!-- ## Challenge -->

## Notes
- course intro
  - policies - see [welcome file](/welcome.md)
  - being on time - do it
  - code of conduct - be respectful
  - cheating - don't do it
  - ask questions
- trees
  - all your files and folders can be thought of as a tree structure. you can navigate the tree using commands from the terminal.
  - you are always on a particular branch of the tree at any given time, your commands are always relative to that location
  - to navigate to a sibling directory, you must be in a common parent. sometimes this means moving UP a level before you can traverse
- command line commands to memorize:
    - `ls` lists files and directories within current directory
    - `pwd` print working directory
    - `cd` change directory
    - `..` move up one directory
    - `/` strings together directories/file names in a path to traverse
    - `~` root directory of the computer and a shortcut to get there as well
    - `mkdir` make directory, followed by the name of the directory you want to make, will be put in the current location
    - `touch`make a file, followed by the name of the file you want to make, will be put in the current directory
    - `rm` remove file followed by the name of the file you want to move
    - `rmdir` remove directory (empty only)
    - `cp` copies a file or folder, takes the name of the file or folder to copy and the name of the new file or folder to create
    - tab completion - is your best friend, use it to avoid typos
    - up and down arrow keys to repeat previous commands without re-typing them
- HTML Review
  - hyper-text mark-up language - the structure of a web page, literal content in any web page,
  - extension is `.html`
  - tags
    - opening tag: denoted by `<>`, name is within the angle brackets, does not have a `/`
  - anatomy of an html tag:
    ```html
    <openingTagName attributeName="attributeValue">
      <selfClosingTag />
    </closingTag>
    <!-- Comment -->
    ```
    - tagname - the first thing inside the opening brackets
    - attribute - such as class or id, extra information about a tag
    - attribute name - the left side of an attribute, before the equals sign
    - attribute value - the right side of an attribute, after the equals sign.
  - required elements
  - adding classes and ids
  ```html
  <p class="main-post"></p>
  ```
    - classes are for repeated elements on a page. reuse them for commonly shared elements
    - ids are for single one time use only elements. please do not use them until we get to javascript
  - Semantic html5 elements
      - such as:
        - header
        - footer
        - aside
        - p
- CSS Review
  - cascading style sheet
  - extension is `.css`
  - linking into HTML
    - style tag
    ```html
    <style>
      /* styles go here */
    </style>
    ```
    - inline
    ```html
    <article style="color: pink;">
    ```
    - external style sheet
    ```html
    <link rel="stylesheet" href="main.css" media="screen">

    ```
  - anatomy of css  
  ```css
  body {
    background: pink;
    color: blue;
    font-family: sans-serif;
  }
  ```
    - ruleset - a selector, its curly braces, and any rules within them
    - selector - how we select an element from the html document, either a tagname, class (with a `.`), or id (with a `#`), or any combination thereof.
    - rule - a single rule within a ruleset.
    - property - the left side of a rule, a pre-determined trait of the element you can apply style to.
    - value - the right side of a rule, a pre-determined property you can set a trait to.
  - specificity rules
    - later rules take precedent over earlier ones
    - specific selectors win over inherited rules (cascading)
    - ids win over classes
    - classes win over tagnames
- surge
  - run the `surge` command from the directory you wish to put online
  - make sure an `index.html` file exists in the directory, and all other files needed for the site are also within that directory
  - change the sub-domain to anything you like, just keep the `surge.sh` at the end.

## Resources
- [HTML tag reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS zen garden](http://www.csszengarden.com/)
- [CSS property reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
