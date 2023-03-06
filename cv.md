# Mariya Demidovich

## Web-developer

## Contacts

*Email:* Mariya.Demi373@gmail.com
*Github:* [MariyaDemy](https://github.com/MariyaDemy)
*LinkedIn:* [Mariya Demidovich](https://www.linkedin.com/in/mariyademy/)

## About me

I am currently work as a Tech Support Specialist in the product department of an IT company. That is a great work that helps me to hone my soft skills (business communication) and hard skills (programming, providing code examples, understanding other people's code and so on).
I am a problem-solver who wants to progress further in programming. At the moment I am most interested in Web developing and what goes with it.

## Skills

* HTML, CSS, Sass, Pug
* JavaScript
* Git,
* Node.js
* Webix, Webix Jet
* English: B2
* Russian: native speaker
* Swedish: A2

## Work experience

***Technical Support Specialist / JavaScript Junior***
XB Software Ltd.
<sub>April 2022 - now</sub>

## Education

* Minsk Linguistic State University - translator, PR-specialist, specialist in intercultural communication
* RSS - HTML, CSS, JS
* ITShutle course - JS, React, HTML, CSS
* [FreeCodeCamp](https://www.freecodecamp.org/certification/MariyaDemy/javascript-algorithms-and-data-structures)

## Code example

From codewars: [Javascript from the Inside #1 : Map](https://www.codewars.com/kata/558ccca75f511f2b0d0000f7)

 ``` JavaScript
Array.prototype.map = function(callbackFn, thisArg) {

  let context = this;
  const mappedArray = new Array(this.length);

  if(thisArg){
    context = thisArg;
  };

  for(let i = 0; i < this.length; i++){
    if(i in this){
    mappedArray[i] = callbackFn.apply(thisArg, [this[i], i, this]);
    }
  }

  return mappedArray;
};

```