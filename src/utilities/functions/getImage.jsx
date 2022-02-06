/* **************** Imports **************** */

/* **************** Variables **************** */

/* **************** Functions **************** */
const getImage = (name) => {
  const path = `/src/public/${name}.jpg`
  const module = import.meta.globEager('/src/public/*.jpg')
  return module[path].default
}

/* **************** Code Execution **************** */
export default getImage
