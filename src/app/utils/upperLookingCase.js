const regex = /[^{bdfhkt}]/;
const upperLookingCase = str => { 
let h = "";
[...str].forEach(c => h = h.concat( c.match(regex) ? c.toUpperCase() : c));
return h; }

export default upperLookingCase;
