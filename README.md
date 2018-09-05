# ReactVR 👀

Welcome to our ReactVR course 🙌. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. 

## Getting Started

### Node and npm:
This course requires that you have node installed. Please follow the next steps if you have not installed node before.
- ✅ Download the latest stable version from https://nodejs.org.
- ✅ To verify, write `node -v` in the console application. You should see a version number returned in your console application.
- ✅ To verify that npm is also installed, write `npm -v` in the console application.

### Git:
Another requirement for running this project is Git. Please follow the guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git if you have not already.

### Init the project:
- ✅ Direct yourself to the folder you want to include this project and then clone this project by typing `git clone <link to repo>` in your console application.
- ✅ After cloning this project, remember to `cd` into the project folder and run `npm install` (Psst. `cd` stand for change directory and is the same as opening the folder in the finder app or directory on your mac/computer).

👉 **Tip:** If you at some point want to create your own application you can use ReactVR Cli tool to create a new clean ReactVR project template. You can install the tool by typing `npm install react-vr-cli -g` and then create a project by running `react-vr init [name of your reactVR project]`. This is perfect for new projects, but for this course we have added our own static assets and boilerplate code, therefore you should clone our repository instead.

## Task 1 - Init your ReactVR project ☝️
This task will explain how you initialize your ReactVR project. Open up the **ReactVR-kurs** folder and take a look at the **index.vr.js** file. This file is the entry point for this course.

❓ Before we start the application we should make a small change to the file **/vr/client.js**. Above the `...options,` line add `enableHotReload: true,` and hit save. This will enable the hot reloader. That is, our application will automatically reload its view whenever we save a change in our code! 👍🏼

➡️ Now go back to your console application and write `npm start`.

When the console is done building your ReactVR project you can open the application in a browser at http://localhost:8081/vr/. Be aware that it could take some time to load the page, especially on the first load 🕑 😅...

Open up the **index.vr.js** file again, here you can see a View and Pano component inside our main IteraGame Component.
- `<View>`: This component is a container for other components, you can put whatever you want to inside it and add styling to it. This component is similiar to a div in html.
- `<Pano>`: Pano is short for a panorama. In this component you can set a 360&deg; background panorama image. We have added some more different pano images (jpg) for you to use in the **/static_assets** folder.

❓ Go ahead and try to change the pano image to something else! **Hint** : Look into **/static_assets** folder 😉.

## Task 2 - Test your project on your phone! 📱 💻 (optional)
If there is a Google cardboard available, you should try to get the application up and running on your phone. If there is no cardboards available, you can skip this step for now and return when you get your hands on one.

To get the application working on your phone, we need to expose the port where we are running our application locally (8081), to a public URL that we can reach from our phone. A popular tool for accomplishing this is *ngrok*.

First, open a new command line window. Install ngrok globally on your computer like this:
```
npm install ngrok -g
```

Now, run the following command to expose port 8081 to the world 🌎🌍🌏:
```
ngrok http 8081
```

You should get an output looking somewhat like this, with a forwarding URL containing a random ID:

![ngrok](http://preview.ibb.co/chfHtS/image.png)

⚠️ *Note that this ID will change every time you rerun the ngrok command.*

Open up the browser on your phone (preferably Chrome, but Safari works fine too ✌🏼) and type in the following address, replacing the random ID with the ID of your ouput:
```
http://<ID>.ngrok.io/vr/
```

🎉🎉🎉🎉🎉

Put your phone in your Google Cardboard and explore the VR-world 😄✌🏼 Be careful not to let your phone fall out off the sides!! 😅

## Task 3 - Get to know react-vr!
Before we go ahead and start creating the game, we should get a little bit familiar with the react-vr library. In this task, we will explain how to add different ReactVR components to your view!

❓ Start by importing the **IntroText** component from **components/introduction/IntroText.vr.js** into your **index.vr.js** file and add it in your view.

The IntroText file contains one of the simplest components in the react-vr library, the `<Text>` component. This component simply adds a specified text with some styling at the set location.

❓ Try to change the text from 'Velkommen til ReactVR kurs! ' to something else.

There are many other components supported by the react-vr package. For example: `<Box/>`, `<Plane/>`, `<Cylinder>` and even `<Image/>` and `<Video/>`! We have added a file named **IntroBox.vr.js** inside the **components/introduction** folder that contains a `<Box/>` component.

❓ Import the **IntroBox** to your **index.vr.js** file, as you did with **IntroText**, and add in the view.

Do you see the box? No? 😱

There is a simple explanation for this! Take a look at the **components/introduction/IntroBox.vr.js** file. Do you see what is missing? 🤔 You cannot see the `<Box/>` component inside your view yet because you haven't set the size and styling yet! Makes sense? 😜

Okay, so the next step is to tell your view the size your `<Box/>` component. Note that the allowed props differ a little bit from those on the Text component.

❓ Add these four props to your `<Box/>` component and set a value:
- `dimWidth={value}`
- `dimHeight={value}`
- `dimDepth={value}`
- `wireframe = {true} `

The three first props determinate the width, height, and depth of the `<Box/>` component. Set each of the values to be equal to something between 0 and 1 because we don't want the box to be too big 😉. In ReactVR the dimension is measured in meters, therefore we often see size values between 0 and 1. `wireframe = {true} ` is just to see the outline of the box, and has the only purpose of helping us see the dimension of the `<Box/>` component.

Did you check the page? Are you located inside the box 😨??? 

We have not told the view **where** to place to `<Box/>` component yet 😜. By default ReactVR place the component at coordinate [0,0,0] - that is, where the camera is! Let us introduce you to the ReactVR coordinates:

ReactVR default coordinates are [0,0,0], i.e. [x,y,z] coordinates.
- X coordinate: a positive value brings the component to the right, and a negative value brings the component to the left.
- Y coordinate: a positive value brings the component up, and a negative value brings the component down.
- Z coordinate: a positive value brings the component behind you and a negative value brings the component in front of you **(❗️❗️)**.

In order to tell the component its position, you need to add a styling prop, and use the `transform` inside it. Something like this:

```
style={{
    transform: [
        {translate: [?, ?, ?]},
    ]
}}
```

❓ Add the transform prop and coordinates to the Box component inside the **IntroBox** component. Ops! If you place the `<Box/>`  component the same place or close to the `<Text/>`  component it may be hard to see 😜. Make sure that they don't collide ✌🏼.

➡️ If you like to manually change one coordinate at the time, you can add `translateY`, `transalteX` and `translateZ` inside the `transform`.

❓ Try to translate the box in both Y and X direction.  

And also, if you like to rotate your component, you can use `rotateY`, `rotateX` and `rotateZ`. Remember, when you are rotating components, their value should be in degrees. So if you like to rotate Y-axis 45 degrees: you simply set `{rotateY: 45}` 🙌.

❓ Then, try rotating the `<Box/>` component 45 degrees both in Y and Z direction!

![Box with rotation](https://preview.ibb.co/k71AXc/Screen_Shot_2018_02_24_at_21_01_18.png)

## Task 4 - Add a 3D model! 🤓 🌎
Okay, great! Now you know how to add basic ReactVR components, but let's be fair, it is not that interesting! In this task, we will introduce you to how to add a 3D object component inside your ReactVR app!

You might already notice that we have added a **death-star.obj** inside the **/static_assets** folder. Now we are going to use this .obj file and add it to our view. Psst. It is okay to remove the `<IntroText/>` and `<IntroBox/>` from the **index.vr.js** file 😉.

👉 **Tips:** We recommend that you select the `space.jpg` file as pano for this task 🌝. Why? Because it looks cool! 🤓 🌎

❓ Guess what! We need to import the  `<Intro3DModel/> ` component to our **index.vr.js** file and add it in the View. Go ahead and do it! 👊

❓ Go to the **components/introduction/intro3DModel.vr.js** file and import the `Model` from the react-vr. Change the `<View/>` to `<Model/>`.

❓ Then we need to tell the `<Model/>` component to use the **death-star.obj** as its source. Add a `source` prop inside your `<Model/>` component and define the obj file.

```javascript
source = {{
  obj: asset('objFileNameHere'),
}}
```

❓ In addition, add the transform styling, as you did for the `<Box/>` component in the previous task. If you don't do this, the ReactVR will use it's default coordinates. Do you remember what it was? 😜

❓ Include the prop `wireframe` and set its value to `true` inside your `<Model/>` component.

![Death star 3D model with wireframe](https://image.ibb.co/nJxT87/Screen_Shot_2018_02_18_at_10_53_33.png)

👉 **Tips:** If you like to add your own 3D object, https://clara.io/library has a wide variety of 3D models and formats for exporting 3D models. Remember to download the .obj format (this is the only format ReactVR support at the moment 🙁) and add it to your **/static_assets** folder 😉. Sometimes you get both .obj and .mtl file when downloading a 3D model. I like to think of the .obj file as "the container" and the .mtl file as "the fill" 🙃.

Another way to fill your 3D component is to add a texture! A texture is used for defining the texture of the Model 😝. The `<Model/>` component uses the texture if mtl is not specified.

We found a proper texture for the **death-star.obj** here:
https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png

❓ Add a `texture` prop inside your `<Model/>`, and define it as the url above. Remember, the texture prop always takes its argument as a string 😉. Ops! You should also set the `wireframe` equal to false. When the `wireframe` is true, it will overwrite the texture 😬. 

👉 **Tips:** If you have troubles with adding the texture. Try to save the .png to your static_assets folder and try to access the .png from there!

## Task 5 - Add animation to your 3D Model! 💥
Now, lets add some animation to our 3D component 🤓! In this task, we will learn how to make the **death-star.obj** spin itself.

❓ In file **components/introduction/intro3dModel.vr.js** import `Animated` and convert your Model to an `AnimatedModel` by defining it as described below inside your `render` function. Change the `Model` to `AnimatedModel`.

`
const AnimatedModel = Animated.createAnimatedComponent(Model);
`

❓ In order to make the **death-star.obj** spin we need to define its local state when first load the app. This state should be an Animated.Value. Lets define the components state:

```javascript
export default class Intro3DModel extends React.Component {
  constructor() {
    super();
    this.state = {
      spin: new Animated.Value(0)
    };
  }
  //more stuff
}
```

❓ Next go ahead and bind the `spin` you declared inside the state to the styling of our `AnimatedModel`. **Hint:** use the `rotateY` 😜.

Is it spinning? 🤔

Nope 👻! We need to do a little more coding before it actually spins! We need to tell the React Component it should start spinning when it renders! In order to this, we are going to use `componentDidMount()` function. `componentDidMount()` function is one of React's lifecycles methods and it is invoked immediately after a component is mounted.

❓ Define the `componentDidMount()` function inside your React component. Use the `Animated.timing` in order to specify the rotation value from 0 to 1 in 5 seconds. Ops. Remember that the duration is measured in ms 😇.

```javascript
  componentDidMount() {
    Animated.timing(
      this.state.spin,
      {
       toValue: //your value here,
       duration: //your value here
      }
    ).start();
  }
```

Is it still not working? 😳

This is because according to the [React VR official documentation](https://facebook.github.io/react-vr/docs/transforms.html#props) rotate transformations have to be strings and not an `Animated.Value` as we have set in our state.

![Transformation documentation from ReactVR](https://image.ibb.co/in6o87/Screen_Shot_2018_02_18_at_11_55_23.png)

Inside our `componentDidMount()` function we are changing the value from 0 to 1, but the `rotateY` prop expects is a rotation value as degree or as a string of "0deg" to "360deg". How can we reinterpreted the value 0 to 1 as the string "0deg" to "360deg"? 🤔

Luckily we can achieve this using _interpolate_ 🤗.

❓ Instead of using `rotateY: this.state.spin`, change it to `rotateY: this.state.spin.interpolate()`.

❓ The `interpolate()` function takes one argument. This argument should be an object that looks like this:

```javascript
{
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
}
```

It spins! 🎉🎈😄

❓ Let's clean up our code a little bit and move the right side of the `rotateY:` into a separate constant inside our render function and call it `spinYValue`. So the `rotateY` should look something like this:

```
    {rotateY: spinYValue}
```

But the **death-star.obj** only spins one time 🤔. We want to make it loop! 😁

❓ Move everything that is inside the `componentDidMount()` function into a separate function. Name the function for `spinAnimation()` and call it from the `componentDidMount()` function. Remember to write `this` in front of  the function name in order to call it!

❓ In order for us to repeat the function, we must call the `this.spinAnimation()` repeatedly. Add the following code inside your `spinAnimation()`.

```javascript
).start( () => this.spinAnimation());
```

Still not spinning more than one time? 😧

The explanation to this is that the `this.state.spin` value is already equal to 1 when we redo the `spinAnimation()` function. Therefore we need to set the `this.state.spin` value back to value 0.

❓ Set `this.state.spin` value to 0 in the beginning of the `spinAnimation()` function.

Hurray! It is spinning! 😃 👏

But as you may see, the spinning slows down at the end of the rotation. If you don't want it to slow down, we can change the easing of the rotation.

❓ Import `Easing` from `react-native` and add `easing` property to the `Animated.timing` and set the value to `Easing.linear`.

Congratulations! You now have a 3D model that animates! 🎉🌟

## Task 6 - Get to know the VrButton and sound effects! 😁
EyHey! 👏 The last two things we want to show you is the VRbutton and how to add sound effects to your ReactVR app!

### Let's start with the VrButton.

➡️️️ VrButton is a helper for managing interaction and has no appearance by default. It only acts as a wrapper and can wrap other components.

❓ In **components/introduction/Intro3DModel** import `VrButton` and wrap the `<AnimatedModel/>` component.

VrButton has many different types of props, some of them are:

- `onClick`
- `onLongClick`
- `onClickSound`
- `onEnter`
- `onExit`

Please see [documentation](https://facebook.github.io/react-vr/docs/vrbutton.html) for more.

❓ Let's try to add some interaction with our VrButton! Start by declaring a `onClickDeathStar()` function. Inside this function, we want to update the xCoordinate to the death-star. We like to make the death-star move from one xCoordinate to another whenever we click on it. Make the logic for toggle the xCoordinate between 0 and 1 whenever we click on the death-star. **Hint** Create a xCoordinate inside the state and update it with `this.setState()` 😉.

❓ Bind the function you just created to the `onClick` prop!

```javascript
onClick={() => this.onClickDeathStar()}
```

### Add Cursor! 🐭 👆

You haven't forgotten about the Google Cardboard?! To make the interactions a little bit more mobile friendly, we should add a cursor that follows your movements and trigger whenever you touch the screen!

❓ We have added `raycasters` and `cursorVisibility` inside the  **vr/client.js** file. Please remove the block comments from both of them.

Great! 😄 Now you will see a white dot in the middle of your screen. This dot will represent your trigger point. If you like to click on something, you need to make sure that your white dot is hovering over it ✌🏼😜.

### Next step: Sound Effect!

Now we are going to add a sound effect whenever we click on the death-star. Can you guess which prop we are going to use? 😝😏

❓ Go ahead and add the `onClickSound` prop to your `VrButton`.

In order to trigger the sound effect, we need to define the sound. In **static_assets** folder, we have added one .mp3 file.

❓ Define the sound! **Hint** `onClickSound` takes one argument, and an argument is an object. In this object, you define the type of audio format and where you can find it. Since we added a .mp3 file in the **static_assets** folder, the object should look similar to this:  

```
{
    mp3: //mp3 file
}
```

## Task 7 - Let's make a VR game! 🎮 🎲 👾
Finally! Let's go ahead and start creating a ReactVR game!

In this game, you will get the chance to walk in Luke Skywalker's footsteps and destroy the Death Star in order to restore peace to the galaxy 🙏 The problem is that the Galactic Empire will have built another Death Star as soon as you destroy the first one.. 😒🤷

Your goal will be to destroy as many Death Stars as possible. May the force be with you! ✨

### Before we begin

First, we need to set up a few things. We have created a `Game` component for you where we will do most of our coding.

❓ Replace the `Intro3DModel` with the `Game` component in **index.vr.js**.

Take a look inside of **componenents/game/Game.vr.js**. There's not much there except an empty constructor and a render function that returns a `View` with the Death Star inside of it.

❓ Please make sure that the `Pano` component in **index.vr.js** is set to show `space.jpg` for maximum Star Wars effect.

Ready for takeoff?! 🚀👩‍🚀

### Build more Death Stars

We want new Death Stars to appear whenever an old one is destroyed. But!! If they were to appear in the same place every time, the game would be too easy 😅. Therefore, we want each new Death Star to appear at a random location in space.

❓ In the `Intro3DModel`, import the `getRandomCoordinates` function from `ComponentGenerator` in the helpers folder. We won't worry too much about how the coordinates are generated, but feel free to check out the function yourself to see how its done.

In the previous task, we only updated the x-coordinate whenever the Death Star was hit. We want to update the position in all three directions, and therefore we need to store the x-, y- and z-coordinates in the state.

❓ Alter the state of the `Intro3DModel` component so that it stores all three coordinates in an array instead of only the x-coordinate. You can set its initial state to [0, 0, -3] for an easy start to the game 😉.

What should we now do with the coordinates in the `onClickDeathStar` method? Remember that we want the new Death Star to appear at a random location when we destroy the old one.

❓ Use the imported `getRandomCoordinates` function to set the location of the new Death Star. We don't want the Death Star to appear too far away, so set the minimum and maximum value to, for instance, -5 and 5 respectively.

Try to click the first Death Star that appears in front of you when starting your application. Nice job, you destroyed it! 😎🎇 But, wait?! It's not over yet. Move the screen around to find another Death Star at a different location! 😰

### Add a score board

To make it a proper game, we need to show off how many Death Stars we have destroyed 🏆 For that we are going to add a sticky panel in 2D, that follows our movements in the 3D world 👀. ReactVR doesn't support this feature, but luckily, we can build it ourself and incorporate it in our VR application by turning it into a *Native Module*. All native modules are registered in the `nativeModules` field within **vr/client.js**.

❓ We have already made the native module for you, called `StickyPanel`, so all we need to do is enable it! 😉 Please find the three "TODO's" inside **vr/client.js** and uncomment the specified lines to register the native module.

❓ Initialize the `StickyPanel` within the render method of the `Game` component by adding the following line:
 ```javascript
 NativeModules.DomOverlayModule.openOverlay({score: 0})
 ```
We will set the score parameter to 0 for now. Check your application, you should now see a score board! ✌🏼🏅

⚠️ **Warning:** Is your score board not showing properly on your phone? You can refine the position of the board by changing its styling in the **static_assets/style.css** file. Try to change the values of `top` and `left` inside of the `container` selector until you find something that fits your screen. Note that since this is a 2D module, it will only show on one part of your screen.

### Update the score

We have a score board, great!! 😄 But it's not much fun when it only displays a score of 0.. Now it's time to add some state to our game! We will keep track of the game state inside of the `Game` component.

❓ In the `Game` constructor, add state containing the score, and set the initial score to zero.

Now, we need to update the state every time a Death Star is hit.

❓ Add an `onClick` method to the `Game` component that updates the score by 1. Bind this function to the `onClick` prop of the `Intro3DModel` component, just like you did in task 6!

We want both the `onClickDeathStar` method in `Intro3DModel` and the `onClick` method in `Game` to be called.

❓ At the end of the `onClickDeathStar` method, call the `onClick` method sent by its parent via props:

```javascript
this.props.onClick();
```

Try to destroy a Death Star and check if you finally get some points for your effort!! 🎯👍

### Add some Obstacles

Don't you feel a bit lonely trying to win the Galactic Empire over all by yourself? 😰 Luckily, help is on the way! In the final part of the exercise, you will meet some friendly spaceships that have come to celebrate your victory against the dark side. 🎉

❓ Inside of `Game`, render the `ComponentGenerator` component, which takes the prop `numberOfComponents`. This says how many spaceships you want to appear. A good number is 20, but if your laptop/phone is a bit on the slower side, you might want to reduce this number.

### Final touches

It's time to make the final touch to the game. Even though the application is quite impressive as it is (good job!!! 🤩), we can make it even more realistic by adding a couple of lighting components. 💡🔦🕯️ Recall the various lighting types from the presentation:

- AmbientLight
- DirectionalLight
- PointLight
- SpotLight

In this case, we will use `AmbientLight` and `DirectionalLight`.

❓ Add a `DirectionalLight` inside of the render method of `Game`. Set the intensity prop to for instance 2, and its position to 10 in the positive y-direction, because we want to give the impression of moonlight 🌝🌙. Adding a lighting component will not make a difference unless you say that the components should be affected by it. Find the line `lit = {false}` inside of the `IteraDotOverI` component in the **helpers** folder, and set lit to true instead 🔥. You can also add `lit = {true}` to the `Intro3DModel` component if you want.

Now, you can definitely see a change in lightning. However, it's a bit dark, don't you think? After all, we did not choose the dark side! 😈

❓ Add an `AmbientLight` component with a low intensity, for instance 0.5. AmbientLight affects all objects in the scene equally! Now, everything looks much brighter and better. 🤗

## Final remarks

Congratulations, young padawan! 🎈🎂🎉 You have now completed your training. 💪 If you are still eager for more, we encourage you to take on some of these challenges on your own:

- Subtract points from the score if you hit a friendly spaceship
- Add a timer to the game, with a start and stop game state
- Make the Death Star move around, to further increase the difficulty
