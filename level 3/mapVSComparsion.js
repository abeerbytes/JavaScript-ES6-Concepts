console.log("---map VS comparison object")
console.log("using object")

const objData={}

objData.name="Abeer"
objData.age=23

console.log("object after adding entries",objData)

console.log("retrieve name",objData.name)

const objKey={id:1}
objData[objKey]="object key value"

console.log("object after object add after key",objData)

console.log("mao using")


const mapData=new Map()

mapData.set("name", "Abeer");
mapData.set("age", 20);

console.log("Map after adding entries:", mapData);


console.log("Retrieve name:", mapData.get("name"));


const mapKey = { id: 1 };
mapData.set(mapKey, "Object Key Value");

console.log("Map after adding object as key:", mapData);

console.log("Retrieve using object key:", mapData.get(mapKey));