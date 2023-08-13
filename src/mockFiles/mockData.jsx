
export const formData = [
  {
    label:"First Name",
    placeholder: "Enter First Name",
    id: "first",
    name: 'first'
  },
  {
    label:"Last Name",
    placeholder: "Enter Last Name",
    id: "last",
    name: 'last'
  },
  {
    label:"Age",
    placeholder: "Enter Your Age",
    id: "age",
    type:"number"
  },
  {
    label:"Gender",
    type:"radio",
    options:["Male","Female","Trans"]
  },
  {
    label:"Mobile Number",
    placeholder: "Enter Mobile Number",
    id: "mobile",
    type:"tel"
  },
  {
    label:"Email",
    placeholder: "Enter Email",
    id: "email",
    type:"email"
  },
  {
    label:"Password",
    placeholder: "Enter Your Password",
    id: "password",
    type:"password"
  },
  {
    label:"DOB",
    placeholder: "Enter date of birth",
    id: "dob",
    type:"date"
  },
  {
    label:"Website",
    placeholder: "Enter Your Website",
    id: "website",
    type:"url"
  },
  {
    label:"Address 1",
    placeholder: "Enter address 1",
    id: "add1",
  },
  {
    label:"Address 2",
    placeholder: "Enter address 2",
    id: "add2",
  },
  {
    label:"Address 3",
    placeholder: "Enter address 3",
    id: "add3",
  },
  {
    label:"Country",
    placeholder:"Enter Country",
    list:"Country",
    id:"country",
    options:['India','Australia', 'New Zealand', 'USA', 'Ukraine', 'Portugal']
  },
  {
    label:"City",
    placeholder:"Enter City",
    list:"City",
    id:"city",
    options: ['Noida','Greater Noida', 'Bareilly', 'Rudrapur', 'Bulandshahr', 'Delhi']
  },
  {
    label:"State",
    placeholder:"Enter State",
    list:"State",
    id:"state",
    options: ['Noida', 'Jammu', 'Himanchal Pradesh', 'Uttar Pradesh', 'Uttarakhand']
  },
  {
    label:"Pincode",
    type:"number",
    placeholder: "Enter Pincode",
    id: "pincode",
  },
  {
    label:"Favourite Color",
    type:"color",
    id: "favColor",
  },
  {
    label:"Upload Photo",
    type:"file",
    accept:"image/*",
  },
  {
    label:"Hobbies",
    type:"checkbox",
    options:["Coding","Cycling","Music"]
  },
  {
    label:"Bio",
    textArea:true,
    placeholder:"Enter something about you",
  },
]