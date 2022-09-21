// tutorial2.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
  Constants.AvatarNames = [
    "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
  ]

  Constants.UserBehaviorDirectory = "behaviors/tutorial"
  Constants.UserBehaviorModules = [
    "../ultisim/lights.js", "joeTheBox.js", "simpleSpin.js",
  ]

  Constants.DefaultCards = [{
      card: {
        name: "Appstar",
        type: "3d",
        dataLocation: "./assets/3D/HG2.fbx.zip",
        layers: ["pointer"],
        translation: [0, -1.7, -10],
        dataScale: [0.011, 0.011, 0.011],
        shadow: true,
      }
    },
    {
      card: {
        name: "world model",
        type: "3d",
        dataLocation: "./assets/3D/artgallery_042122.glb.zip",
        dataScale: [1, 1, 1],
        singleSided: true,
        shadow: true,
        layers: ["walk"],
        translation: [0, -1.7, 0],

        placeholder: true,
        placeholderSize: [100, 0.01, 100],
        placeholderColor: 0xcccccc,
        placeholderOffset: [0, -1.7, 0],
      }
    },
    {
      card: {
        name: "light",
        layers: ["light"],
        type: "lighting",
        behaviorModules: ["Light"],
        dataLocation: "./assets/sky/shanghai_riverside_2k.exr",
        dataType: "exr",
      }
    },
  ]
}