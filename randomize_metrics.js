const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src/app/projects');

const metricSets = [
  `[
                { metric: "45%", trend: "up", label: "Faster onboarding and task completion." },
                { metric: "30%", trend: "down", label: "Drop in user error rates." },
                { metric: "1.5x", trend: "up", label: "Increase in daily active usage." }
              ]`,
  `[
                { metric: "28%", trend: "up", label: "Increase in overall conversion rate." },
                { metric: "55%", trend: "down", label: "Reduction in drop-offs during flow." },
                { metric: "3x", trend: "up", label: "Growth in mobile engagement." }
              ]`,
  `[
                { metric: "70%", trend: "down", label: "Time spent on manual data entry." },
                { metric: "35%", trend: "up", label: "Faster operational reporting." },
                { metric: "2.5x", trend: "up", label: "Improvement in collaboration speed." }
              ]`,
  `[
                { metric: "50%", trend: "up", label: "Increase in system visibility." },
                { metric: "40%", trend: "down", label: "Decrease in maintenance response time." },
                { metric: "4x", trend: "up", label: "Faster issue resolution rate." }
              ]`,
  `[
                { metric: "85%", trend: "up", label: "Increase in user satisfaction scores." },
                { metric: "25%", trend: "down", label: "Reduction in customer support tickets." },
                { metric: "2x", trend: "up", label: "Higher average session duration." }
              ]`,
  `[
                { metric: "65%", trend: "down", label: "Decrease in workflow bottlenecks." },
                { metric: "48%", trend: "up", label: "Improvement in core metric tracking." },
                { metric: "1.8x", trend: "up", label: "Increase in organic user growth." }
              ]`,
  `[
                { metric: "30%", trend: "up", label: "Increase in successful process completions." },
                { metric: "60%", trend: "down", label: "Reduction in failed interaction flows." },
                { metric: "5x", trend: "up", label: "Faster end-to-end processing." }
              ]`,
  `[
                { metric: "40%", trend: "up", label: "Boost in positive user feedback." },
                { metric: "22%", trend: "down", label: "Decrease in user churn rate." },
                { metric: "3.5x", trend: "up", label: "Increase in feature engagement." }
              ]`,
  `[
                { metric: "75%", trend: "up", label: "Improvement in data accuracy." },
                { metric: "50%", trend: "down", label: "Reduction in system latency." },
                { metric: "2.2x", trend: "up", label: "Increase in cross-platform usage." }
              ]`,
  `[
                { metric: "90%", trend: "up", label: "Faster deployment of new configurations." },
                { metric: "33%", trend: "down", label: "Decrease in operational overhead." },
                { metric: "4.5x", trend: "up", label: "Growth in enterprise adoptions." }
              ]`
];

let setIndex = 0;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      const projectName = path.basename(dir);
      if (projectName === 'feedzaa') continue; // Optional: keep feedzaa as is, or let it randomise
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Regex to find the hardcoded metric array
      const metricRegex = /\[\s*\{\s*metric:\s*"60%"[\s\S]*?\]\.map/m;
      
      if (metricRegex.test(content)) {
        const replacement = metricSets[setIndex % metricSets.length] + '.map';
        content = content.replace(metricRegex, replacement);
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated metrics for ${fullPath}`);
        setIndex++;
      }
    }
  }
}

processDir(projectsDir);
