let changes1 = document.querySelector(`#first`);

changes1[`innerText`] = `The first ID TAG!`;
changes1[`innerHTML`] = `aha, it no longer says what it said before!`;
changes1[`innerHTML`] += `<p>...Maybe (V) (;,,;) (V)<p>`;
changes1[`outerHTML`] = `<h2>Woah, what happened?<h2>`;

let changes2 = document.querySelectorAll(`.boom`);
for( let i = 0; i < changes2.length; i++)
changes2[i][`innerText`] = `HEH this is kind of neat`;




let changes3 = document.getElementById(`second`);
changes3[`innerText`] = `The second ID TAG!`;
changes3[`style`][`color`] = `orange`;

changes3[`outerHTML`] = `<h1>Can you believe I can do this?<h1>`+ changes3[`outerHTML`];



let changes4 = document.getElementsByClassName(`pow`);
for (let i = 0; i < changes4.length; i++)
changes4[i][`innerText`] = `Another way to say HEH NEAT`;




