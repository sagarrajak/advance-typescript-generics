type User2 = { username: string; mobile: number };
type Value = User2["mobile" | "username"];

type Size = "small" | "medium" | "large";

type ButtonClass = `btn-${Size}`;
