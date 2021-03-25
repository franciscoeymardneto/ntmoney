interface ObjTeste {
  name: string
  nickname: string
}

const obj: ObjTeste = {
  nickname: "lololol",
  name: "jedsiejid"
}
console.log({...obj,name: "lalalal"})