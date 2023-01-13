---
title: How to use PrismJS in ReactJS
date: January 14, 2023
description: Today, we are going to see how to use PrismJS in a ReactJS application. It is a very popular syntax highlighting Javascript library. Used in various popular websites to display code.

tags:
  - web
  - react
cover_image: ./graphics/blog-cover/prismjs.webp
---

## Introduction

Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily

_For more info on PrismJS [Click Here](https://prismjs.com/)_

## Install PrismJS using npm

I assume that your React project is configured correctly. After your React
project is up and running. Install PrismJS on the terminal.

```bash
npm i prismjs
```

## After we have installed prismjs we will import

- Language Support
- Themes
- Plugins

## Import Prism and Theme in your project

Here we are importing `PrismJS` and the `Theme`.

```javascript
import Prism from "prismjs"; // Prism
import "prismjs/themes/prism-okaidia.min.css"; // Import theme
```

Themes are stored in the `prismjs/themes/` directory. Here are all
the possible themes supported by PrismJS.

- prism-coy.min.css
- prism-dark.min.css
- prism-funky.min.css
- prism-okaidia.min.css
- prism-solarizedlight.min.css
- prism-tomorrow.min.css
- prism-twilight.min.css

## Add language support and Plugins

In order to enable syntax highlighting we need the language from the
`'prismjs/componenent/'` directory. In this project we are going to highlight C++ code.

We are going to import plugins from the `prismjs/themes` directory.

And we are going to use the `normalize-whitespace` plugin to
remove all leading and trailing spaces in the code.

```javascript
// C is required for C++ highlighting to work
require("prismjs/components/prism-c");

// Add language support for C++
require("prismjs/components/prism-cpp");

// To remove extra white spaces
require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");
```

To see which plugins are supported in PrismJS [Click Here](https://prismjs.com/#plugins)

## How to put code in HTML

After we have imported all the required files. We are place your code inside the `pre > code` tags, like the example below. Here, `xxxx` is the name of the language

To see all the languages supported by PrismJS [Click Here](https://prismjs.com/#supported-languages)

```html
<pre>
  <code className="language-xxxx">
    <!-- Your code here -->
  </code>
</pre>
```

But, wait. It is not over yet, the syntax highlighting will not work yet now.
We have to call the `Prism.highlighAll()` function to highlight our code
after rendering the html.

## Final Code Example

Now the final code. Here we are going to call the `Prism.highlightAll()` function inside `useEffect()` hook. This will highlight our code after the
Component is rendered.

```jsx
import Prism from "prismjs"; // Prism
import "prismjs/themes/prism-okaidia.min.css"; // Import theme

require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");
require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");

function App() {

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code className="language-cpp">
        // Your First C++ Program

        #include <iostream>

        int main() {
            std::cout << "Hello World!";
            return 0;
        }


      </code>
    </pre>
  );
}
```

And now the rendered App component will have code highlighting enabled

**Note: This process also works on `NextJS`**
