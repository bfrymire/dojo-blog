# Dojo Blog

This project is based off The Net Ninja's [Full Modern React Tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d).

## Setup

Install npm dependancies:

```bash
npm install
```

## Run Application

Start your React app:

```bash
npm start
```

Open a new terminal to start the JSON database:

```bash
npx json-server --watch ./data/db.json --port 8000
```

Notice that we are specifying port 8000 to run on. This is because port 3000 is usually used by React by default.

In order to simulate a delay to the server to view your loading states, add `--delay x`, where `x` is the amount of delay in milliseconds to add.
