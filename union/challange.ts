type LogLevel = "error" | "warning" | "info";

type Colors2 =
  | {
      type: "error";
      color: "red";
    }
  | {
      type: "warning";
      color: "orange";
    }
  | {
      type: "info";
      color: "blue";
    };

type StatusColor<
  Colors extends { type: string; color: string },
  Level extends Colors["type"]
> = Colors extends { type: Level } ? Colors["type"] : never;

type scol = StatusColor<Colors2, "error" | "info">;
