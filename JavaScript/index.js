const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName("Bruce", "Wayne");
const expecedFullName = "BruceWayne";

if (actualFullName !== expecedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expecedFullName}`);
}
