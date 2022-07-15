let changes1 = document.querySelector(`#first`);

changes1[`innerText`] = `The first ID TAG!`;
// Changed the id content within #first .
changes1[`innerHTML`] = `aha, it no longer says what it said before!`;
// Changed the content again
changes1[`innerHTML`] += `<h1>...Maybe (V) (;,,;) (V)<h1>`;
// Nested a h1 tag with in the innerHTML of the h1 tag from before
changes1[`outerHTML`] = `<h2>Woah, what happened?<h2>`;
// Chnaged the tag entirely to an h2 tag with new content

let changes2 = document.querySelectorAll(`.boom`);
// Targeting class boom
for( let i = 0; i < changes2.length; i++)
// Making a loop for changes to the many classes called `boom`
changes2[i][`innerText`] = `HEH this is kind of neat`;
// Executiong changes to the all the classes `boom` with the help of my loop.




// Targeting the id `second`
let changes3 = document.getElementById(`second`);
// Chnaging the content
changes3[`innerText`] = `The second ID TAG!`;
// Adding color to my id
changes3[`style`][`color`] = `orange`;
// Adding a new tag before an existing tag
changes3[`outerHTML`] = `<h1>Can you believe I can do this?<h1>`+ changes3[`outerHTML`];



let changes4 = document.getElementsByClassName(`pow`);
for (let i = 0; i < changes4.length; i++)
// chnaged all the content within the classes with the name `pow` 
changes4[i][`innerText`] = `Another way to say HEH NEAT`;




