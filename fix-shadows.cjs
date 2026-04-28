const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).map(f => path.join(dir, f));
files.push('src/App.jsx');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf-8');
  c = c.replace(/rgba\(37,99,235/g, 'rgba(245,175,2'); // Blue to Gold
  c = c.replace(/text-slate-200/g, 'text-slate-600');
  c = c.replace(/bg-blue-600/g, 'bg-[#F5AF02]');
  c = c.replace(/hover:bg-blue-600/g, 'hover:bg-[#F5AF02]');
  c = c.replace(/text-blue-600/g, 'text-[#F5AF02]');
  c = c.replace(/border-blue-600/g, 'border-[#F5AF02]');
  c = c.replace(/bg-purple-600/g, 'bg-[#01214A]');
  c = c.replace(/bg-yellow-500/g, 'bg-[#F5AF02]');
  c = c.replace(/text-yellow-500/g, 'text-[#F5AF02]');
  c = c.replace(/text-yellow-400/g, 'text-[#F5AF02]');
  c = c.replace(/bg-white\/80/g, 'bg-white/90');
  fs.writeFileSync(f, c, 'utf-8');
});
console.log('Fixed additional colors.');
