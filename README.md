# Project Welcome

Welcome to Project Techfolio! This project aims to create a modern website using a blend of various technologies.

## Cloning the Repository

The first step to begin working with the Project Repository is cloning the repository to your local workspace.

To clone the repository, follow the instructions on [The Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository "The Github Docs - Cloning a Repo").

## Installing Dependencies

Follow the individual guide below in order to run the application.

WARNING - some commands must run from the root directory of the repo and others do not.

### 1. Installing NVM

To install NVM, simply run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`. 
If curious, nfind the full walkthrough for installing NVM on [the NVM Github Page](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating "NVM Github Page").

### 2. Installing Node JS and NPM via NVM

To install Node, use NVM. Run `nvm install node` and subsequently run `nvm use node`.
To learn more, follow the instructions given on [the NVM Github Page](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage "NVM Github Page"), download the latest version of Node JS.

### 3. Navigate to the repository root directory

Ensure your terminal's location is in the root directory of the repository. For Mac, use `pwd` and `ls` to identify the location. For Windows, use `dir` and `cd`.

### 4. Installing TailwindCSS via NPM

To install TailwindCSS, you can run the simple terminal command `npm install -D tailwindcss`. 
For more information, see the [TailwindCSS Installation Docs](https://tailwindcss.com/docs/installation "TailwindCSS Installation Docs").

### 5. Installing ESLint and Prettier via NPM

You have two options when installing ESLint and Prettier:

###### Installing ESLint and Prettier Together

To install ESLint and Prettier together, you can run the singular command `npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier`

###### Installing ESLint and Prettier Separately

To install ESLint, you can run the simple terminal command `npm init @eslint/config@latest`. For more information, see the [ESLint Installation Docs](https://eslint.org/docs/latest/use/getting-started "ESLint Installation Docs").

To install Prettier, you can run the simple terminal command `npm install --save-dev --save-exact prettier`. For more information, see the [Prettier Installation Docs](https://prettier.io/docs/en/install.html "Prettier Installation Docs").

## Running the Development Server

In order to run the development server, follow this simple guide once you have installed all of the above dependencies:

1. Navigate to the directory containing the configured project
2. In terminal, run the command `npm run start`
3. If your default browser was not automatically launched, view the website at the IP address presented in the terminal. This should generally be [htttp://localhost:3000](http://localhost:3000 "localhost site").

## Creating and Deploying to Github Pages

1. Fork this Repo to a one - {username}.github.io
2. Update the package.json - Home Property
   - "homepage": "https://{username}.github.io", // Update to correct username
3. Checkout the main branch for this new repo
4. Run `npm install --legacy-peer-deps`
5. Run `npm run deploy -- -m "Deploy React app to GitHub Pages vX.X.X"` //make sure to update the version correctly
   - This will create a new branch in the repo called gh-pages, if one doesn't exists other wise it just creates an update
6. Configure GitHub Pages
   - Navigate to the GitHub Pages settings page
     - In your web browser, navigate to the GitHub repository
     - Above the code browser, click on the tab labeled "Settings"
     - In the sidebar, in the "Code and automation" section, click on "Pages"
   - Configure the "Build and deployment" settings like this:
     - Source: Deploy from a branch
     - Branch:
       - Branch: gh-pages
       - Folder: / (root)
   - Click on the "Save" button
7. If any edits were made make sure to update them back in the main repo.
   - Make sure any commits done during deploy updates are marked with correct versioning
   - vX.X.X
