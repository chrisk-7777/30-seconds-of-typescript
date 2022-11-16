---
title: deepMapKeys
tags: [object, recursion, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "deepMapKeys" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Deep maps an object's keys.

Creates an object with the same values as the provided object and keys generated by running the provided function for each key.
Use `Object.keys(obj)` to iterate over the object's keys.
Use `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.

```js
const deepMapKeys = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map((val) => deepMapKeys(val, fn))
    : typeof obj === "object"
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] =
          val !== null && typeof val === "object" ? deepMapKeys(val, fn) : val;
        return acc;
      }, {})
    : obj;
```

```js
const obj = {
  foo: "1",
  nested: {
    child: {
      withArray: [
        {
          grandChild: ["hello"],
        },
      ],
    },
  },
};
const upperKeysObj = deepMapKeys(obj, (key) => key.toUpperCase());
/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/
```