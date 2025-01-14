import { groq } from 'next-sanity';

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    showcasePresenters[]->{
      _type,
      coverImage,
      bio,
      name,
      city,
      day,
    },
    showcaseSchedule[]->{
      _type,
      day,
    scheduleItems[]
    },
    showcaseRadio[]->{
      _type,
      title,
    presenter,
    date,
    tracklist[],
    audio
    }
  }
`;

export const presenterQuery = groq`
  *[_type == "presenter"][0] {
    _id,
    coverImage,
    description,
    name,
    day,
    bio,
    city
  }
`;

export const radioQuery = groq`
  *[_type == "radio"][0] {
    _id,
    title,
    presenter,
    date,
    tracklist[]->{
      _type,
      title
    },
    audio
  }
`;

export const scheduleQuery = groq`
  *[_type == "schedule"][0] {
    _id,
    day,
    scheduleItems[]->{
      _type,
      title
    }
  }
`;
