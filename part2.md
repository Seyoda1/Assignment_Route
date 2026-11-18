## 1. forEach vs for...of

### forEach:

هيا عباره عن ميسود جاهزه بتلف علي العناصر في الاريه و مش بستخدم معاها البريك و الكتنيو

It is a method that takes a callback function and executes it for each element in the array. It does not support break or continue.

### for...of:

دي عباره عن لوب عاديه بتلف علي العناصر في الاريه او الاوبجكت او الاسترينج و بنستحدم معاهم البريك و الكتنيو

It is a normal loop that uses an iterator to get each element, such as an array or a string. It supports break and continue.

---

## 2. Hoisting and TDZ

### Hoisting:

هو عباره ان بيحصل تعريف للفاريبل و الفانكشن قبل ما الكود يبدا التنفيذ

is a JavaScript behavior where variable and function declarations are processed before the code execution.

- **var:** is hoisted and initialized with undefined.
- **let, const:** are hoisted, but they cannot be accessed before their declaration. → ReferenceError.

### TDZ (Temporal Dead Zone):

هو المسافه من ساعه ما تدخل الاسكوب لي حد ما تلاقي تعريف للفاريبل

Period between entering the scope and the point where the variable is declared.

---

## 3. == vs ===

- **( == )** compares values.
- **( === )** compares value and DT.

---

## 4. try...catch

try...catch is used to handle errors in JavaScript.

هيا بتساعدني انني لو حصل معايا ايرورور سؤاء بقي السيرفر و قغ او اي مشكله انني اعديها

Helps handle errors such as network problems, rejected Promises, or server errors without stopping the program.

---

## 5. Type Conversion vs Type Coercion

### Type Conversion:

Changing a value from one DT to another (manually) → using functions or methods.

**Examples:** `Number()`, `String()`, `Boolean()`.

### Type Coercion:

Changing a value from one DT to another (automatically) → using JavaScript.

### Examples:

**Type Conversion**

```javascript
Number("10");  // 10
```

**Type Coercion**

```javascript
"10" + 5;  // "105"
"10" - 5;  // 5
```