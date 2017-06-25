# ReactRiot2017 - Team AutoTrader - Bundle Dungeon
## VR Webpack Stats Visualiser

### Introduction
At some point, every JS developer dreams of being inside a webpack bundle. Now, through the magic or virtual reality technology, you need to dream no more!

Bundle Dungeon allows you to fulfil all of your darkest JavaScript fantasies and BE the bundle. Want to be in Cyberspace? Try out the "BundleTron 4000" mode. Feel like travelling through dense woodland? Have a look at "Bundle in the Jungle". And of course, there is the classic "Bundle Dungeon" setting.

### Use
You have two options when using Bundle Dungeon; to use your own Webpack bundles, or use our default example data.

To use your own data with Bundle Dungeon, first extract the stats from your Webpack build by running ```webpack -p --json > stats-main.json``` in the appropriate directory.

You can then open the Bundle Dungeon app and click the "Open File" button located in the top left of the screen. Select your stats file and proceed.

(If you want to use the example data, click the "Load Default Data" button instead of "Open File")

You should now see multiple objects floating through the virtual space. These are all of the different chunks in your Webpack!

You can also change the background with the three change background buttons in the top left of the screen.

The mouse can be used to look around, and WASD movement controls are enabled. Clicking or looking at any of the objects will give you more information about that chunk, and more objects will appear, which represent the modules within that chunk.

If you have access to a Google Cardboard headset, we do support it once you have loaded the data. Load the app on your smartphone, load some data (your own or our default), and press the Cardboard logo located at the top right of your screen. Put the device in the headset, and voila! You are living the dream.

