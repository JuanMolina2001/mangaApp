
import Svg, { Path } from "react-native-svg"
const PlusSquare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-file-plus"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
  </Svg>
)
const PlusSquareFill = (props) => {
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-plus-square-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
  </Svg>
}
const PlusCircle = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
    class="bi bi-plus-circle" 
    viewBox="0 0 16 16"
    {...props}
    >
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    </Svg>
  )
}

const PlusCircleFill = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg"
      class="bi bi-plus-circle-fill"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
    </Svg>
  )
}
export { PlusSquare, PlusSquareFill, PlusCircleFill, PlusCircle }
