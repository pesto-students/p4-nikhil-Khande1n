#Week1 Assignment 1

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
In simple terms, a web browser is a software tool which helps us view webpages, images, videos etc over the internet in an user friendly manner.
There are many popular web browser like Chrome, Safari, Firefox, Opera etc. 

How a typical browser works?
We open the browser in our devices which are connected to the internet, enter a URL (Unifrom Resource Locator) in the address bar and click enter. What we see next is a beautiful website opens up in the browser and we are able to scroll and interact with it. But have we ever wondered how does this works behind the scenes.

To understand it, let's deep dive a little.

<img src="../assests/how_browser_works.png></img>

### What are key components of a web browser?
1. User Interface
2. Browser Engine
3. Rendering Engine
4. Networking
5. JavaScript Interpretor
6. UI Backend
7. Data Persistence

### User Interface
Example of User Interface of a browser is next, back, refresh, stop, setting etc. In other words, anything that we cannot manuplate in the browser is part of the user interface.

### Browser Engine
It servers a mediator between Rendering Engine and User Interface

### Rendering Engine
Rendering engine is responsible for the rendering of the resource (generally a webpage, image etc) by fetching the resources, parsing them and giving instruction to the browser what and how to render the final output.

### Networking
This Networking component is responsible for getting the IP (Internet Protocol) Address of the web page and then get the resources over the internet.

### JavaScript Interpretor
This component is responsible for parsing the JS scripts

### UI Backend
Once the Rendering engine finishes parsing and ready with the output, UI Backend then renders the final output on the User Interface of the browser

### Data Persistence
This component is responsible for persisting(saving) the data on the browser in the form of cookies. There are various options available like IndexedDB, FileSystem, LocalStorage, Web SQL etc. Cookie can be used to save user credentials, data about past visit, website we visit etc


Let's see in detail, how these compoent works:
When a URL is typed in a browser and submitted, then 
1. browser sends a request to DNS (Domain Name Server), which is a directory which maps domain name to server IP address, to get IP address of the requested server
2. Once the browser receives this IP address, then Networking Layer sends a HTTP (HyperText Transfer Protocol) request to the server over TCP/IP protocol over the internet.
HTTP/HTTPS protocal is a way in which client and server talk to each other
TCP/IP is a protocol over which data is transferred over the web
3. If the server accepts the request sent by the browser, it returns status code '200' and requested resources are shared in small chunks of pieces, typically 8kB size.
4. The browser on receiving the data, browser on parsing HTML structure, CSS styles and JS scripts, render the website/image/content on the browser
