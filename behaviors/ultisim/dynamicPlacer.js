class DynamicPlacerActor {
  setup() {
    this.paths = [{
        name: "0",
        v: [5, 0, -5],
        r: (3 * Math.PI) / 2
      },
      {
        name: "1",
        v: [0, 0, -10],
        r: 0
      },
      {
        name: "2",
        v: [0, 0, 0],
        r: 0
      },
      {
        name: "3",
        v: [0, 0, 10],
        r: 0
      },
    ]

    this.step()
  }

  step() {
    for (var i = 0; i < this.paths.length; i++) {
      if (this.paths[i].name == this.name) {
        this.translateTo(this.paths[i].v)
        this.rotateTo(Worldcore.q_euler(0, this.paths[i].r, 0))
      }
    }
    this.future(1000).step()
  }
}

export default {
  modules: [{
    name: "DynamicPlacer",
    actorBehaviors: [DynamicPlacerActor],
  }, ]
}