import { FormContainer, ItemWrapper } from "../styled/FormStyle"

export const SignUpForm = ()=>{
  return(
    <>
    <FormContainer>
      <ItemWrapper>
      <label for='first'>First Name</label>
      <input type='text' placeholder="Enter First Name" id='first'/>
      <label>Last Name</label>
      <input type="text" placeholder="Enter Last name"/>
      </ItemWrapper>
      <ItemWrapper>
        <label>Age</label>
        <input type="number" placeholder="Enter Age"></input>
      </ItemWrapper>
      <ItemWrapper>
        <label>Gender</label>
        <input type="radio" id='male' name='gender'/>
        <label for='male'>Male</label>
        <input type="radio" name="gender" id="female" />
        <label for='female'>Female</label>
      </ItemWrapper>
      <ItemWrapper>
        <label>Mobile Number</label>
        <input placeholder="Enter mobile number" type="tel" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Email</label>
        <input placeholder="Enter email" type="email" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Password</label>
        <input placeholder="Enter password" type="password" />
      </ItemWrapper>
      <ItemWrapper>
        <label>DOB</label>
        <input placeholder="Enter date of birth" type="date" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Website</label>
        <input placeholder="Enter your website" type="url" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Address 1</label>
        <input placeholder="Enter adresss 1" type="text" />
        <label>Address 2</label>
        <input placeholder="Enter adddress 2" type="text" />
        <label>Address 3</label>
        <input placeholder="Enter address 3" type="text" />
      </ItemWrapper>
      <ItemWrapper>
        <label for='country'>Country</label>
        <input placeholder="Enter country" list="Country" id='country'/>
        <datalist id="Country">
          <option value='India'></option>
          <option value='Australia'></option>
          <option value='New Zealand'></option>
          <option value='America'></option>
          <option value='Ukraine'></option>
          <option value='Portugal'></option>
        </datalist>
      </ItemWrapper>
      <ItemWrapper>
        <label for='city'>City</label>
        <input placeholder="Enter city" list="City" id='city'/>
        <datalist id="City">
          <option value='Noida'></option>
          <option value='Greater Noida'></option>
          <option value='Bareilly'></option>
          <option value='Rudrapur'></option>
          <option value='Bulandshahr'></option>
          <option value='Delhi'></option>
        </datalist>
      </ItemWrapper>
      <ItemWrapper>
        <label for='state'>State</label>
        <input placeholder="Enter state" list="State" id='state'/>
        <datalist id="State">
          <option value='Jammu'></option>
          <option value='Himanchal Pradesh'></option>
          <option value='Uttar Pradesh'></option>
          <option value='Uttarakhand'></option>
        </datalist>
      </ItemWrapper>
      <ItemWrapper>
        <label>Pincode</label>
        <input placeholder="Enter pincode" type="number" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Favourite Color</label>
        <input type="color" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Upload Photo</label>
        <input type='file' accept="image/*" />
      </ItemWrapper>
      <ItemWrapper>
        <label>Hobbies</label>
        <input placeholder="Enter hobbies" type="checkbox" value='coding' id='coding' name='coding'/>
        <label for='coding'>Coding</label>
        <input placeholder="Enter" type="checkbox" value='cycling' id='cycling' name='cycling'/>
        <label for='cycling'>Cycling</label>
        <input placeholder="Enter" type="checkbox" value='music' id='music' name='music'/>
        <label for='music'>Music</label>
      </ItemWrapper>
      <ItemWrapper>
        <label>Bio</label>
        <textarea placeholder="Enter something about you" type="text" />
      </ItemWrapper>
      <ItemWrapper>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
      </ItemWrapper>
    </FormContainer>
    </>
  )
}