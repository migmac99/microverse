export function init(Constants) {
  Constants.AvatarNames = [
    'newwhite', 'madhatter', 'marchhare', 'queenofhearts', 'cheshirecat', 'alice'
  ];

  Constants.UserBehaviorDirectory = 'behaviors/ultisim'
  Constants.UserBehaviorModules = [
    '../default/lights.js', '../default/openPortal.js',
    'walker.js', 'dynamicPlacer.js', 'button.js'
  ]

  Constants.UseRapier = true

  Constants.DefaultCards = [{
      card: {
        name: 'SpawnPoint',
        type: 'object',
        translation: [-11, 1.7, -9], // Right of Door
        rotation: [0, (4 * Math.PI) / 3, 0], // Looking to room
        // translation: [-12, 1.7, -10], // Door
        // rotation: [0, -Math.PI / 2, 0], // Looking to room
        // translation: [-7, 1.7, -10], // In front of door
        // rotation: [0, Math.PI / 2, 0], // Looking to door
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
        name: 'Buttons',
        behaviorModules: ['Button'],
        type: '2d',
        width: 0,
        height: 0,
      }
    },
  ]
}