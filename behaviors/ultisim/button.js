class ButtonActor {
  setup() {
    this.addEventListener('pointerDown', 'pressed')
      // this.createMap()
      // this.spawnItem('Button_0')
  }

  pressed() {
    console.log('🔘 ' + this.name + ' has been pressed! ')
    switch (this.name) {
      case 'Button_0':
        this.createMap()
        break

      default:
        console.log('❌ No Action was assigned to this button [' + this.name + ']')
        break
    }
  }

  createMap() {
    // this.spawnItem('Floor')

    this.spawnItem('Button_1')

    this.spawnItem('EndCap')
    this.spawnItem('Shelf_1')
    this.spawnItem('Shelf_2')
    this.spawnItem('Shelf_3')

    // this.spawnItem('NPC_1')
    // this.spawnItem('NPC_2')
  }

  spawnItem(item) {
    if (this.Item(item) != {}) {
      console.log('🚩 Spawning [ ' + item + ' ]')
      this.createCard(this.Item(item))
      console.log('✅ [ ' + item + ' ]')
      console.log('')
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
      }]

      for (var i = 0; i < buttons.length; i++) { if (buttons[i].name == item) { buttonIndex = i } }

      return {
        card: {
          name: item,
          translation: buttons[buttonIndex].t,
          rotation: buttons[buttonIndex].r,
          behaviorModules: ['Button'],
          type: '2d',
          width: 0.2,
          height: 0.2,
        }
      }

    } else if (item == 'Floor') {
      return {
        card: {
          name: "world model",
          layers: ["walk"],
          type: "3d",
          singleSided: true,
          shadow: true,
          translation: [0, -1.7, 0],
          placeholder: true,
          placeholderSize: [400, 0.1, 400],
          placeholderColor: 0x6FA8DC,
          placeholderOffset: [0, 0, 0],
        }
      }
    } else if (item == 'EndCap') {
      return {
        name: '0',
        behaviorModules: ['DynamicPlacer'],
        dataLocation: '39tivH6vDWL6wa60XyUF7IL4BxNHf2Sw6LO5vBdXpQ0YUU1NSUoDFhZfUFVcShdMShdaS1ZITFxNF1BWFkwWfl1vW0BVcEp4Umhae2FdCn5BWE9ATmxybmBgCxZQVhdaS1ZITFxNF0xVTVBKUFQXW1hAWlBNUFxKFkFvZmZDDl5_VnRbdF4OeA0AVnZ7DVJcFGpcD3dcDl1gTGBvXVAKXEFRew0WXVhNWBZgelgNV39yYE4JQ0pNU34AXHF8fFpNfAxIDAF_QUFcempdaQhbT1V-eG9W',
        dataScale: [0.01, 0.01, 0.01],
        fileName: '/EndCapGoodTextures.fbx',
        layers: ['pointer'],
        modelType: 'fbx',
        rotation: [0, 0.7234918587678666, 0, -0.6903329126563631],
        shadow: true,
        singleSided: true,
        translation: [-2.721650204892044, -1.7084179861950881, -7.068064636886198],
        type: '3d'
      }
    } else if (item.includes('Shelf_')) {
      var shelfName = item.substring('Shelf_'.length)

      return {
        name: shelfName,
        behaviorModules: ['DynamicPlacer'],
        dataLocation: '33OsoKsQW_2oGy4OvFGH9ZEWPDaXe6QfqBXLIlp4OaMgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcdFdlUUpfekByWGJQcWtXAHRLUkVKRGZ4ZGpqARxaXB1QQVxCRlZHHUZfR1pAWl4dUVJKUFpHWlZAHEtlbGxJBFR1XH5RflQEcgcKXHxxB1hWHmBWBX1WBFdqRmplV1oAVktbcQccV1JHUhxdWnZJRVF0cGBldHweZEJ1YHV0S0IKSlp4egRKdVxJXAFVUXB_CkNXB1dc',
        dataScale: [0.008, 0.008, 0.008],
        fileName: '/Grocery Shelves and Cereals fbx.FBX',
        layers: ['pointer'],
        modelType: 'fbx',
        rotation: [0, 0, 0, 0.8516474143844917],
        shadow: true,
        singleSided: true,
        translation: [0, 0, 0],
        type: '3d'
      }
    } else if (item.includes('NPC_')) {
      return {
        card: {
          name: item,
          behaviorModules: ['Walk'],
          translation: [0, 0, 0],
          rotation: [0, -0.7071067811865475, 0, 0.7071067811865476],
          layers: ['pointer'],
          animationClipIndex: 0,
          animationStartTime: 8415,
          dataLocation: '3-vTDsRAr2yw-SxUbDaKBIAHcwhz2ipAepryzXcHN-qQQ19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4EbE99SVJHYlhqQHpIaXNPGGxTSl1SXH5gfHJyGQRCRAVIWURaXk5fBV5HX0JYQkYFSUpSSEJfQk5YBEhFShwaQnpKcmodfE9PTnNMbEAcbGFOHhhedEhSYVx0RVNjSmkfE0F7SHoET0pfSgQZWHNgHgYaRmNDZV15UUF_QRhoGBxuE1NnRExeY2dER2B9W3JdU2dYcU0f',
          dataScale: [0.01, 0.01, 0.01],
          fileName: '/Walking.fbx',
          modelType: 'fbx',
          shadow: true,
          singleSided: true,
          type: '3d'
        }
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