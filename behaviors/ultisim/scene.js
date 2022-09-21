// [ X, Y, Z]
//   X = Left-Right
//   Y = Up-Down
//   Z = Front-Back

// up high: translation: [0.071, 0.025, -6.730],
class SceneStarter {
  setup() {
    if (this.flamingo) {this.flamingo.destroy()}

    this.flamingo = this.createCard({
      name: 'flamingo model',
      behaviorModules: ["TransformControls"],
      translation: [0, 3, -20],
      rotation: [0, 0, 0, 0],
      layers: ['pointer'],
      animationClipIndex: 0,
      animationStartTime: 1339,
      dataLocation: '32EmG-BV6plHy8gXm9UVfS8S7ViQHha17NI3dr8C15V4WkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcddVZkUEtee0FzWWNRcGpWAXVKU0RLRWd5ZWtrAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVcdAH9ae3ZoZVdYW1FVZgNDBVZ9SAR2R1lgalt_cAMfW1h5cXYAfGtWX3lQex1WU0ZTHVloR1ZEVVpDVQUEYFdoVFl0RApqX398WAVqaGF9U3dGX1t6Zn5ralZjbXs',
      dataScale: [0.03, 0.03, 0.03],
      dataTranslation: [0, 0, 0],
      fileName: '/Flamingo.glb.zip',
      modelType: 'glb',
      type: '3d',
    })
  }

  step() {}
  toggle() {}
  teardown() {}
}

export default {
  modules: [{
    name: 'SceneStarter',
    actorBehaviors: [SceneStarter],
  }]
}