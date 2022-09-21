export function init(Constants) {
  Constants.AvatarNames = [
    'newwhite', 'madhatter', 'marchhare', 'queenofhearts', 'cheshirecat', 'alice'
  ];

  Constants.UserBehaviorDirectory = 'behaviors/ultisim';
  Constants.UserBehaviorModules = [
    '../factory/lights.js', '../factory/openPortal.js',
    '../default/openPortal.js',
    'walker.js', 'dynamicPlacer.js', 'button.js'
  ];

  Constants.UseRapier = true;

  Constants.DefaultCards = [{
      card: {
        name: 'SpawnPoint',
        type: 'object',
        // translation: [-12, 1.7, -10], // Door
        // rotation: [0, -Math.PI / 2, 0], // Looking to room
        translation: [-7, 1.7, -10], // In front of door
        rotation: [0, Math.PI / 2, 0], // Looking to door
        spawn: 'default'
      }
    },
    {
      card: {
        dataLocation: '3gkoR_36xHp5-TB2swDY0iqUyhSXz2JwqpQnlM7mfYVgDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIIAMxBR4LLhQmDDYEJT8DVCAfBhEeEDIsMD4-VUgOCEkEFQgWEgITSQoOBBUIEQIVFAJIVSoPLiM9MAINDgQAM1YWUAMoHVEjEgw1Pw4qJVZKDg0sJCNVKT4DCiwFLkgDBhMGSCQGVl8xNCQqSkoKUi8vIQkOPy4WXx0NKi8DChUvJjEVVlUyLAAdEVItMFc',
        dataScale: [1, 1, 1],
        fileName: '/artgallery_042122.glb.zip',
        layers: ['walk'],
        name: 'world model',
        placeholder: true,
        placeholderColor: 0x6FA8DC,
        placeholderOffset: [0, 0, 0],
        placeholderSize: [400, 0.1, 400],
        shadow: true,
        singleSided: true,
        translation: [0, 0, 0],
        type: '3d'
      }
    },
    {
      card: {
        behaviorModules: ['Light'],
        dataLocation: '32nxXNZxuyT3h-bh0OX-2uMdBRJ0WmDduuTJwwewEE60WkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcddVZkUEtee0FzWWNRcGpWAXVKU0RLRWd5ZWtrAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVcdAH9ae3ZoZVdYW1FVZgNDBVZ9SAR2R1lgalt_cAMfW1h5cXYAfGtWX3lQex1WU0ZTHXVreUhtUEFeU218aAYDRVxqAHB_Rn5YZmFFZWsAZERtWHF_WkIGZEtRdnM',
        dataType: 'exr',
        fileName: '/shanghai_riverside_2k.exr',
        layers: ['light'],
        name: 'light',
        type: 'lighting'
      }
    },
    {
      card: {
        name: 'Button_0',
        translation: [-12.1, 3.3, -10.17839395666378],
        rotation: [0, Math.PI / 2, 0],
        behaviorModules: ['Button'],
        type: '2d',
        width: 0.2,
        height: 0.2,
      }
    },
    {
      card: {
        name: 'NPC_1',
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
    },
    {
      card: {
        name: 'NPC_2',
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
    },
  ]
}