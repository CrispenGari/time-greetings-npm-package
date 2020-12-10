### What is this?

### time-greetings

This is package that greets people based on time of the day.

### Messages

- MORNING: "Good Morning",
- AFTERNOON: "Good Afternoon",
- EVENING: "Good Evening",
- NIGHT: "Good Night",

## Installation

```sh
$ npm install time-greetings
```

## Usage

## Import `time-greetings`

```sh
const timeGreetings = require("time-greetings");
```

## OR

```sh
import timeGreetings from "time-greetings";
```

## Then

```
const date = new Date();
console.log(timeGreetings.timeGreetingsAutoDetectTime());
console.log(timeGreetings.timeGreetings(date));
```

The output of will be:

```
// Depending on the time of the day
Good Morning
Good Morning
```
