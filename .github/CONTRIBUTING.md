# Contributing to Front-end Developer Interview Questions

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/h5bp/Front-end-Developer-Interview-Questions/issues) is
the preferred channel for spelling mistakes, errors or any general feedback. Please respect the following restrictions:

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

* Please **do not** open issues or pull requests that involve including **answers** to any of the questions.

<a name="pull-requests"></a>
## Pull requests

Please adhere to the coding conventions used throughout the project (spelling, indentation, punctuation etc.).

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo) the project, clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/Front-end-Developer-Interview-Questions.git
   # Navigate to the newly cloned directory
   cd Front-end-Developer-Interview-Questions
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/h5bp/Front-end-Developer-Interview-Questions.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

5. Set-up the website

  ```bash
  # install dependencies
  npm install
  # run the website and watch for changes (http://localhost:9090)
  npm start
  ```

Our website is made with [Eleventy](https://11ty.io).

* If you are looking to edit infrastructure/templating files of the website and not sure how to, [check their docs](https://11ty.io/docs).
* If you are looking to change a question/translation file, just change the markdown file you want and the website will be updated once it is deployed.

6. Squash your commits down to a single one (we want to keep the master branch nice and clean)

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

**IMPORTANT**: By submitting patches, you agree to allow the project owners to license your work under the terms of the [MIT License](../LICENSE.md).
