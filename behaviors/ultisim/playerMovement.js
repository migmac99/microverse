class Something5 {
  setup() {
    this.spinning = false; // start without spinning
    this.angle = 0; // the initial angle
    this.spinSpeed = 0.01; // how fast will we spin (in radians)
    this.addEventListener("pointerDown", "toggle");
  }

  step() {
    if (!this.spinning) { return; }
    this.future(20).step();
    this.angle += this.spinSpeed;
    this.set({ rotation: Worldcore.q_euler(0, this.angle, 0) });
  }

  toggle() {
    this.spinning = !this.spinning;
    if (this.spinning) this.step();
  }

  teardown() {
    this.removeEventListener("pointerDown", "toggle");
    this.spinning = false;
  }
}

export default {
  modules: [{
    name: "Something5",
    actorBehaviors: [Something5],
  }]
}