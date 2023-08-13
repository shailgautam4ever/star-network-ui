import { ItemWrapper } from "../../styled/FormStyle"

export const Input = ({ 
  labelValue,
  type="text",
  id,
  list,
  options=[],
  textArea=false,
  cb,
  ...props
})=>{
  const handleOnChange = (e)=>{
    const {value,name, type, checked} = e.target
    console.log("event", e)
      cb(name, value, type, checked)
      console.table({
        name,
        value,
        checked,
        type
      }) 
  }
  if(["radio","checkbox"].includes(type.toLowerCase())){
    return(
      <ItemWrapper>
        <label>{labelValue}</label>
        {options.map((val,i )=>{
          return(
            <>
          <input type={type} id={val} onChange={handleOnChange} name={labelValue} value={val}/>
          <label for={val}>{val}</label> 
            </>
          )
        })}
      </ItemWrapper>
    )
  }
  return(
    <ItemWrapper>
      <label for={id}>{labelValue}</label>
      {
        (textArea)? <textarea {...props}/> : <input onChange={handleOnChange} type={type} list={list} id={id} {...props}/>
      }
      {
        (options.length)? (
          <datalist id={list}>
          {options.map((listItem,i)=>{
            return <option key={i} value={listItem}/>
          })}
        </datalist>
        ): null
      }
    </ItemWrapper>
  )

}