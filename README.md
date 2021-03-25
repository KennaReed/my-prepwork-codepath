# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: McKenna Reed

Time spent: **5** hours spent in total programming

Link to project: https://glitch.com/edit/#!/codepathprework-mreed?path=index.html%3A20%3A156

## Required Functionality

The following **required** functionality is complete:

* [*] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [*] "Start" button toggles between "Start" and "Stop" when clicked. 
* [*] Game buttons each light up and play a sound when clicked. 
* [*] Computer plays back sequence of clues including sound and visual cue for each button
* [*] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [*] User wins the game after guessing a complete pattern
* [*] User loses the game after an incorrect guess //modified to be after 3 incorrect guesses

The following **optional** features are implemented:

* [*] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [*] Buttons use a pitch (frequency) other than the ones in the tutorial
* [*] More than 4 functional game buttons
* [*] Playback speeds up on each turn
* [*] Computer picks a different pattern each time the game is played
* [*] Player only loses after 3 mistakes (instead of on the first mistake)
* [*] Game button appearance change goes beyond color (e.g. add an image)
* [*] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [*] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [*] Buttons move down slightly on click and clue to mimic a click for additional ease for colorblind users.
- [*] Progress bar fills up as user uses up their alloted time to win the game.
- [*] Strikes to illustrate the number of remaining mistakes the user can make before losing.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
https://i.imgur.com/8yTwB3G.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Imaging Help
https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element

- CSS Coloring
https://www.rapidtables.com/web/css/css-color.html#pink

- Math.random Guidance
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

- Audio Support
https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick

- Flex Box Methods
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I struggled in working with CSS and working through how different containers interact with each other. For example, with plain html, the three "X" strikes 
naturally fall one on top of the other, but I wanted them to be in a row. That took some tinkering to correctly move those items without moving any other elements. 
To overcome this challenge, I read articles online to learn the available options with CSS, particularly with flex box. These articles inspired me to create a new div 
container for the spikes. Gaining experience by reading about and executing these methods will help me best similar upcoming challenges more effectively. Also with the 
strikes, I struggled with changing the color. I found that I could add a class attribute color to an element only when the strikeArea id did not already have a color attribute. 
This taught me that id's have a priority above classes because the "other color" let us call blue was added as attribute in the id, but the red on the mistake was added as a class. 
Since the strikes stayed blue, that indicates that id's take priority over classes. Despite discovering this, in the end I decided that since the green standard writing color I chose 
has a connotation as being "correct", I chose to keep the strikes as the standard green, and only change the color (to red) when the user makes a mistake. By incorporating fewer colors 
in the information section of the page, I achieve an overall cleaner look and emphasize what is really important to the game: the pattern buttons. After working more with CSS, I am 
learning that smaller containers with fewer lines of code in them typically works best. This minimizes conflicts between different containers and between different commands with the 
added benefit of better readability. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

This assignment opened my eyes to the possibilities with CSS. I previously limited myself to using it for letter and page structure styling.
This makes me wonder about the other possibilities with CSS that I have not yet discovered. Additionally, since this website is hosted on Glitch,
can other people play my game? How would I go about actually hosting my own website that anyone can access? For this basic web application, I was the sole
developer, so what this whole process look like when I am working in a team and multiple people are working on the same project at one time? I can see that
being difficult to handle with dependencies and conflicts. Considering websites I have interacted with in the past, they seem more complex and intricate, 
so I am wondering if that type of work can be done with these languages: css, html, and javascript, or if there are other languages and software for those types of
projects. I started considering design in terms of accessiability, but I am not educated in that area very well, so is there a role for a type of developer to 
act as a designer to consider these types of aspects? Or, because I am assuming we will work for a client, to balance and incorporate the stylistic  desires of 
our client? I am excited to explore the answers to these questions as I continue learning and gaining more experience with website development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours, I would first refactor my code and edit and add (as needed) comments. I would do this first because as of now, the code is relatively simple, so it is important to keep code clean and 
readable in the earlier stages so it can stay maintainable. Additionally, if new developers join the project, this will help them more quickly understand the work that has already been done. Specifically, the
guess and startCountDown functions could have some more comments because they are more complex compared to the other functions. Similarly, if this project were to grow significantly, I would start to break some of
these ideas into different files, such as an audio javascript file or a button css file. This will allow future developrs to more easily locate areas of broken code or where to add new features. Once this work has 
been completed then I would look into more features. Right now I have the user get 90 seconds to complete the game in its entirety, but it might also be more interesting to only allow the user a certain amount of
time for each turn to make it more difficult. Style is also important, so if I had more time, I would find or create images that connect together better and are more pleasing to the eye. That could also involve
modifying the color of the buttons to better accompany its hidden image. 


## License

    Copyright [McKenna Reed]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.