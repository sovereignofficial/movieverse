export const validateEmail = (email:string): string => {
    if (!email) {
      return '* Required email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return '* Invalid email address';
    }
    return '';
}

export const validatePassword = (password: string): string => {
    if (!password) {
        return '* Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        return '* Invalid password. Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }
    return '';
}

export const validateName = (name:string): string => {
    if(name.trim() === "" || !name){
        return "* Required name";
    }
    return '';
}

export const validateAge = (age:string): string => {
    if(!age){
        return "* Required age";
    }
    return '';
}

export const validateGender = (gender:string): string => {
    if(!gender){
        return "* Required gender";
    }
    return '';
}