import { IRegisterSection } from "../Register/registerTypes";

export const aSections: IRegisterSection[] = [
  {
    id: 222,
    title: "Personal info",
    aFields: [
      {
        id: 1,
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "N",
        value: "",
      },
      {
        id: 2,
        name: "surname",
        label: "Surname",
        type: "text",
        placeholder: "N",
        value: "",
      },
      {
        id: 3,
        name: "date",
        label: "Date of birth",
        type: "date",
        placeholder: "01.01.2000",
        value: "",
      },
      {
        id: 4,
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "user@email.com",
        value: "",
      },
      // {
      //   id: 5,
      //   name: "password",
      //   label: "New password",
      //   type: "password",
      //   placeholder: "Qwer1234",
      //   value: "",
      // },
    ],
    aChecks: [],
  },
];

export const aProfilePassSections: IRegisterSection[] = [
  {
    id: 333,
    title: "Password",
    aFields: [
      {
        id: 5,
        name: "currentPassword",
        label: "Current password",
        type: "password",
        placeholder: "",
        value: "",
      },
      {
        id: 7,
        name: "newPassword",
        label: "New password",
        type: "password",
        placeholder: "",
        value: "",
      },
    ],
    aChecks: [],
  },
];

export const aProfileAddrSections  = [
  {
    id: 2,
    title: "Addresses",
    addresses: [
      {id : '',
      aFields:  [
      {
        id: 21,
        name: "country",
        label: "Country",
        type: "text",
        placeholder: "UK",
        value: "",
      },
      {
        id: 22,
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Mycity",
        value: "",
      },
      {
        id: 23,
        name: "street",
        label: "Street",
        type: "text",
        placeholder: "Street1  272B",
        value: "",
      },
      {
        id: 24,
        name: "postcode",
        label: "Postal code",
        type: "text",
        placeholder: "654321",
        value: "",
      },
    ]
  },

    // aChecks: [
    //   { id: 25, label: "Set Shipping address as default" },
    //   { id: 26, label: "Set Shipping Address as Billing Address" },
    // ],
    ]
  }


  //   {
  //     id: 3,
  //     title: "Billing address",
  //     aFields: [
  //       {
  //         id: 31,
  //         name: "country2",
  //         label: "Country",
  //         type: "text",
  //         placeholder: "USA",
  //          value: "",
  //       },
  //       {
  //         id: 32,
  //         name: "city2",
  //         label: "City",
  //         type: "text",
  //         placeholder: "Newcity",
  //          value: "",
  //       },
  //       {
  //         id: 33,
  //         name: "street2",
  //         label: "Street",
  //         type: "text",
  //         placeholder: "Street2 ap76",
  //          value: "",
  //       },
  //       {
  //         id: 34,
  //         name: "postcode2",
  //         label: "Postal code",
  //         type: "text",
  //         placeholder: "111111",
  //          value: "",
  //       },
  //     ],
  //     aChecks: [{ id: 35, label: "Set Billing Address as default" }],
  //   },
];
