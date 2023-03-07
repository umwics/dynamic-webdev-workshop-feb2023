![FreeTheEgg banner](/banner.png)


## Dynamic JS Frameworks Demo

An intro to dynamic frameworks such as React, Vue, Svelte that make modern web applications. 

Learn the basics of NodeJS, reactive states, components, and state management with live samples in this Github repository.


### Demo app

**Free the Egg** is a game where that opens your homepage (`route: /`) to an image of an egg. Clicking the egg will attempt to crack it. But as any adventurer is, you start of weak and puny ☹️ 

But venture not far, there be quests from the other pages of the site!
Each quest introduces a dynamic web concept for your framework of choice, with an activity.
- **Math** (`route: /math`) introduces reactive states.
- **Artist** (`route: /artist`) introduces props.
- **Unbox** (`route: /unbox`) introduces slots.

You may click the egg whenever you feel ready, but only the egg shall know its worthy cracker.  
Will you be strong enough and worthy to break the egg? 🥚

#### Bonus Concept: State Management

State Management (also known as stores) are the secret behind FreeTheEgg's **progression mechanic**! One must complete all three quests to completely break the Egg, and this is computed everytime the Egg is clicked. The app stores which quests are complete and which are not, globally. The image that the Egg returns varies from undamaged, to slightly chinked, to broken, to finished, as dependent on progression.

*Hint: You can track your progression automatically as the Header orbs turn from red to green.*

State Management libraries used:
- **React**: [Recoil](https://recoiljs.org/)
- **Vue**: [Pinia](https://pinia.vuejs.org/)
- **Svelte**: built-in as `svelte/store`

> Each app has a `src/stores.js` file. You can copy the format if you wish to write your own stores in your framework of choice.

### Presentation

[Download ppt](https://github.com/andreaabellera/FreeTheEgg/raw/main/WebDev_WICS_Feb_2023.pptx)


### One webapp, built 3 ways!

Explore the framework-specific source codes 

- [**React**](/app-react)
- [**Vue**](/app-vue)
- [**Svelte**](/app-svelte)


### Serve a webapp

1. Download or clone **FreeTheEgg** to your computer  
    ```
    $ git clone https://github.com/andreaabellera/FreeTheEgg.git
    ```

2. Go to the directory of your framework of choice  
    ```
    // Go to React site
    $ cd app-react

    // Go to Vue site
    $ cd app-vue

    // Go to Svelte site
    $ cd app-svelte
    ```

3. Install npm dependencies  
    ```
    $ npm i
    ```

4. Run the app!  
    ```
    $ npm run dev
    ```  

5. Open any browser and enter this url address (this is where your machine hosts the app)
    ```
    http://localhost:5173/
    ```  

6. **BONUS**: Edit the source code of your framework of choice while the server is running. Watch as your site changes live!
