type Branded<T, X extends string> = T & { __brand: X };

export type Approved<T> = Branded<T, "approved">;

export interface PurchaseDetails {
  item: string;
  price: number;
}

const isPurchaseApproved = (
  details: PurchaseDetails
): details is Approved<PurchaseDetails> => {
  if (details.price > 1000) return false;
  return true;
};

const processPurchase = (detatils: Approved<PurchaseDetails>) => {};

const submitHandler = (details: PurchaseDetails) => {
  if (isPurchaseApproved(details)) {
    processPurchase(details);
  }
  // processPurchase(details)
};
