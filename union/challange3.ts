type DataFetching<
  T extends { status: string },
  F extends T["status"]
> = T extends { status: F } ? T : never;

type DataBullShit =
  | {
      status: "loading";
      isLoading: boolean;
      data: undefined;
      error: null;
    }
  | {
      status: "success";
      data: "GOT SOME STRING BRO";
    }
  | {
      status: "error";
      error: Error;
    };

type ddd1 = DataFetching<DataBullShit, "error">;
type ddd2 = DataFetching<DataBullShit, "error" | "loading">;


