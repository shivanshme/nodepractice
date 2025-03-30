import { arch, hostname, homedir, type, freemem, totalmem } from "os";
console.log(arch());

console.log(hostname());
console.log(homedir());
console.log(type());

const freeMemory = freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
