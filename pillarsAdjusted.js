var pillarBase = "██▓██▓██▓██";
var pillarPeak = "░██▓██▓██▓██░";

// Roughly estimate line height in pixels (depends on font/size)
var lineHeight = 16; // adjust if needed
// Total page height (viewport height here, can also use scrollHeight)
var pageHeight = window.innerHeight;

// How many base lines we need
var pillarCount = Math.floor(pageHeight / lineHeight) - 2; // minus peaks

document.write(pillarPeak + "\n");

for (let i = 0; i < pillarCount; i++) {
    document.write("   " + pillarBase + "\n");
}

document.write(pillarPeak + "\n");

//V tejto verzii pillars scriptu sme schopni ich generovat normalne podseba s tym, ze ak su na krivo, da sa to cez css wrapper upravit tak, aby nam sedeli presne do columnu