---
title: "What is faker?"
date: "2020-12-20"
excerpt: "The best way to mock data in Node.js."
---

## Stop searching for fake data while prototyping of testing

Back in the days, I remember copying and pasting any kind of text I could find in the web to mock data without smashing my keyboard. While it works, there is a much better way to have valid data without leaving your code. I'm talking about `faker`. This `npm` package allows you to focus specifically on the type of data. That could be a _lorem_, _firstname_, _address_,... or even a random hex _color_. There is massive data to fake so checkout the [GitHub respository](https://github.com/Marak/Faker.js) for the data you need.

Here a glimpse of what is possible:

```ts
import faker from "faker";

const fullname = faker.name.findName(); // John Doe
const color = faker.internet.color(); // indigo
const paragraphs = faker.lorem.paragraphs(5); // This won't be a Lorem ipsum but 5 real paragraphs...
```

Et voilà, whenever you need data, install faker and you are good to go.
