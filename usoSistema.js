const { clear } = require('console');
const os = require('os');


setInterval(() => {
    const { arch, platform, totalmem, freemem} = os;
    const tRAM = totalmem()/1024/1024;
    const fRAM = freemem()/1024/1024;
    const uso = (fRAM / tRAM * 100).toFixed(2);


    const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRAM)} MB`,
    FreeRAM: `${parseInt(fRAM)} MB`,
    usage: uso,
}

console.clear();
console.table(stats);
exports.stats = stats;

    
}, 1000)

