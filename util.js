// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("util", [], function (exports_1, context_1) {
    "use strict";
    var HTMLEscapeChars, htmlEscapeReg, isString, accumulate, all, allEqual, and, any, some, aperture, approximatelyEqual, arrayToCSV, arrayToHtmlList, ary, attempt, attempt2, average, averageBy, bifurcate, bifurcateBy, binary, bind, bindAll, binomialCoefficient, both, call, capitalize, capitalizeEveryWord, castArray, celsiusToFahrenheit, chunk, colorize, color, compact, compactWhitespace, complement, compose, composeRight, containsWhitespace, countBy, countOccurrences, createElement, createEventHub, CSVToArray, CSVToJSON, curry, dayOfYear, debounce, deepClone, deepFlatten, deepFreeze, deepGet, defaults, delay, delayedPromise, either, equals, deepEquals, escapeHTML, escapeRegExp, factorial, memoize, fahrenheitToCelsius, filterNonUnique, filterNonUniqueBy, findKey, flatten, forEachRight, formatDuration, get, getAll, getBaseURL, getType, getURLParameters, mapToObject, groupBy, hasFlags, hexToRGB, hexToRGB2, hide, httpsRedirect, includesAll, indentString, fillArray, initializeArray, inRange, insertAt, insertAtImmutable, intersection, intersectionBy, intersectionWith, is, isAfterDate, isBeforeDate, isBrowser, isEmpty, isLeapYear, isLowerCase, isNil, isNull, isNumber, isObject, isPlainObject, isPrimitive, isSameDate, isSorted, isUpperCase, isValidJSON, JSONtoCSV, last, listenOnce, lowercaseKeys, mapKeys, mapObject, mapString, map, mask, matches, matchesWith, maxBy, maxDate, maxN, merge, midpoint, minBy;
    var __moduleName = context_1 && context_1.id;
    /**
     * Validate date
     *
     * @param date {Date}
     */
    function isValidDate(date) {
        return date instanceof Date && !isNaN(date.getTime());
    }
    exports_1("isValidDate", isValidDate);
    return {
        setters: [],
        execute: function () {
            (function (HTMLEscapeChars) {
                HTMLEscapeChars["&"] = "&amp;";
                HTMLEscapeChars["<"] = "&lt;";
                HTMLEscapeChars[">"] = "&gt;";
                HTMLEscapeChars["'"] = "&#39;";
                HTMLEscapeChars["\""] = "&quot;";
            })(HTMLEscapeChars || (HTMLEscapeChars = {}));
            exports_1("HTMLEscapeChars", HTMLEscapeChars);
            htmlEscapeReg = new RegExp(`[${Object.keys(HTMLEscapeChars)}]`, "g");
            /**
             * Checks if the given argument is a string. Only works for string primitives.
             *
             * Use `typeof` to check if a value is classified as a string primitive.
             * Guard Function to check string type
             *
             * @param str {string|T}
             */
            exports_1("isString", isString = (str) => {
                return typeof str === "string";
            });
            /**
             * Returns an array of partial sums.
             * Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.
             *
             * @param nums {number[]} array of numbers
             */
            exports_1("accumulate", accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []));
            /**
             * Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
            exports_1("all", all = (arr, fn = Boolean) => arr.every(fn));
            /**
             * Check if all elements in an array are equal.
             *
             * @param arr {T[]} <T = any>
             */
            exports_1("allEqual", allEqual = (arr) => arr.every((val) => val === arr[0]));
            /**
             * Returns `true` if both arguments are `true`, `false` otherwise.
             *
             * @param a {any}
             * @param b {any}
             */
            exports_1("and", and = (a, b) => Boolean(a) && Boolean(b));
            /**
             * Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.
             * Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
             * Omit the second argument, `fn`, to use `Boolean` as a default.
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
            exports_1("any", any = (arr, fn = Boolean) => arr.some(fn));
            /**
             * Same as any
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
            exports_1("some", some = (arr, fn = Boolean) => arr.some(fn));
            /**
             * Returns an array of `n`-tuples of consecutive elements.
             *
             * Use `Array.prototype.slice()` and `Array.prototype.map()` to create an array of appropriate length and populate it with `n`-tuples of consecutive elements from `arr`.
             * If `n` is greater than the length of `arr`, return an empty array.
             *
             * @param n
             * @param arr
             */
            exports_1("aperture", aperture = (n, arr) => n >= arr.length
                ? []
                : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]));
            /**
             * Checks if two numbers are approximately equal to each other.
             *
             * Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
             * Omit the third parameter, `epsilon`, to use a default value of `0.001`.
             * @param v1 {number}
             * @param v2 {number}
             * @param epsilon {number} default 0.001
             */
            exports_1("approximatelyEqual", approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon);
            /**
             * Converts a 2D array to a comma-separated values (CSV) string.
             *
             * Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
             * Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
             * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
             *
             * @param arr {(string | number)[][]}
             * @param delimiter {string} default  ","
             */
            exports_1("arrayToCSV", arrayToCSV = (arr, delimiter = ",") => arr
                .map((v) => v
                .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
                .join(delimiter))
                .join("\n"));
            /**
             * Converts the given array elements into `<li>` tags and appends them to the list of the given id.
             * Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.
             *
             * @param arr {(string | number)[]}
             * @param listID {string}
             */
            exports_1("arrayToHtmlList", arrayToHtmlList = (arr, listID) => {
                let el = document.querySelector("#" + listID);
                if (el) {
                    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
                }
            });
            /**
             * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
             *
             * Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).
             *
             * @param fn {function} {(...args: T[]) => any}
             * @param n {number}
             */
            exports_1("ary", ary = (fn, n) => (...args) => fn(...args.slice(0, n)));
            // export const atob = (str: string) => Deno.Buffer.from(str, 'base64').toString('binary');
            /**
             * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
             *
             * Use a `try... catch` block to return either the result of the function or an appropriate error.
             *
             * @param fn {function} {(...args: any[]) => any}
             * @param args {any[]}
             */
            exports_1("attempt", attempt = (fn, ...args) => {
                try {
                    return fn(...args);
                }
                catch (e) {
                    return e instanceof Error ? e : new Error(e);
                }
            });
            /**
             * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
             *
             * Use a `try... catch` block to return tuple of value and Error
             *
             * @param fn {function} {(...args: any[]) => any}
             * @param args {any[]}
             *
             * @returns [any, Error]
             */
            exports_1("attempt2", attempt2 = (fn, ...args) => {
                try {
                    return [fn(...args), null];
                }
                catch (e) {
                    return [null, e instanceof Error ? e : new Error(e)];
                }
            });
            /**
             * Returns the average of two or more numbers.
             *
             * Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
             * @param nums
             */
            exports_1("average", average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length);
            exports_1("averageBy", averageBy = (arr, fn) => {
                const mapper = typeof fn === "function" ? fn : (val) => val[fn];
                return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
            });
            /**
             * Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
             *
             * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.
             *
             * @param arr {T[]} , <T = any>
             * @param filter {boolean[]}
             */
            exports_1("bifurcate", bifurcate = (arr, filter) => arr.reduce((acc, val, i) => {
                acc[filter[i] ? 0 : 1].push(val);
                return acc;
            }, [[], []]));
            /**
             * Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.
             *
             * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.
             *
             * @param arr {T[]}, <T = any>
             * @param filter {Predicate<T>}
             */
            exports_1("bifurcateBy", bifurcateBy = (arr, filter) => arr.reduce((acc, val) => {
                acc[filter(val) ? 0 : 1].push(val);
                return acc;
            }, [[], []]));
            /**
             * Creates a function that accepts up to two arguments, ignoring any additional arguments.
             * Call the provided function, `fn`, with the first two arguments given.
             *
             * @param fn {function} {(...args: any[]) => any}
             * @returns {function} ([v1, v2]: any[]) => fn(v1, v2)
             */
            exports_1("binary", binary = (fn) => (...[v1, v2]) => fn(v1, v2));
            /**
             * Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
             *
             * Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
             * Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.
             * @param fn
             * @param context
             * @param boundArgs
             */
            exports_1("bind", bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]));
            /**
             * Binds methods of an object to the object itself, overwriting the existing method
             * Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.
             *
             * @param obj {any}
             * @param fns {string[]}
             */
            exports_1("bindAll", bindAll = (obj, ...fns) => fns.forEach((key) => {
                if (typeof obj[key] === "function") {
                    const f = obj[key];
                    obj[key] = function (...args) {
                        return f.apply(obj, args);
                    };
                }
            }));
            /**
             * Evaluates the binomial coefficient of two integers `n` and `k`.
             *
             * Use `Number.isNaN()` to check if any of the two values is `NaN`.
             * Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
             * Check if `n - k` is less than `k` and switch their values accordingly.
             * Loop from `2` through `k` and calculate the binomial coefficient.
             * Use `Math.round()` to account for rounding errors in the calculation.
             *
             * @param n {number}
             * @param k {number}
             */
            exports_1("binomialCoefficient", binomialCoefficient = (n, k) => {
                if (Number.isNaN(n) || Number.isNaN(k))
                    return NaN;
                if (k < 0 || k > n)
                    return 0;
                if (k === 0 || k === n)
                    return 1;
                if (k === 1 || k === n - 1)
                    return n;
                if (n - k < k)
                    k = n - k;
                let res = n;
                for (let j = 2; j <= k; j++)
                    res *= (n - j + 1) / j;
                return Math.round(res);
            });
            /**
             * Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.
             * Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.
             *
             * @param f
             * @param g
             */
            exports_1("both", both = (f, g) => (...args) => f(...args) && g(...args));
            // TODO: need refactor types
            /**
             * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
             *
             * Use a closure to call a stored key with stored arguments.
             *
             * @param key {string}
             * @param args {any[]}
             */
            exports_1("call", call = (key, ...args) => (context) => context[key](...args));
            /**
             *   Capitalizes the first letter of a string.
             *
             * Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
             * Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.
             *
             *
             * @param str {string}
             * @param lowerRest {boolean}
             */
            exports_1("capitalize", capitalize = (str = "", lowerRest = false) => str.slice(0, 1).toUpperCase() +
                (lowerRest ? str.slice(1).toLowerCase() : str.slice(1)));
            /**
             * Capitalizes the first letter of every word in a string.
             * Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.
             *
             * @param str {string}
             */
            exports_1("capitalizeEveryWord", capitalizeEveryWord = (str = "") => str.replace(/\b[a-z]/g, (char) => char.toUpperCase()));
            /**
             * Casts the provided value as an array if it's not one.
             *
             * Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.
             * @param val
             */
            exports_1("castArray", castArray = (val) => Array.isArray(val) ? val : [val]);
            /**
             * Converts Celsius to Fahrenheit.
             * Follows the conversion formula `F =  1.8C + 32`.
             * @param degrees
             */
            exports_1("celsiusToFahrenheit", celsiusToFahrenheit = (degrees) => 1.8 * degrees + 32);
            /**
             * Chunks an array into smaller arrays of a specified size.
             *
             * Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
             * Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
             * If the original array can't be split evenly, the final chunk will contain the remaining elements.
             *
             * @param arr {any[]}
             * @param size {number}
             */
            exports_1("chunk", chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size)));
            /**
             * Add special characters to text to print in color in the console (combined with `console.log()`).
             *
             * Use template literals and special characters to add the appropriate color code to the string output.
             * For background colors, add a special character that resets the background color at the end of the string.
             */
            exports_1("colorize", colorize = new (class {
                constructor() {
                    this.color = (code, ended = false, ...messages) => `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
                    this.black = this.color.bind(null, 30, false);
                    this.red = this.color.bind(null, 31, false);
                    this.green = this.color.bind(null, 32, false);
                    this.yellow = this.color.bind(this, 33, false);
                    this.blue = this.color.bind(this, 34, false);
                    this.magenta = this.color.bind(this, 35, false);
                    this.cyan = this.color.bind(this, 36, false);
                    this.white = this.color.bind(this, 37, false);
                    this.bgBlack = this.color.bind(this, 40, true);
                    this.bgRed = this.color.bind(this, 41, true);
                    this.bgGreen = this.color.bind(this, 42, true);
                    this.bgYellow = this.color.bind(this, 43, true);
                    this.bgBlue = this.color.bind(this, 44, true);
                    this.bgMagenta = this.color.bind(this, 45, true);
                    this.bgCyan = this.color.bind(this, 46, true);
                    this.bgWhite = this.color.bind(this, 47, true);
                }
            })());
            /**
             * Add special characters to text to print in color in the console (combined with `console.log()`).
             *
             * Use template literals and special characters to add the appropriate color code to the string output.
             * For background colors, add a special character that resets the background color at the end of the string.
             */
            exports_1("color", color = colorize);
            // console.log(colorize.black("foo")); // 'foo' (red letters)
            // console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
            // console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first
            /**
             * Removes falsy values from an array.
             * Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).
             *
             * @param arr {any[]}
             */
            exports_1("compact", compact = (arr) => arr.filter(Boolean));
            /**
             * Returns a string with whitespaces compacted.
             * Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.
             *
             * @param str {string}
             */
            exports_1("compactWhitespace", compactWhitespace = (str) => str.replace(/\s{2,}/g, " "));
            /**
             * Returns a function that is the logical complement of the given function, `fn`.
             *
             * Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.
             *
             * @param fn {Func<any>}
             */
            exports_1("complement", complement = (fn) => (...args) => !fn(...args));
            /**
             * Performs right-to-left function composition.
             *
             * Use `Array.prototype.reduce()` to perform right-to-left function composition.
             * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
             *
             * @param fns {...fns: Func<any>[]}
             */
            exports_1("compose", compose = (...fns) => fns.reduce((f, g) => (...args) => f(...castArray(g(...args)))));
            /**
             * Performs left-to-right function composition.
             *
             * Use `Array.prototype.reduce()` to perform left-to-right function composition.
             * The first (leftmost) function can accept one or more arguments; the remaining functions must be unary. *
             * @param fns {...fns: Func<any>[]}
             */
            exports_1("composeRight", composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(...castArray(f(...args)))));
            /**
             * Returns `true` if the given string contains any whitespace characters, `false` otherwise.
             *
             * Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.
             *
             * @param str {string}
             */
            exports_1("containsWhitespace", containsWhitespace = (str) => /\s/.test(str));
            /**
             * Groups the elements of an array based on the given function and returns the count of elements in each group.
             *
             * Use `Array.prototype.map()` to map the values of an array to a function or property name.
             * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
             *
             * @param arr {T[]} here <T = any>
             * @param fn fn: Func<T> | string
             */
            exports_1("countBy", countBy = (arr, fn) => {
                const mapper = typeof fn === "function" ? fn : (val) => val[fn];
                return arr.reduce((acc, val) => {
                    const value = mapper(val);
                    acc[value] = (acc[value] || 0) + 1;
                    return acc;
                }, {});
            });
            /**
             * Counts the occurrences of a value in an array.
             *
             * Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.
             *
             * @param arr {T[]}
             * @param val {T}
             */
            exports_1("countOccurrences", countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0));
            /**
             * Creates an element from a string (without appending it to the document).
             * if the given string contains multiple elements, only the first one will be returned.
             *
             * Use `document.createElement()` to create a new element.
             * Set its `innerHTML` to the string supplied as the argument.
             * Use `ParentNode.firstElementChild` to return the element version of the string.
             *
             * @param str { string }
             */
            exports_1("createElement", createElement = (str) => {
                const el = document.createElement("div");
                el.innerHTML = str;
                return el.firstElementChild;
            });
            /**
             * Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.
             *
             * Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
             * For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
             * For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
             * to the array.
             * For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.
             *
             */
            exports_1("createEventHub", createEventHub = () => ({
                hub: Object.create(null),
                emit(event, data) {
                    (this.hub[event] || []).forEach((handler) => handler(data));
                },
                on(event, handler) {
                    if (!this.hub[event])
                        this.hub[event] = [];
                    this.hub[event].push(handler);
                },
                off(event, handler) {
                    const i = (this.hub[event] || []).findIndex((h) => h === handler);
                    if (i > -1)
                        this.hub[event].splice(i, 1);
                    if (this.hub[event]?.length === 0)
                        delete this.hub[event];
                },
            }));
            /**
             * Converts a comma-separated values (CSV) string to a 2D array.
             *
             * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
             * Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
             * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
             * Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.
             *
             * @param data {string}
             * @param delimiter {string} @default ","
             * @param omitFirstRow {boolean}  @default false
             */
            exports_1("CSVToArray", CSVToArray = (data, delimiter = ",", omitFirstRow = false) => data
                .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
                .split("\n")
                .map((v) => v.split(delimiter)));
            exports_1("CSVToJSON", CSVToJSON = (data, delimiter = ",") => {
                const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
                return data
                    .slice(data.indexOf("\n") + 1)
                    .split("\n")
                    .map((v) => {
                    const values = v.split(delimiter);
                    return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
                });
            });
            /**
             * Curries a function.
             *
             * Use recursion.
             * If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
             * Otherwise, return a curried function `fn` that expects the rest of the arguments.
             * If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.
             *
             * @param fn {Func}
             * @param arity {number} number of argument `fn` can have
             * @param args {...any[]} var args, pass initial values
             */
            exports_1("curry", curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args));
            /**
             * dayOfYear: Gets the day of the year from a `Date` object.
             *
             * Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
             * Use `Math.floor()` to appropriately round the resulting day count to an integer.
             *
             * @param date {Date| string}
             * */
            exports_1("dayOfYear", dayOfYear = (date) => {
                if (isString(date)) {
                    date = new Date(date);
                }
                if (!isValidDate(date))
                    throw new Error(`Invalid Date string`);
                return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
                    1000 /
                    60 /
                    60 /
                    24);
            });
            /**
             * Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.
             *
             * Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
             * Omit the second argument, `ms`, to set the timeout at a default of 0 ms.
             *
             * @param fn { Function }
             * @param ms {number} @default 300ms
             */
            exports_1("debounce", debounce = (fn, ms = 300) => {
                let timeoutId;
                return function (...args) {
                    clearTimeout(timeoutId);
                    timeoutId = window.setTimeout(() => fn.apply(this, args), ms);
                };
            });
            /**
             * Creates a deep clone of an object.
             *
             * Use recursion.
             * Check if the passed object is `null` and, if so, return `null`.
             * Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
             * Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.
             *
             * @param obj {any}
             */
            exports_1("deepClone", deepClone = (obj) => {
                if (obj === null)
                    return null;
                let clone = { ...obj };
                Object.keys(clone).forEach((key) => (clone[key] =
                    typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]));
                return Array.isArray(obj) && obj.length
                    ? (clone.length = obj.length) && Array.from(clone)
                    : Array.isArray(obj)
                        ? Array.from(obj)
                        : clone;
            });
            /**
             * Deep flattens an array.
             *
             * Use recursion.[polyfill for `Array.prototype.flat`]
             * Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
             * Recursively flatten each element that is an array.
             *
             * @param arr {any[]}
             */
            exports_1("deepFlatten", deepFlatten = (arr) => {
                if (typeof Array.prototype.flat !== "undefined")
                    return arr.flat(Infinity);
                return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
            });
            /**
             * Deep freezes an object.
             *
             * Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
             * Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
             * Finally, use `Object.freeze()` to freeze the given object.
             *
             * @param obj
             */
            exports_1("deepFreeze", deepFreeze = (obj) => {
                Object.keys(obj).forEach((prop) => {
                    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
                        deepFreeze(obj[prop]);
                    }
                });
                return Object.freeze(obj);
            });
            /**
             * Returns the target value in a nested JSON object, based on the `keys` array.
             *
             * Compare the keys you want in the nested JSON object as an `Array`.
             * Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
             * If the key exists in object, return target value, otherwise, return `null`.
             *
             * @param obj {any}
             * @param keys {string | (string | number)[],}
             * @param defaultValue {null | undefined } @default undefined
             * @param delimiter {string} @default "."
             */
            exports_1("deepGet", deepGet = (obj, keys, defaultValue = undefined, delimiter = ".") => {
                if (isString(keys)) {
                    keys = keys.split(delimiter);
                }
                return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
            });
            /**
             * Assigns default values for all properties in an object that are `undefined`.
             *
             * Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use spread operator `...` to combine the default values, finally use `obj` again to overwrite properties that originally had a value.
             *
             * @param obj {any}
             * @param defs {any[]}
             */
            exports_1("defaults", defaults = (obj, ...defs) => Object.assign({}, obj, ...defs, obj));
            /**
             * Invokes the provided function after `wait` milliseconds.
             *
             * Use `setTimeout()` to delay execution of `fn`.
             * Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.
             *
             * @param fn {Func} any function
             * @param wait {number} in ms
             * @param args {any[]}, arguments for fn
             */
            exports_1("delay", delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args));
            /**
             * Return a promise, Resolve after `wait` milliseconds.
             *
             * @param wait {number} in ms
             * @param args{any[]}, arguments for Promise
             */
            exports_1("delayedPromise", delayedPromise = (wait = 300, ...args) => new Promise((resolve) => {
                delay(resolve, wait, ...args);
            }));
            /**
             *  Returns `true` if at least one function returns `true` for a given set of arguments, `false` otherwise.
             *
             * Use the logical or (`||`) operator on the result of calling the two functions with the supplied `args`.
             *
             * @param f { Function}
             * @param g { Function}
             */
            exports_1("either", either = (f, g) => (...args) => f(...args) || g(...args));
            /**
             * Performs a deep comparison between two values to determine if they are equivalent.
             *
             * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
             * Check if only one value is `null` or `undefined` or if their prototypes differ.
             * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
             *
             * @param a {<T = any = any>}
             * @param b {<T = any = any>}
             */
            exports_1("equals", equals = (a, b) => {
                if (a === b)
                    return true;
                if (a instanceof Date && b instanceof Date) {
                    return a.getTime() === b.getTime();
                }
                if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
                    return a === b;
                }
                const objA = a;
                const objB = b;
                if (objA.prototype !== objA.prototype)
                    return false;
                let keys = Object.keys(objA);
                if (keys.length !== Object.keys(objB).length)
                    return false;
                return keys.every((k) => equals(objA[k], objB[k]));
            });
            /**
             * Performs a deep comparison between two values to determine if they are equivalent. Same as `equals`, but without type check
             *
             * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
             * Check if only one value is `null` or `undefined` or if their prototypes differ.
             * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
             *
             * @param a {any}
             * @param b {any}
             */
            exports_1("deepEquals", deepEquals = (a, b) => {
                if (a === b)
                    return true;
                if (a instanceof Date && b instanceof Date) {
                    return a.getTime() === b.getTime();
                }
                if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
                    return a === b;
                }
                const objA = a;
                const objB = b;
                if (objA.prototype !== objA.prototype)
                    return false;
                let keys = Object.keys(objA);
                if (keys.length !== Object.keys(objB).length)
                    return false;
                return keys.every((k) => equals(objA[k], objB[k]));
            });
            /**
             * Escapes a string for use in HTML.
             *
             * Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).
             *
             * @param str {string}
             */
            exports_1("escapeHTML", escapeHTML = (str) => str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars[tag] || tag));
            /**
             * Escapes a string to use in a regular expression.
             *
             * Use `String.prototype.replace()` to escape special characters.
             *
             * @param str
             */
            exports_1("escapeRegExp", escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
            /**
             * Calculates the factorial of a number.
             *
             *Use recursion.
             *If `n` is less than or equal to `1`, return `1`.
             *Otherwise, return the product of `n` and the factorial of `n - 1`.
             *Throws an exception if `n` is a negative number.
             *
             * @param n {number}
             */
            exports_1("factorial", factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1));
            /**
             * Returns the memoized (cached) function.
             *
             * Create an empty cache by instantiating a new `Map` object.
             * Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
             * Allow access to the `cache` by setting it as a property on the returned function.
             *
             * @param fn {Function}
             */
            exports_1("memoize", memoize = (fn) => {
                const cache = new Map();
                const cached = function (val) {
                    return cache.has(val)
                        ? cache.get(val)
                        : cache.set(val, fn.call(this, val)) && cache.get(val);
                };
                cached.cache = cache;
                return cached;
            });
            /**
             * Converts Fahrenheit to Celsius.
             *
             * Follows the conversion formula `C = (F - 32) * 5/9`.
             *
             * @param degrees
             */
            exports_1("fahrenheitToCelsius", fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9);
            /**
             * Filters out the non-unique values in an array.
             *
             * Use `Array.prototype.filter()` for an array containing only the unique values.
             *
             * @param arr{any[]}
             */
            exports_1("filterNonUnique", filterNonUnique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)));
            /**
             * Filters out the non-unique values in an array, based on a provided comparator function.
             *
             * Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
             * The comparator function takes four arguments: the values of the two elements being compared and their indexes.
             *
             * @param arr {T[]}
             * @param fn {(obj1: T, obj2: T, index1: number, index2: number) => any}
             */
            exports_1("filterNonUniqueBy", filterNonUniqueBy = (arr, fn) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j))));
            /**
             * Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.
             *
             * Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.
             *
             * @param obj { any }
             * @param fn {key}
             */
            exports_1("findKey", findKey = (obj, fn) => Object.keys(obj).find((key) => fn(obj[key], key, obj)));
            /**
             * Flattens an array up to the specified depth.
             *
             * Use recursion, decrementing `depth` by 1 for each level of depth.
             * Use `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.
             * Base case, for `depth` equal to `1` stops recursion.
             * Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).
             *
             *
             * @param arr {any[]}
             * @param depth
             */
            exports_1("flatten", flatten = (arr, depth = 1) => {
                if (typeof Array.prototype.flat !== "undefined")
                    return arr.flat(depth);
                return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
            });
            /**
             * Executes a provided function once for each array element, starting from the array's last element.
             *
             * @param arr {any[]}
             * @param callback { Function }
             */
            exports_1("forEachRight", forEachRight = (array = [], callback) => {
                for (let index = array.length - 1; index >= 0; index--) {
                    const element = array[index];
                    callback(element, index, array);
                }
            });
            /**
             * Returns the human readable format of the given number of milliseconds.
             *
             * Divide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.
             * Use `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.
             * Use `Array.prototype.map()` to create the string for each value, pluralizing appropriately.
             * Use `String.prototype.join(', ')` to combine the values into a string.
             *
             * @param ms {number} in ms
             */
            exports_1("formatDuration", formatDuration = (ms) => {
                ms = Math.abs(ms);
                const time = {
                    day: Math.floor(ms / 86400000),
                    hour: Math.floor(ms / 3600000) % 24,
                    minute: Math.floor(ms / 60000) % 60,
                    second: Math.floor(ms / 1000) % 60,
                    millisecond: Math.floor(ms) % 1000,
                };
                return Object.entries(time)
                    .filter((val) => val[1] !== 0)
                    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
                    .join(", ");
            });
            // /**
            //  * Encode a set of form elements as an `object`.
            //  *
            //  * Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
            //  * Collect the object from the array, using `Array.prototype.reduce()`.
            //  *
            //  * @param form
            //  */
            // export const formToObject = (form: any) => {
            //   const F = FormData as IFormData;
            //   Array.from(new F(form)).reduce(
            //     (acc, [key, value]) => ({
            //       ...acc,
            //       [key]: value,
            //     }),
            //     {}
            //   );
            // };
            /**
             * Retrieve a set of properties indicated by the given selectors from an object.
             *
             * Use `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.
             *
             * @param from {any}
             * @param selectors {string}
             */
            exports_1("get", get = (from, selector, defaultValue = undefined) => selector
                .replace(/\[([^\[\]]*)\]/g, ".$1.")
                .split(".")
                .filter((t) => t !== "")
                .reduce((prev, cur) => prev && prev[cur], from) || defaultValue);
            /**
             * Retrieve a set of properties indicated by the given selectors(string[]) from an object.
             *
             * Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.
             *
             * @param from {any}
             * @param selectors {string[]}
             */
            exports_1("getAll", getAll = (from, ...selectors) => [...selectors].map((s) => get(from, s)));
            /**
             * Returns the current URL without any parameters.
             * Use `String.prototype.indexOf()` to check if the given `url` has parameters, `String.prototype.slice()` to remove them if necessary.
             *
             * @param url { string }
             */
            exports_1("getBaseURL", getBaseURL = (url) => url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url);
            /**
             * Returns the native type of a value.
             *
             * Return `'undefined'` or `'null'` if the value is `undefined` or `null`.
             * Otherwise, use `Object.prototype.constructor.name` to get the name of the constructor.
             *
             * @param v
             */
            exports_1("getType", getType = (v) => v === undefined
                ? "undefined"
                : v === null
                    ? "null"
                    : v.constructor.name.toLowerCase());
            exports_1("getURLParameters", getURLParameters = (url) => {
                return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
                    const [key, value] = v.split("=");
                    if (a[key]) {
                        a[key] = (typeof a[key] === "string"
                            ? [a[key]]
                            : a[key]).concat(value);
                    }
                    else {
                        a[key] = value;
                    }
                    return a;
                }, {});
            });
            exports_1("mapToObject", mapToObject = (map) => {
                let result = {};
                for (let [key, value] of map.entries()) {
                    result[key] = value;
                }
                return result;
            });
            // const pathname = url.split("?", 2)[1];
            // if (!pathname) return {};
            // if (typeof URLSearchParams !== undefined) {
            //   return mapToObject<[string, string]>(new URLSearchParams(pathname));
            // }
            /**
             * Groups the elements of an array based on the given function.
             *
             * Use `Array.prototype.map()` to map the values of an array to a function or property name.
             * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
             *
             * type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T;
             *
             * @param arr {any[]}
             * @param fn {MapFunc<T> | string}
             */
            exports_1("groupBy", groupBy = (arr, fn) => arr.map(isString(fn) ? (val) => val[fn] : fn).reduce((acc, val, i) => {
                acc[val] = (acc[val] || []).concat(arr[i]);
                return acc;
            }, {}));
            /**
             * Check if the current arguments contain the specified flags.
             *
             * Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `args` contains all the specified flags.
             * Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.
             *
             *
             * @param flags
             */
            exports_1("hasFlags", hasFlags = (args, ...flags) => flags.every((flag) => args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)));
            /**
             * Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.
             *
             * Split string by chunk of 2, filter blank string. convert to number
             *
             * @param hex {string}
             */
            exports_1("hexToRGB", hexToRGB = (hex) => {
                hex = hex.startsWith("#") ? hex.slice(1) : hex;
                if (hex.length === 3) {
                    hex = Array.from(hex).reduce((str, x) => str + x + x, ""); // 123 -> 112233
                }
                const values = hex
                    .split(/([a-z0-9]{2,2})/)
                    .filter(Boolean)
                    .map((x) => parseInt(x, 16));
                return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
            });
            /**
             * Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.
             *
             * Same as hexToRGB but using chunk
             *
             * @param hex {string}
             */
            exports_1("hexToRGB2", hexToRGB2 = (hex) => {
                let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
                if (hexChars.length === 3) {
                    hexChars = hexChars.reduce((str, x) => [...str, x, x], []); // 123 -> 112233
                }
                const values = chunk(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
                return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
            });
            /**
             * Hides all the elements specified.
             *
             * Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.
             *
             * @param el {HTMLElement[]}
             */
            exports_1("hide", hide = (...el) => [...el].forEach((e) => (e.style.display = "none")));
            /**
             * Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.
             *
             * Use `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.
             *
             */
            exports_1("httpsRedirect", httpsRedirect = () => {
                if (location.protocol !== "https:")
                    location.replace("https://" + location.href.split("//")[1]);
            });
            /**
             * Returns `true` if all the elements in `values` are included in `arr`, `false` otherwise.
             *
             * Use `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.
             *
             * @param arr {any[]}
             * @param values  {any[]}
             */
            exports_1("includesAll", includesAll = (arr, values) => values.every((v) => arr.includes(v)));
            /**
             * Indents each line in the provided string.
             *
             * Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
             * Omit the third parameter, `indent`, to use a default indentation character of `' '`.
             *
             * @param str
             * @param count
             * @param indent
             */
            exports_1("indentString", indentString = (str, count, indent = " ") => {
                indent = indent.repeat(count);
                return str.replace(/^/gm, indent);
            });
            /**
             * Initializes and fills an array with the specified values.
             *
             * Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
             * You can omit `val` to use a default value of `0`.
             *
             * @param n
             * @param val
             */
            exports_1("fillArray", fillArray = (n, val = 0) => Array(n).fill(val));
            /**
             * Initializes and fills an array with the specified values.
             *
             * Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
             * You can omit `val` to use a default value of `0`.
             *
             * @param n
             * @param val
             */
            exports_1("initializeArray", initializeArray = (n, val = 0) => Array(n).fill(val));
            /**
             * Checks if the given number | Date | string falls within the given range.
             *
             * Use arithmetic comparison to check if the given number is in the specified range.
             * If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.
             *
             * @param n {number | Date | string }
             * @param start {number | Date | string}
             * @param end {number | Date | string}
             */
            exports_1("inRange", inRange = (n, start, end) => {
                if (end && start > end)
                    [end, start] = [start, end];
                return end === undefined ? n >= 0 && n < start : n >= start && n < end;
            });
            /**
             * Mutates the original array to insert the given values at the specified index.
             *
             * Use `Array.prototype.splice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.
             *
             * @param arr {any[]}
             * @param i {number}
             * @param v {...any[]}
             */
            exports_1("insertAt", insertAt = (arr, i, ...v) => {
                arr.splice(i + 1, 0, ...v);
                return arr;
            });
            /**
             * Insert the given values at the specified index.
             *
             * Use `Array.prototype.slice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.
             *
             * @param arr {any[]}
             * @param i {number}
             * @param v {...any[]}
             */
            exports_1("insertAtImmutable", insertAtImmutable = (arr, i, ...v) => {
                return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
            });
            /**
             * Returns a list of elements that exist in both arrays.
             *
             * Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.
             *
             * @param a {any[]}
             * @param b {any[]}
             */
            exports_1("intersection", intersection = (a, b) => {
                const s = new Set(b);
                return [...new Set(a)].filter((x) => s.has(x));
            });
            /**
             * Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.
             *
             * Create a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.
             *
             * @param a {any[]}
             * @param b {any[]}
             * @param fn {MapFunc}
             */
            exports_1("intersectionBy", intersectionBy = (a, b, fn) => {
                const s = new Set(b.map(fn));
                return [...new Set(a)].filter((x) => s.has(fn(x)));
            });
            /**
             * Returns a list of elements that exist in both arrays, using a provided comparator function.
             *
             * Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.
             *
             * @param a
             * @param b
             * @param comp
             */
            exports_1("intersectionWith", intersectionWith = (a, b, comp) => a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1));
            exports_1("is", is = (type, val) => ![, null].includes(val) &&
                (isString(type) ? val.constructor.name === type : val.constructor === type));
            /**
             * Check if a date is after another date.
             *
             * Use the greater than operator (`>`) to check if the first date comes after the second one.
             *
             * @param dateA
             * @param dateB
             */
            exports_1("isAfterDate", isAfterDate = (dateA, dateB) => dateA > dateB);
            /**
             * Check if a date is before another date.
             *
             * Use the greater than operator (`<`) to check if the first date comes before the second one.
             *
             * @param dateA
             * @param dateB
             */
            exports_1("isBeforeDate", isBeforeDate = (dateA, dateB) => dateA < dateB);
            /**
             * Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.
             *
             * Use `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.
             * `typeof` allows globals to be checked for existence without throwing a `ReferenceError`.
             * If both of them are not `undefined`, then the current environment is assumed to be a browser.
             *
             */
            exports_1("isBrowser", isBrowser = () => ![typeof window, typeof document].includes("undefined"));
            /**
             * Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.
             *
             * Check if the provided value is `null` or if its `length` is equal to `0`.
             *
             * @param val
             */
            exports_1("isEmpty", isEmpty = (val) => val == null || !(Object.keys(val) || val).length);
            /**
             * Returns `true` if the given `year` is a leap year, `false` otherwise.
             *
             * Use `new Date()`, setting the date to February 29th of the given `year` and use `Date.prototype.getMonth()` to check if the month is equal to `1`.
             *
             * @param year {number}
             */
            exports_1("isLeapYear", isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1);
            /**
             * Checks if a string is lower case.
             *
             * Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.
             *
             * @param str {string}
             */
            exports_1("isLowerCase", isLowerCase = (str) => str === str.toLowerCase());
            /**
             * Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.
             *
             * Use the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.
             *
             * @param val {any}
             */
            exports_1("isNil", isNil = (val) => val === undefined || val === null);
            /**
             * Returns `true` if the specified value is `null`, `false` otherwise.
             *
             * Use the strict equality operator to check if the value of `val` is equal to `null`.
             *
             * @param val {any}
             */
            exports_1("isNull", isNull = (val) => val === null);
            /**
             * Checks if the given argument is a number.
             *
             * Use `typeof` to check if a value is classified as a number primitive.
             * To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).
             *
             * @param val {any}
             */
            exports_1("isNumber", isNumber = (val) => typeof val === "number" && val === val);
            /**
             * Returns a boolean determining if the passed value is an object or not.
             *
             * Uses the `Object` constructor to create an object wrapper for the given value.
             * If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.
             *
             * @param obj
             */
            exports_1("isObject", isObject = (obj) => obj === Object(obj));
            /**
             * Checks if the provided value is an object created by the Object constructor.
             *
             * Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.
             *
             * @param val
             */
            exports_1("isPlainObject", isPlainObject = (val) => !!val && typeof val === "object" && val.constructor === Object);
            /**
             * Returns a boolean determining if the passed value is primitive or not.
             *
             * Create an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).
             *
             * @param val {any}
             */
            exports_1("isPrimitive", isPrimitive = (val) => Object(val) !== val);
            /**
             * Check if a date is the same as another date.
             *
             * Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.
             *
             * @param dateA {Date}
             * @param dateB {Date}
             */
            exports_1("isSameDate", isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString());
            // TODO: Refactor
            /**
             * Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.
             *
             * Calculate the ordering `direction` for the first two elements.
             * Use `Object.entries()` to loop over array objects and compare them in pairs.
             * Return `0` if the `direction` changes or the `direction` if the last element is reached.
             *
             * @param arr
             */
            exports_1("isSorted", isSorted = (arr) => {
                let direction = -(arr[0] - arr[1]);
                for (let [i, val] of arr.entries()) {
                    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
                    if (i === arr.length - 1)
                        return !direction ? 0 : direction / Math.abs(direction);
                    else if ((val - arr[i + 1]) * direction > 0)
                        return 0;
                }
            });
            /**
             * Checks if a string is upper case.
             *
             * Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.
             *
             * @param str {string}
             */
            exports_1("isUpperCase", isUpperCase = (str) => str === str.toUpperCase());
            /**
             * Checks if the provided string is a valid JSON.
             *
             * Use `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.
             *
             * @param str {string}
             */
            exports_1("isValidJSON", isValidJSON = (str) => {
                try {
                    JSON.parse(str);
                    return true;
                }
                catch (e) {
                    return false;
                }
            });
            /**
             * Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.
             *
             * Use `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.
             * Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.
             * Use `Array.prototype.join('\n')` to combine all rows into a string.
             * Omit the third argument, `delimiter`, to use a default delimiter of `,`.
             *
             * @param arr
             * @param columns
             * @param delimiter
             */
            exports_1("JSONtoCSV", JSONtoCSV = (arr, columns, delimiter = ",") => [
                columns.join(delimiter),
                ...arr.map((obj) => columns.reduce((acc, key) => `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`, "")),
            ].join("\n"));
            /**
             * Returns the last element in an array.
             *
             * Check if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.
             *
             * @param arr
             */
            exports_1("last", last = (arr = []) => arr[arr.length - 1]);
            /**
             * Adds an event listener to an element that will only run the callback the first time the event is triggered.
             *
             * Use `EventTarget.addEventListener()` to add an event listener to an element, storing the reference in a variable.
             * Use a condition to call `fn` only the first time the listener is triggered.
             *
             * @param el
             * @param evt
             * @param fn
             */
            exports_1("listenOnce", listenOnce = (el, evt, fn) => {
                let fired = false;
                el.addEventListener(evt, (e) => {
                    if (!fired)
                        fn(e);
                    fired = true;
                });
            });
            /**
             * Creates a new object from the specified object, where all the keys are in lowercase.
             *
             * Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
             * Convert each key in the original object to lowercase, using `String.toLowerCase()`.
             *
             * @param obj
             */
            exports_1("lowercaseKeys", lowercaseKeys = (obj, deep = false) => Object.keys(obj).reduce((acc, key) => {
                acc[key.toLowerCase()] =
                    deep && typeof obj[key] === "object" ? lowercaseKeys(obj[key]) : obj[key];
                return acc;
            }, {}));
            /**
             * Creates an object with keys generated by running the provided function for each key and the same values as the provided object.
             *
             * Use `Object.keys(obj)` to iterate over the object's keys.
             * Use `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.
             *
             * @param obj
             * @param fn
             */
            exports_1("mapKeys", mapKeys = (obj, fn) => Object.keys(obj).reduce((acc, k) => {
                acc[fn(obj[k], k, obj)] = obj[k];
                return acc;
            }, {}));
            /**
             * Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the result of the function as the value.
             *
             * Use `Array.prototype.reduce()` to apply `fn` to each element in `arr` and combine the results into an object.
             * Use `el` as the key for each property and the result of `fn` as the value.
             *
             * @param arr
             * @param fn
             */
            exports_1("mapObject", mapObject = (arr, fn) => arr.reduce((acc, el, i) => {
                acc[el] = fn(el, i, arr);
                return acc;
            }, {}));
            /**
             * Creates a new string with the results of calling a provided function on every character in the calling string.
             *
             * Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
             * Use `Array.prototype.join('')` to recombine the array of characters into a string.
             * The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).
             *
             * @param str
             * @param fn
             */
            exports_1("mapString", mapString = (str, fn) => {
                const chars = [...str];
                return chars.map((c, i) => fn(c, i, chars)).join("");
            });
            exports_1("map", map = (array, fn) => {
                const chars = Array.isArray(array) ? array : [...array];
                return chars.map((c, i) => fn(c, i, chars));
            });
            /**
             * Replaces all but the last `num` of characters with the specified mask character.
             *
             * Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
             * Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
             * Omit the third argument, `mask`, to use a default character of `'*'` for the mask.
             *
             * @param cc
             * @param num
             * @param mask
             */
            exports_1("mask", mask = (cc, num = 4, mask = "*") => String(cc).slice(-num).padStart(String(cc).length, mask));
            /**
             * Compares two objects to determine if the first one contains equivalent property values to the second one.
             *
             * Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.
             *
             * @param obj
             * @param source
             */
            exports_1("matches", matches = (obj, source) => Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]));
            /**
             * Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.
             *
             * Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.
             * If no function is provided, the values will be compared using the equality operator.
             *
             * @param obj
             * @param source
             * @param fn
             */
            exports_1("matchesWith", matchesWith = (obj, source, fn) => Object.keys(source).every((key) => obj.hasOwnProperty(key) && fn
                ? fn(obj[key], source[key], key, obj, source)
                : obj[key] == source[key]));
            /**
             * Returns the maximum value of an array, after mapping each element to a value using the provided function.
             *
             * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.
             *
             * @param arr
             * @param fn
             */
            exports_1("maxBy", maxBy = (arr, fn) => Math.max(...arr.map(isString(fn) ? (val) => val[fn] : fn)));
            /**
             * Returns the maximum of the given dates.
             *
             * Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.
             *
             * @param dates
             */
            exports_1("maxDate", maxDate = (dates) => new Date(Math.max(...dates.map(Number))));
            /**
             * Returns the `n` maximum elements from the provided array.
             * If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).
             *
             * Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
             * Use `Array.prototype.slice()` to get the specified number of elements.
             * Omit the second argument, `n`, to get a one-element array.
             * @param arr
             * @param n
             */
            exports_1("maxN", maxN = (arr, n = 1, order = 1) => [...arr].sort((a, b) => order * (b - a)).slice(0, n));
            /**
             * Creates a new object from the combination of two or more objects.
             *
             * Use `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.
             * Use `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.
             *
             * @param objs
             */
            exports_1("merge", merge = (...objs) => [...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
                acc[k] = acc.hasOwnProperty(k)
                    ? [].concat(acc[k]).concat(obj[k])
                    : obj[k];
                return acc;
            }, {}), {}));
            exports_1("midpoint", midpoint = ([x1, y1], [x2, y2]) => [
                (x1 + x2) / 2,
                (y1 + y2) / 2,
            ]);
            /**
             * Returns the minimum value of an array, after mapping each element to a value using the provided function.
             *
             * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.
             *
             * @param arr
             * @param fn
             */
            exports_1("minBy", minBy = (arr, fn) => Math.min(...arr.map(isString(fn) ? (val) => val[fn] : fn)));
        }
    };
});

const __exp = __instantiate("util", false);
export const isValidDate = __exp["isValidDate"];
export const isString = __exp["isString"];
export const accumulate = __exp["accumulate"];
export const all = __exp["all"];
export const allEqual = __exp["allEqual"];
export const and = __exp["and"];
export const any = __exp["any"];
export const some = __exp["some"];
export const aperture = __exp["aperture"];
export const approximatelyEqual = __exp["approximatelyEqual"];
export const arrayToCSV = __exp["arrayToCSV"];
export const arrayToHtmlList = __exp["arrayToHtmlList"];
export const ary = __exp["ary"];
export const attempt = __exp["attempt"];
export const attempt2 = __exp["attempt2"];
export const average = __exp["average"];
export const averageBy = __exp["averageBy"];
export const bifurcate = __exp["bifurcate"];
export const bifurcateBy = __exp["bifurcateBy"];
export const binary = __exp["binary"];
export const bind = __exp["bind"];
export const bindAll = __exp["bindAll"];
export const binomialCoefficient = __exp["binomialCoefficient"];
export const both = __exp["both"];
export const call = __exp["call"];
export const capitalize = __exp["capitalize"];
export const capitalizeEveryWord = __exp["capitalizeEveryWord"];
export const castArray = __exp["castArray"];
export const celsiusToFahrenheit = __exp["celsiusToFahrenheit"];
export const chunk = __exp["chunk"];
export const colorize = __exp["colorize"];
export const color = __exp["color"];
export const compact = __exp["compact"];
export const compactWhitespace = __exp["compactWhitespace"];
export const complement = __exp["complement"];
export const compose = __exp["compose"];
export const composeRight = __exp["composeRight"];
export const containsWhitespace = __exp["containsWhitespace"];
export const countBy = __exp["countBy"];
export const countOccurrences = __exp["countOccurrences"];
export const createElement = __exp["createElement"];
export const createEventHub = __exp["createEventHub"];
export const CSVToArray = __exp["CSVToArray"];
export const CSVToJSON = __exp["CSVToJSON"];
export const curry = __exp["curry"];
export const dayOfYear = __exp["dayOfYear"];
export const debounce = __exp["debounce"];
export const deepClone = __exp["deepClone"];
export const deepFlatten = __exp["deepFlatten"];
export const deepFreeze = __exp["deepFreeze"];
export const deepGet = __exp["deepGet"];
export const defaults = __exp["defaults"];
export const delay = __exp["delay"];
export const delayedPromise = __exp["delayedPromise"];
export const either = __exp["either"];
export const equals = __exp["equals"];
export const deepEquals = __exp["deepEquals"];
export const escapeHTML = __exp["escapeHTML"];
export const escapeRegExp = __exp["escapeRegExp"];
export const factorial = __exp["factorial"];
export const memoize = __exp["memoize"];
export const fahrenheitToCelsius = __exp["fahrenheitToCelsius"];
export const filterNonUnique = __exp["filterNonUnique"];
export const filterNonUniqueBy = __exp["filterNonUniqueBy"];
export const findKey = __exp["findKey"];
export const flatten = __exp["flatten"];
export const forEachRight = __exp["forEachRight"];
export const formatDuration = __exp["formatDuration"];
export const get = __exp["get"];
export const getAll = __exp["getAll"];
export const getBaseURL = __exp["getBaseURL"];
export const getType = __exp["getType"];
export const getURLParameters = __exp["getURLParameters"];
export const mapToObject = __exp["mapToObject"];
export const groupBy = __exp["groupBy"];
export const hasFlags = __exp["hasFlags"];
export const hexToRGB = __exp["hexToRGB"];
export const hexToRGB2 = __exp["hexToRGB2"];
export const hide = __exp["hide"];
export const httpsRedirect = __exp["httpsRedirect"];
export const includesAll = __exp["includesAll"];
export const indentString = __exp["indentString"];
export const fillArray = __exp["fillArray"];
export const initializeArray = __exp["initializeArray"];
export const inRange = __exp["inRange"];
export const insertAt = __exp["insertAt"];
export const insertAtImmutable = __exp["insertAtImmutable"];
export const intersection = __exp["intersection"];
export const intersectionBy = __exp["intersectionBy"];
export const intersectionWith = __exp["intersectionWith"];
export const is = __exp["is"];
export const isAfterDate = __exp["isAfterDate"];
export const isBeforeDate = __exp["isBeforeDate"];
export const isBrowser = __exp["isBrowser"];
export const isEmpty = __exp["isEmpty"];
export const isLeapYear = __exp["isLeapYear"];
export const isLowerCase = __exp["isLowerCase"];
export const isNil = __exp["isNil"];
export const isNull = __exp["isNull"];
export const isNumber = __exp["isNumber"];
export const isObject = __exp["isObject"];
export const isPlainObject = __exp["isPlainObject"];
export const isPrimitive = __exp["isPrimitive"];
export const isSameDate = __exp["isSameDate"];
export const isSorted = __exp["isSorted"];
export const isUpperCase = __exp["isUpperCase"];
export const isValidJSON = __exp["isValidJSON"];
export const JSONtoCSV = __exp["JSONtoCSV"];
export const last = __exp["last"];
export const listenOnce = __exp["listenOnce"];
export const lowercaseKeys = __exp["lowercaseKeys"];
export const mapKeys = __exp["mapKeys"];
export const mapObject = __exp["mapObject"];
export const mapString = __exp["mapString"];
export const map = __exp["map"];
export const mask = __exp["mask"];
export const matches = __exp["matches"];
export const matchesWith = __exp["matchesWith"];
export const maxBy = __exp["maxBy"];
export const maxDate = __exp["maxDate"];
export const maxN = __exp["maxN"];
export const merge = __exp["merge"];
export const midpoint = __exp["midpoint"];
export const minBy = __exp["minBy"];

