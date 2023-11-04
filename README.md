# ExamShare

A project dedicated to championing [open-source education](https://opensource.com/resources/what-open-education) in
Nigeria 🇳🇬. We achieve this by sharing past examination questions from higher institutions, making them accessible and
available to all students. Our goal is to help students prepare effectively for examinations.

## Getting started

### Prerequisites

1. Git
2. Node: Any version in the 20.x range, starting with v20.0.0 or higher.
3. A fork of the repository (for any contributions).
4. A clone of the [examshare repository](https://github.com/udohjeremiah/examshare) on your local machine using
   `git clone https://github.com/udohjeremiah/examshare.git`

### Installation

1. `cd examshare` to navigate to the project's root directory.
2. `npm install` to install the website's npm dependencies.

### Running locally

1. `npm run dev` to start the development server (powered by [Next.js](https://nextjs.org/))
2. Open `http://localhost:3000` in your favorite browser to access the site.

## Contributing

### Guidelines

A solid understanding of React.js, Next.js 13 (App Router), and Tailwind CSS is required to contribute effectively,
whether you are providing new code or improving existing code. You can also make valuable contributions by suggesting
new designs, layouts, or color schemes for the website; such contributions are welcomed and highly appreciated.

Contributing code or creating new design systems is not the sole way to help this project grow. You can also submit your
previous examination questions using the dedicated section on the website. This also provides significant assistance.

While there may not be a dedicated "Contributing Guidelines" section as commonly seen in GitHub projects, it is
important to emphasize the need for respect towards everyone, regardless of their diversity. Lastly, being a
"kind and considerate person" is encouraged.

### Create a branch

1. `git checkout main` from any folder in your local `examshare` repository.
2. `git pull origin main` to ensure you have the latest code from the `main` branch.
3. `git checkout -b the-name-of-my-branch` (replace `the-name-of-my-branch` with a suitable name) to create a new branch.

### Make the change

1. Follow the ["Running locally"](#running-locally) instructions.
2. Save the files and check them in the browser.
3. Changes to React components in the `src` directory will hot-reload.

### Test the change

1. Run `npm run format`. This command uses Prettier to validate code formatting, ensuring it adheres to Prettier's style.
   To correct any code format issues, use `npm run format:fix`.
2. Run `npm run lint`. This command runs ESLint to catch any linting errors. Be sure to fix any errors and warnings that
   may appear.
3. If possible, test any visual changes in the latest versions of common browsers, both on desktop and mobile.

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fix navigation on mobile screen`)
   to stage and commit your changes
2. `git push my-fork-name the-name-of-my-branch` (substitute `my-fork-name` with the actual name of the fork of the
   [examshare repository]() you have in your GitHub account and `the-name-of-my-branch` with the actual name of the
   branch you created in the previous step when [creating a branch](#create-a-branch)).
3. Go to the examshare repo (i.e. the one you forked) and you should see recently pushed branches.
4. Follow GitHub's instructions to open a pull request.
5. A Next.js build (`next build`) is triggered after your changes are pushed to GitHub.

## License

This project is licensed under the MIT License, as detailed in the
[LICENSE.md](https://github.com/udohjeremiah/examshare/blob/main/LICENSE.md) file.
