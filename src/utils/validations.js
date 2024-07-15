export const isValidEmail = str => {
    if (!str.trim().length) {
      return false
    }
  
    const emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const matches = str.match(emailPattern)
    if (matches === null || matches[0] !== str) {
      return false
    }
    return true
  }
  