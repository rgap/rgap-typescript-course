// --- Heterogeneous Enum ---
// TypeScript allows enums with mixed (heterogeneous) member types, though this is generally discouraged.
// Here we define an enum with one numeric member and one string member.
enum MixedEnum {
  No = 0, // Numeric member
  Yes = "YES", // String member
}
// We assign variables to each of the enum members.
let responseNo: MixedEnum = MixedEnum.No;
let responseYes: MixedEnum = MixedEnum.Yes;
// Explanation: Although MixedEnum contains members of different types,
// the actual runtime value is determined by the assigned member.
// Logging responseNo and responseYes prints 0 and "YES" respectively.
console.log("MixedEnum.No:", responseNo); // Outputs: 0
console.log("MixedEnum.Yes:", responseYes); // Outputs: "YES"
// Using typeof on these variables shows their runtime types:
// responseNo is a number, and responseYes is a string.
console.log("typeof responseNo:", typeof responseNo); // Outputs: "number"
console.log("typeof responseYes:", typeof responseYes); // Outputs: "string"
