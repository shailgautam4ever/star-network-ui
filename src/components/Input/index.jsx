import { ItemWrapper } from "../../styled/FormStyle"

export const Input = ({ 
  labelValue,
  type="text",
  id,
  list,
  options=[],
  textArea=false,
  ...props
})=>{
  if(["radio","checkbox"].includes(type.toLowerCase())){
    return(
      <ItemWrapper>
        <label>{labelValue}</label>
        {options.map((val,i )=>{
          return(
            <>
          <input type={type} id={val} name={labelValue}/>
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
        (textArea)? <textarea {...props}/> : <input type={type} list={list} id={id} {...props}/>
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