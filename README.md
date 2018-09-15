# Album Name Normalizer

[![Build Status](https://travis-ci.org/guytepper/album-name-normalizer.svg?branch=master)](https://travis-ci.org/guytepper/album-name-normalizer)
[![Coverage Status](https://coveralls.io/repos/github/guytepper/album-name-normalizer/badge.svg?branch=master)](https://coveralls.io/github/guytepper/album-name-normalizer?branch=master)

> Remove descriptors from album names.

```
input: Nevermind (Remastered)
output: Nevermind

input: Channel Orange (Explicit Version)
output: Channel Orange

input: The Queen is Dead (Deluxe Edition)
output: The Queen is Dead
```

## Installation

```
npm install album-name-normalizer
```

Alternatively, you can use yarn.

```
yarn add album-name-normalizer
```

## Usage

```javascript
const removeDescriptors = require('album-name-normalizer');

removeDescriptors('Nevermind (Remastered)'); // Nevermind
removeDescriptors('Channel Orange (Explicit Version)'); // Channel Orange
removeDescriptors('The Queen is Dead (Deluxe Edition)'); // The Queen is Dead
```
