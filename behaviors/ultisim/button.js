class ButtonActor {
  setup() {
    this.addEventListener('pointerDown', 'pressed')
      // this.createMap()

    if (this.name.includes('Buttons')) {
      this.spawnItem('Button_0')
      this.spawnItem('Stand_0')
        // console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌')
    }
  }

  pressed() {
    console.log('🔘 ' + this.name + ' has been pressed! ')
    switch (this.name) {
      case 'Button_0':
        this.makeButtons()
        break
      case 'Button_1':
        this.createMap()
        break
      case 'Button_2':
        this.spawnItem('NPC_1')
        this.spawnItem('NPC_2')
        break
      default:
        console.log('❌ No Action was assigned to this button [' + this.name + ']')
        break
    }
  }

  createMap() {
    // this.spawnItem('Floor')

    // this.spawnItem('Button_1')

    this.spawnItem('EndCap')
    this.spawnItem('Shelf_1')
    this.spawnItem('Shelf_2')
    this.spawnItem('Shelf_3')
  }

  makeButtons() {
    this.spawnItem('Button_1')
    this.spawnItem('Stand_1')

    this.spawnItem('Button_2')
    this.spawnItem('Stand_2')
  }

  spawnItem(item) {
    if (this.Item(item) != {}) {
      console.log('🚩 Spawning [ ' + item + ' ]')
      this.createCard(this.Item(item))
        // console.log('✅ [ ' + item + ' ]')
        // console.log('')
    } else {
      console.log('⚠️ Item [ ' + item + ' ] is not configured!')
    }
  }

  Item(item) {
    if (item.includes('Button_')) {
      var buttonIndex = 0

      var buttons = [{
        name: 'Button_1',
        t: [-12.1, 3.3, -8],
        r: [0, Math.PI / 2, 0],
      }, ]

      for (var i = 0; i < buttons.length; i++) { if (buttons[i].name == item) { buttonIndex = i } }
      return {
        name: item,
        translation: buttons[buttonIndex].t,
        rotation: buttons[buttonIndex].r,
        behaviorModules: ['Button', 'DynamicPlacer'],
        layers: ['pointer'],
        type: '2d',
        width: 0.2,
        height: 0.2,
      }
    } else if (item.includes('Stand_')) {
      return {
        name: item,
        translation: [0, 0, 0],
        behaviorModules: ['DynamicPlacer'],
        layers: ['pointer'],
        type: '3d',
        modelType: 'glb',
        dataLocation: '3en5pHEDZi7EpsaJ-_yONogv4uVau9ZlIxyh1TH4AhAQDRERFRZfSkoDDAkAFksQFksGFwoUEAARSwwKShBKHzAREjUqHyMQKjZULgwCKD8MUFZcHSMhIl1VV0oMCksGFwoUEAARSwgMBhcKEwAXFgBLEwQLABYWBEoOPFcnN1A0MQFUNQJSCFArMhcyMj8hIx8RDCMBIB06LygUJgYULAEjFDBVSgEEEQRKUAoHFCdQMwYEESE1NCscPTckDggoDDUwDyIgFTFXVw5IDAhREDc6Jwc0MA',
        fileName: '/AuggieStand.glb',
        dataScale: [1, 1, 1],
        singleSided: true,
        shadow: true,
      }
    } else if (item == 'Floor') {
      return {
        name: 'world model',
        translation: [0, -1.7, 0],
        layers: ['walk'],
        type: '3d',
        singleSided: true,
        shadow: true,
        placeholder: true,
        placeholderSize: [400, 0.1, 400],
        placeholderColor: 0x6FA8DC,
        placeholderOffset: [0, 0, 0],
      }
    } else if (item == 'EndCap') {
      return {
        name: '0',
        translation: [0, 0, 0],
        behaviorModules: ['DynamicPlacer'],
        layers: ['pointer'],
        type: '3d',
        modelType: 'fbx',
        dataLocation: '39tivH6vDWL6wa60XyUF7IL4BxNHf2Sw6LO5vBdXpQ0YUU1NSUoDFhZfUFVcShdMShdaS1ZITFxNF1BWFkwWfl1vW0BVcEp4Umhae2FdCn5BWE9ATmxybmBgCxZQVhdaS1ZITFxNF0xVTVBKUFQXW1hAWlBNUFxKFkFvZmZDDl5_VnRbdF4OeA0AVnZ7DVJcFGpcD3dcDl1gTGBvXVAKXEFRew0WXVhNWBZgelgNV39yYE4JQ0pNU34AXHF8fFpNfAxIDAF_QUFcempdaQhbT1V-eG9W',
        fileName: '/EndCapGoodTextures.fbx',
        dataScale: [0.01, 0.01, 0.01],
        singleSided: true,
        shadow: true,
      }
    } else if (item.includes('Shelf_')) {
      var shelfName = item.substring('Shelf_'.length)

      return {
        name: shelfName,
        translation: [0, 0, 0],
        behaviorModules: ['DynamicPlacer'],
        layers: ['pointer'],
        type: '3d',
        modelType: 'fbx',
        dataLocation: '33OsoKsQW_2oGy4OvFGH9ZEWPDaXe6QfqBXLIlp4OaMgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcdFdlUUpfekByWGJQcWtXAHRLUkVKRGZ4ZGpqARxaXB1QQVxCRlZHHUZfR1pAWl4dUVJKUFpHWlZAHEtlbGxJBFR1XH5RflQEcgcKXHxxB1hWHmBWBX1WBFdqRmplV1oAVktbcQccV1JHUhxdWnZJRVF0cGBldHweZEJ1YHV0S0IKSlp4egRKdVxJXAFVUXB_CkNXB1dc',
        fileName: '/Grocery Shelves and Cereals fbx.FBX',
        dataScale: [0.008, 0.008, 0.008],
        singleSided: true,
        shadow: true,
      }
    } else if (item.includes('NPC_')) {
      return {
        name: item,
        translation: [0, 0, 0],
        behaviorModules: ['Walk'],
        layers: ['pointer'],
        type: '3d',
        modelType: 'fbx',
        dataLocation: '3-vTDsRAr2yw-SxUbDaKBIAHcwhz2ipAepryzXcHN-qQQ19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4EbE99SVJHYlhqQHpIaXNPGGxTSl1SXH5gfHJyGQRCRAVIWURaXk5fBV5HX0JYQkYFSUpSSEJfQk5YBEhFShwaQnpKcmodfE9PTnNMbEAcbGFOHhhedEhSYVx0RVNjSmkfE0F7SHoET0pfSgQZWHNgHgYaRmNDZV15UUF_QRhoGBxuE1NnRExeY2dER2B9W3JdU2dYcU0f',
        fileName: '/Walking.fbx',
        dataScale: [0.01, 0.01, 0.01],
        animationStartTime: 8415,
        animationClipIndex: 0,
        singleSided: true,
        shadow: true,
      }
    } else return {}
  }
}

export default {
  modules: [{
    name: 'Button',
    actorBehaviors: [ButtonActor],
  }, ]
}