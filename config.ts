import { ThumbnailProps } from "./components";
import faker from "faker";

export const thumbnails: ThumbnailProps[] = [
  {
    title: "Hello World!",
    description: faker.lorem.paragraphs(2),
    img: {
      source: faker.image.business(),
      height: 400,
      width: 400,
    },
    tags: [
      {
        label: "hello",
      },
      {
        label: "world",
      },
    ],
  },
  {
    title: "Hello World!",
    description: faker.lorem.paragraph(2),
    img: {
      source: faker.image.business(),
      height: 400,
      width: 400,
    },
    tags: [
      {
        label: "hello",
      },
      {
        label: "world",
      },
    ],
  },
];
