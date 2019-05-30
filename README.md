Check out the hosted [demo](https://chrisdel101.github.io/UIfromMockup/)

To run locally `npm install` and `npm start`

To run test `npm test`

**Tests**

There are only single tests for the most complex utility components. These tests only check that the compoenent renders properly. I've set these up to provide a base for developing more robust, useful tests later on.

**File Stucture**

I used React to create the page. There are many components and each is in its own folder with its own stylesheet. This was my first time using CSS modules with React and the stylesheet placement got a little ungainly. You will have to judge for yourself if the stylesheets are disorganized; I am happy to reorganize this stylesheets if needed.

The main app file is `Page.jsx` and the three other major component files are `Hero.jsx`, `Header.jsx`, and `Main.jsx`. Everything else is a helper component in the `utilityComponents` folder.

**Number Bar**

The numbers start from zero and increment up to ending number set in the data file. The timer for the counter, how fast they reach the end, can be adjusted using the `countDuration` value in the state of `Page.jsx`.

They resume at one second increments after reaching the end.

**Bugs**

There is a bug in the accordion compoenent. The image next to it sticks to the accordion, so when it is opened and closed the image jerks. I was not able to debug this issue so I wanted to alert you that it is there, and could be fixed eventually in future iteration.

There is also a bug in the top navbar when resizing the page. It doesn't totally respect the page-size media queries and so can behave unexpectedly i.e will disappear while the page is at a certain width.
