const fs=require("fs"),path=require("path");
const L=[["chart.js/dist/chart.umd.js","chart.umd.js"],["jspdf/dist/jspdf.umd.min.js","jspdf.umd.min.js"],["xlsx/dist/xlsx.full.min.js","xlsx.full.min.js"]];
fs.mkdirSync("www/lib",{recursive:true});
for(const[s,d]of L){fs.copyFileSync(path.join("node_modules",s),path.join("www/lib",d));console.log("OK",d)}
