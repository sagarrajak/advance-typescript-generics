export const getUser = async <T>(id: number) => {
  const user: T = await fetch(`/users/${id}`).then((res) => res.json());
  return user;
};

const myFunc = async () => {
    const data = await getUser<{id: number, username: string}>(12);
}