# SauceDemo_Automation

An automated test suite built with Playwright and JavaScript to validate core workflows on the SauceDemo public demo website. The test script performs login with valid credentials, adds a product to the cart, verifies the product in the cart, and then logs out.

## Features

- Automated login, product selection, and cart verification on SauceDemo.
- Playwright with JavaScript and using Playwright Test Runner.
- Easily extendable test framework for adding more test cases.

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```
2. Install dependencies:

```bash
npm install
```
3. Install Playwright browsers:
```bash
npx playwright install
```
## Usage
To run the automated tests, execute:

```bash
npm test
```
This runs the end-to-end test scenario on SauceDemo.

## Project Structure
- **saucedemo.test.js** — Playwright test script automating login, adding to cart, verification, and logout
- **.gitignore** — Specifies files and folders to ignore such as node_modules
- **package.json** — Project dependencies and test scripts
