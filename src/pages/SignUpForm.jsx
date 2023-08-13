import { useState } from "react"
import { Input } from "../components/Input"
import { formData } from "../mockFiles/mockData"
import { FormContainer, ItemWrapper } from "../styled/FormStyle"

export const SignUpForm = ()=>{
 const [data, setData] = useState({})
 const onChange = (key, val, type, checked) =>{
  if(type === "checkbox"){
    const {Hobbies=[]} = data
    console.log("hob",Hobbies)
    if(checked){
      Hobbies.push(val)
    }else{
      Hobbies.pop(val)
    }
    return setData(crr=> ({... crr, [key]: Hobbies}))
  }
  setData(crr => ({ ...crr, [key]: val}))
 }
 console.log(data, 'data')
  return(
    <FormContainer>
      {
        formData.map((item,i)=>{
          return <Input key={i} labelValue={item.label} cb={onChange} {...item}/>
        })
      }
      <ItemWrapper>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
      </ItemWrapper>
    </FormContainer>
  )
}