// Snack 1
function getInitials(fullName) {
  const [name, fName] = fullName.split(" ");
  return `${name.charAt(0).toUpperCase()}${fName.charAt(0).toUpperCase()}`;
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
});

// Snack 2
function createSlug(stringa) {
  return stringa.toLowerCase().replaceAll(" ", "-");
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("SONO SCRITTO IN MAIUSCOLO")).toBe(
    "sono-scritto-in-maiuscolo"
  );
});

// Snack 3
function average(numeri) {
  return (somma = numeri.reduce((acc, val) => acc + val, 0) / numeri.length);
}

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
  expect(average([100, 0])).toBe(50);
});

// Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("questo è un test")).toBe("questo-è-un-test");
});
