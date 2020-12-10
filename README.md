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

```
import WordCount from 'time-greetings';
```

## Simple Example

### Getting the summary of the whole string

```
const string = "This is just a test \n string for npm"
//
const string_summary = WordCount.stringSummary(string)
console.log(string_summary)
```

The output of will be:

```
{
  charactersNoSpaces: 27,
  characters: 36,
  words: 8,
  lines: 2,
  spaces: 9
}
```

## More Examples

### Getting the number of words in a string

```
const string = "This is just a test \n string for npm"
// getting the number of words in a string
const number_of_words = WordCount.wordCount(string)
console.log(number_of_words)
```

The output will be:

```
 8
```

### Getting the number of lines in a string

```
const string = "This is just a test \n string for npm"

const number_of_lines = WordCount.lineCount(string)
console.log(number_of_lines)
```

The output will be:

```
2
```

### Getting the characters in the string

```
const string = "This is just a test \n string for npm"
const characters = WordCount.charactersCount()
console.log(characters)
```

The output will be:

```
{
    charactersNoSpaces: 9,
    characters: 9, spaces: 0
}
```
