function getInitials(fullName) {
  const names = fullName.split(" ");
  let initials = "";
  for (let i = 0; i < names.length; i++) {
    initials += names[i].charAt(0).toUpperCase();
  }
  return initials;
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () =>  {
    expect(getInitials("Mario Rossi")).toBe("MR");
})

function createSlug(stringa) {
  return stringa.toLowerCase()
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("SONO SCRITTO IN MAIUSCOLO")).toBe("sono scritto in maiuscolo");
})

