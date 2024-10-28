type Response2 =
  | { status: "success"; data: unknown }
  | { status: "loading" }
  | { status: "error"; error: Error };

let state: Response2 = {
  status: "success",
  data: "sagar",
};

function parseFunction(data: Response2): string {
  if (data.status == "success") {
    return "Success";
  }

  if (data.status == "error") {
    return "error";
  }

  if (data.status === "loading") {
    return "loading";
  }
  return data;
}
