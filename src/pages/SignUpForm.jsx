import { Input } from "../components/Input"
import { FormContainer, ItemWrapper } from "../styled/FormStyle"

export const SignUpForm = ()=>{

  // const formData = [
  //   {
  //     label:"First Name",
  //     placeholder: "Enter First Name",
  //     id: "first"
  //   },
  //   {
  //     label:"Last Name",
  //     placeholder: "Enter Last Name",
  //     id: "last"
  //   }
  // ]
  return(
    <FormContainer>
      <Input labelValue="First Name" type="text" placeholder="Enter First Name" id="first"/>
      <Input labelValue="Last Name" type="text" placeholder="Enter Last Name" id="last"/>

      <Input labelValue="Age" type="number" placeholder="Enter your Age" id="age"/>

      <Input labelValue="Gender" type="radio" options={["Male","Female","Trans"]}/>
     

      <Input labelValue="Mobile Number" type="tel" placeholder="Enter Mobile Number" id="mobile"/>

      <Input labelValue="Email" type="email" placeholder="Enter Email" id="email"/>
      
      <Input labelValue="Password" type="password" placeholder="Enter Password" id="password"/>

      <Input labelValue="DOB" type="date" placeholder="Enter date of birth" id="dob"/>

      <Input labelValue="Website" type="url" placeholder="Enter your website" id="website"/>

      <Input labelValue="Address 1" type="text" placeholder="Enter adresss 1" id="add1"/>
      <Input labelValue="Address 2" type="text" placeholder="Enter adresss 2" id="add2"/>
      <Input labelValue="Address 3" type="text" placeholder="Enter adresss 3" id="add3"/>
      <Input labelValue="Country" placeholder="Enter Country" id="country" list="Country" options={['India','Australia', 'New Zealand', 'USA', 'Ukraine', 'Portugal']}/>
    
      <Input labelValue="City" placeholder="Enter City" id="city" list="City" options={['Noida','Greater Noida', 'Bareilly', 'Rudrapur', 'Bulandshahr', 'Delhi']}/>

      <Input labelValue="State" placeholder="Enter State" id="state" list="State" options={['Noida', 'Jammu', 'Himanchal Pradesh', 'Uttar Pradesh', 'Uttarakhand']}/>

      <Input labelValue="Pincode" type="number" placeholder="Enter Pincode" id="pincode"/>
      
      <Input labelValue="Favourite Color" type="color" id="favColor"/>

      <Input labelValue="Upload Photo" type="file" accept="image/*" />

      <Input labelValue="Hobbies" type="checkbox" options={["Coding","Cycling","Music"]}/>

      <Input labelValue="Bio" textArea={true} placeholder="Enter something about you"/>
      <ItemWrapper>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
      </ItemWrapper>
    </FormContainer>
  )
}