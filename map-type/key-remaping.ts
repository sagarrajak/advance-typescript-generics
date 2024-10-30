// Keys remape use for converting keys to capital case

import { CamelCase } from "./CapitalizeRespose";

type CamelCaseKeys<T> = {
  [K in keyof T as CamelCase<K>]: T[K];
};

type newPerson = {
  first_name: string;
  last_name: string;
  weired_name: string;
};

type camelCasePerson = CamelCaseKeys<newPerson>;

const ElementCategory = [
  { category: "photo", file: "image1.jpg" },
  { category: "photo", file: "image2.jpg" },
  { category: "note", text: "Welcome to the platform" },
];

type Categorize<T extends { category: string }> = {
  [Obj in T as Obj["category"]]: Obj[];
};

type GetCategoryType<T> = T extends { category: infer X} ? X : never;

type TextInput = { category: "textInput"; content: string };
type ActionDropDown = { category: "actionDropdown"; execute: () => void };
type DropDown = { category: "dropdown"; choices: string[] };

type typeCategory = Categorize<TextInput | ActionDropDown | DropDown>;


type category = GetCategoryType<TextInput | ActionDropDown | DropDown>

