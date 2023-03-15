// imports
const express = require("express");
const { faker } = require("@faker-js/faker");

// initialize app
const app = express();

// set the port for localhost
const port = 8000;

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstname: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newFake;
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get request
app.get("/api", (req, res) => {
    return res.json({ message: "Hello world" });
});

app.get("/api/users/new", (req, res) => {
    return res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    return res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    return res.json({ user: createUser(), company: createCompany() });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
