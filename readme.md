# My Website

- Hi! Welcome to my site! I'm Yash Rajput, a rising freshman at Colonia High School 🎒 interested in everything engineering! I also have a great of love of the sciences 🔬 and the majority of my time is directed towards learning more about it 📑!

## HTML

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
    <script src="main.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li>
            <a href="#whoAmI">About Me</a>
          </li>
          <li>
            <a href="#whatIDo">What I do?</a>
          </li>
          <li>
            <a href="#contactMe">Contact Me!</a>
          </li>
        </ul>
      </nav>
    </header>
    <hr />
    <main>
      <article>
        <section>
          <h1 id="whoAmI">Who am I?</h1>
          <div class="intro">
            Hi! Welcome to my site! I'm Yash Rajput, a rising freshman at
            Colonia High School 🎒 interested in everything engineering! I also
            have a great of love of the sciences 🔬 and the majority of my time
            is directed towards learning more about it 📑!
          </div>
          <span>Email: toyashrajput@gmail.com </span>
        </section>
        <section>
          <h1 id="whatIDo">What do I do?</h1>
          <div class="running">
            <h2>Running</h2>
            <img
              src="assets/running.png"
              alt="track running"
              width="100px"
              height="100px"
            />
          </div>
          <div class="coding">
            <h2>Coding</h2>
            <img
              src="assets/coding.png"
              alt="coding"
              width="100px"
              height="100px"
            />
          </div>
          <div class="research">
            <h2>Science Research</h2>
            <img
              src="assets/research.png"
              alt="science research"
              width="100px"
              height="100px"
            />
          </div>
        </section>
        <section>
          <aside>
            <img
              src="assets/graduationimage.jpg"
              alt="Me at my 8th grade Graduation"
              width="378px"
              height="504px"
            />
            <br />
            <caption>
              Me at my Graduation!
            </caption>
          </aside>
        </section>
      </article>
      <article>
        <section>
          <table style="border: 1px solid black">
            <tr>
              <th>Subject</th>
              <th>Stars</th>
            </tr>
            <tr>
              <td>Math</td>
              <td>🌟🌟🌟🌟🌟</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>🌟🌟🌟🌟</td>
            </tr>
            <tr>
              <td>CompSci</td>
              <td>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟...</td>
            </tr>
          </table>
        </section>
        <section id="contactMe">
          <h1>Contact Me!</h1>
          <form action="">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label for="city">City:</label>
              <select name="city" id="city">
                <option value="avenel">Avenel</option>
                <option value="colonia">Colonia</option>
                <option value="edison">Edison</option>
              </select>
            </div>
            <div>
              <label for="question">Question:</label>
              <textarea
                name="question"
                id="question"
                cols="300"
                rows="10"
              ></textarea>
            </div>
            <button>Submit:</button>
          </form>
        </section>
      </article>
    </main>
    <footer>
      <a href="#">Back to top of the page</a>
    </footer>
  </body>
</html>
```

## CSS

```
:root {
}

body {
  background-color: hsl(0, 0%, 12%);
  color: whitesmoke;
  font-family: "Oswald", sans-serif;
}

.intro {
  font-size: 30px;
}

.running {
  border: 1px solid white;
}

```
