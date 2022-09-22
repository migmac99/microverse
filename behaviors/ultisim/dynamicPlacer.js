class DynamicPlacerActor {
  setup() {
    this.paths = [{
        name: '0',
        v: [5, 0, -5],
        r: (3 * Math.PI) / 2,
      },
      {
        name: '1',
        v: [0, 0, -10],
      },
      {
        name: '2',
        v: [0, 0, 0],
      },
      {
        name: '3',
        v: [0, 0, 10],
      },
      {
        name: 'Button_0',
        v: [-9, 1.4, -8],
        r: Math.PI / 2,
      },
      {
        name: 'Stand_0',
        v: [-9, 0, -8],
      },
      {
        name: 'Button_1',
        v: [-9, 1.4, -7.63],
        r: Math.PI / 2,
      },
      {
        name: 'Stand_1',
        v: [-9, 0, -7.63],
      },
      {
        name: 'Button_2',
        v: [-9, 1.4, -8.36],
        r: Math.PI / 2,
      },
      {
        name: 'Stand_2',
        v: [-9, 0, -8.36],
      },
    ]

    this.step()
  }

  step() {
    for (var i = 0; i < this.paths.length; i++) {
      if (this.paths[i].name == this.name) {
        if (this.paths[i].v || this.paths[i].r) {
          // console.log('🏎 Moving [ ' + this.name + ' ]\n' + (this.paths[i].v ? 't[ ' + this.paths[i].v + ' ]\n' : '') + (this.paths[i].r ? 'r[ ' + this.paths[i].r + ' ]' : ''))
          if (this.paths[i].v) { this.translateTo(this.paths[i].v) }
          if (this.paths[i].r) { this.rotateTo(Worldcore.q_euler(0, this.paths[i].r, 0)) }
        }
      }
    }
    // console.log('⏳ Tick ⏳')
    this.future(1000).step()
  }
}

export default {
  modules: [{
    name: 'DynamicPlacer',
    actorBehaviors: [DynamicPlacerActor],
  }, ]
}