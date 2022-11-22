enum AssetType {
  "Equity" = "Equity",
  "Allocation" = "Allocation",
  "Convertables" = "Convertables",
  "Alternatives" = "Alternatives",
  "Commodoties" = "Commodoties",
  "FixedIncome" = "FixedIncome",
  "Money markets" = "Money markets",
  "Property" = "Property",
  "Misc" = "Misc",
}

interface LegenDataType {
  name?: string;
  icon?: string;
}
interface LegendType {
  data: LegenDataType[];
}

export { AssetType, LegendType };
