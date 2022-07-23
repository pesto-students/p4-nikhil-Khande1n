# Week1 Assignment 1

Pesto- Week 1 Assignment 1 - HTML

## How does a browser works?

When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.
- What is the main functionality of the browser?
- High Level Components of a browser
- Rendering Engine and its use
- Parsers (HTML, CSS, etc)
- Scripts Processors
- Tree Construction
- Order of script Processing
- Layout and Painting

## What to cover
- explain how a browser works
- what are the high level components of a browser?
- How each component works with each other
- How Parsing works and its importance
- The order of execution of scripts

## Expected Outcome
- Under the hood understanding of how a browser works
- What are the features a browser provides
- What a browser is capable of doing
- How a web page is translated from a string in a URL to a webpage


## Explanation
What is a web browser? 
In simple terms, a web browser is a software tool which helps a user view webpages, images etc over the internet in an user friendly manner with the help of its User Interface.
There are many popular web browser like Chrome, Safari, Firefox, Opera etc. 

How a typical browser works?
We open the browser in our devices which are connected to the internet, enter a URL (Unifrom Resource Locator) in the address bar and click enter. What we see next is a beautiful website opens up in the browser and we are able to scroll and interact with it. But have we ever wondered how does this works behind the scenes.

## Let's see in detail, how these browser works:
When a URL is typed in a browser and submitted, then 
1. browser sends a request to DNS (Domain Name Server), which is a directory which maps domain name to server IP address, to get IP address of the requested server
2. Once the browser receives this IP address, then Networking Layer sends a HTTP (HyperText Transfer Protocol) request to the server over TCP/IP protocol over the internet.
HTTP/HTTPS protocal is a way in which client and server talk to each other
TCP/IP is a protocol over which data is transferred over the web
3. If the server accepts the request sent by the browser, it returns status code '200' and requested resources are shared in small chunks of pieces, typically 8kB size.
4. The browser on receiving the data, browser on parsing HTML structure, CSS styles and JS scripts, render the website/image/content on the browser

### Key Components of a web browser
![how_browser_works](https://user-images.githubusercontent.com/15044489/180613823-fad90d34-4e0a-4e1d-a543-b9dc412e5fde.png)

# List of components
1. User Interface
2. Browser Engine
3. Rendering Engine
4. Networking
5. JavaScript Interpretor
6. UI Backend
7. Data Persistence

### User Interface
It is that component of a browser, which is visible to user before even entering any resource URL. Example of User Interface of a browser is the address bar, Next, Back, Refresh, Stop, Setting button etc. This can also be framed in another way, which is, anything that a user cannot manuplate in the browser is part of the user interface.

### Browser Engine
Every browser has its own engine. This compoenent of the browser act as a mediator between User Interface and Rendering Engine. It queries and convey commands from browser's User Interface to Rendering Engine.

### Rendering Engine
This component is responsible for the rendering of the resource requested by the user, a webpage, image etc. by fetching the resources from the networking layer. Then parsing the HTML and create the DOM Tree. Parallely, it parse CSS files from stylesheets and create CSSOM Tree. Javascript Interpretor parse the fetched JS scripts and then the engine creates Render Tree. This render tree then goes to Layout and then Painting. With the help of UI backend, paint function of the underlying operating system is called and browser then paints the final output which is visible to user.
Some of the few Browser Engine are:
- For Chrome - Blink
- For Firefox Mozilla - Gecko
- Chrome for iOS & Safari - Webkit
- Internet Explorer - Trident

### Networking
The Networking component is responsible for all the HTTP requests which the rendering engine gives to this layer. This includes getting the IP (Internet Protocol) Address of the document, fetch resources over the internet.

### JavaScript Interpretor
This component is responsible for parsing the JS scripts and update the rendering engine of the same.

### UI Backend
Once the Rendering engine finishes parsing and ready with the output, UI Backend then renders the final output on the User Interface of the browser with the help of paint function of the operating system the browser is running.

### Data Persistence
This component is responsible for persisting(saving) the data on the browser about the user, one such form in the form of cookies. There are various options available like IndexedDB, FileSystem, LocalStorage, Web SQL etc. Cookies can be used to save user credentials, data about past visit, website we visit etc.


### Rendering is a key part what browser works. Let's deep dive
Rendering engine get all the resources through the HTTP/HTTPS calls over internet via networking layer. The below diagram tell the workflow of the rendering engine - 

![rendering_engine_workflow](https://user-images.githubusercontent.com/15044489/180613828-9bc514bb-6381-4b53-86fa-249a3a469d67.png)

As soon as this engine starts receiving the document, the HTML parser tokenizes the elements, which contains start tag , end tag, attributes and values, into a DOM Tree. The HTML parser does this via two key process:
- Lexical Analysis - it tokenizes the documents
- Syntax Analysis - it applies language specific syntax

![lexer-parser](https://user-images.githubusercontent.com/15044489/180613827-d849e1ea-56b5-4106-8c96-f805ff8b3e60.png)

The parser keeps asking the Lexer for the token and keep those in the memory, and as soon as it gets something connected to token in memory, creates the tree.

The process of creation of tree goes on even when the parser gets CSS elements through various style sheets. With the CSS elements, parser creates CSSOM tree and the render engine then creates a Render Tree based on them. 

'<script/>' tag can block the parsing of HTML and stop the rendering process, if 'async' or 'defer' attribute not mentioned. JS interpretation is done during compile time or whenever a parser is invoked. Please see the image below:

![script_updating_token](https://user-images.githubusercontent.com/15044489/180613829-e3eac23e-ea9f-44f6-9639-8c0f5e2861f2.png)

Now the rendering engine with the help of both DOM and CSSOM, creates a Render Tree. This then go through a process of 'Layout'. It is during this process, the exact size and location of a node is assigned to create the desired output.

The next stage is 'Painting' - the render tree will be traversed and each node will be painted using the UI Backend layer.

