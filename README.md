
# 📄 DKeeper

This is a Keeper app clone built on the Internet Computer
Blockchain using Motoko programming language. It allows users to
create personal notes and reminders on the blockchain and also
delete them as per their needs. The frontend of this application
is built using React.js.


## Tech Stack

- **Frontend** : HTML, CSS, JavaScript, React
- **Backend** : Motoko



## Screenshots

![App Screenshot](https://raw.githubusercontent.com/MohitSaraff/DKeeper/master/src/DKeeper_frontend/assets/images/Screenshot.png)


## Run Locally

Install DFX ( For Mac )

```bash
  sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```
For windows check the documentation [here](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove).

Clone the project

```bash
  git clone https://github.com/MohitSaraff/DKeeper.git
```

Go to the project directory

```bash
  cd DKeeper
```

Start a local canister execution environment

```bash
  dfx start
```

Install dependencies

```bash
  npm install
```

Deploy

```bash
  dfx deploy
```

Start the server

```bash
  npm start
```


## Acknowledgements

 - [Internet Computer](https://internetcomputer.org/)
 - [Web Dev Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp)

