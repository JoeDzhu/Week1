# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joezhu/lotide`

**Require it:**

`const _ = require('@joezhu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head(array)`: take the first element of an array
  * `tail(array)`: take all the elements expect for the first one in an array
  * `middle(array)`: return middle section of an array;
  * `assertArraysEqual(array1, array2)`: assert true if two arrays are equal else fals
  * `assertEqual(actual, expected)`: check to see if the actual results match the expects 
  * `assertObjectsEqual(object1, object2)`: make assertion about if two objects are equal
  * `countLetters(string)`: count the amount of letters in a certain string
  * `countOnly(allItems, itemsToCount)`: count how many times itemsToCount appears in allItems
  * `eqArrays(array1, array2)`: to compare two arrays to see if equal
  * `eqObjects(object1, object2)`: to compare two objects to seee if equal
  * `findKey(object, callback)`: to find a certain key in an object
  * `findKeyValue(value)`: find a certain value in an ojbect
  * `flatten(array)`: turn an nested array to a non-nested array
  * `letterPositions(string)`: return each letter's positions in a string
  * `map(array, callback)`: return a new array from the input array according to the callback function
  * `takeUntil(array, callback)`: return a new array through the return of the callback
  * `without(array1, array2)`: remove array2 from array1