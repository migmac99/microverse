class Walker {
  setup() {
    // Anim speed: 3 (ish...)
    //
    //               [  X ,  Y  ,  Z  ]
    // Doors    { v: [ -12 , 0 , -10 ], r: Math.PI / 2 }, 
    // End Cap  { v: [  3  , 0 , -5  ], r: Math.PI / 2 },
    //
    this.paths = [
      [
        { v: [-12, 0, -10], r: Math.PI / 2 }, // Door (Start)

        { v: [-9, 0, -10], r: Math.PI / 2 }, // Forward
        { v: [-6, 0, -7], r: 0 }, // Right
        { v: [-3, 0, -5], r: Math.PI / 2 }, // Left
        { v: [-0, 0, -5], r: Math.PI / 2 }, // Forward

        { v: [3, 0, -5], r: Math.PI / 2 }, // Forward until End Cap
        { v: [3, 0, -5], r: (3 * Math.PI) / 2 }, // Turn Around (180)

        // { v: [0, 0, 0], r: (3 * Math.PI) / 2 }, // TEST
        // { v: [0, 0, 0], r: (3 * Math.PI) / 2 }, // TEST
        // { v: [0, 0, 0], r: (3 * Math.PI) / 2 }, // TEST

        { v: [-0, 0, -5], r: (3 * Math.PI) / 2 }, // Forward
        { v: [-3, 0, -5], r: (3 * Math.PI) / 2 }, // Right
        { v: [-6, 0, -7], r: Math.PI }, // Left
        { v: [-9, 0, -10], r: (3 * Math.PI) / 2 }, // Forward

        { v: [-12, 0, -10], r: (3 * Math.PI) / 2 }, // Door (End)
      ],


      [
        { v: [-12, 0, -10], r: Math.PI / 2 }, // Door (Start)
        { v: [-12, 0, -10], r: (3 * Math.PI) / 2 }, // Door (End)
      ]
    ]

    var pathIndex
    switch (this.name) {
      case 'NPC_1':
        pathIndex = 0
        break
      case 'NPC_2':
        pathIndex = 1
        break
      default:
        pathIndex = 0
        console.log('No Path was assigned to [' + this.name + ']')
        break
    }

    this.checkPoints = this.paths[pathIndex]

    if (this.checkPoint === undefined) {
      this.checkPoint = 0
      this.ratio = 0 // [0, 1]
    }

    if (this.running === undefined) {
      this.running = true
      this.step()
    }

    this.addEventListener('pointerDown', 'toggle')
  }

  toggle() {
    this.running = !this.running
    if (this.running && !this.futureScheduled) {
      this.step()
    }
  }

  step() {
    this.futureScheduled = false
    this.ratio += 0.0625
    if (this.ratio >= 1) {
      this.ratio = 0
      this.checkPoint++
        if (this.checkPoint >= this.checkPoints.length - 1) {
          this.checkPoint = 0
        }
    }

    this.moveTo()

    if (this.running) {
      this.futureScheduled = true
      this.future(100).step()
    }
  }

  moveTo() {
    this.translateTo(Worldcore.v3_lerp(
      this.checkPoints[this.checkPoint].v,
      this.checkPoints[this.checkPoint + 1].v,
      this.ratio
    ))
    this.rotateTo(Worldcore.q_slerp(
      Worldcore.q_euler(0, this.checkPoints[this.checkPoint].r, 0),
      Worldcore.q_euler(0, this.checkPoints[this.checkPoint + 1].r, 0),
      this.ratio
    ))
  }
}

export default {
  modules: [{
    name: 'Walk',
    actorBehaviors: [Walker],
  }, ]
}