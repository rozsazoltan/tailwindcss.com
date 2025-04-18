import adamwathanAvatar from "./img/adamwathan.jpg";
import bradlcAvatar from "./img/bradlc.jpg";
import steveschogerAvatar from "./img/steveschoger.jpg";
import reininkAvatar from "./img/reinink.jpg";
import robinmalfaitAvatar from "./img/robinmalfait.jpg";
import simonswissAvatar from "./img/simonswiss.jpg";
import danhollickAvatar from "./img/danhollick.jpg";
import rozsazoltanAvatar from "./img/rozsazoltan.jpg";

export interface Author {
  name: string;
  twitter: string;
  avatar: string;
}

export const adamwathan = {
  name: "Adam Wathan",
  twitter: "adamwathan",
  avatar: adamwathanAvatar.src,
} satisfies Author;

export const bradlc = {
  name: "Brad Cornes",
  twitter: "bradlc",
  avatar: bradlcAvatar.src,
} satisfies Author;

export const steveschoger = {
  name: "Steve Schoger",
  twitter: "steveschoger",
  avatar: steveschogerAvatar.src,
} satisfies Author;

export const reinink = {
  name: "Jonathan Reinink",
  twitter: "reinink",
  avatar: reininkAvatar.src,
} satisfies Author;

export const robinmalfait = {
  name: "Robin Malfait",
  twitter: "malfaitrobin",
  avatar: robinmalfaitAvatar.src,
} satisfies Author;

export const simonswiss = {
  name: "Simon Vrachliotis",
  twitter: "simonswiss",
  avatar: simonswissAvatar.src,
} satisfies Author;

export const danhollick = {
  name: "Dan Hollick",
  twitter: "DanHollick",
  avatar: danhollickAvatar.src,
} satisfies Author;

export const rozsazoltan = {
  name: "Zoltán Rózsa",
  twitter: "rozsazoltan_dev",
  avatar: rozsazoltanAvatar.src,
} satisfies Author;
