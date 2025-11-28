import React from "react";

export const languages = [
    {
        id: "c",
        name: "C Programming",
        icon: "🇨",
        description: "The mother of all languages. Learn system programming, pointers, and memory management.",
    },
    {
        id: "cpp",
        name: "C++",
        icon: "➕",
        description: "High-performance language for game development, systems, and competitive programming.",
    },
    {
        id: "java",
        name: "Java",
        icon: "☕",
        description: "Object-oriented language used for enterprise applications and Android development.",
    },
    {
        id: "python",
        name: "Python",
        icon: "🐍",
        description: "Versatile language for web dev, data science, AI, and automation.",
    },
    {
        id: "html",
        name: "HTML",
        icon: "🌐",
        description: "The standard markup language for documents designed to be displayed in a web browser.",
    },
    {
        id: "css",
        name: "CSS",
        icon: "🎨",
        description: "Style sheet language used for describing the presentation of a document written in HTML.",
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: "📜",
        description: "The programming language of the Web. Add interactivity to your pages.",
    },
    {
        id: "salesforce",
        name: "Salesforce",
        icon: "☁️",
        description: "Cloud-based CRM platform. Learn Apex, Visualforce, and Lightning Web Components.",
    },
    {
        id: "react",
        name: "React",
        icon: "⚛️",
        description: "A JavaScript library for building user interfaces.",
    },
    {
        id: "angular",
        name: "Angular",
        icon: "🅰️",
        description: "Platform for building mobile and desktop web applications.",
    },
];

export const topics = [
    // C Topics
    {
        id: "c-intro",
        languageId: "c",
        title: "Introduction to C",
        description: "Learn about the history, features, and structure of a C program.",
        content: `
# Introduction to C

C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.

## Why Learn C?
- It is one of the most popular programming languages in the world.
- If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar.
- C is very fast, compared to other programming languages, like Java and Python.
- C is very versatile; it can be used in both applications and technologies.

## Structure of a C Program
\`\`\`c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
\`\`\`
    `
    },
    {
        id: "c-variables",
        languageId: "c",
        title: "Variables & Data Types",
        description: "Understanding variables, constants, and data types in C.",
        content: `
# Variables and Data Types in C

Variables are containers for storing data values.

## Data Types
- **int**: stores integers (whole numbers), without decimals, such as 123 or -123
- **float**: stores floating point numbers, with decimals, such as 19.99 or -19.99
- **char**: stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes

## Declaring Variables
\`\`\`c
int myNum = 15;
float myFloatNum = 5.99;
char myLetter = 'D';
\`\`\`
    `
    },

    // C++ Topics
    {
        id: "cpp-intro",
        languageId: "cpp",
        title: "Introduction to C++",
        description: "C++ is a cross-platform language that can be used to create high-performance applications.",
        content: `
# Introduction to C++

C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.

## Hello World in C++
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
\`\`\`
    `
    },

    // Java Topics
    {
        id: "java-oop",
        languageId: "java",
        title: "Java OOP Concepts",
        description: "Learn about Classes, Objects, Inheritance, and Polymorphism.",
        content: `
# Java OOP Concepts

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code.

## Classes and Objects
A **Class** is a blueprint for creating objects.
An **Object** is an instance of a class.

\`\`\`java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
\`\`\`
    `
    },

    // Python Topics
    {
        id: "python-lists",
        languageId: "python",
        title: "Python Lists",
        description: "Working with lists, tuples, sets, and dictionaries.",
        content: `
# Python Lists

Lists are used to store multiple items in a single variable.

## Creating a List
\`\`\`python
thislist = ["apple", "banana", "cherry"]
print(thislist)
\`\`\`

## Access Items
\`\`\`python
print(thislist[1]) # Output: banana
\`\`\`
    `
    },

    // HTML Topics
    {
        id: "html-basic",
        languageId: "html",
        title: "HTML Basic Structure",
        description: "Learn the skeleton of every web page.",
        content: `
# HTML Basic Structure

All HTML documents must start with a document type declaration: \`<!DOCTYPE html>\`.

The HTML document itself begins with \`<html>\` and ends with \`</html>\`.

The visible part of the HTML document is between \`<body>\` and \`</body>\`.

\`\`\`html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
\`\`\`
    `
    },

    // CSS Topics
    {
        id: "css-selectors",
        languageId: "css",
        title: "CSS Selectors",
        description: "Learn how to select and style HTML elements.",
        content: `
# CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

## Simple Selectors
- **Element Selector**: Selects elements based on the element name.
- **Id Selector**: Selects a specific element with a unique id.
- **Class Selector**: Selects elements with a specific class attribute.

\`\`\`css
p {
  text-align: center;
  color: red;
}

#para1 {
  text-align: center;
  color: red;
}

.center {
  text-align: center;
  color: red;
}
\`\`\`
    `
    },

    // JavaScript Topics
    {
        id: "js-dom",
        languageId: "javascript",
        title: "JavaScript DOM",
        description: "Manipulating the Document Object Model.",
        content: `
# JavaScript HTML DOM

With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

## Changing HTML Content
The easiest way to modify the content of an HTML element is by using the \`innerHTML\` property.

\`\`\`javascript
document.getElementById("demo").innerHTML = "Hello JavaScript";
\`\`\`
    `
    },

    // React Topics
    {
        id: "react-components",
        languageId: "react",
        title: "React Components",
        description: "Building blocks of React applications.",
        content: `
# React Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

## Function Component
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`
    `
    }
];
