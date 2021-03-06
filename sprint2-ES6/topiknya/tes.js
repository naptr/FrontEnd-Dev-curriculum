class Ping {
  constructor(ip) {
    this.ip = ip,
    this.icmp_seq = {
      seq: 0
    }
  }

  render(time) {
    console.log(`64 bytes from ${this.ip} (${this.ip}) icmp_seq:${this.icmp_seq.seq} ttl=64 time=${time} ms`);
  }

  runApp() {
    console.log(`PING ${this.ip} (${this.ip}) 56 data bytes`)
    setInterval(
      () => {
        this.icmp_seq.seq++;
        var rand = Math.random(1)/10;
        this.render(rand.toFixed(3));
      }, 1000
    )
  }
}


var ping = new Ping("8.8.8.8");
ping.runApp();
