exper.js
========

Simple lightweight API for xAPI

![Yo Dawg, I heard you like API's so I put an API round your xAPI](http://cdn.memegenerator.net/instances/500x/49561434.jpg)


xAPI is supposed to be simple and lightweight API, I think I have a diferent definition of simple and lightweight.

Concept
--------

* Streamline the javascript syntax as used in xAPIWrapper by creating a fluent syntax.
* Streamline and standardise verb creation by removing custom IRIs.

```js

var statement = exper().statement().who('Red Power Ranger').did('summoned').what('Megazord').successfully();

statement.send('http://lrs.example.com');

```