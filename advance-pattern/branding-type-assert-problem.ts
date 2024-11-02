type Branded<T, X extends string> = T & { __brand: X };

export type Approved<T> = Branded<T, "approved">;

export interface PurchaseDetails {
  item: string;
  price: number;
}

function assertAmounts(
  details: PurchaseDetails
): asserts details is Approved<PurchaseDetails>  {
  if (details.price > 1000) throw new Error("Something something");
};

const processPurchase = (detatils: Approved<PurchaseDetails>) => {};

const submitHandler = (details: PurchaseDetails) => {
    processPurchase(details);
    assertAmounts(details) 
    processPurchase(details);
}
