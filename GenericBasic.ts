interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

type GetFistNameReturnType<TItem> = TItem extends Animal ? { animalName: string } : { humenName: string };

export function getFirstName<TItem extends Record<string, string>>(item: TItem): GetFistNameReturnType<TItem> {
    if ("name" in item) {
        return {
            animalName: item.name
        }
    }

    return {
        humenName: item.firstName
    }
}

const value = getFirstName({firstName: "test", lastName: "dsds"})