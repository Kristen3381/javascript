console.log("Hello,Purity!");
console.log("Hello,Gibbons!");
console.log("Hello,Kenny!");
console.log("Hello,Brain!");
console.log("Hello,Daisy!");

let height = 120;
let anotherHeight = height;
console.log(height);
let weight;
console.log(anotherHeight);
weight = 60;
console.log(weight);

let steps = 100;
console.log(steps);
steps = 200;
console.log(steps);
steps = steps + 70;
console.log(steps);

let greeting = "Hello";
let num = 1;
console.log(greeting);

let greetings_combined = greeting + num;
console.log(greetings_combined);

let laura = 10;
{
    var daisy = 30;
    console.log(laura);
    console.log(daisy);
}
console.log(daisy);

function testFunction() {
    console.log("Hello");
    console.log("World !");
}
testFunction();

let counter = 100;
{
    let counter = 200;
    console.log(counter);
}
console.log(counter);

var h;
var w = 180;
console.log(h);
console.log(w);
h = 120;
console.log(h);

let rose = 8;
let lilly = 10;
let tullip = 2;

function flowerPrice(y, x) {
    let total = y * x;
    console.log(total);
}
flowerPrice(rose, 70);
flowerPrice(lilly, 50);
flowerPrice(tullip, 120);

let IsDataValid = true;
let IsDataInvalid = false;
console.log(IsDataValid);
console.log(IsDataInvalid);

console.time("timer_label");
console.log("Hello ");
console.timeEnd("timer_label");

let string = "Learning Java Script";
console.log(string.slice(0, 8));

console.log(String());

let B_fixed = true + 100;
console.log(B_fixed);

const str = 41 + "2";
console.log(str);

let testObj = {
    nr: 600,
    str: "Hello"
};
console.log(typeof testObj.nr);

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,}
    let number =prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showMenu() {
    console.log('\n--- Contact List Menu ---');
    console.log('1. Type "first" to show the first contact.');
    console.log('2. Type "last" to show the last contact.');
    console.log('3. Type "new" to add a new contact.');
    console.log('4. Type "exit" to quit the program.');
    console.log('-------------------------');

    rl.question('Enter your choice: ', handleChoice);
}

function showFirstContact() {
    if (contacts.length === 0) {
        console.log("❌ The contact list is empty.");
        return;
    }
    const first = contacts[0];
    console.log('\n✅ First Contact:');
    console.log(`Name: ${first.name}, Phone: ${first.phone}, Email: ${first.email}`);
}

function showLastContact() {
    if (contacts.length === 0) {
        console.log("❌ The contact list is empty.");
        return;
    }
    const last = contacts[contacts.length - 1];
    console.log('\n✅ Last Contact:');
    console.log(`Name: ${last.name}, Phone: ${last.phone}, Email: ${last.email}`);
}

function addNewContact() {
    rl.question("Enter Name: ", (name) => {
        rl.question("Enter Phone: ", (phone) => {
            rl.question("Enter Email: ", (email) => {

                const newName = name.trim();
                const newPhone = phone.trim();
                const newEmail = email.trim();

                if (newName && newPhone && newEmail) {
                    contacts.push({
                        name: newName,
                        phone: newPhone,
                        email: newEmail
                    });
                    console.log(`\n🎉 Success! Contact "${newName}" added.`);
                } else {
                    console.log("\n❌ Error: Cannot add contact. Name, phone, and email are required.");
                }

                showMenu();
            });
        });
    });
}

function handleChoice(choice) {
    const action = choice.toLowerCase().trim();

    switch (action) {
        case 'first':
            showFirstContact();
            showMenu();
            break;
        case 'last':
            showLastContact();
            showMenu();
            break;
        case 'new':
            addNewContact();
            break;
        case 'exit':
            console.log('👋 Program exiting. Goodbye!');
            rl.close();
            break;
        default:
            console.log(`\n❓ Invalid choice: "${choice}". Please type "first", "last", "new", or "exit".`);
            showMenu();
            break;
    }
}

showMenu();