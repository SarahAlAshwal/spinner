//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 100;
let mov = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ','\n' ];
for (let i = 0; i < mov.length; i++) {
  setTimeout(() => {
    process.stdout.write(mov[i]);
  }, time + 200 * i);
}



