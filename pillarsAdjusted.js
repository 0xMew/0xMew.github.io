var pillarBase = "██▓██▓██▓██";
var pillarPeak = "░██▓██▓██▓██░";


var lineHeight = 17;


var viewportHeight = window.innerHeight;
var pillarCount = Math.floor(viewportHeight / lineHeight) - 2;


if (pillarCount < 20) pillarCount = 20;

document.write(pillarPeak + "\n");

for (let i = 0; i < pillarCount; i++) {
    document.write("   " + pillarBase + "\n");
}

document.write(pillarPeak + "\n");


window.addEventListener('load', function() {
    setTimeout(function() {
       
        var coreContent = document.querySelector('.core_content');
        var actualContentHeight = 0;
        
        if (coreContent) {
           
            var rect = coreContent.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            actualContentHeight = rect.bottom + scrollTop;
            
           
            if (actualContentHeight === 0 || actualContentHeight < 100) {
                actualContentHeight = coreContent.offsetHeight || coreContent.scrollHeight || 0;
            }
        }
        
        
        if (actualContentHeight === 0 || actualContentHeight < 100) {
            var contentColumn = document.querySelector('.col-lg-8');
            if (contentColumn) {
                var rect = contentColumn.getBoundingClientRect();
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                actualContentHeight = rect.bottom + scrollTop;
            }
        }
        
        
        if (actualContentHeight === 0 || actualContentHeight < 100) {
            actualContentHeight = window.innerHeight;
        }
        
        // Special exception for portfolio page - use viewport height
        var isPortfolioPage = window.location.pathname.includes('portfolio.html') || 
                              document.title === 'Portfolio';
        
        // Long writeup pages - use 85% of content height
        var isLongWriteup = window.location.pathname.includes('nixu.html') || 
                            window.location.pathname.includes('davivian.html') ||
                            window.location.pathname.includes('kybereo.html');
        
        var totalHeight;
        if (isPortfolioPage) {
            // For portfolio, use full viewport height
            totalHeight = window.innerHeight;
        } else if (isLongWriteup) {
            // For long writeups, use 85% of content height
            totalHeight = actualContentHeight * 0.85;
        } else {
            // Default: use full content height
            totalHeight = actualContentHeight;
        }
        
        // Calculate new pillar count
        var newPillarCount = Math.floor(totalHeight / lineHeight) - 2;
        
        // Ensure minimum but don't make it too long
        if (newPillarCount < 20) newPillarCount = 20;
        
        // Always update to match content (removed the threshold check)
        pillarCount = newPillarCount;
        var pillarHTML = pillarPeak + "\n";
        for (let i = 0; i < pillarCount; i++) {
            pillarHTML += "   " + pillarBase + "\n";
        }
        pillarHTML += pillarPeak + "\n";
        
        // Update all pillar elements
        var pillars = document.querySelectorAll('.no-spacing');
        pillars.forEach(function(pillar) {
            if (pillar.textContent && pillar.textContent.includes(pillarBase)) {
                pillar.textContent = pillarHTML;
            }
        });
    }, 500);
});

//V tejto verzii pillars scriptu sme schopni ich generovat normalne podseba s tym, ze ak su na krivo, da sa to cez css wrapper upravit tak, aby nam sedeli presne do columnu