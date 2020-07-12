import React, { Component } from "react";
import marked from "marked";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let value = `


    
    Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Images

![Minion](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png)
![Stormtroopocat](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png  "The Dojocat"



    `;
    this.setState({
      input: marked(value)
    });
    document.querySelector("#preview").innerHTML = this.createMarkup();
  }

  handleChange(event) {
    this.setState({
      input: marked(event.target.value)
    });
  }

  createMarkup() {
    return { __html: this.state.input };
  }

  render() {
    return (
      <div className="App">
        <div id="editor">
          <textarea value={this.state.input} onChange={this.handleChange} />
          <div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />
          createMarkup
        </div>
      </div>
    );
  }
}
