import React from 'react'

function TodoHeader({children, loading}) {
  //arreglo con los elementos dentro
  //nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children.
  return (
    <header>
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, {loading}))}  
    </header>
  )
}
//les paso loading a todos los children
export {TodoHeader};
