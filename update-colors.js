import fs from 'fs';
import path from 'path';

const DIR = 'src/components';
const APP_JSX = 'src/App.jsx';
const INDEX_CSS = 'src/index.css';

const replacements = [
  // 1. Text & Backgrounds
  [/bg-slate-950/g, 'bg-white'],
  [/bg-slate-900/g, 'bg-slate-50'],
  [/bg-slate-800/g, 'bg-white shadow-xl'],
  [/text-white/g, 'text-[#01214A]'],
  [/text-slate-50/g, 'text-[#01214A]'],
  [/text-slate-300/g, 'text-slate-600'],
  [/text-slate-400/g, 'text-slate-600'],
  [/text-slate-500/g, 'text-slate-500'],
  
  // 2. Borders & Subtle Backgrounds
  [/border-white\/10/g, 'border-slate-200'],
  [/border-white\/5/g, 'border-slate-200'],
  [/border-white\/20/g, 'border-slate-300'],
  [/bg-white\/5/g, 'bg-white shadow-md border-slate-200'],
  [/bg-white\/10/g, 'bg-slate-100'],
  
  // 3. Accents
  [/text-blue-400/g, 'text-[#F5AF02]'],
  [/text-purple-400/g, 'text-[#F5AF02]'],
  [/text-cyan-400/g, 'text-[#F5AF02]'],
  [/text-green-400/g, 'text-[#F5AF02]'],
  [/text-yellow-400/g, 'text-[#F5AF02]'],
  [/text-pink-400/g, 'text-[#F5AF02]'],
  [/text-orange-400/g, 'text-[#F5AF02]'],
  
  [/bg-blue-600\/10/g, 'bg-[#01214A]/10'],
  [/bg-blue-500\/20/g, 'bg-[#01214A]/10'],
  [/bg-purple-500\/20/g, 'bg-[#F5AF02]/10'],
  [/bg-cyan-500\/20/g, 'bg-[#01214A]/10'],
  
  // 4. Buttons
  [/bg-blue-600/g, 'bg-[#F5AF02]'],
  [/hover:bg-blue-700/g, 'hover:bg-[#E09600]'],
  [/bg-white text-slate-950/g, 'bg-[#01214A] text-white'],
  [/hover:bg-slate-200/g, 'hover:bg-[#001838]'],
  [/bg-white text-slate-900/g, 'bg-[#01214A] text-white'],
  
  // 5. Gradients
  [/from-blue-400 to-purple-400/g, 'from-[#F5AF02] to-[#FFC533]'],
  [/from-blue-400 via-purple-400 to-blue-400/g, 'from-[#F5AF02] via-[#FFC533] to-[#F5AF02]'],
  [/from-blue-500 to-purple-600/g, 'from-[#01214A] to-[#01214A]'],
  [/from-purple-500 to-pink-500/g, 'from-[#F5AF02] to-[#FFC533]'],
  [/from-orange-500 to-yellow-500/g, 'from-[#F5AF02] to-[#FFC533]'],
  [/from-emerald-500 to-teal-400/g, 'from-[#F5AF02] to-[#FFC533]'],
  [/from-blue-500 to-cyan-400/g, 'from-[#F5AF02] to-[#FFC533]'],
  
  // 6. Specific overrides
  [/bg-slate-950 opacity-90/g, 'bg-slate-50 opacity-90'], // Hero overlay
  [/border-t border-white\/5/g, 'border-t border-slate-200'],
  [/border-y border-white\/5/g, 'border-y border-slate-200'],
  [/divide-white\/10/g, 'divide-slate-200'],
  
  // 7. Text white inside buttons or specific backgrounds that need to stay white
  // We'll replace `text-[#01214A]` back to `text-white` if it's right after `bg-[#F5AF02]` or `bg-[#01214A]`
  [/(bg-\[#F5AF02\].*?)text-\[#01214A\]/g, '$1text-white'],
  [/(bg-\[#01214A\].*?)text-\[#01214A\]/g, '$1text-white'],
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Special handling for Logos
  if (filePath.includes('Navbar.jsx') || filePath.includes('Footer.jsx')) {
    content = content.replace(
      /<div className="w-8 h-8 rounded bg-gradient-to-br from-\[#01214A\] to-\[#01214A\] flex items-center justify-center font-bold text-\[#01214A\] text-xl">\s*i\s*<\/div>\s*<span className="font-bold text-xl tracking-tight text-\[#01214A\]">Iconsbase<\/span>/g,
      '<img src="/logo.png" alt="Iconsbase" className="h-10" />'
    );
    // Because the generic replacements run first, we match the replaced version or we can do it first.
    // Let's do it before generic replacements
    let preContent = fs.readFileSync(filePath, 'utf-8');
    preContent = preContent.replace(
      /<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">\s*i\s*<\/div>\s*<span className="font-bold text-xl tracking-tight text-white">Iconsbase<\/span>/g,
      '<img src="/logo.png" alt="Iconsbase" className="h-10" />'
    );
    content = preContent;
  }

  replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });

  // Re-fix button text colors
  content = content.replace(/text-\[#01214A\]/g, (match, offset, string) => {
    // Basic heuristic: if it's in a button with bg-[#F5AF02] or bg-[#01214A], it should be white or #01214A
    // Actually F5AF02 button with 01214A text looks great (Gold button, Navy text)
    // So we'll let it be Navy text on Gold button, which is what `text-[#01214A]` does!
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
}

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.jsx')).map(f => path.join(DIR, f));
files.push(APP_JSX);

files.forEach(processFile);

// Also fix App.jsx body background
let appContent = fs.readFileSync(APP_JSX, 'utf-8');
appContent = appContent.replace('bg-slate-950 text-slate-50', 'bg-slate-50 text-[#01214A]');
fs.writeFileSync(APP_JSX, appContent, 'utf-8');

console.log("Colors updated.");
