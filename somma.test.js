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

