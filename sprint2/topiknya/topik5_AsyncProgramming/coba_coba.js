// // 1
// class Journey {
//   constructor(sunny, hasGo) {
//     this.sunny = sunny;
//     this.hasGo = hasGo;
//   }
//
//   goJourney() {
//     return new Promise(
//       (resolve, reject) => {
//         setTimeout(
//           () => {
//             if (this.sunny == true && this.hasGo == true) {
//               resolve("gaskan pergi")
//             } else {
//               reject("gaskan #dirumahsaja")
//             }
//           }, 2000
//         );
//       }
//     );
//   };
// };
//
//
// const app = (keputusan1, keputusan2) => {
//   console.log("menunggu keputusan")
//   var journey = new Journey(keputusan1, keputusan2);
//
//   try {
//     journey.goJourney().then(
//       (text) => {
//         console.log(text)
//       }, (error) => {
//         console.log(error)
//       }
//     );
//   } catch(err) {
//     console.log(err);
//   };
// };
//
// // app(true, true);
// // app(false, true);
// // app(true, false);
//
//
// // 2
// const stop_whileLoop = (stop) => {
//   return new Promise(
//     (resolve, reject) => {
//       setTimeout(resolve, stop);
//     }
//   )
// }
//
//
// async function app_while(ip, byte, data) {
//   let i = 1;
//   let j = 1;
//   // let time = 0;
//   console.log(`PING ${ip} (${ip}) 56(84) bytes of data`);
//   while (true) {
//     console.log(`64 bytes from ${ip}: icmp_seq=${j} time=${i} ms`);
//     await stop_whileLoop(1000);
//     // time += 0.36;
//     j++;
//     i-= .05;
//   }
// }
//
// app_while("8.8.8.8");
