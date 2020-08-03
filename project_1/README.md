![](/ga_cog.png)
# Project #1: The Game
## Attendance
There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (10AM - 6PM Eastern) for TA hours or any meetings with instructors as needed. If an instructor messages you between 10AM - 6PM ET you are expected to respond within the hour. Failure to respond in reasonable time may result in an Absence on your attendance record. If you choose to change your schedule and work on your project at other hours, you still have to keep an eye on Slack. We recommend downloading the Slack application on your phone and turning on notifications to ensure you're able to respond.

There are **no attendance checks during this project week, except:**

  - **Wednesday, Aug 5**: Outcomes - you still have outcomes at 4:30pm ET

  - **Thursday, Aug 6**: Project presentation day! You're required to be in the class zoom at 10:00 AM Eastern and be ready to present

_Failure to make an attendance check will result in an unexcused absence for potentially both the morning and afternoon for that day_.

**Note:** On **Wednesday, Aug 5th** the instructional team will slack out a Student Appreciation form for you to fill out. Please look for this in classroom channel and plan to spend 5-10 minutes filling out the form. The cut off for filling out this form will be 10am ET the following day.

## Project Details
### &#x1F534; Mandatory To Pass:
#### MVP - Minimum Viable Product
Your game must meet these requirements:

1. Created in a repository on your own personal github.com account
1. Built with HTML, CSS, JavaScript and jQuery (this game will be played using the DOM, not the console)<br>
2. Hosted on Github pages or Vercel<br>
3. Commits to Github every day<br>
4. A `README.md` file with explanations of the technologies used, the approach taken, a link to your live site, unsolved problems, future updates, etc...

#### Game must have:<br>
  1. **be a two player game** (either against the computer or against another player)<br>
        - Example: Blackjack: A player plays against the dealer. The dealer is the computer
        - Example: Connect Four: Two players pass the game between themselves to take turns<br>
        <br>
  2.  **A win state** - a way for the player to win the game<br>
      - Beating the other player can be considered a win state
      - High score can be considered a win state
      - Etc...
      <br><br>
  3.  **A lose state** - a way for the player to lose the game<br>
      - Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
      - Example: Connect Four - the other player has won or there are no possible plays left<br><br>
   4.  **A way to keep playing if the game is not over**<br><br>
   5.  **Multiple rounds to play** - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost<br>
         - Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win, lose or tie the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll
         - Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (vertically or horizontally)- one person wins, one loses, there are no further plays in this case<br><br>

### &#x1F535; Stretch Goals (Not Mandatory):
  - CSS to give your game a personal and fun style
  - Responsive mobile design
  - Local or session storage
  - Work with your instructor to determine additional stretch goals

## Getting Started: Make A New Repo

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

:heavy_exclamation_mark: **Do not** begin your project within the class repo.

:heavy_exclamation_mark: **Do not** clone your project into the class repo.

1. After your project has been approved, [make a new Github repo for your project](https://help.github.com/articles/create-a-repo/). Remember to keep your repo set to public so you can deploy it.

1. From there, decide if you want to deploy to Github Pages or Vercel.

### Deployment Notes:
<details><summary> Github Pages (project site)</summary>

Follow the instructions for a Project Site outlined by Github themselves on [pages.github.com](https://pages.github.com/) To get to the correct instructions, select 'Project site' and then 'Start from scratch'

![github screenshot](https://i.imgur.com/c9yC6Jb.png)

</details>

<details><summary>Vercel</summary>

Go to [vercel.com](https://vercel.com) and scroll to the bottom to begin your deployment. Select the 'From a Git Repository' then choose 'Continue with Github'. Sign in and it will allow you to import your repo for automatic deployment with every push to the master branch.

![vercel screenshot](https://i.imgur.com/7hB9ZG9.png)

</details>

<br>

**Note:** You will need at least an index.html to deploy your site.

**Recommendation:** We always recommend deploying your project as early as possible. Deploying is often considered difficult (more so as we get into full-stack applications) so it's best to start this process early so you have enough time before the project is due to debug your deployment.


<details><summary>Extra: want your own domain name?</summary>

You can also host your Github pages and Vercel applications with your own domain name. [Here is a walkthrough from namecheap, one of many web hosting services](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages). You can also read the github and vercel docs for more info on adding a domain name.

**Note:** If you don't want to pay for a domain name, you can still personalize the url by choosing what you name your project.

- Github pages project sites does this for you. Your project sites  will always start with your with your username (ex: username.github.io/repo-name), which is kind of nice!
- Vercel asks you to name your project when you import it. Consider naming it username-project-name

</details>

## Technical Demonstration
All projects will be presented to the class.  Your presentation should:
* Be approximately 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make
You will be sharing your game and your code.  Be prepared to answer questions from the instructors and other students.

**Recommendation:** Plan to finish your project early so you have time to practice your presentation.

## Project Approval Meetings

_Your Stand Leader (now your Project Squad Leader) will contact you to setup a meeting time to approve your project._

**Meetings will be held on Friday, July 30th (Tomorrow!) - This is Mandatory**<br>

You will meet with your Project Squad Leader for 15 minutes to get your game idea approved. As part of tonight's hw **you are required to prepare for this meeting by writing down:**
  - Your game idea
  - MVP for your game idea (reference MVP above and make sure you have answers for each part)
  - At least one stretch goal (It's okay if you don't implement this in your game, but come with an idea)
  - When you plan to deploy your project
  - When you plan to have MVP completed (this may change, but it's a good idea to create a vague schedule for yourself and to try to complete MVP at least a couple days early to save time for debugging and presentation prep)

After your Squad Leader has given you the green light on your project, your project week has officially started! (See attendance at the top of the markdown - you may go for the day, but you must be reachable.)

## How to Submit Your Project

Your project is due on Thursday, Aug 6th at 10:00 AM ET. You will present your project and show your code to classmates and instructors then answer any questions we have for you.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1ug0Ja6gYAo6fKBtIlgmHXbnFYjlYc_bry7jtX-QquEo/edit?usp=sharing). **Note that this will be the order you present your projects!** <br>Feel free to choose a spot now and fill in the rest later if you know when you want to present!

## Where to go for help during project week
1. Seek out help online
1. Seek out help with your classmates
1. Seek out help with our class TA

**Note:** Come the end of the course, you will be (more or less) on your own. You will not be able to reach out to the instructional team for every bug or question you have. Now is the time to start practicing your researching skills and to start utilizing your other resources. **If you have already used the web, already reached out to other classmates, and already visited Aegean and you still can't figure something out, you may use the info below to reach out to your Squad Leader for help.**

[How to Ask Your Squad Leader for Help](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Arete/wiki/How-To-Ask-A-Question) <-- please follow this format and send the info to your Squad Leader in a private DM. The other instructors have a group of students to manage as well, so please do not disturb them. Also remember your Squad Leader is technically off the clock over the weekend. You may DM us but we may not be able to respond until Monday. Use your other resources in the meantime!

**TA Hours**
1. Monday to Thursday with Aegean 6:00 PM - 10:00 PM ET `#seir-aegean-officehours`
1. Sunday with Aegean 4:00 PM - 9:00 PM `#seir-aegean-officehours`

## Suggested Ways to Get Started
* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
### Think about...
- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?
- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?
- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Useful Resources
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
* **[jQuery Docs](http://api.jquery.com)**
* **[GitHub Pages](https://pages.github.com)**
* **[Vercel](https://vercel.com)**
* **[Trello](trello.com)** (for project management)
---

## Ideas If You're Feeling Shaky With the Material
We conduct project approval meetings to ensure the idea you've come up with is properly scoped for your coding ability and the time allotted. In the real world, you'd normally be working on a single project for months maybe even years depending on how big it is, but this is a bootcamp so you're only getting a few days.

If you're still feeling shaky with the material and not sure what you want to do, consider some of these ideas or ideas similar to them:

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [War](https://bicyclecards.com/how-to-play/war/)
- [Hangman](https://en.wikipedia.org/wiki/Hangman_(game))
- [Jenga](https://en.wikipedia.org/wiki/Jenga)
- [MineSweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))
- A memory game
- A math game
- Something you played growing up

Keep it simple! Simpler ideas will let you spend more time focusing on the parts you want get more practice with or understanding of (be that Javascript or HTML/CSS!). More involved games will ask you to focus on more things at a time instead of focusing on and diving deep into the shaky material or diving deep in to the material you're most passionate about.

Project week is for you! Use it in a way that will benefit you in your journey through the course. You can always keep building on your game or building bigger and more complex games later on. Use this time to learn.

---
## Inspiration - Projects by Previous SEI Students

* [CeleZum](https://jadekang0611.github.io/celezum/)
* [Baseball Triva](https://bwilson19.github.io/baseballtrivia/)
* [Blackjack](https://cardosi.github.io/)
* [Connect Four](http://katiezhou.github.io/connectfour.html)
* [Pan Dulce Connect Four](https://edoorn.github.io/pandulce/)
* [Simon](http://alexandraalday.com/SimonUniverse/)
* [Savage Sailors](https://tg970.github.io/savage_sailors/)
* [Ancient Wizards](https://benpeterswake.github.io/)
* [Trouble in Tribble Town](https://samwhindleton.github.io/trouble-in-tribble-town/)
* [Harvest Game](https://jedmed.github.io/Projects/Harvest_Game/)
