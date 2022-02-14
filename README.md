## [Demo](https://codesandbox.io/s/agitated-breeze-2kmzw?file=/src/App.js)
![Example](https://firebasestorage.googleapis.com/v0/b/hector-rendon-95fbb.appspot.com/o/react-pictures-carousel%2Fexample-min.gif?alt=media&token=aa97b3a7-b036-4cee-904b-e3a6cae44f94)
-----
## Installation
-----
### npm
```bash
npm install --save react-pictures-carousel
```

### yarn

```bash
yarn add react-pictures-carousel
```

## Props
-----
| Name      | Type                    | Default   | Description   |
| --------  | -------------           | --------- | ------------- |
| pictures  | array of string         |           |               |
| direction | string                  | left      |Enter `left` or `right` to determine the direcction of travel|
| height    | string, number          | 400       |The value is reset to pixels if it is a number |
| width     | string, number          | 400       |The value is reset to pixels if it is a number |
| borderRadius | string, number       | 30        |The value is reset to pixels if it is a number |
| space     | string, number          | 30        |The value is reset to pixels if it is a number |
| velocity  | number                  | 50        |The value is reset to seconds                  |
| action    | function                |           |Function that is executed when clicking on the image|

## Example
-----
```jsx static
import React from 'react';
import Carousel from 'react-pictures-carousel';

import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';

import icon from './assests/icon.png';

const list = [img1, img8, img2, img3, img4, img5, img6, img7]

function App() {
  const handleClick = () =>{
    // Execute a function
  }

  return (
    <div>

      <Carousel pictures={list} icon={icon}
        direction='left'
        height='600px' width={400}
        borderRadius={30} space={30} velocity={70}
        action={handleClick} />

    </div>
  );
}

export default App;
```