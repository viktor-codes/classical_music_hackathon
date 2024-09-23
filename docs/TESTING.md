[back to README](./README.md)
# Testing

## Manual Testing

Usability was tested with the below user acceptance testing.

|     | User Actions   | Expected Results | Y/N | Comments  |
|-------------|------------------------|------------------|------|-------------|
| Sign Up     |                        |                  |      |             |
| 1           | Click on sign up button | Bring up registraion page | Y |   n/a  |
| 2           | Click on log in link in the form | Bring up login page | Y |  n/a  |
| 3           | Wrong input | Show warning/error message | Y |  n/a  |
| 4           | Click sign up button | Redirect to homepage | Y |  n/a  |
| Log In     |                        |                  |      |             |
| 1           | Click on login button | Bring up login page | Y |   n/a  |
| 2           | Click on sign up link in the form | Bring up registration page | Y |  n/a  |
| 3           | Wrong input | Message shows error/warning | Y |  n/a  |
| 4           | Click sign in button | Redirect to homepage | Y |  n/a  |
| Log Out     |                        |                  |      |             |
| 1           | Click on logout button | Redirect to homepage | Y |   n/a  |
| Home Page     |                        |                  |      |             |
| 1           | Click on logo brand | Bring up home page | Y |   Logo brand on navbar   |
| Lessons Page     |                        |                  |      |             |
| 1           | Click on lessons link on navbar | Bring up lessons page | Y |  n/a   |
| 2           | Click on lessons tabs to pick the lesson you want | Bring up the corresponding lesson content | Y |  ![lessons tab screenshot](./readme-images/lessons-tabs-screenshot.png)   |
| 3           | Play the piano | Play audio and display the corresponding note and stave | Y |  ![note and stave screenshot](./readme-images/note-stave-screenshot.png)   |
| 4           | Slide volume | Increase or decrese volume level | Y |  ![volume slider screenshot](./readme-images/volume-slider-screenshot.png)   |
| 5           | Toggle button | Show corresponding keys on the keyboard to play piano | Y |  ![toggle screenshot](./readme-images/toggle-screenshot.png)   |
| 6           | Click on left side menu | Learn button redirects to the top of the page, play button redirects to the piano section of the page, and game button redirects to the game page | Y |  ![left side menu screenshot](./readme-images/left-side-menu-screenshot.png)   |
| Game Page     |                        |                  |      |             |
| 1           | Click on game link on navbar | Bring up game page | Y |  n/a   |
| 2           | Click on start button | Start challenge and timer | Y |  ![play button screenshot](./readme-images/play-button-screenshot.png)   |
| 3           | Click on restart button | Restart challenge | Y |  ![restart button screenshot](./readme-images/restart-button-screenshot.png)   |
| 4           | Select answer | Plus or minus score accordingly | Y |  n/a   |
| Team Page     |                        |                  |      |             |
| 1           | Click on team link on navbar | Bring up team page | Y |  n/a   |
| 2           | Click on faces | Redirect to GitHub/LinkedIn profiles | Y |  n/a   |
| Highscore Page     |                        |                  |      |             |
| 1           | Click on highscore link on dropdown menu when logged in | Bring up highscore page | Y |  n/a   |
| 2           | Click on back to game | Redirect to game page | Y |  n/a   |

---

## Testing User Story

| User Goals | Requirement met |
| ------------------------- | --------------- |
| As a user I can navigate the site so that I can find what I'm looking for easily. | Y |
| As a user I can easily see and comprehend the piano on the site so that I can interact with the piano. | Y |
| As a user I can play the piano on the site so that I can learn about piano. | Y |
| As a user I can partake in a challenge so that I can test my knowledge. | Y |
| As a user I can partake in lessons so that I can improve my piano skills. | Y |
| As a user I can view related content to my piano lesson so that I can learn piano effectively. | Y |
| As a user I can navigate to the lesson page so I can find what I'm looking for easily. | Y |
| As a user I can test my skills so that I can determine if I am learning. | Y |
| As a user I can view the team page so that I am aware of who contributed to the application. | Y |
| As a user I can view the site on different devices so I can access the application anywhere | Y |

---

## Validation

- The official [W3C](https://validator.w3.org/) validator was used to validate HTML.
- The official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator was used to validate CSS.
- The official [JSHint](https://www.jshint.com/) validator was used to validate JS.
- Code Institute's [CI Python Linter](https://pep8ci.herokuapp.com/) was used to validate python.

---

## Lighthouse Report

[Google Chrome lighthouse dev tool](https://developer.chrome.com/docs/lighthouse) was used to test the performance of the website.

---

## Responsiveness

Bootstrap was used for the majority of styling and designing the layout and display of the website, which is a responsive mobile first design. The responsiveness was checked manually by using devtools (Chrome) throughout the whole development.

### Desktop
![large screen](./readme-images/large-screen.png)

### Tablet
![medium screen](./readme-images/medium-screen.png)

### Phone
![small screen](./readme-images/small-screen.png)

[back to README](./README.md)